import * as THREE from 'three';
import { rand } from '../core/math';
import { getGlowTexture, getSmokeTexture } from '../world/Textures';

interface Particle {
  sprite: THREE.Sprite;
  vel: THREE.Vector3;
  life: number;
  maxLife: number;
  gravity: number;
  grow: number;
  baseScale: number;
  fade: number;
}

interface Tracer {
  line: THREE.Line;
  life: number;
}

interface FlashLight {
  light: THREE.PointLight;
  life: number;
  max: number;
  intensity: number;
}

const MAX_DECALS = 160;
const MAX_PARTICLES = 260;

/** Pooled short-lived visual effects. */
export class Effects {
  readonly group = new THREE.Group();
  private decals: THREE.Mesh[] = [];
  private decalIndex = 0;
  private particles: Particle[] = [];
  private freeSprites: THREE.Sprite[] = [];
  private tracers: Tracer[] = [];
  private lights: FlashLight[] = [];
  private readonly decalGeo = new THREE.PlaneGeometry(0.12, 0.12);
  private readonly decalMat: THREE.MeshBasicMaterial;
  private readonly sparkMat: THREE.SpriteMaterial;
  private readonly dustMat: THREE.SpriteMaterial;
  private readonly bloodMat: THREE.SpriteMaterial;
  private readonly smokeMat: THREE.SpriteMaterial;
  private readonly fireMat: THREE.SpriteMaterial;
  private readonly tracerMat: THREE.LineBasicMaterial;
  private readonly tmp = new THREE.Vector3();

