import * as THREE from 'three';
import { Actor, BODY_HALF_WIDTH, CROUCH_HEIGHT, STAND_HEIGHT } from '../combat/Actor';
import type { HitZone } from '../combat/Damage';
import { Soldier, type TeamStyle } from '../characters/Soldier';
import { angleDiff, clamp, damp, DEG, rand, randInt } from '../core/math';
import type { Session } from '../game/Session';
import { Weapon } from '../weapons/Weapon';
import type { WeaponId } from '../weapons/WeaponDefs';
import type { Body } from '../world/Collision';

export type BotBehavior = 'roam' | 'guard' | 'patrol' | 'assault' | 'follow';

export interface BotOptions {
  name: string;
  team: number;
  weapon: WeaponId;
  behavior: BotBehavior;
  position: THREE.Vector3;
  yaw: number;
  style: TeamStyle;
  group?: string;
  nameTag?: string;
  /** Leash radius for patrol behaviour */
  radius?: number;
  damageScale?: number;
}

type State = 'idle' | 'move' | 'engage' | 'cover' | 'search' | 'dead';

const GRAVITY = 17;
const tmp = new THREE.Vector3();
const tmp2 = new THREE.Vector3();
const eyeTmp = new THREE.Vector3();

/**
 * Combat AI. Perceives enemies by vision cone + line of sight and hearing,
 * then runs a small state machine: idle/patrol -> engage <-> cover -> search.
 */
export class Bot extends Actor {
  readonly isPlayer = false;
  readonly soldier: Soldier;
  readonly weapon: Weapon;
  behavior: BotBehavior;
  readonly group: string | undefined;
  readonly home = new THREE.Vector3();
  private homeYaw: number;
  private readonly radius: number;
  state: State = 'idle';
  private readonly body: Body;
  // Navigation
  private path: number[] = [];
  private pathIdx = 0;
  private readonly dest = new THREE.Vector3();
  private hasDest = false;
  private repathTimer = 0;
  private idleTimer = 0;
  private stuckTimer = 0;
  private readonly stuckPos = new THREE.Vector3();
  // Perception
  target: Actor | null = null;
  private targetVisible = false;
  private readonly lastSeenPos = new THREE.Vector3();
  private lastSeenTime = -999;
  private seeTime = 0;
  private trackTime = 0;
  private perceiveTimer = Math.random() * 0.2;
  private recentAttacker: Actor | null = null;
  private recentAttackTime = -999;
  // Combat
  private burstLeft = 0;
  private burstCooldown = 0;
  private aimHead = false;
  private readonly aimError = new THREE.Vector3();
  private strafeDir = 1;
  private strafeTimer = 0;
  private standStill = false;
  private wantCrouch = false;
  private coverCooldown = 0;
  private coverTimer = 0;
  private coverNode = -1;
  private grenades = 1;
  private grenadeCooldown = rand(6, 12);
  private searchTimer = 0;
  private deadTime = 0;
  private speedNow = 0;

  constructor(
    private readonly session: Session,
    opts: BotOptions,
  ) {
    super(opts.name, opts.team);
    this.behavior = opts.behavior;
    this.group = opts.group;
    this.radius = opts.radius ?? 14;
    this.weapon = new Weapon(opts.weapon);
    this.damageScale = opts.damageScale ?? 1;
    this.regenDelay = 6;
    this.regenRate = 20;
    this.soldier = new Soldier(opts.style, opts.weapon);
    if (opts.nameTag) this.soldier.setNameTag(opts.name, opts.nameTag);
    session.scene.add(this.soldier.root);
    this.body = { pos: this.position, vel: this.velocity, halfW: BODY_HALF_WIDTH, height: STAND_HEIGHT, grounded: false };
    this.homeYaw = opts.yaw;
    this.respawn(opts.position, opts.yaw);
    this.home.copy(opts.position);
  }

