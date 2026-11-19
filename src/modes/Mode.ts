import type * as THREE from 'three';
import type { Actor } from '../combat/Actor';
import type { Session } from '../game/Session';

export interface ModeHud {
  objective: string | null;
  objectiveDetail: string | null;
  marker: { pos: THREE.Vector3; label: string } | null;
  score: { a: number; b: number; labelA: string; labelB: string; limit: number } | null;
  timer: string | null;
  progress: { label: string; value: number } | null;
  prompt: string | null;
  respawnIn: number | null;
}

export interface ModeResult {
  victory: boolean;
  title: string;
  subtitle: string;
}

export interface ScoreRow {
  name: string;
  kills: number;
  deaths: number;
  score: number;
  isPlayer: boolean;
  alive: boolean;
}

export interface ScoreTeam {
  name: string;
  color: string;
  score: number | null;
  rows: ScoreRow[];
}

export abstract class Mode {
  protected session!: Session;
  result: ModeResult | null = null;
  abstract readonly title: string;

  attach(session: Session): void {
    this.session = session;
  }

  abstract setup(): void;
  abstract update(dt: number): void;
  abstract hud(): ModeHud;
  abstract scoreboard(): ScoreTeam[];

  onKill(_victim: Actor, _killer: Actor | null): void {}

  isEnemy(a: Actor, b: Actor): boolean {
    return a.team !== b.team;
  }
}

export function emptyHud(): ModeHud {
  return {
    objective: null,
    objectiveDetail: null,
    marker: null,
    score: null,
    timer: null,
    progress: null,
    prompt: null,
    respawnIn: null,
  };
}

export function formatTime(seconds: number): string {
  const s = Math.max(0, Math.ceil(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

export function rowOf(a: Actor): ScoreRow {
  return { name: a.name, kills: a.stats.kills, deaths: a.stats.deaths, score: a.stats.score, isPlayer: a.isPlayer, alive: a.alive };
}
