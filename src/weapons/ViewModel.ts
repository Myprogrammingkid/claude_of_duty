import * as THREE from 'three';
import { clamp, damp, rand } from '../core/math';
import { getFlashTexture } from '../world/Textures';
import type { EnvDef } from '../world/MapTypes';
import { buildGun, disposeGun, type GunModel } from './GunMeshes';
import type { Weapon } from './Weapon';
import type { WeaponId } from './WeaponDefs';

export interface ViewModelState {
  weapon: Weapon;
  adsT: number;
  sprintT: number;
  bobPhase: number;
  bobAmp: number;
  lookDX: number;
  lookDY: number;
  /** 0 = raised, 1 = fully lowered (weapon switch) */
  lowerT: number;
  /** 0..1 melee swing progress, -1 when idle */
  meleeT: number;
  /** -1..1 grenade throw progress */
  throwT: number;
  crouchT: number;
  landDip: number;
  slideT: number;
  hidden: boolean;
}

const sleeveMat = new THREE.MeshStandardMaterial({ color: 0x5c5d42, roughness: 0.9 });
const gloveMat = new THREE.MeshStandardMaterial({ color: 0x2b2722, roughness: 0.8 });

/** First-person weapon + arms, rendered in a separate pass so it never clips into walls. */
export class ViewModel {
  readonly scene = new THREE.Scene();
  readonly camera: THREE.PerspectiveCamera;
  private readonly holder = new THREE.Group();
  private readonly models = new Map<WeaponId, GunModel>();
  private current: GunModel | null = null;
  private currentId: WeaponId | null = null;
  private readonly flash: THREE.Sprite;
  private flashTime = 0;
  private kick = 0;
  private kickRot = 0;
  private swayX = 0;
  private swayY = 0;
  private hemi: THREE.HemisphereLight;
  private sun: THREE.DirectionalLight;

  constructor(aspect: number) {
    this.camera = new THREE.PerspectiveCamera(52, aspect, 0.01, 10);
    this.scene.add(this.camera);
    this.camera.add(this.holder);
    this.hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
    this.sun = new THREE.DirectionalLight(0xffffff, 1.6);
    this.sun.position.set(-1, 2, 1);
    this.scene.add(this.hemi, this.sun);
    const fm = new THREE.SpriteMaterial({
      map: getFlashTexture(),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
    });
    this.flash = new THREE.Sprite(fm);
    this.flash.visible = false;
  }

  setEnvironment(tex: THREE.Texture, intensity: number): void {
    this.scene.environment = tex;
    this.scene.environmentIntensity = intensity;
  }

  setLighting(env: EnvDef): void {
    this.hemi.color.setHex(env.hemiSky);
    this.hemi.groundColor.setHex(env.hemiGround);
    this.hemi.intensity = env.hemiIntensity * 1.1 + 0.3;
    this.sun.color.setHex(env.sunColor);
    this.sun.intensity = env.sunIntensity * 0.6 + 0.3;
  }

  private getModel(id: WeaponId): GunModel {
    let m = this.models.get(id);
    if (!m) {
      m = buildGun(id);
      addArms(m);
      this.models.set(id, m);
    }
    return m;
  }

  private show(id: WeaponId): void {
    if (this.currentId === id) return;
    if (this.current) this.holder.remove(this.current.root);
    this.current = this.getModel(id);
    this.currentId = id;
    this.holder.add(this.current.root);
    this.current.muzzle.add(this.flash);
  }

  onShot(weapon: Weapon): void {
    const d = weapon.def;
    this.kick = Math.min(1.5, this.kick + (d.kind === 'sniper' || d.kind === 'shotgun' ? 1.4 : d.kind === 'pistol' ? 0.9 : 0.55));
    this.kickRot = Math.min(1.5, this.kickRot + (d.kind === 'pistol' ? 1 : 0.6));
    this.flashTime = 0.045;
    this.flash.material.rotation = Math.random() * Math.PI * 2;
    const s = d.kind === 'shotgun' || d.kind === 'sniper' ? 0.5 : d.kind === 'pistol' ? 0.22 : 0.3;
    this.flash.scale.setScalar(s * rand(0.8, 1.2));
  }