  respawn(pos: THREE.Vector3, yaw: number): void {
    this.position.copy(pos);
    this.velocity.set(0, 0, 0);
    this.yaw = yaw;
    this.pitch = 0;
    this.health = this.maxHealth;
    this.alive = true;
    this.crouching = false;
    this.wantCrouch = false;
    this.height = STAND_HEIGHT;
    this.state = 'idle';
    this.target = null;
    this.targetVisible = false;
    this.lastSeenTime = -999;
    this.path = [];
    this.hasDest = false;
    this.weapon.refill();
    this.grenades = 1;
    this.spawnProtection = 1.5;
    this.soldier.revive();
    this.soldier.root.visible = true;
    this.syncVisual(0);
  }

  get deadFor(): number {
    return this.alive ? 0 : this.deadTime;
  }

  // ---------------------------------------------------------------- update

  update(dt: number): void {
    if (!this.alive) {
      this.deadTime += dt;
      this.soldier.update(dt, 0, false, 0, false);
      if (this.deadTime > 6) this.soldier.root.visible = false;
      return;
    }
    const s = this.session;
    if (this.spawnProtection > 0) this.spawnProtection -= dt;
    this.regen(dt, s.time);
    this.weapon.update(dt);
    this.burstCooldown -= dt;
    this.coverCooldown -= dt;
    this.grenadeCooldown -= dt;

    this.perceiveTimer -= dt;
    if (this.perceiveTimer <= 0) {
      this.perceiveTimer = 0.14 + Math.random() * 0.06;
      this.perceive();
    }

    let moveX = 0;
    let moveZ = 0;
    let speed = 0;
    let faceMove = true;

    // Grenade nearby? Get away from it.
    const nade = this.nearbyGrenade();
    if (nade) {
      tmp.copy(this.position).sub(nade).setY(0).normalize();
      moveX = tmp.x;
      moveZ = tmp.z;
      speed = 5.2;
      this.wantCrouch = false;
    } else {
      switch (this.state) {
        case 'idle':
        case 'move':
          ({ moveX, moveZ, speed } = this.doPatrol(dt));
          break;
        case 'engage':
          ({ moveX, moveZ, speed } = this.doEngage(dt));
          faceMove = false;
          break;
        case 'cover':
          ({ moveX, moveZ, speed } = this.doCover(dt));
          faceMove = !(this.targetVisible && this.coverArrived());
          break;
        case 'search':
          ({ moveX, moveZ, speed } = this.doSearch(dt));
          break;
      }
    }

    // Facing
    if (faceMove && speed > 0.1 && !this.targetVisible) {
      const want = Math.atan2(-moveX, -moveZ);
      this.yaw += clamp(angleDiff(this.yaw, want), -dt * 5, dt * 5);
      this.pitch = damp(this.pitch, 0, 5, dt);
    } else if (this.targetVisible || this.state === 'engage') {
      this.aimAt(dt);
    }

    // Stance
    this.crouching = this.wantCrouch && speed < 3;
    const stand = !this.crouching || this.session.world.bodyOverlaps(this.position.x, this.position.y + 0.01, this.position.z, BODY_HALF_WIDTH, STAND_HEIGHT);
    if (!this.crouching && !stand) this.crouching = true;
    this.body.height = this.crouching ? CROUCH_HEIGHT : STAND_HEIGHT;
    this.height = damp(this.height, this.body.height, 10, dt);
    if (this.crouching) speed = Math.min(speed, 2.2);

    // Physics
    const v = this.velocity;
    v.x = damp(v.x, moveX * speed, 10, dt);
    v.z = damp(v.z, moveZ * speed, 10, dt);
    v.y -= GRAVITY * dt;
    this.session.world.moveBody(this.body, v.x * dt, v.y * dt, v.z * dt, 0.45);
    this.grounded = this.body.grounded;
    this.speedNow = Math.hypot(v.x, v.z);

    // Stuck detection: jump, then pick a different route
    if (speed > 1) {
      this.stuckTimer += dt;
      if (this.stuckTimer > 1.2) {
        if (this.stuckPos.distanceTo(this.position) < 0.4) {
          if (this.grounded) v.y = 5.2;
          this.hasDest = false;
          this.path = [];
          if (this.state === 'cover') this.state = 'engage';
        }
        this.stuckTimer = 0;
        this.stuckPos.copy(this.position);
      }
    } else {
      this.stuckTimer = 0;
      this.stuckPos.copy(this.position);
    }

    this.syncVisual(dt);
  }

