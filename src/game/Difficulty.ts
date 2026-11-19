export type Difficulty = 'recruit' | 'regular' | 'veteran';

export interface DifficultyParams {
  label: string;
  /** Seconds a bot needs to see you before it opens fire */
  reaction: number;
  /** Aim error cone (degrees) once settled on a target */
  aimError: number;
  /** Chance a burst is aimed at the head */
  headshotChance: number;
  /** Multiplier on damage bots deal */
  damageScale: number;
  /** Max turn rate in rad/s */
  turnRate: number;
  burst: [number, number];
}

export const DIFFICULTIES: Record<Difficulty, DifficultyParams> = {
  recruit: { label: 'Recruit', reaction: 0.8, aimError: 4.5, headshotChance: 0.04, damageScale: 0.5, turnRate: 4, burst: [2, 4] },
  regular: { label: 'Regular', reaction: 0.5, aimError: 2.8, headshotChance: 0.12, damageScale: 0.8, turnRate: 6, burst: [3, 5] },
  veteran: { label: 'Veteran', reaction: 0.3, aimError: 1.7, headshotChance: 0.22, damageScale: 1.0, turnRate: 9, burst: [3, 7] },
};
