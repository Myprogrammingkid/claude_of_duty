import type { WeaponDef } from '../weapons/WeaponDefs';
import { clamp } from '../core/math';

export type HitZone = 'head' | 'torso' | 'limb';

export const LIMB_MULT = 0.8;

/** Base damage after linear range falloff. */
export function damageAtRange(def: WeaponDef, dist: number): number {
  if (dist <= def.falloffStart) return def.damage;
  if (dist >= def.falloffEnd) return def.minDamage;
  const t = (dist - def.falloffStart) / (def.falloffEnd - def.falloffStart);
  return def.damage + (def.minDamage - def.damage) * t;
}

export function zoneMultiplier(def: WeaponDef, zone: HitZone): number {
  if (zone === 'head') return def.headMult;
  if (zone === 'limb') return LIMB_MULT;
  return 1;
}

export function computeDamage(def: WeaponDef, dist: number, zone: HitZone): number {
  return Math.round(damageAtRange(def, dist) * zoneMultiplier(def, zone));
}

/** Frag damage: full at the centre, easing to zero at the radius. */
export function explosionDamage(dist: number, radius: number, max: number): number {
  const t = clamp(1 - dist / radius, 0, 1);
  return Math.round(max * Math.pow(t, 1.4));
}