  private syncVisual(dt: number): void {
    this.soldier.root.position.copy(this.position);
    this.soldier.root.rotation.y = this.yaw;
    this.soldier.update(dt, this.speedNow, this.crouching, this.pitch, this.state === 'engage' || this.state === 'cover');
  }

  // ---------------------------------------------------------------- perception

  private perceive(): void {
    const s = this.session;
    const eye = this.eyePosition(eyeTmp);
    const fwdX = -Math.sin(this.yaw);
    const fwdZ = -Math.cos(this.yaw);
    let best: Actor | null = null;
    let bestScore = Infinity;
    for (const a of s.actors) {
      if (!a.alive || !s.isEnemy(this, a)) continue;
      const dx = a.position.x - this.position.x;
      const dz = a.position.z - this.position.z;
      const dist = Math.hypot(dx, dz);
      let range = s.sightRange;
      if (a.crouching) range *= 0.75;
      if (dist > range) continue;
      const cos = (dx * fwdX + dz * fwdZ) / Math.max(dist, 0.001);
      const attacked = a === this.recentAttacker && s.time - this.recentAttackTime < 2.5;
      const fovCos = a === this.target ? Math.cos(100 * DEG) : Math.cos(62 * DEG);
      if (cos < fovCos && dist > 4 && !attacked) continue;
      const visible = s.world.lineClear(eye, a.eyePosition(tmp)) || s.world.lineClear(eye, a.chestPosition(tmp));
      if (!visible) continue;
      const score = dist - (a === this.target ? 8 : 0) - (a.isPlayer ? 3 : 0);
      if (score < bestScore) {
        bestScore = score;
        best = a;
      }
    }
    if (best) {
      if (best !== this.target || !this.targetVisible) {
        if (best !== this.target || s.time - this.lastSeenTime > 2) this.seeTime = 0;
        if (!this.targetVisible) this.alertSquad(best);
      }
      this.target = best;
      this.targetVisible = true;
      this.lastSeenPos.copy(best.position);
      this.lastSeenTime = s.time;
      if (this.state !== 'cover') this.state = 'engage';
    } else {
      this.targetVisible = false;
      this.trackTime = 0;
    }
  }

  private alertSquad(enemy: Actor): void {
    for (const b of this.session.bots) {
      if (b === this || !b.alive || b.team !== this.team || b.targetVisible) continue;
      if (b.position.distanceTo(this.position) > 28) continue;
      b.lastSeenPos.copy(enemy.position);
      b.lastSeenTime = this.session.time;
      b.target = enemy;
      if (b.state === 'idle' || b.state === 'move') b.enterSearch();
    }
  }

  hearShot(shooter: Actor, pos: THREE.Vector3): void {
    if (!this.alive || !this.session.isEnemy(this, shooter) || this.targetVisible) return;
    const d = pos.distanceTo(this.position);
    if (d > 55) return;
    // Heard-from positions are fuzzy
    const fuzz = d * 0.08;
    this.lastSeenPos.set(pos.x + rand(-fuzz, fuzz), 0, pos.z + rand(-fuzz, fuzz));
    this.lastSeenTime = this.session.time;
    if (this.state === 'idle' || this.state === 'move') this.enterSearch();
  }

  override onDamaged(_amount: number, from: THREE.Vector3 | null, attacker: Actor | null, _zone: HitZone | null): void {
    this.aimError.multiplyScalar(1.6);
    if (attacker && this.session.isEnemy(this, attacker)) {
      this.recentAttacker = attacker;
      this.recentAttackTime = this.session.time;
      if (!this.targetVisible) {
        this.target = attacker;
        this.lastSeenPos.copy(from ?? attacker.position);
        this.lastSeenTime = this.session.time;
        this.perceiveTimer = 0;
        if (this.state !== 'cover') this.enterSearch();
      }
    }
    if (this.health < 45 && this.coverCooldown <= 0 && this.state !== 'cover') this.enterCover();
  }

