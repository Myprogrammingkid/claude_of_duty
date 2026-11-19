import * as THREE from 'three';
import { Bot, type BotOptions } from '../ai/Bot';
import { Actor } from '../combat/Actor';
import { computeDamage, explosionDamage, type HitZone } from '../combat/Damage';
import type { AudioSystem } from '../core/Audio';
import { EventBus } from '../core/Events';
import { rand } from '../core/math';
import { Effects } from '../effects/Effects';
import type { Mode } from '../modes/Mode';
import { Player } from '../player/Player';
import { GrenadeSystem } from '../weapons/Grenade';
import type { Weapon } from '../weapons/Weapon';
import type { WeaponId } from '../weapons/WeaponDefs';
import { Level } from '../world/Level';
import type { MapDef, SpawnPoint } from '../world/MapTypes';
import { DIFFICULTIES, type Difficulty, type DifficultyParams } from './Difficulty';

export interface GameEvents {
  kill: { killer: Actor | null; victim: Actor; weapon: string; headshot: boolean };
  hit: { attacker: Actor; victim: Actor; damage: number; zone: HitZone | null; killed: boolean };
  message: { text: string; color?: string };
}

export interface Loadout {
  primary: WeaponId;
  secondary: WeaponId;
}

export interface SessionConfig {
  map: MapDef;
  mode: Mode;
  loadout: Loadout;
  difficulty: Difficulty;
}

const tmpA = new THREE.Vector3();
const tmpB = new THREE.Vector3();
const tmpC = new THREE.Vector3();
const tmpRight = new THREE.Vector3();
const tmpUp = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);

/** One running match or mission: owns the scene and everything in it. */
export class Session {
  readonly scene = new THREE.Scene();
  readonly camera: THREE.PerspectiveCamera;
  readonly level: Level;
  readonly effects: Effects;
  readonly grenades: GrenadeSystem;
  readonly events = new EventBus<GameEvents>();
  readonly player: Player;
  readonly bots: Bot[] = [];
  readonly actors: Actor[] = [];
  readonly mode: Mode;
  readonly diff: DifficultyParams;
  readonly difficulty: Difficulty;
  readonly sightRange: number;
  time = 0;
  /** Camera shake added by explosions */
  shake = 0;

  constructor(
    cfg: SessionConfig,
    readonly audio: AudioSystem,
    aspect: number,
  ) {
    this.camera = new THREE.PerspectiveCamera(70, aspect, 0.05, 600);
    this.camera.rotation.order = 'YXZ';
    this.scene.add(this.camera);
    this.level = new Level(cfg.map, this.scene);
    this.effects = new Effects(this.scene, cfg.map.env.sky === 'night');
    this.grenades = new GrenadeSystem(this);
    this.difficulty = cfg.difficulty;
    this.diff = DIFFICULTIES[cfg.difficulty];
    this.sightRange = cfg.map.env.sky === 'night' ? 48 : cfg.map.env.sky === 'dusk' ? 70 : 85;
    this.player = new Player(cfg.loadout, this);
    this.actors.push(this.player);
    this.mode = cfg.mode;
    this.mode.attach(this);
  }

  get world() {
    return this.level.world;
  }

  get nav() {
    return this.level.nav;
  }

  start(): void {
    this.mode.setup();
    this.audio.startAmbience(this.level.def.env.ambience);
  }

  isEnemy(a: Actor, b: Actor): boolean {
    return a !== b && this.mode.isEnemy(a, b);
  }

  update(dt: number): void {
    this.time += dt;
    this.player.update(dt);
    for (const b of this.bots) b.update(dt);
    this.grenades.update(dt);
    this.effects.update(dt);
    this.mode.update(dt);
    this.shake = Math.max(0, this.shake - dt * 2.5);
  }

  // ------------------------------------------------------------------ spawning

  spawnBot(opts: BotOptions): Bot {
    const bot = new Bot(this, opts);
    this.bots.push(bot);
    this.actors.push(bot);
    return bot;
  }

  removeBot(bot: Bot): void {
    bot.dispose();
    this.bots.splice(this.bots.indexOf(bot), 1);
    this.actors.splice(this.actors.indexOf(bot), 1);
  }

