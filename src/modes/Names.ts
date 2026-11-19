import type { WeaponId } from '../weapons/WeaponDefs';

export const RANGER_NAMES = ['Hale', 'Okafor', 'Brandt', 'Reyes', 'Lindqvist', 'Tanaka', 'Mercer', 'Duval', 'Ashby', 'Novak', 'Quill', 'Sato'];
export const COALITION_NAMES = ['Vesko', 'Marek', 'Dagan', 'Ilyan', 'Corvo', 'Barsk', 'Teodor', 'Ruslan', 'Kade', 'Zorin', 'Petrak', 'Volen'];

/** Weighted random primary weapon for a bot. */
export function botWeapon(): WeaponId {
  const r = Math.random();
  if (r < 0.45) return 'kestrel';
  if (r < 0.75) return 'harrow';
  if (r < 0.88) return 'longreach';
  return 'brute';
}