  override onKilled(dir: THREE.Vector3): void {
    this.state = 'dead';
    this.deadTime = 0;
    this.soldier.die(dir);
  }

  // ---------------------------------------------------------------- states

  private doPatrol(dt: number): { moveX: number; moveZ: number; speed: number } {
    const s = this.session;
    this.wantCrouch = false;
    switch (this.behavior) {
      case 'guard': {
        if (this.position.distanceTo(this.home) > 2.5) {
          if (!this.hasDest) this.setDestination(this.home.x, this.home.z);
          return this.followPath(1.8);
        }
        this.hasDest = false;
        this.yaw = this.homeYaw + Math.sin(s.time * 0.35 + this.id) * 0.9;
        return { moveX: 0, moveZ: 0, speed: 0 };
      }
      case 'follow': {
        const leader = s.player;
        const d = leader.position.distanceTo(this.position);
        this.repathTimer -= dt;
        if (d > 7 && this.repathTimer <= 0) {
          this.repathTimer = 1.5;
          const a = rand(0, Math.PI * 2);
          this.setDestination(leader.position.x + Math.cos(a) * 3, leader.position.z + Math.sin(a) * 3);
        }
        if (this.hasDest && d > 4) return this.followPath(d > 18 ? 5.4 : 4.2);
        return { moveX: 0, moveZ: 0, speed: 0 };
      }
      case 'assault': {
        this.repathTimer -= dt;
        if (!this.hasDest || this.repathTimer <= 0) {
          this.repathTimer = 3;
          const enemies = s.enemiesOf(this);
          const t = enemies.find((e) => e.isPlayer) ?? enemies[0];
          if (t) this.setDestination(t.position.x + rand(-4, 4), t.position.z + rand(-4, 4));
        }
        return this.followPath(4.6);
      }
      case 'patrol': {
        if (!this.hasDest) {
          this.idleTimer -= dt;
          if (this.idleTimer > 0) return { moveX: 0, moveZ: 0, speed: 0 };
          const nodes = s.nav.within(this.home.x, this.home.z, this.radius);
          if (nodes.length) {
            const n = s.nav.nodes[nodes[Math.floor(Math.random() * nodes.length)]];
            this.setDestination(n.x, n.z);
          }
          this.idleTimer = rand(2, 5);
        }
        return this.followPath(1.9);
      }
      case 'roam':
      default: {
        if (!this.hasDest) {
          const enemies = s.enemiesOf(this);
          if (enemies.length && Math.random() < 0.6) {
            const e = enemies[Math.floor(Math.random() * enemies.length)];
            this.setDestination(e.position.x + rand(-10, 10), e.position.z + rand(-10, 10));
          } else {
            const n = s.nav.nodes[s.nav.random()];
            this.setDestination(n.x, n.z);
          }
        }
        return this.followPath(4.4);
      }
    }
  }

  private enterSearch(): void {
    this.state = 'search';
    this.searchTimer = 0;
    this.setDestination(this.lastSeenPos.x, this.lastSeenPos.z);
  }

  private doSearch(dt: number): { moveX: number; moveZ: number; speed: number } {
    const s = this.session;
    if (s.time - this.lastSeenTime > 14) {
      this.state = 'idle';
      this.hasDest = false;
      return { moveX: 0, moveZ: 0, speed: 0 };
    }
    if (this.behavior === 'guard' && this.position.distanceTo(this.home) > 16) {
      // Guards don't chase far
      this.state = 'idle';
      this.hasDest = false;
      return { moveX: 0, moveZ: 0, speed: 0 };
    }
    this.maybeThrowGrenade();
    if (this.hasDest && this.position.distanceTo(this.lastSeenPos) > 2) {
      const m = this.followPath(3.4);
      if (m.speed > 0) return m;
    }
    // Look around at the last known position
    this.searchTimer += dt;
    this.yaw += dt * 1.6;
    if (this.searchTimer > 3.5) {
      this.state = 'idle';
      this.hasDest = false;
    }
    return { moveX: 0, moveZ: 0, speed: 0 };
  }

