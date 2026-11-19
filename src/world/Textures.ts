import * as THREE from 'three';
import { mulberry32 } from '../core/math';
import type { MatId } from './MapTypes';

type Painter = (ctx: CanvasRenderingContext2D, size: number, rnd: () => number) => void;

function canvasTexture(size: number, seed: number, paint: Painter): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d')!;
  paint(ctx, size, mulberry32(seed));
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

function noise(ctx: CanvasRenderingContext2D, size: number, rnd: () => number, base: string, amount: number, count = 9000): void {
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < count; i++) {
    const v = Math.floor((rnd() - 0.5) * amount);
    ctx.fillStyle = v > 0 ? `rgba(255,255,255,${v / 255})` : `rgba(0,0,0,${-v / 255})`;
    const s = 1 + rnd() * 3;
    ctx.fillRect(rnd() * size, rnd() * size, s, s);
  }
}

function blotches(ctx: CanvasRenderingContext2D, size: number, rnd: () => number, color: string, n: number, maxR: number): void {
  for (let i = 0; i < n; i++) {
    const x = rnd() * size;
    const y = rnd() * size;
    const r = maxR * (0.3 + rnd());
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, color);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
}

const painters: Partial<Record<MatId, [number, Painter]>> = {
  sand: [
    11,
    (c, s, r) => {
      noise(c, s, r, '#c8ad80', 40, 16000);
      blotches(c, s, r, 'rgba(120,90,50,0.15)', 30, 60);
    },
  ],
  dirt: [
    12,
    (c, s, r) => {
      noise(c, s, r, '#5b5146', 45, 16000);
      blotches(c, s, r, 'rgba(20,15,10,0.25)', 30, 50);
    },
  ],
  gravel: [
    13,
    (c, s, r) => {
      noise(c, s, r, '#4d4a46', 80, 24000);
    },
  ],
  asphalt: [
    14,
    (c, s, r) => {
      noise(c, s, r, '#3d3d3f', 35, 18000);
      blotches(c, s, r, 'rgba(0,0,0,0.25)', 12, 50);
      c.strokeStyle = 'rgba(0,0,0,0.5)';
      for (let i = 0; i < 5; i++) {
        c.beginPath();
        let x = r() * s;
        let y = r() * s;
        c.moveTo(x, y);
        for (let k = 0; k < 6; k++) c.lineTo((x += (r() - 0.5) * 50), (y += (r() - 0.5) * 50));
        c.stroke();
      }
    },
  ],
  concrete: [
    15,
    (c, s, r) => {
      noise(c, s, r, '#9a968e', 30);
      blotches(c, s, r, 'rgba(60,55,50,0.15)', 16, 70);
      c.strokeStyle = 'rgba(40,40,40,0.35)';
      c.lineWidth = 2;
      c.strokeRect(1, 1, s - 2, s - 2);
    },
  ],
  stucco: [
    16,
    (c, s, r) => {
      noise(c, s, r, '#d6c3a0', 28, 14000);
      blotches(c, s, r, 'rgba(140,110,70,0.18)', 20, 70);
    },
  ],
  stuccoDark: [
    17,
    (c, s, r) => {
      noise(c, s, r, '#a89070', 28, 14000);
      blotches(c, s, r, 'rgba(80,60,40,0.2)', 20, 70);
    },
  ],
  brick: [
    18,
    (c, s, r) => {
      c.fillStyle = '#6e6258';
      c.fillRect(0, 0, s, s);
      const bh = s / 16;
      const bw = s / 6;
      for (let row = 0; row < 16; row++) {
        const off = row % 2 ? bw / 2 : 0;
        for (let col = -1; col < 7; col++) {
          const shade = 110 + Math.floor(r() * 40);
          c.fillStyle = `rgb(${shade},${Math.floor(shade * 0.55)},${Math.floor(shade * 0.42)})`;
          c.fillRect(col * bw + off + 1, row * bh + 1, bw - 2, bh - 2);
        }
      }
      noise(c, s, r, 'rgba(0,0,0,0)', 30, 6000);
    },
  ],
  metal: [
    19,
    (c, s, r) => {
      noise(c, s, r, '#7c838a', 20);
      c.fillStyle = 'rgba(0,0,0,0.12)';
      for (let x = 0; x < s; x += s / 8) c.fillRect(x, 0, 3, s);
    },
  ],
  rust: [
    20,
    (c, s, r) => {
      noise(c, s, r, '#6b4a36', 40);
      blotches(c, s, r, 'rgba(150,70,20,0.35)', 30, 40);
      c.fillStyle = 'rgba(0,0,0,0.15)';
      for (let x = 0; x < s; x += s / 10) c.fillRect(x, 0, 4, s);
    },
  ],
  wood: [
    21,
    (c, s, r) => {
      noise(c, s, r, '#8a6a42', 25, 6000);
      c.strokeStyle = 'rgba(50,30,10,0.6)';
      c.lineWidth = 4;
      for (let i = 0; i <= 4; i++) {
        c.beginPath();
        c.moveTo(0, (i * s) / 4);
        c.lineTo(s, (i * s) / 4);
        c.stroke();
      }
      c.lineWidth = 6;
      c.strokeRect(3, 3, s - 6, s - 6);
      c.beginPath();
      c.moveTo(0, 0);
      c.lineTo(s, s);
      c.stroke();
    },
  ],
  roof: [
    22,
    (c, s, r) => {
      noise(c, s, r, '#5d5650', 30);
    },
  ],
  sandbag: [
    23,
    (c, s, r) => {
      c.fillStyle = '#7d6d4e';
      c.fillRect(0, 0, s, s);
      const bh = s / 6;
      for (let row = 0; row < 6; row++) {
        const off = row % 2 ? s / 6 : 0;
        for (let col = -1; col < 3; col++) {
          const x = col * (s / 3) + off;
          const g = c.createLinearGradient(0, row * bh, 0, row * bh + bh);
          g.addColorStop(0, '#a08c66');
          g.addColorStop(1, '#5e5038');
          c.fillStyle = g;
          c.beginPath();
          c.roundRect(x + 2, row * bh + 2, s / 3 - 4, bh - 4, 10);
          c.fill();
        }
      }
      noise(c, s, r, 'rgba(0,0,0,0)', 25, 5000);
    },
  ],
  dark: [
    24,
    (c, s, r) => {
      noise(c, s, r, '#2a2a2c', 20, 4000);
    },
  ],
};