  constructor(scene: THREE.Scene, dark: boolean) {
    scene.add(this.group);
    const c = document.createElement('canvas');
    c.width = c.height = 32;
    const ctx = c.getContext('2d')!;
    const g = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    g.addColorStop(0, 'rgba(10,10,10,0.95)');
    g.addColorStop(0.45, 'rgba(25,22,20,0.8)');
    g.addColorStop(1, 'rgba(40,35,30,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 32, 32);
    const tex = new THREE.CanvasTexture(c);
    this.decalMat = new THREE.MeshBasicMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -4,
    });
    const glow = getGlowTexture();
    const smoke = getSmokeTexture();
    this.sparkMat = new THREE.SpriteMaterial({ map: glow, color: 0xffd080, blending: THREE.AdditiveBlending, depthWrite: false });
    this.fireMat = new THREE.SpriteMaterial({ map: glow, color: 0xff9a40, blending: THREE.AdditiveBlending, depthWrite: false });
    this.dustMat = new THREE.SpriteMaterial({ map: smoke, color: dark ? 0x55524c : 0xb8a98c, depthWrite: false, transparent: true });
    this.bloodMat = new THREE.SpriteMaterial({ map: smoke, color: 0x7a0a0a, depthWrite: false, transparent: true });
    this.smokeMat = new THREE.SpriteMaterial({ map: smoke, color: dark ? 0x3a3a3a : 0x6a655c, depthWrite: false, transparent: true });
    this.tracerMat = new THREE.LineBasicMaterial({ color: 0xffdd99, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending });
    for (let i = 0; i < 4; i++) {
      const light = new THREE.PointLight(0xffc070, 0, 8, 2);
      this.group.add(light);
      this.lights.push({ light, life: 0, max: 0.05, intensity: 0 });
    }
  }

  bulletImpact(point: THREE.Vector3, normal: THREE.Vector3): void {
    // Decal
    let d = this.decals[this.decalIndex];
    if (!d) {
      d = new THREE.Mesh(this.decalGeo, this.decalMat);
      this.decals[this.decalIndex] = d;
      this.group.add(d);
    }
    this.decalIndex = (this.decalIndex + 1) % MAX_DECALS;
    d.position.copy(point).addScaledVector(normal, 0.01);
    d.lookAt(this.tmp.copy(d.position).add(normal));
    d.rotateZ(Math.random() * Math.PI);
    const s = rand(0.8, 1.3);
    d.scale.set(s, s, s);
    // Sparks + dust
    for (let i = 0; i < 4; i++) {
      const v = normal.clone().multiplyScalar(rand(2, 5)).add(new THREE.Vector3(rand(-2, 2), rand(0, 3), rand(-2, 2)));
      this.spawn(this.sparkMat, point, v, 0.15, 12, 0.06, 0, 1);
    }
    for (let i = 0; i < 2; i++) {
      const v = normal.clone().multiplyScalar(rand(0.5, 1.4)).add(new THREE.Vector3(rand(-0.3, 0.3), rand(0.2, 0.6), rand(-0.3, 0.3)));
      this.spawn(this.dustMat, point, v, rand(0.5, 0.9), -0.4, 0.25, 0.9, 0.7);
    }
  }

  blood(point: THREE.Vector3, dir: THREE.Vector3): void {
    for (let i = 0; i < 4; i++) {
      const v = dir.clone().multiplyScalar(rand(0.5, 2)).add(new THREE.Vector3(rand(-0.6, 0.6), rand(-0.2, 0.8), rand(-0.6, 0.6)));
      this.spawn(this.bloodMat, point, v, rand(0.3, 0.5), 4, 0.18, 0.8, 0.9);
    }
  }

  tracer(from: THREE.Vector3, to: THREE.Vector3): void {
    const geo = new THREE.BufferGeometry().setFromPoints([from.clone(), to.clone()]);
    const line = new THREE.Line(geo, this.tracerMat);
    this.group.add(line);
    this.tracers.push({ line, life: 0.05 });
  }

  muzzleLight(pos: THREE.Vector3, intensity = 6): void {
    this.flash(pos, 0xffc070, intensity, 0.05, 8);
  }

  flash(pos: THREE.Vector3, color: number, intensity: number, life: number, distance: number): void {
    // Lights are pre-allocated: changing the light count forces shader recompiles.
    const fl = this.lights.find((l) => l.life <= 0) ?? this.lights.reduce((a, b) => (a.life < b.life ? a : b));
    fl.light.color.setHex(color);
    fl.light.distance = distance;
    fl.light.position.copy(pos);
    fl.life = fl.max = life;
    fl.intensity = intensity;
    fl.light.intensity = intensity;
  }

  /** World-space muzzle flash sprite for third-person shooters. */
  muzzleSprite(pos: THREE.Vector3): void {
    this.spawn(this.fireMat, pos, new THREE.Vector3(), 0.05, 0, 0.5, 0, 1);
  }

  explosion(pos: THREE.Vector3): void {
    this.flash(pos.clone().setY(pos.y + 1), 0xffa050, 60, 0.25, 20);
    for (let i = 0; i < 14; i++) {
      const v = new THREE.Vector3(rand(-1, 1), rand(0.2, 1.4), rand(-1, 1)).normalize().multiplyScalar(rand(2, 8));
      this.spawn(this.fireMat, pos, v, rand(0.2, 0.4), 2, rand(0.8, 1.6), 1.5, 1);
    }
    for (let i = 0; i < 16; i++) {
      const v = new THREE.Vector3(rand(-1, 1), rand(0.3, 1.2), rand(-1, 1)).normalize().multiplyScalar(rand(1, 4));
      this.spawn(this.smokeMat, pos, v, rand(1.8, 3.2), -0.3, rand(1.2, 2.2), 1.2, 0.85);
    }
    for (let i = 0; i < 18; i++) {
      const v = new THREE.Vector3(rand(-1, 1), rand(0.5, 1.5), rand(-1, 1)).normalize().multiplyScalar(rand(8, 16));
      this.spawn(this.sparkMat, pos, v, rand(0.3, 0.7), 14, 0.08, 0, 1);
    }
  }

  private spawn(
    mat: THREE.SpriteMaterial,
    pos: THREE.Vector3,
    vel: THREE.Vector3,
    life: number,
    gravity: number,
    scale: number,
    grow: number,
    fade: number,
  ): void {
    if (this.particles.length >= MAX_PARTICLES) {
      const old = this.particles.shift()!;
      this.release(old.sprite);
    }
    let sprite = this.freeSprites.pop();
    if (!sprite) {
      sprite = new THREE.Sprite(mat);
      this.group.add(sprite);
    }
    sprite.material = mat.clone();
    sprite.visible = true;
    sprite.position.copy(pos);
    sprite.scale.setScalar(scale);
    sprite.material.rotation = Math.random() * Math.PI * 2;
    this.particles.push({ sprite, vel, life, maxLife: life, gravity, grow, baseScale: scale, fade });
  }

  private release(s: THREE.Sprite): void {
    s.visible = false;
    (s.material as THREE.SpriteMaterial).dispose();
    this.freeSprites.push(s);
  }

  update(dt: number): void {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= dt;
      if (p.life <= 0) {
        this.release(p.sprite);
        this.particles.splice(i, 1);
        continue;
      }
      p.vel.y -= p.gravity * dt;
      p.vel.multiplyScalar(1 - Math.min(1, dt * 1.5));
      p.sprite.position.addScaledVector(p.vel, dt);
      const t = 1 - p.life / p.maxLife;
      p.sprite.scale.setScalar(p.baseScale * (1 + p.grow * t));
      (p.sprite.material as THREE.SpriteMaterial).opacity = p.fade * (1 - t);
    }
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const t = this.tracers[i];
      t.life -= dt;
      if (t.life <= 0) {
        t.line.removeFromParent();
        t.line.geometry.dispose();
        this.tracers.splice(i, 1);
      }
    }
    for (const l of this.lights) {
      if (l.life > 0) {
        l.life -= dt;
        l.light.intensity = Math.max(0, (l.life / l.max) * l.intensity);
      } else {
        l.light.intensity = 0;
      }
    }
  }

  dispose(): void {
    this.group.removeFromParent();
    for (const p of this.particles) (p.sprite.material as THREE.SpriteMaterial).dispose();
    for (const t of this.tracers) t.line.geometry.dispose();
    this.decalGeo.dispose();
    this.decalMat.map?.dispose();
    this.decalMat.dispose();
    for (const m of [this.sparkMat, this.dustMat, this.bloodMat, this.smokeMat, this.fireMat, this.tracerMat]) m.dispose();
  }
}