  private enterCover(): void {
    const node = this.findCover();
    if (node < 0) return;
    this.coverNode = node;
    this.state = 'cover';
    this.coverTimer = rand(1.8, 3.2);
    this.coverCooldown = 7;
    const n = this.session.nav.nodes[node];
    this.setDestination(n.x, n.z);
  }

  private coverArrived(): boolean {
    if (this.coverNode < 0) return false;
    const n = this.session.nav.nodes[this.coverNode];
    return Math.hypot(n.x - this.position.x, n.z - this.position.z) < 1.0;
  }

  private doCover(dt: number): { moveX: number; moveZ: number; speed: number } {
    if (!this.coverArrived()) {
      this.wantCrouch = false;
      const m = this.followPath(5);
      if (m.speed > 0 || !this.hasDest) return m;
    }
    this.wantCrouch = true;
    if (this.weapon.mag < this.weapon.def.magSize * 0.5 && this.weapon.state === 'ready') this.weapon.startReload();
    this.coverTimer -= dt;
    // Pop up and shoot if the target is visible from here
    if (this.targetVisible && this.weapon.state === 'ready' && this.coverTimer < 1) {
      this.wantCrouch = false;
      this.tryShoot(dt);
    }
    if (this.coverTimer <= 0 && (this.health > 60 || this.coverTimer < -3)) {
      this.wantCrouch = false;
      if (this.targetVisible) this.state = 'engage';
      else this.enterSearch();
    }
    return { moveX: 0, moveZ: 0, speed: 0 };
  }

  private doEngage(dt: number): { moveX: number; moveZ: number; speed: number } {
    const s = this.session;
    const t = this.target;
    if (!t || !t.alive) {
      this.target = null;
      this.targetVisible = false;
      this.state = 'idle';
      return { moveX: 0, moveZ: 0, speed: 0 };
    }
    if (!this.targetVisible) {
      if (s.time - this.lastSeenTime > 1.2) this.enterSearch();
      this.maybeThrowGrenade();
      return { moveX: 0, moveZ: 0, speed: 0 };
    }
    this.trackTime += dt;
    this.seeTime += dt;

    // Reload / retreat
    if (this.weapon.mag === 0 && this.weapon.state !== 'reloading') {
      if (this.health < 70 && this.coverCooldown <= 0) {
        this.enterCover();
        if (this.state === 'cover') return { moveX: 0, moveZ: 0, speed: 0 };
      }
      this.weapon.startReload();
    }

    this.tryShoot(dt);

    // Tactical movement
    const dx = t.position.x - this.position.x;
    const dz = t.position.z - this.position.z;
    const dist = Math.hypot(dx, dz);
    const ideal = this.idealRange();
    if (this.behavior !== 'guard' && dist > ideal + 12) {
      this.repathTimer -= dt;
      if (!this.hasDest || this.repathTimer <= 0) {
        this.repathTimer = 1.5;
        this.setDestination(t.position.x, t.position.z);
      }
      this.wantCrouch = false;
      const m = this.followPath(3.8);
      return m;
    }
    this.strafeTimer -= dt;
    if (this.strafeTimer <= 0) {
      this.strafeTimer = rand(0.7, 1.8);
      this.strafeDir = Math.random() < 0.5 ? -1 : 1;
      const longGun = this.weapon.def.kind === 'sniper' || this.weapon.def.kind === 'rifle';
      this.standStill = Math.random() < (longGun ? 0.45 : 0.2);
      this.wantCrouch = this.standStill && Math.random() < 0.6;
    }
    if (this.standStill) return { moveX: 0, moveZ: 0, speed: 0 };
    const nx = dx / Math.max(dist, 0.01);
    const nz = dz / Math.max(dist, 0.01);
    let mx = -nz * this.strafeDir;
    let mz = nx * this.strafeDir;
    if (dist < 5 && this.weapon.def.kind !== 'shotgun') {
      mx -= nx * 0.8;
      mz -= nz * 0.8;
    } else if (dist > ideal) {
      mx += nx * 0.5;
      mz += nz * 0.5;
    }
    const len = Math.hypot(mx, mz) || 1;
    return { moveX: mx / len, moveZ: mz / len, speed: 2.6 };
  }

