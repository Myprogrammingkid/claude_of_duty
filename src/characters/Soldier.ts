import * as THREE from 'three';
import { buildGun, disposeGun, type GunModel } from '../weapons/GunMeshes';
import type { WeaponId } from '../weapons/WeaponDefs';
import { damp } from '../core/math';

export interface TeamStyle {
  uniform: number;
  vest: number;
  helmet: number;
  accent: number;
}

export const RANGERS: TeamStyle = { uniform: 0x6b6b4a, vest: 0x4e5236, helmet: 0x55583f, accent: 0x3a7bd5 };
export const COALITION: TeamStyle = { uniform: 0x4a4744, vest: 0x2f2d2b, helmet: 0x3a3836, accent: 0xc0392b };

const geo = {
  torso: new THREE.BoxGeometry(0.44, 0.55, 0.26),
  vest: new THREE.BoxGeometry(0.48, 0.42, 0.32),
  pelvis: new THREE.BoxGeometry(0.4, 0.18, 0.24),
  head: new THREE.BoxGeometry(0.2, 0.24, 0.22),
  helmet: new THREE.BoxGeometry(0.27, 0.13, 0.29),
  goggles: new THREE.BoxGeometry(0.2, 0.05, 0.03),
  leg: new THREE.BoxGeometry(0.16, 0.46, 0.17),
  shin: new THREE.BoxGeometry(0.14, 0.46, 0.15),
  boot: new THREE.BoxGeometry(0.15, 0.1, 0.26),
  arm: new THREE.BoxGeometry(0.12, 0.3, 0.12),
  forearm: new THREE.BoxGeometry(0.1, 0.3, 0.1),
  band: new THREE.BoxGeometry(0.13, 0.06, 0.13),
  pack: new THREE.BoxGeometry(0.34, 0.36, 0.14),
};

const skin = new THREE.MeshStandardMaterial({ color: 0x9c7a5e, roughness: 0.8 });
const bootMat = new THREE.MeshStandardMaterial({ color: 0x2a241e, roughness: 0.9 });
const gogglesMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.2, metalness: 0.6 });
const styleMats = new Map<TeamStyle, Record<'uniform' | 'vest' | 'helmet' | 'accent', THREE.MeshStandardMaterial>>();

function matsFor(style: TeamStyle) {
  let m = styleMats.get(style);
  if (!m) {
    m = {
      uniform: new THREE.MeshStandardMaterial({ color: style.uniform, roughness: 0.9 }),
      vest: new THREE.MeshStandardMaterial({ color: style.vest, roughness: 0.85 }),
      helmet: new THREE.MeshStandardMaterial({ color: style.helmet, roughness: 0.7 }),
      accent: new THREE.MeshStandardMaterial({ color: style.accent, roughness: 0.6, emissive: style.accent, emissiveIntensity: 0.25 }),
    };
    styleMats.set(style, m);
  }
  return m;
}