  /** Picks the spawn point from the list furthest from visible enemies. */
  pickSpawn(points: SpawnPoint[], forActor: Actor | null): THREE.Vector3 {
    let best = points[0];
    let bestScore = -Infinity;
    for (const p of points) {
      let minDist = 200;
      let seen = false;
      tmpA.set(p[0], 1.6, p[1]);
      for (const a of this.actors) {
        if (!a.alive || a === forActor || (forActor && !this.isEnemy(a, forActor))) continue;
        const d = Math.hypot(a.position.x - p[0], a.position.z - p[1]);
        minDist = Math.min(minDist, d);
        if (d < 50 && this.world.lineClear(tmpA, a.eyePosition(tmpB))) seen = true;
      }
      const score = minDist - (seen ? 60 : 0) + rand(0, 8);
      if (score > bestScore) {
        bestScore = score;
        best = p;
      }
    }
    return new THREE.Vector3(best[0] + rand(-0.8, 0.8), 0.05, best[1] + rand(-0.8, 0.8));
  }

  /** Yaw that faces the map centre from a position. */
  yawTowardCenter(pos: THREE.Vector3): number {
    return Math.atan2(pos.x, pos.z);
  }

  // ------------------------------------------------------------------ combat

  /**
   * Fires one trigger pull: handles pellets, spread, hits, damage, effects,
   * audio and alerts nearby bots.
   */
  fire(shooter: Actor, origin: THREE.Vector3, aim: THREE.Vector3, weapon: Weapon, spread: number, muzzle: THREE.Vector3 | null): void {
    const def = weapon.def;
    shooter.stats.shots++;
    this.audio.shot(def.kind, shooter.isPlayer ? undefined : shooter.position);
    if (muzzle && !shooter.isPlayer) {
      this.effects.muzzleSprite(muzzle);
      this.effects.muzzleLight(muzzle, 4);
    } else if (shooter.isPlayer) {
      this.effects.muzzleLight(tmpC.copy(origin).addScaledVector(aim, 1), 5);
    }
    tmpRight.crossVectors(aim, UP);
    if (tmpRight.lengthSq() < 1e-6) tmpRight.set(1, 0, 0);
    tmpRight.normalize();
    tmpUp.crossVectors(tmpRight, aim).normalize();

    let anyHit = false;
    for (let i = 0; i < def.pellets; i++) {
      // Uniform sample inside the spread cone
      const r = Math.tan(spread * Math.sqrt(Math.random()));
      const th = Math.random() * Math.PI * 2;
      const dir = tmpA
        .copy(aim)
        .addScaledVector(tmpRight, Math.cos(th) * r)
        .addScaledVector(tmpUp, Math.sin(th) * r)
        .normalize()
        .clone();
      const hit = this.trace(origin, dir, def.range, shooter);
      const end = tmpB.copy(origin).addScaledVector(dir, hit.dist);
      if (muzzle && (i === 0 || def.pellets > 1) && (!shooter.isPlayer || Math.random() < 0.35)) {
        this.effects.tracer(muzzle, end);
      }
      if (hit.actor) {
        const dmg = computeDamage(def, hit.dist, hit.zone!) * shooter.damageScale;
        this.effects.blood(end, dir);
        this.audio.impact(end, true);
        if (this.isEnemy(shooter, hit.actor)) {
          if (!anyHit) shooter.stats.hits++;
          anyHit = true;
          this.dealDamage(hit.actor, dmg, shooter, def.name, hit.zone!, origin);
        }
      } else if (hit.dist < def.range) {
        this.effects.bulletImpact(end, hit.normal);
        if (i === 0) this.audio.impact(end, false);
      }
      // Near-miss whiz for the player
      if (!shooter.isPlayer && this.player.alive && hit.actor !== this.player) {
        const eye = this.player.eyePosition(tmpC);
        const t = tmpRight.copy(eye).sub(origin).dot(dir);
        if (t > 2 && t < hit.dist) {
          const closest = origin.clone().addScaledVector(dir, t);
          if (closest.distanceTo(eye) < 1.6) this.audio.whiz(closest);
        }
        // restore basis for next pellet
        tmpRight.crossVectors(aim, UP).normalize();
      }
    }
    // Gunfire alerts bots that can hear it
    for (const b of this.bots) {
      if (b !== shooter && b.alive) b.hearShot(shooter, origin);
    }
  }