  private idealRange(): number {
    switch (this.weapon.def.kind) {
      case 'shotgun':
        return 6;
      case 'smg':
        return 12;
      case 'pistol':
        return 12;
      case 'sniper':
        return 40;
      default:
        return 22;
    }
  }

  private aimPoint(out: THREE.Vector3): THREE.Vector3 {
    const t = this.target!;
    if (this.aimHead) return out.set(t.position.x, t.position.y + t.height - 0.15, t.position.z);
    return t.chestPosition(out);
  }

  private aimAt(dt: number): void {
    if (!this.target) return;
    const eye = this.eyePosition(eyeTmp);
    const p = this.targetVisible ? this.aimPoint(tmp) : tmp.copy(this.lastSeenPos).setY(1.4);
    const dx = p.x - eye.x;
    const dy = p.y - eye.y;
    const dz = p.z - eye.z;
    const wantYaw = Math.atan2(-dx, -dz);
    const wantPitch = Math.atan2(dy, Math.hypot(dx, dz));
    const rate = this.session.diff.turnRate * (this.recentAttackTime > this.session.time - 1 ? 1.5 : 1);
    this.yaw += clamp(angleDiff(this.yaw, wantYaw), -rate * dt, rate * dt);
    this.pitch += clamp(wantPitch - this.pitch, -rate * dt, rate * dt);
  }

  private tryShoot(_dt: number): void {
    const s = this.session;
    const t = this.target;
    if (!t || !this.targetVisible) return;
    if (this.seeTime < s.diff.reaction) return;
    if (this.weapon.state !== 'ready') return;
    const eye = this.eyePosition(eyeTmp);
    const p = this.aimPoint(tmp);
    const wantYaw = Math.atan2(-(p.x - eye.x), -(p.z - eye.z));
    if (Math.abs(angleDiff(this.yaw, wantYaw)) > 12 * DEG) return;
    const dist = p.distanceTo(eye);
    if (dist > this.weapon.def.range) return;

    if (this.burstLeft <= 0) {
      if (this.burstCooldown > 0) return;
      const k = this.weapon.def.kind;
      const [b0, b1] = s.diff.burst;
      this.burstLeft = k === 'sniper' || k === 'shotgun' ? 1 : k === 'pistol' ? randInt(1, 3) : randInt(b0, b1);
      this.aimHead = Math.random() < s.diff.headshotChance;
      // Aim error shrinks the longer the bot tracks the target
      const settle = clamp(this.trackTime / 1.6, 0, 1);
      const errDeg = s.diff.aimError * (1.8 - settle * 1.2) * (t.isPlayer && t.velocity.lengthSq() > 9 ? 1.3 : 1);
      const errDist = dist * Math.tan(errDeg * DEG);
      this.aimError.set(rand(-1, 1), rand(-0.7, 0.7), rand(-1, 1)).normalize().multiplyScalar(errDist * Math.random());
    }
    this.weapon.tryFire(false);
    const res = this.weapon.tryFire(true);
    if (res !== 'fired') return;
    this.burstLeft--;
    if (this.burstLeft <= 0) {
      const k = this.weapon.def.kind;
      this.burstCooldown = k === 'sniper' ? rand(1.6, 2.6) : k === 'shotgun' ? rand(0.5, 0.9) : rand(0.25, 0.75);
    }
    const dir = tmp2.copy(p).add(this.aimError).sub(eye).normalize();
    const moving = this.speedNow > 0.5;
    const spread = this.weapon.spread(0.65, moving ? 0.5 : 0) * 0.7;
    const muzzle = this.soldier.muzzleWorld(new THREE.Vector3());
    this.soldier.fire();
    s.fire(this, eye.clone(), dir.clone(), this.weapon, spread, muzzle);
  }