  update(dt: number, s: ViewModelState): void {
    this.show(s.weapon.def.id);
    const m = this.current!;
    m.root.visible = !s.hidden;
    const def = s.weapon.def;
    const pistol = def.kind === 'pistol';

    // Base positions
    const hip = pistol ? new THREE.Vector3(0.13, -0.15, -0.38) : new THREE.Vector3(0.14, -0.165, -0.36);
    const ads = new THREE.Vector3(0, -m.sightY, def.scope ? -0.22 : pistol ? -0.36 : def.kind === 'shotgun' ? -0.3 : -0.34);
    const pos = hip.lerp(ads, easeInOut(s.adsT));
    const rot = new THREE.Euler(0, 0, 0);

    // Sprint pose
    const sp = easeInOut(s.sprintT);
    pos.x += sp * (pistol ? -0.02 : -0.04);
    pos.y += sp * -0.04;
    rot.y += sp * (pistol ? 0.2 : 0.75);
    rot.x += sp * (pistol ? -0.5 : -0.25);
    rot.z += sp * (pistol ? 0 : 0.15);

    // Slide tilt
    rot.z += s.slideT * 0.35;

    // Bob
    const amp = s.bobAmp * (1 - s.adsT * 0.85);
    pos.x += Math.sin(s.bobPhase) * 0.012 * amp;
    pos.y += -Math.abs(Math.cos(s.bobPhase)) * 0.012 * amp;
    rot.z += Math.sin(s.bobPhase) * 0.015 * amp;
    // Idle breathing
    const t = performance.now() / 1000;
    pos.y += Math.sin(t * 1.6) * 0.002 * (1 - s.adsT * 0.7);

    // Sway lags behind mouse movement
    this.swayX = damp(this.swayX, clamp(-s.lookDX * 0.0009, -0.05, 0.05), 10, dt);
    this.swayY = damp(this.swayY, clamp(s.lookDY * 0.0009, -0.05, 0.05), 10, dt);
    const swayScale = 1 - s.adsT * 0.75;
    pos.x += this.swayX * swayScale;
    pos.y += this.swayY * swayScale;
    rot.y += this.swayX * 2 * swayScale;
    rot.x += this.swayY * 2 * swayScale;

    // Landing dip & crouch
    pos.y -= s.landDip * 0.05;
    pos.y += s.crouchT * 0.01;

    // Recoil kick
    this.kick = damp(this.kick, 0, 16, dt);
    this.kickRot = damp(this.kickRot, 0, 12, dt);
    const kickScale = def.scope ? 1.4 : 1;
    pos.z += this.kick * 0.045 * kickScale * (1 - s.adsT * 0.4);
    rot.x += this.kickRot * (pistol ? 0.12 : 0.04) * kickScale;

    // Reload animation
    const r = s.weapon.reloadProgress();
    m.mag.position.set(0, 0, 0);
    m.mag.rotation.set(0, 0, 0);
    if (s.weapon.state === 'reloading') {
      const w = Math.sin(Math.min(1, r) * Math.PI);
      if (def.reloadPerRound) {
        rot.z += 0.35;
        rot.x += 0.12 + Math.sin(r * Math.PI) * 0.05;
        pos.y -= 0.02;
      } else {
        rot.z += w * 0.55;
        rot.x += w * 0.3;
        pos.y -= w * 0.05;
        // Mag drops out, then a fresh one comes in
        const magOut = r < 0.45 ? smooth(clamp((r - 0.1) / 0.2, 0, 1)) : 1 - smooth(clamp((r - 0.45) / 0.2, 0, 1));
        m.mag.position.y = -magOut * 0.28;
        m.mag.position.z = magOut * 0.05;
        m.mag.visible = !(r > 0.3 && r < 0.45);
      }
    } else {
      m.mag.visible = true;
    }

    // Bolt / pump / slide
    if (m.action) {
      m.action.position.z = baseActionZ(def.id);
      m.action.rotation.z = 0;
      if (s.weapon.state === 'cycling') {
        const ct = 1 - clamp(s.weapon.cooldown / s.weapon.interval, 0, 1);
        const a = Math.sin(clamp((ct - 0.2) / 0.6, 0, 1) * Math.PI);
        if (def.cycleAction === 'pump') m.action.position.z += a * 0.09;
        else if (def.cycleAction === 'bolt') {
          m.action.rotation.z = a * 1.2;
          m.action.position.z += a * 0.07;
          rot.z += a * 0.25;
          rot.x += a * 0.1;
        }
      } else if (pistol && s.weapon.mag === 0) {
        m.action.position.z += 0.04; // slide locked back on empty
      }
      if (pistol && this.kick > 0.3) m.action.position.z += 0.03 * this.kick;
    }

    // Melee swing
    if (s.meleeT >= 0) {
      const a = Math.sin(s.meleeT * Math.PI);
      pos.x -= a * 0.12;
      pos.z -= a * 0.15;
      rot.y += a * 0.6;
      rot.z += a * 0.5;
    }
    // Grenade throw lowers weapon
    if (s.throwT >= 0) {
      const a = Math.sin(s.throwT * Math.PI);
      pos.y -= a * 0.25;
      rot.x -= a * 0.5;
    }

    // Weapon switching
    const lower = easeInOut(s.lowerT);
    pos.y -= lower * 0.3;
    rot.x -= lower * 0.9;

    m.root.position.copy(pos);
    m.root.rotation.copy(rot);

    // Muzzle flash
    this.flashTime -= dt;
    this.flash.visible = this.flashTime > 0 && !s.hidden;
  }

  dispose(): void {
    for (const m of this.models.values()) disposeGun(m);
    this.models.clear();
  }
}

function baseActionZ(id: WeaponId): number {
  return id === 'brute' ? -0.36 : id === 'p9' ? -0.07 : 0.05;
}

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function smooth(t: number): number {
  return t * t * (3 - 2 * t);
}

const armGeo = new THREE.BoxGeometry(0.085, 0.085, 0.42);
const handGeo = new THREE.BoxGeometry(0.075, 0.085, 0.1);

function addArms(m: GunModel): void {
  // Right arm runs from the grip back toward the shoulder
  const right = new THREE.Group();
  right.position.set(0.0, -0.07, 0.06);
  const rh = new THREE.Mesh(handGeo, gloveMat);
  right.add(rh);
  const ra = new THREE.Mesh(armGeo, sleeveMat);
  ra.position.set(0.07, -0.08, 0.22);
  ra.rotation.set(0.35, 0.35, 0);
  right.add(ra);
  m.root.add(right);

  // Left arm supports the handguard
  const left = new THREE.Group();
  left.position.set(-0.01, -0.03, m.supportZ);
  const lh = new THREE.Mesh(handGeo, gloveMat);
  lh.rotation.z = 0.4;
  left.add(lh);
  const la = new THREE.Mesh(armGeo, sleeveMat);
  la.position.set(-0.12, -0.1, 0.2);
  la.rotation.set(0.3, -0.5, 0);
  left.add(la);
  m.root.add(left);
}