  /** Nearest thing along a ray: either a world box or an actor. */
  trace(
    origin: THREE.Vector3,
    dir: THREE.Vector3,
    maxDist: number,
    ignore: Actor | null,
  ): { dist: number; normal: THREE.Vector3; actor: Actor | null; zone: HitZone | null } {
    const wh = this.world.raycast(origin.x, origin.y, origin.z, dir.x, dir.y, dir.z, maxDist);
    let dist = wh ? wh.dist : maxDist;
    const normal = wh ? new THREE.Vector3(wh.nx, wh.ny, wh.nz) : new THREE.Vector3(0, 1, 0);
    let actor: Actor | null = null;
    let zone: HitZone | null = null;
    for (const a of this.actors) {
      if (a === ignore || !a.alive) continue;
      const h = a.rayHit(origin, dir, dist);
      if (h && h.t < dist) {
        dist = h.t;
        actor = a;
        zone = h.zone;
      }
    }
    return { dist, normal, actor, zone };
  }

  dealDamage(victim: Actor, amount: number, attacker: Actor | null, weapon: string, zone: HitZone | null, from: THREE.Vector3 | null): void {
    if (!victim.alive || victim.spawnProtection > 0 || amount <= 0) return;
    victim.health -= amount;
    victim.lastDamageTime = this.time;
    victim.onDamaged(amount, from, attacker, zone);
    const killed = victim.health <= 0;
    if (attacker) this.events.emit('hit', { attacker, victim, damage: amount, zone, killed });
    if (killed) this.kill(victim, attacker, weapon, zone === 'head', from);
  }

  private kill(victim: Actor, killer: Actor | null, weapon: string, headshot: boolean, from: THREE.Vector3 | null): void {
    victim.health = 0;
    victim.alive = false;
    victim.stats.deaths++;
    if (killer && killer !== victim) {
      killer.stats.kills++;
      killer.stats.score += 100 + (headshot ? 50 : 0);
      if (headshot) killer.stats.headshots++;
    }
    const dir = from ? tmpA.copy(victim.position).sub(from).setY(0).normalize() : tmpA.set(0, 0, 1);
    victim.onKilled(dir);
    this.events.emit('kill', { killer, victim, weapon, headshot });
    this.mode.onKill(victim, killer);
  }

  explode(pos: THREE.Vector3, thrower: Actor | null): void {
    this.effects.explosion(pos);
    this.audio.explosion(pos);
    const radius = 7.5;
    const center = tmpC.copy(pos).setY(pos.y + 0.3);
    for (const a of [...this.actors]) {
      if (!a.alive) continue;
      const chest = a.chestPosition(new THREE.Vector3());
      const d = chest.distanceTo(center);
      if (d > radius) continue;
      if (!this.world.lineClear(center, chest) && !this.world.lineClear(center, a.eyePosition(new THREE.Vector3()))) continue;
      // Friendly fire off except for self-damage
      if (thrower && a !== thrower && !this.isEnemy(thrower, a)) continue;
      const dmg = explosionDamage(d, radius, 160) * (thrower ? thrower.damageScale : 1);
      this.dealDamage(a, dmg, thrower, 'Frag', null, pos);
    }
    const pd = this.player.position.distanceTo(pos);
    if (pd < 25) this.shake = Math.min(1.5, this.shake + (1 - pd / 25) * 1.5);
    for (const b of this.bots) if (thrower && b.alive) b.hearShot(thrower, pos);
  }

  melee(attacker: Actor, origin: THREE.Vector3, dir: THREE.Vector3): boolean {
    let best: Actor | null = null;
    let bestD = 2.1;
    for (const a of this.actors) {
      if (!a.alive || !this.isEnemy(attacker, a)) continue;
      const c = a.chestPosition(tmpA);
      const to = tmpB.copy(c).sub(origin);
      const d = to.length();
      if (d > bestD) continue;
      if (to.normalize().dot(dir) < 0.55) continue;
      if (!this.world.lineClear(origin, c)) continue;
      best = a;
      bestD = d;
    }
    if (!best) return false;
    // Hits from behind are lethal
    const fwd = best.forward(tmpA).setY(0).normalize();
    const behind = fwd.dot(tmpB.copy(dir).setY(0).normalize()) > 0.5;
    this.dealDamage(best, behind ? 150 : 70, attacker, 'Melee', 'torso', origin);
    this.effects.blood(best.chestPosition(tmpC), dir);
    return true;
  }

  enemiesOf(a: Actor): Actor[] {
    return this.actors.filter((o) => o.alive && this.isEnemy(a, o));
  }

  message(text: string, color?: string): void {
    this.events.emit('message', { text, color });
  }

  dispose(): void {
    this.audio.stopAmbience();
    for (const b of [...this.bots]) b.dispose();
    this.bots.length = 0;
    this.grenades.dispose();
    this.effects.dispose();
    this.level.dispose();
    this.events.clear();
  }
}
