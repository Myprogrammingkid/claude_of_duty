import * as THREE from 'three';
import type { Bot } from '../ai/Bot';
import { COALITION, RANGERS } from '../characters/Soldier';
import type { Actor } from '../combat/Actor';
import { BODY_HALF_WIDTH, STAND_HEIGHT } from '../combat/Actor';
import { emptyHud, formatTime, Mode, rowOf, type ModeHud, type ScoreTeam } from './Mode';
import type { EnemyGroup, MissionDef, Objective } from './Missions';
import { botWeapon, COALITION_NAMES, RANGER_NAMES } from './Names';

/** Scripted single-player mission: a sequence of objectives. */
export class Campaign extends Mode {
  readonly title: string;
  private index = 0;
  private objTime = 0;
  private interactProgress = 0;
  private wavesSpawned = new Set<number>();
  private failTimer = -1;
  private elapsed = 0;
  private nameIdx = 0;
  private readonly groupHomes = new Map<string, THREE.Vector3[]>();

  constructor(readonly mission: MissionDef) {
    super();
    this.title = mission.title;
  }

  get objective(): Objective | null {
    return this.mission.objectives[this.index] ?? null;
  }

  get objectiveIndex(): number {
    return this.index;
  }

  setup(): void {
    const s = this.session;
    const m = this.mission;
    const start = new THREE.Vector3(m.playerStart[0], 0.05, m.playerStart[1]);
    const first = this.objectivePosition(m.objectives[0]) ?? new THREE.Vector3();
    const yaw = Math.atan2(-(first.x - start.x), -(first.z - start.z));
    s.player.spawn(start, yaw);
    s.player.spawnProtection = 0;
    m.allies.forEach(([x, z], i) => {
      const bot = s.spawnBot({
        name: RANGER_NAMES[i % RANGER_NAMES.length],
        team: 0,
        weapon: i % 2 ? 'harrow' : 'kestrel',
        behavior: 'follow',
        position: this.safePos(x, z),
        yaw,
        style: RANGERS,
        nameTag: '#8ec5ff',
        damageScale: 0.6,
      });
      bot.maxHealth = bot.health = 180;
    });
    for (const g of m.groups) this.spawnGroup(g);
    this.beginObjective();
  }

  private safePos(x: number, z: number): THREE.Vector3 {
    const s = this.session;
    if (!s.world.bodyOverlaps(x, 0.05, z, BODY_HALF_WIDTH, STAND_HEIGHT)) return new THREE.Vector3(x, 0.05, z);
    const n = s.nav.nodes[s.nav.nearest(x, z)];
    return new THREE.Vector3(n.x, 0.05, n.z);
  }

  private spawnGroup(g: EnemyGroup): void {
    const s = this.session;
    const homes: THREE.Vector3[] = [];
    for (const [x, z] of g.points) {
      const pos = this.safePos(x, z);
      homes.push(pos.clone());
      const toPlayer = s.player.position.clone().sub(pos);
      s.spawnBot({
        name: COALITION_NAMES[this.nameIdx++ % COALITION_NAMES.length],
        team: 1,
        weapon: g.weapons ? g.weapons[homes.length % g.weapons.length] : botWeapon(),
        behavior: g.behavior,
        position: pos,
        yaw: g.behavior === 'guard' ? Math.atan2(-toPlayer.x, -toPlayer.z) + (Math.random() - 0.5) * 1.5 : Math.random() * Math.PI * 2,
        style: COALITION,
        group: g.id,
        radius: g.radius,
        damageScale: s.diff.damageScale,
      });
    }
    this.groupHomes.set(g.id, [...(this.groupHomes.get(g.id) ?? []), ...homes]);
  }

  private beginObjective(): void {
    const o = this.objective;
    this.objTime = 0;
    this.interactProgress = 0;
    this.wavesSpawned.clear();
    if (!o) return;
    for (const g of o.spawn ?? []) this.spawnGroup(g);
    this.session.message(`New objective: ${o.text}`, '#ffd77a');
    this.session.audio.beep(660);
  }

  private complete(): void {
    this.session.audio.beep(990, 0.2);
    this.session.message('Objective complete', '#8ef58e');
    this.index++;
    if (this.index >= this.mission.objectives.length) {
      this.result = { victory: true, title: 'MISSION COMPLETE', subtitle: this.mission.outro };
      return;
    }
    this.beginObjective();
  }