  private maybeThrowGrenade(): void {
    const s = this.session;
    if (this.grenades <= 0 || this.grenadeCooldown > 0 || !this.target) return;
    const since = s.time - this.lastSeenTime;
    if (since < 1.2 || since > 5) return;
    const d = Math.hypot(this.lastSeenPos.x - this.position.x, this.lastSeenPos.z - this.position.z);
    if (d < 9 || d > 26) return;
    this.grenadeCooldown = rand(10, 18);
    if (Math.random() > 0.45) return;
    this.grenades--;
    const theta = 38 * DEG;
    const v = Math.sqrt((d * GRAVITY) / Math.sin(2 * theta)) * 0.92;
    const dirX = (this.lastSeenPos.x - this.position.x) / d;
    const dirZ = (this.lastSeenPos.z - this.position.z) / d;
    const origin = this.eyePosition(new THREE.Vector3());
    const vel = new THREE.Vector3(dirX * v * Math.cos(theta), v * Math.sin(theta), dirZ * v * Math.cos(theta));
    s.grenades.throw(this, origin, vel, 3.0);
    if (this.team === s.player.team) s.message(`${this.name}: Frag out!`, '#9ecbff');
  }

  private nearbyGrenade(): THREE.Vector3 | null {
    for (const g of this.session.grenades.live) {
      if (g.fuse < 2.6 && g.pos.distanceTo(this.position) < 6) return g.pos;
    }
    return null;
  }

  private findCover(): number {
    const s = this.session;
    const threat = this.target;
    const threatEye = threat ? threat.eyePosition(new THREE.Vector3()) : null;
    const candidates = s.nav.within(this.position.x, this.position.z, 16).filter((i) => s.nav.nodes[i].cover);
    candidates.sort((a, b) => {
      const na = s.nav.nodes[a];
      const nb = s.nav.nodes[b];
      return Math.hypot(na.x - this.position.x, na.z - this.position.z) - Math.hypot(nb.x - this.position.x, nb.z - this.position.z);
    });
    let checked = 0;
    for (const i of candidates) {
      if (checked++ > 20) break;
      const n = s.nav.nodes[i];
      if (!threatEye) return i;
      if (Math.hypot(n.x - threatEye.x, n.z - threatEye.z) < 6) continue;
      // Good cover hides a crouched body from the threat
      if (!s.world.lineClear(threatEye, tmp.set(n.x, 1.0, n.z))) return i;
    }
    return -1;
  }

  // ---------------------------------------------------------------- navigation

  private setDestination(x: number, z: number): boolean {
    const nav = this.session.nav;
    const start = nav.nearest(this.position.x, this.position.z);
    const goal = nav.nearest(x, z);
    const path = nav.findPath(start, goal);
    if (!path) {
      this.hasDest = false;
      return false;
    }
    this.path = path;
    this.pathIdx = 0;
    // Skip the first node if we're already past it
    if (path.length > 1) {
      const n0 = nav.nodes[path[0]];
      const n1 = nav.nodes[path[1]];
      const d0 = Math.hypot(n0.x - this.position.x, n0.z - this.position.z);
      const d01 = Math.hypot(n1.x - n0.x, n1.z - n0.z);
      const d1 = Math.hypot(n1.x - this.position.x, n1.z - this.position.z);
      if (d1 < d01 && d0 < 2) this.pathIdx = 1;
    }
    this.dest.set(x, 0, z);
    this.hasDest = true;
    return true;
  }

  private followPath(speed: number): { moveX: number; moveZ: number; speed: number } {
    if (!this.hasDest || this.pathIdx >= this.path.length) {
      this.hasDest = false;
      if (this.state === 'move') this.state = 'idle';
      return { moveX: 0, moveZ: 0, speed: 0 };
    }
    const nav = this.session.nav;
    const n = nav.nodes[this.path[this.pathIdx]];
    const dx = n.x - this.position.x;
    const dz = n.z - this.position.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.7) {
      this.pathIdx++;
      return this.followPath(speed);
    }
    if (this.state === 'idle') this.state = 'move';
    return { moveX: dx / d, moveZ: dz / d, speed };
  }

  dispose(): void {
    this.soldier.dispose();
  }
}
