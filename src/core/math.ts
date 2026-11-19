export const DEG = Math.PI / 180;

export const clamp = (v: number, min: number, max: number): number => (v < min ? min : v > max ? max : v);

export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;

/** Frame-rate independent exponential smoothing toward a target. */
export const damp = (current: number, target: number, lambda: number, dt: number): number =>
  lerp(current, target, 1 - Math.exp(-lambda * dt));

export const rand = (min: number, max: number): number => min + Math.random() * (max - min);

export const randInt = (min: number, max: number): number => Math.floor(rand(min, max + 1));

export const pick = <T>(arr: readonly T[]): T => arr[Math.floor(Math.random() * arr.length)];

/** Signed shortest difference b - a, wrapped to [-PI, PI]. */
export function angleDiff(a: number, b: number): number {
  let d = (b - a) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return d;
}

/** Deterministic PRNG so map scatter is identical every load. */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Converts a horizontal FOV (degrees) to the vertical FOV three.js expects. */
export function hfovToVfov(hfovDeg: number, aspect: number): number {
  return (2 * Math.atan(Math.tan((hfovDeg * DEG) / 2) / aspect)) / DEG;
}

/** Narrows a vertical FOV by a magnification factor. */
export function zoomFov(vfovDeg: number, zoom: number): number {
  return (2 * Math.atan(Math.tan((vfovDeg * DEG) / 2) / zoom)) / DEG;
}