  private groupAlive(ids: string[]): Bot[] {
    return this.session.bots.filter((b) => b.alive && b.group !== undefined && ids.includes(b.group));
  }

  private inZone(zoneId: string, a: Actor): boolean {
    const z = this.session.level.def.zones[zoneId];
    return !!z && Math.hypot(a.position.x - z.x, a.position.z - z.z) <= z.r;
  }

  private objectivePosition(o: Objective | null): THREE.Vector3 | null {
    if (!o) return null;
    const zones = this.session.level.def.zones;
    if (o.type === 'eliminate') {
      const alive = this.session ? this.groupAlive(o.groups) : [];
      const p = this.session.player.position;
      if (alive.length && alive.length <= 3) {
        // Last few stragglers: point at the closest one
        const near = alive.reduce((a, b) => (a.position.distanceTo(p) < b.position.distanceTo(p) ? a : b));
        return near.position.clone().setY(1.2);
      }
      const homes = o.groups.flatMap((g) => this.groupHomes.get(g) ?? []);
      if (!homes.length) return null;
      const c = new THREE.Vector3();
      homes.forEach((h) => c.add(h));
      return c.divideScalar(homes.length).setY(1.2);
    }
    const z = zones[o.zone];
    return z ? new THREE.Vector3(z.x, 1.2, z.z) : null;
  }

  update(dt: number): void {
    const s = this.session;
    if (this.result) return;
    this.elapsed += dt;
    this.objTime += dt;
    if (!s.player.alive) {
      if (this.failTimer < 0) this.failTimer = 0;
      this.failTimer += dt;
      if (this.failTimer > 2.2) {
        this.result = { victory: false, title: 'MISSION FAILED', subtitle: 'You were killed in action.' };
      }
      return;
    }
    // Dead bodies stay a while, then get cleaned up to keep the scene light
    for (const b of [...s.bots]) if (!b.alive && b.deadFor > 20) s.removeBot(b);

    const o = this.objective;
    if (!o) return;
    switch (o.type) {
      case 'reach':
        if (this.inZone(o.zone, s.player)) this.complete();
        break;
      case 'eliminate':
        if (this.groupAlive(o.groups).length === 0) this.complete();
        break;
      case 'interact':
        if (this.inZone(o.zone, s.player) && s.player.interactHeld) {
          this.interactProgress += dt;
          if (this.interactProgress >= o.seconds) this.complete();
        }
        break;
      case 'defend':
        o.waves.forEach((w, i) => {
          if (!this.wavesSpawned.has(i) && this.objTime >= w.at) {
            this.wavesSpawned.add(i);
            this.spawnGroup(w.group);
            s.message('Enemy reinforcements incoming!', '#ff8a7a');
          }
        });
        if (this.objTime >= o.seconds) this.complete();
        break;
    }
  }

  override onKill(_victim: Actor, killer: Actor | null): void {
    if (killer?.isPlayer) this.session.player.scavenge();
  }

  hud(): ModeHud {
    const h = emptyHud();
    const o = this.objective;
    h.timer = formatTime(this.elapsed);
    if (!o) return h;
    h.objective = o.text;
    const pos = this.objectivePosition(o);
    if (pos) h.marker = { pos, label: o.type === 'defend' ? 'DEFEND' : o.type === 'eliminate' ? 'TARGETS' : o.type === 'interact' ? 'INTERACT' : 'GOTO' };
    if (o.type === 'eliminate') h.objectiveDetail = `${this.groupAlive(o.groups).length} hostiles remaining`;
    if (o.type === 'interact') {
      if (this.inZone(o.zone, this.session.player)) h.prompt = o.prompt;
      if (this.interactProgress > 0) h.progress = { label: o.text, value: this.interactProgress / o.seconds };
    }
    if (o.type === 'defend') {
      h.progress = { label: 'Time remaining', value: this.objTime / o.seconds };
      h.objectiveDetail = `${formatTime(o.seconds - this.objTime)} remaining`;
    }
    return h;
  }

  scoreboard(): ScoreTeam[] {
    const s = this.session;
    return [
      { name: 'Ashgrove Rangers', color: '#5aa2ff', score: null, rows: s.actors.filter((a) => a.team === 0).map(rowOf) },
      {
        name: 'Hostiles remaining',
        color: '#ff5a4a',
        score: s.bots.filter((b) => b.team === 1 && b.alive).length,
        rows: [],
      },
    ];
  }

  stepsTotal(): number {
    return this.mission.objectives.length;
  }
}