function part(g: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number, parent: THREE.Object3D): THREE.Mesh {
  const m = new THREE.Mesh(g, mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  parent.add(m);
  return m;
}

/**
 * Low-poly soldier rig with procedural animation (walk cycle, crouch,
 * aim pitch, recoil and a ragdoll-ish death fall).
 */
export class Soldier {
  readonly root = new THREE.Group();
  private readonly body = new THREE.Group();
  private readonly upper = new THREE.Group();
  private readonly hips = new THREE.Group();
  private readonly legL = new THREE.Group();
  private readonly legR = new THREE.Group();
  private readonly kneeL = new THREE.Group();
  private readonly kneeR = new THREE.Group();
  private readonly armL = new THREE.Group();
  private readonly armR = new THREE.Group();
  private readonly gunHolder = new THREE.Group();
  private gun: GunModel | null = null;
  private walkPhase = 0;
  private crouchT = 0;
  private recoil = 0;
  private deathT = -1;
  private deathDir = 1;
  private nameTag: THREE.Sprite | null = null;

  constructor(style: TeamStyle, weapon: WeaponId) {
    const m = matsFor(style);
    this.root.add(this.body);
    this.body.scale.setScalar(0.94);
    this.body.add(this.hips);
    this.hips.position.y = 0.95;
    part(geo.pelvis, m.uniform, 0, 0, 0, this.hips);

    // Legs
    for (const [leg, knee, x] of [
      [this.legL, this.kneeL, -0.11],
      [this.legR, this.kneeR, 0.11],
    ] as const) {
      leg.position.set(x, -0.05, 0);
      this.hips.add(leg);
      part(geo.leg, m.uniform, 0, -0.23, 0, leg);
      knee.position.y = -0.46;
      leg.add(knee);
      part(geo.shin, m.uniform, 0, -0.22, 0, knee);
      part(geo.boot, bootMat, 0, -0.45, -0.04, knee);
    }

    // Upper body
    this.upper.position.y = 0.08;
    this.hips.add(this.upper);
    part(geo.torso, m.uniform, 0, 0.28, 0, this.upper);
    part(geo.vest, m.vest, 0, 0.3, 0, this.upper);
    part(geo.pack, m.vest, 0, 0.3, 0.22, this.upper);
    part(geo.head, skin, 0, 0.7, 0, this.upper);
    part(geo.helmet, m.helmet, 0, 0.82, 0.01, this.upper);
    part(geo.goggles, gogglesMat, 0, 0.74, -0.115, this.upper);

    // Arms holding a rifle forward
    this.armR.position.set(0.27, 0.5, 0);
    this.armL.position.set(-0.27, 0.5, 0);
    this.upper.add(this.armR, this.armL);
    for (const arm of [this.armR, this.armL]) {
      part(geo.arm, m.uniform, 0, -0.14, 0, arm);
      part(geo.band, m.accent, 0, -0.05, 0, arm);
      const fore = new THREE.Group();
      fore.position.y = -0.28;
      arm.add(fore);
      part(geo.forearm, m.uniform, 0, -0.13, 0, fore);
      fore.rotation.x = Math.PI / 2.2;
    }
    this.armR.rotation.set(-0.5, 0, 0.1);
    this.armL.rotation.set(-0.9, 0, -0.5);

    this.gunHolder.position.set(0.12, 0.33, -0.3);
    this.upper.add(this.gunHolder);
    this.setWeapon(weapon);

    this.root.traverse((o) => (o.castShadow = true));
  }

  setWeapon(id: WeaponId): void {
    if (this.gun) {
      this.gunHolder.remove(this.gun.root);
      disposeGun(this.gun);
    }
    this.gun = buildGun(id, { redDot: false });
    this.gun.root.scale.setScalar(1.15);
    this.gunHolder.add(this.gun.root);
  }

  muzzleWorld(out: THREE.Vector3): THREE.Vector3 {
    if (!this.gun) return this.root.getWorldPosition(out);
    return this.gun.muzzle.getWorldPosition(out);
  }

  setNameTag(text: string, color: string): void {
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 48;
    const ctx = c.getContext('2d')!;
    ctx.font = 'bold 28px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'rgba(0,0,0,0.75)';
    ctx.strokeText(text, 128, 24);
    ctx.fillStyle = color;
    ctx.fillText(text, 128, 24);
    const tex = new THREE.CanvasTexture(c);
    const mat = new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true });
    this.nameTag = new THREE.Sprite(mat);
    this.nameTag.scale.set(1.4, 0.26, 1);
    this.nameTag.position.y = 2.25;
    this.nameTag.renderOrder = 10;
    this.root.add(this.nameTag);
  }

  fire(): void {
    this.recoil = 1;
  }

  die(fromDir: THREE.Vector3): void {
    this.deathT = 0;
    // Fall away from the shot
    const local = fromDir.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), -this.root.rotation.y);
    this.deathDir = local.z > 0 ? -1 : 1;
    if (this.nameTag) this.nameTag.visible = false;
  }

  revive(): void {
    this.deathT = -1;
    this.body.rotation.set(0, 0, 0);
    this.body.position.set(0, 0, 0);
    if (this.nameTag) this.nameTag.visible = true;
  }

  /**
   * @param speed horizontal speed in m/s
   * @param crouch whether crouching
   * @param pitch aim pitch in radians
   */
  update(dt: number, speed: number, crouch: boolean, pitch: number, aiming: boolean): void {
    if (this.deathT >= 0) {
      this.deathT += dt;
      const t = Math.min(1, this.deathT / 0.55);
      const ease = t * t;
      this.body.rotation.x = this.deathDir * ease * (Math.PI / 2) * 0.95;
      this.body.position.y = -ease * 0.05;
      this.hips.position.y = 0.95 - ease * 0.6;
      this.legL.rotation.x = ease * 0.6;
      this.legR.rotation.x = -ease * 0.3;
      this.armL.rotation.z = -0.5 - ease;
      return;
    }
    this.crouchT = damp(this.crouchT, crouch ? 1 : 0, 12, dt);
    const c = this.crouchT;
    const moving = speed > 0.3;
    this.walkPhase += dt * speed * 2.2;
    const swing = moving ? Math.sin(this.walkPhase) * Math.min(1, speed / 4) * 0.7 : 0;
    // Hips drop and legs fold when crouching
    this.hips.position.y = 0.95 - c * 0.5 + (moving ? Math.abs(Math.cos(this.walkPhase)) * 0.04 : 0);
    this.legL.rotation.x = swing - c * 1.1;
    this.legR.rotation.x = -swing - c * 0.5;
    this.kneeL.rotation.x = Math.max(0, -swing) * 0.9 + c * 1.6;
    this.kneeR.rotation.x = Math.max(0, swing) * 0.9 + c * 1.1;
    this.upper.rotation.x = -pitch * 0.6 + c * 0.15;
    this.upper.rotation.y = moving ? Math.sin(this.walkPhase) * 0.06 : 0;
    this.recoil = damp(this.recoil, 0, 14, dt);
    this.gunHolder.position.z = -0.3 + this.recoil * 0.06;
    this.gunHolder.rotation.x = -pitch * 0.4 + this.recoil * 0.12 + (aiming ? 0 : 0.25);
    this.armR.rotation.x = -0.5 - (aiming ? 0.15 : 0) + this.recoil * 0.05;
    this.armL.rotation.x = -0.9 - (aiming ? 0.2 : 0);
  }

  dispose(): void {
    this.root.removeFromParent();
    if (this.gun) disposeGun(this.gun);
    if (this.nameTag) {
      this.nameTag.material.map?.dispose();
      this.nameTag.material.dispose();
    }
  }
}