const containerColors: Partial<Record<MatId, string>> = {
  containerRed: '#8a2f24',
  containerBlue: '#2a4f7a',
  containerGreen: '#3d6440',
  containerYellow: '#b88a26',
};

function containerPainter(color: string): Painter {
  return (c, s, r) => {
    noise(c, s, r, color, 25);
    for (let x = 0; x < s; x += s / 12) {
      c.fillStyle = 'rgba(0,0,0,0.25)';
      c.fillRect(x, 0, s / 48, s);
      c.fillStyle = 'rgba(255,255,255,0.08)';
      c.fillRect(x + s / 48, 0, s / 96, s);
    }
    blotches(c, s, r, 'rgba(90,50,20,0.25)', 10, 30);
  };
}

/** World-space tiling: how many metres one texture repeat spans. */
const TEX_SCALE: Partial<Record<MatId, number>> = {
  sand: 8,
  dirt: 8,
  gravel: 4,
  asphalt: 6,
  brick: 3,
  wood: 1.2,
  sandbag: 1.6,
  metal: 3,
  rust: 3,
};

const ROUGHNESS: Partial<Record<MatId, number>> = { metal: 0.55, rust: 0.8, containerRed: 0.6, containerBlue: 0.6, containerGreen: 0.6, containerYellow: 0.6 };
const METALNESS: Partial<Record<MatId, number>> = { metal: 0.5, rust: 0.2, containerRed: 0.3, containerBlue: 0.3, containerGreen: 0.3, containerYellow: 0.3 };

const cache = new Map<MatId, THREE.MeshStandardMaterial>();

export function texScale(mat: MatId): number {
  return TEX_SCALE[mat] ?? 4;
}

export function getMaterial(mat: MatId): THREE.MeshStandardMaterial {
  let m = cache.get(mat);
  if (m) return m;
  const entry = painters[mat];
  const cc = containerColors[mat];
  let map: THREE.Texture | null = null;
  if (entry) map = canvasTexture(256, entry[0], entry[1]);
  else if (cc) map = canvasTexture(256, cc.length * 7, containerPainter(cc));
  m = new THREE.MeshStandardMaterial({
    map,
    color: 0xffffff,
    roughness: ROUGHNESS[mat] ?? 0.92,
    metalness: METALNESS[mat] ?? 0,
  });
  cache.set(mat, m);
  return m;
}

/** Radial gradient sprite used by muzzle flashes, sparks and explosions. */
let glowTex: THREE.Texture | null = null;
export function getGlowTexture(): THREE.Texture {
  if (glowTex) return glowTex;
  glowTex = canvasTexture(64, 1, (c, s) => {
    const g = c.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.25, 'rgba(255,230,180,0.85)');
    g.addColorStop(1, 'rgba(255,160,60,0)');
    c.fillStyle = g;
    c.fillRect(0, 0, s, s);
  });
  return glowTex;
}

let smokeTex: THREE.Texture | null = null;
export function getSmokeTexture(): THREE.Texture {
  if (smokeTex) return smokeTex;
  smokeTex = canvasTexture(64, 2, (c, s, r) => {
    for (let i = 0; i < 12; i++) {
      const x = s / 2 + (r() - 0.5) * s * 0.4;
      const y = s / 2 + (r() - 0.5) * s * 0.4;
      const rad = s * (0.15 + r() * 0.25);
      const g = c.createRadialGradient(x, y, 0, x, y, rad);
      g.addColorStop(0, 'rgba(255,255,255,0.35)');
      g.addColorStop(1, 'rgba(255,255,255,0)');
      c.fillStyle = g;
      c.fillRect(0, 0, s, s);
    }
  });
  return smokeTex;
}

let flashTex: THREE.Texture | null = null;
/** Star-shaped muzzle flash. */
export function getFlashTexture(): THREE.Texture {
  if (flashTex) return flashTex;
  flashTex = canvasTexture(128, 3, (c, s, r) => {
    c.translate(s / 2, s / 2);
    for (let i = 0; i < 7; i++) {
      c.rotate((Math.PI * 2) / 7 + r() * 0.3);
      const g = c.createLinearGradient(0, 0, s / 2, 0);
      g.addColorStop(0, 'rgba(255,250,220,1)');
      g.addColorStop(1, 'rgba(255,150,40,0)');
      c.fillStyle = g;
      c.beginPath();
      c.moveTo(0, -s * 0.05);
      c.lineTo(s * (0.3 + r() * 0.2), 0);
      c.lineTo(0, s * 0.05);
      c.fill();
    }
    const g = c.createRadialGradient(0, 0, 0, 0, 0, s * 0.2);
    g.addColorStop(0, 'rgba(255,255,240,1)');
    g.addColorStop(1, 'rgba(255,200,100,0)');
    c.fillStyle = g;
    c.fillRect(-s / 2, -s / 2, s, s);
  });
  return flashTex;
}
