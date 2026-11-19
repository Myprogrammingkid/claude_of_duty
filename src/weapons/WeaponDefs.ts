import type { ShotKind } from '../core/Audio';

export type FireMode = 'auto' | 'semi';
export type WeaponId = 'kestrel' | 'harrow' | 'longreach' | 'brute' | 'p9';

export interface WeaponDef {
  id: WeaponId;
  name: string;
  kind: ShotKind;
  slot: 'primary' | 'secondary';
  description: string;
  fireModes: FireMode[];
  /** Rounds per minute */
  rpm: number;
  damage: number;
  minDamage: number;
  falloffStart: number;
  falloffEnd: number;
  headMult: number;
  pellets: number;
  magSize: number;
  reserve: number;
  reloadTime: number;
  reloadEmptyTime: number;
  /** Shotgun-style: reload loads one round per reloadTime. */
  reloadPerRound?: boolean;
  /** Bolt/pump action: plays a cycling sound and lowers the weapon between shots. */
  cycleAction?: 'bolt' | 'pump';
  /** Degrees of vertical kick per shot. */
  recoilUp: number;
  /** Max degrees of random horizontal kick per shot. */
  recoilSide: number;
  /** Fraction of accumulated recoil that recovers after firing stops. */
  recoilRecover: number;
  /** Degrees of cone half-angle. */
  hipSpread: number;
  adsSpread: number;
  bloomPerShot: number;
  maxBloom: number;
  adsZoom: number;
  /** Seconds to fully aim down sights. */
  adsTime: number;
  moveSpeedMult: number;
  range: number;
  scope?: boolean;
  /** 0..1 ratings for the loadout screen */
  stats: { damage: number; rate: number; range: number; control: number; mobility: number };
}

export const WEAPONS: Record<WeaponId, WeaponDef> = {
  kestrel: {
    id: 'kestrel',
    name: 'AR-7 Kestrel',
    kind: 'rifle',
    slot: 'primary',
    description: 'Gas-operated assault rifle. Works at every range and is easy to control.',
    fireModes: ['auto', 'semi'],
    rpm: 720,
    damage: 30,
    minDamage: 21,
    falloffStart: 28,
    falloffEnd: 60,
    headMult: 1.8,
    pellets: 1,
    magSize: 30,
    reserve: 150,
    reloadTime: 2.1,
    reloadEmptyTime: 2.7,
    recoilUp: 0.62,
    recoilSide: 0.3,
    recoilRecover: 0.55,
    hipSpread: 2.6,
    adsSpread: 0.12,
    bloomPerShot: 0.18,
    maxBloom: 2.2,
    adsZoom: 1.4,
    adsTime: 0.22,
    moveSpeedMult: 0.95,
    range: 250,
    stats: { damage: 0.6, rate: 0.7, range: 0.7, control: 0.65, mobility: 0.6 },
  },
  harrow: {
    id: 'harrow',
    name: 'Harrow SMG',
    kind: 'smg',
    slot: 'primary',
    description: 'Compact submachine gun. Fires fast and moves fast, but loses damage quickly at range.',
    fireModes: ['auto', 'semi'],
    rpm: 900,
    damage: 26,
    minDamage: 14,
    falloffStart: 12,
    falloffEnd: 32,
    headMult: 1.5,
    pellets: 1,
    magSize: 32,
    reserve: 192,
    reloadTime: 1.8,
    reloadEmptyTime: 2.3,
    recoilUp: 0.45,
    recoilSide: 0.38,
    recoilRecover: 0.6,
    hipSpread: 2.0,
    adsSpread: 0.35,
    bloomPerShot: 0.12,
    maxBloom: 1.8,
    adsZoom: 1.25,
    adsTime: 0.15,
    moveSpeedMult: 1.05,
    range: 150,
    stats: { damage: 0.45, rate: 0.95, range: 0.35, control: 0.7, mobility: 0.9 },
  },
  longreach: {
    id: 'longreach',
    name: 'Longreach .338',
    kind: 'sniper',
    slot: 'primary',
    description: 'Bolt-action precision rifle. A hit to the upper body or head kills. Hold Shift while scoped to steady your aim.',
    fireModes: ['semi'],
    rpm: 48,
    damage: 105,
    minDamage: 90,
    falloffStart: 80,
    falloffEnd: 200,
    headMult: 2,
    pellets: 1,
    magSize: 5,
    reserve: 30,
    reloadTime: 2.9,
    reloadEmptyTime: 3.5,
    cycleAction: 'bolt',
    recoilUp: 3.8,
    recoilSide: 0.8,
    recoilRecover: 0.85,
    hipSpread: 7,
    adsSpread: 0,
    bloomPerShot: 0,
    maxBloom: 0,
    adsZoom: 4.5,
    adsTime: 0.36,
    moveSpeedMult: 0.86,
    range: 400,
    scope: true,
    stats: { damage: 1, rate: 0.1, range: 1, control: 0.3, mobility: 0.3 },
  },
  brute: {
    id: 'brute',
    name: 'Brute-12',
    kind: 'shotgun',
    slot: 'primary',
    description: 'Pump-action shotgun. Kills in one shot up close. Loads one shell at a time.',
    fireModes: ['semi'],
    rpm: 75,
    damage: 17,
    minDamage: 4,
    falloffStart: 7,
    falloffEnd: 22,
    headMult: 1.3,
    pellets: 9,
    magSize: 7,
    reserve: 35,
    reloadTime: 0.55,
    reloadEmptyTime: 0.55,
    reloadPerRound: true,
    cycleAction: 'pump',
    recoilUp: 4.2,
    recoilSide: 1.2,
    recoilRecover: 0.8,
    hipSpread: 4.2,
    adsSpread: 3.0,
    bloomPerShot: 0,
    maxBloom: 0,
    adsZoom: 1.15,
    adsTime: 0.2,
    moveSpeedMult: 0.97,
    range: 60,
    stats: { damage: 0.95, rate: 0.2, range: 0.15, control: 0.4, mobility: 0.75 },
  },
  p9: {
    id: 'p9',
    name: 'P9 Sentinel',
    kind: 'pistol',
    slot: 'secondary',
    description: 'Semi-automatic sidearm. Fast to draw, and handy when your primary runs dry.',
    fireModes: ['semi'],
    rpm: 450,
    damage: 28,
    minDamage: 17,
    falloffStart: 14,
    falloffEnd: 34,
    headMult: 1.8,
    pellets: 1,
    magSize: 15,
    reserve: 75,
    reloadTime: 1.4,
    reloadEmptyTime: 1.8,
    recoilUp: 1.1,
    recoilSide: 0.4,
    recoilRecover: 0.75,
    hipSpread: 1.8,
    adsSpread: 0.4,
    bloomPerShot: 0.45,
    maxBloom: 2.0,
    adsZoom: 1.2,
    adsTime: 0.12,
    moveSpeedMult: 1.08,
    range: 120,
    stats: { damage: 0.45, rate: 0.5, range: 0.4, control: 0.6, mobility: 1 },
  },
};

export const PRIMARIES: WeaponId[] = ['kestrel', 'harrow', 'longreach', 'brute'];
export const SECONDARIES: WeaponId[] = ['p9'];
