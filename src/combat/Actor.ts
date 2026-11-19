import * as THREE from 'three';
import type { HitZone } from './Damage';

export const STAND_HEIGHT = 1.8;
export const CROUCH_HEIGHT = 1.3;
export const BODY_HALF_WIDTH = 0.32;

export interface ActorStats {
  kills: number;
  deaths: number;
  score: number;
  shots: number;
  hits: number;
  headshots: number;
}

/** Anything that can be shot: the player and every bot. */
export abstract class Actor {
  private static nextId = 1;
  readonly id = Actor.nextId++;
  abstract readonly isPlayer: boolean;
  name: string;
  team: number;
  readonly position = new THREE.Vector3();
  readonly velocity = new THREE.Vector3();
  yaw = 0;
  pitch = 0;
  health = 100;
  maxHealth = 100;
  alive = true;
  crouching = false;
  grounded = true;
  /** Seconds of remaining spawn protection. */
  spawnProtection = 0;
  lastDamageTime = -999;
  regenDelay = 5;
  regenRate = 28;
  /** Outgoing damage scale (bots on easier difficulties hit softer). */
  damageScale = 1;
  readonly stats: ActorStats = { kills: 0, deaths: 0, score: 0, shots: 0, hits: 0, headshots: 0 };

  constructor(name: string, team: number) {
    this.name = name;
    this.team = team;
  }

  /** Current visual/hitbox height, smoothed while crouching. */
  height = STAND_HEIGHT;

  eyeHeight(): number {
    return this.height - 0.13;
  }

  eyePosition(out: THREE.Vector3): THREE.Vector3 {
    return out.set(this.position.x, this.position.y + this.eyeHeight(), this.position.z);
  }

  chestPosition(out: THREE.Vector3): THREE.Vector3 {
    return out.set(this.position.x, this.position.y + this.height * 0.7, this.position.z);
  }

  forward(out: THREE.Vector3): THREE.Vector3 {
    const cp = Math.cos(this.pitch);
    return out.set(-Math.sin(this.yaw) * cp, Math.sin(this.pitch), -Math.cos(this.yaw) * cp);
  }

  regen(dt: number, now: number): void {
    if (!this.alive || this.health >= this.maxHealth) return;
    if (now - this.lastDamageTime > this.regenDelay) {
      this.health = Math.min(this.maxHealth, this.health + this.regenRate * dt);
    }
  }

  /** Hook so subclasses can react (flinch, aggro, HUD indicator). */
  onDamaged(_amount: number, _from: THREE.Vector3 | null, _attacker: Actor | null, _zone: HitZone | null): void {}

  /** Hook for death animation; dir points away from the killing blow. */
  onKilled(_dir: THREE.Vector3): void {}

  /**
   * Ray vs simplified body: head sphere, torso cylinder, legs cylinder.
   * Returns the distance along the ray and the zone hit.
   */
  rayHit(o: THREE.Vector3, d: THREE.Vector3, maxDist: number): { t: number; zone: HitZone } | null {
    if (!this.alive) return null;
    const p = this.position;
    const h = this.height;
    let best: { t: number; zone: HitZone } | null = null;
    // Head
    const hy = p.y + h - 0.15;
    const ht = raySphere(o, d, p.x, hy, p.z, 0.15);
    if (ht !== null && ht <= maxDist) best = { t: ht, zone: 'head' };
    // Torso (includes arms roughly)
    const tt = rayCylinder(o, d, p.x, p.z, 0.27, p.y + h * 0.5, p.y + h - 0.29);
    if (tt !== null && tt <= maxDist && (!best || tt < best.t)) best = { t: tt, zone: 'torso' };
    // Legs
    const lt = rayCylinder(o, d, p.x, p.z, 0.22, p.y, p.y + h * 0.5);
    if (lt !== null && lt <= maxDist && (!best || lt < best.t)) best = { t: lt, zone: 'limb' };
    return best;
  }
}

function raySphere(o: THREE.Vector3, d: THREE.Vector3, cx: number, cy: number, cz: number, r: number): number | null {
  const ox = o.x - cx;
  const oy = o.y - cy;
  const oz = o.z - cz;
  const b = ox * d.x + oy * d.y + oz * d.z;
  const c = ox * ox + oy * oy + oz * oz - r * r;
  const disc = b * b - c;
  if (disc < 0) return null;
  const t = -b - Math.sqrt(disc);
  return t >= 0 ? t : null;
}

/** Ray vs vertical finite cylinder (side + caps). */
function rayCylinder(o: THREE.Vector3, d: THREE.Vector3, cx: number, cz: number, r: number, y0: number, y1: number): number | null {
  const ox = o.x - cx;
  const oz = o.z - cz;
  const a = d.x * d.x + d.z * d.z;
  let best: number | null = null;
  if (a > 1e-8) {
    const b = ox * d.x + oz * d.z;
    const c = ox * ox + oz * oz - r * r;
    const disc = b * b - a * c;
    if (disc >= 0) {
      const t = (-b - Math.sqrt(disc)) / a;
      if (t >= 0) {
        const y = o.y + d.y * t;
        if (y >= y0 && y <= y1) best = t;
      }
    }
  }
  // Caps — matters when shooting down from height
  if (Math.abs(d.y) > 1e-6) {
    for (const cy of [y0, y1]) {
      const t = (cy - o.y) / d.y;
      if (t < 0 || (best !== null && t >= best)) continue;
      const x = ox + d.x * t;
      const z = oz + d.z * t;
      if (x * x + z * z <= r * r) best = t;
    }
  }
  return best;
}
