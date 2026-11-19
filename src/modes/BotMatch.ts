import type { Bot } from '../ai/Bot';
import { COALITION, RANGERS } from '../characters/Soldier';
import type { Actor } from '../combat/Actor';
import { emptyHud, formatTime, Mode, rowOf, type ModeHud, type ScoreTeam } from './Mode';
import { botWeapon, COALITION_NAMES, RANGER_NAMES } from './Names';

export interface BotMatchConfig {
  variant: 'tdm' | 'ffa';
  /** TDM: players per team including you. FFA: total bots. */
  size: number;
  scoreLimit: number;
  timeLimit: number;
}

const RESPAWN_DELAY = 4;

/** Offline multiplayer against bots: Team Deathmatch or Free-for-All. */
export class BotMatch extends Mode {
  readonly title: string;
  private timeLeft: number;
  private scores = [0, 0];
  private playerDeadTime = 0;
  private ended = false;

  constructor(readonly cfg: BotMatchConfig) {
    super();
    this.title = cfg.variant === 'tdm' ? 'Team Deathmatch' : 'Free-for-All';
    this.timeLeft = cfg.timeLimit;
  }

  setup(): void {
    const s = this.session;
    const spawns = s.level.def.spawns;
    const p = s.player;
    const pos = s.pickSpawn(this.cfg.variant === 'tdm' ? spawns.a : spawns.ffa, p);
    p.spawn(pos, s.yawTowardCenter(pos));
    p.damageScale = 1;
    const scale = s.diff.damageScale;
    if (this.cfg.variant === 'tdm') {
      for (let i = 0; i < this.cfg.size - 1; i++) {
        const bp = s.pickSpawn(spawns.a, null);
        s.spawnBot({
          name: RANGER_NAMES[i % RANGER_NAMES.length],
          team: 0,
          weapon: botWeapon(),
          behavior: 'roam',
          position: bp,
          yaw: s.yawTowardCenter(bp),
          style: RANGERS,
          nameTag: '#8ec5ff',
          damageScale: scale,
        });
      }
      for (let i = 0; i < this.cfg.size; i++) {
        const bp = s.pickSpawn(spawns.b, null);
        s.spawnBot({
          name: COALITION_NAMES[i % COALITION_NAMES.length],
          team: 1,
          weapon: botWeapon(),
          behavior: 'roam',
          position: bp,
          yaw: s.yawTowardCenter(bp),
          style: COALITION,
          damageScale: scale,
        });
      }
    } else {
      const names = [...RANGER_NAMES, ...COALITION_NAMES].sort(() => Math.random() - 0.5);
      for (let i = 0; i < this.cfg.size; i++) {
        const bp = s.pickSpawn(spawns.ffa, null);
        s.spawnBot({
          name: names[i % names.length],
          team: i + 1,
          weapon: botWeapon(),
          behavior: 'roam',
          position: bp,
          yaw: s.yawTowardCenter(bp),
          style: COALITION,
          damageScale: scale,
        });
      }
    }
  }

  update(dt: number): void {
    const s = this.session;
    if (this.ended) return;
    this.timeLeft -= dt;
    const spawns = s.level.def.spawns;
    // Respawns
    for (const b of s.bots) {
      if (!b.alive && b.deadFor > RESPAWN_DELAY) this.respawnBot(b);
    }
    const p = s.player;
    if (!p.alive) {
      this.playerDeadTime += dt;
      if (this.playerDeadTime > RESPAWN_DELAY) {
        const pos = s.pickSpawn(this.cfg.variant === 'tdm' ? spawns.a : spawns.ffa, p);
        p.spawn(pos, s.yawTowardCenter(pos));
        this.playerDeadTime = 0;
      }
    }
    if (this.timeLeft <= 0) this.finish();
  }

  private respawnBot(b: Bot): void {
    const s = this.session;
    const spawns = s.level.def.spawns;
    const list = this.cfg.variant === 'ffa' ? spawns.ffa : b.team === 0 ? spawns.a : spawns.b;
    const pos = s.pickSpawn(list, b);
    b.respawn(pos, s.yawTowardCenter(pos));
  }

  override onKill(victim: Actor, killer: Actor | null): void {
    if (this.ended) return;
    const s = this.session;
    if (killer && killer !== victim) {
      if (this.cfg.variant === 'tdm') this.scores[killer.team]++;
      if (killer.isPlayer) s.player.scavenge();
    } else if (this.cfg.variant === 'tdm' && victim.team <= 1) {
      // Suicide costs a point
      this.scores[victim.team] = Math.max(0, this.scores[victim.team] - 1);
    }
    if (this.cfg.variant === 'tdm') {
      if (this.scores[0] >= this.cfg.scoreLimit || this.scores[1] >= this.cfg.scoreLimit) this.finish();
    } else if (killer && killer.stats.kills >= this.cfg.scoreLimit) {
      this.finish();
    }
  }

  private finish(): void {
    if (this.ended) return;
    this.ended = true;
    const s = this.session;
    if (this.cfg.variant === 'tdm') {
      const [a, b] = this.scores;
      const win = a > b;
      this.result = {
        victory: win,
        title: a === b ? 'DRAW' : win ? 'VICTORY' : 'DEFEAT',
        subtitle: `Rangers ${a} - ${b} Coalition`,
      };
    } else {
      const ranked = [...s.actors].sort((x, y) => y.stats.kills - x.stats.kills);
      const place = ranked.indexOf(s.player) + 1;
      this.result = {
        victory: place === 1,
        title: place === 1 ? 'VICTORY' : `${ordinal(place)} PLACE`,
        subtitle: `Winner: ${ranked[0].name} (${ranked[0].stats.kills} kills)`,
      };
    }
  }

  hud(): ModeHud {
    const h = emptyHud();
    h.timer = formatTime(this.timeLeft);
    const s = this.session;
    if (this.cfg.variant === 'tdm') {
      h.score = { a: this.scores[0], b: this.scores[1], labelA: 'RANGERS', labelB: 'COALITION', limit: this.cfg.scoreLimit };
      h.objective = `Team Deathmatch: first team to ${this.cfg.scoreLimit} kills wins`;
    } else {
      const ranked = [...s.actors].sort((x, y) => y.stats.kills - x.stats.kills);
      const leader = ranked[0];
      const best = leader === s.player ? ranked[1] : leader;
      h.score = { a: s.player.stats.kills, b: best?.stats.kills ?? 0, labelA: 'YOU', labelB: best?.name.toUpperCase() ?? '-', limit: this.cfg.scoreLimit };
      h.objective = `Free-for-All: first to ${this.cfg.scoreLimit} kills wins`;
    }
    if (!s.player.alive) h.respawnIn = Math.max(0, RESPAWN_DELAY - this.playerDeadTime);
    return h;
  }

  scoreboard(): ScoreTeam[] {
    const s = this.session;
    const sortRows = (actors: Actor[]) => actors.map(rowOf).sort((a, b) => b.score - a.score || b.kills - a.kills);
    if (this.cfg.variant === 'tdm') {
      return [
        { name: 'Ashgrove Rangers', color: '#5aa2ff', score: this.scores[0], rows: sortRows(s.actors.filter((a) => a.team === 0)) },
        { name: 'Veldt Coalition', color: '#ff5a4a', score: this.scores[1], rows: sortRows(s.actors.filter((a) => a.team === 1)) },
      ];
    }
    return [{ name: 'Free-for-All', color: '#e8c860', score: null, rows: sortRows(s.actors) }];
  }
}

function ordinal(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
