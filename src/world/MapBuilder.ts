import { mulberry32 } from '../core/math';
import type { BoxDef, CylinderDef, EnvDef, LightDef, MapDef, MatId, SpawnPoint, ZoneDef } from './MapTypes';

export type Side = 'n' | 's' | 'e' | 'w';

export interface Opening {
  side: Side;
  /** Offset of the opening centre along the wall, relative to the wall centre. */
  at: number;
  w: number;
  bottom?: number;
  top?: number;
}

/** Shorthand openings */
export const door = (side: Side, at = 0, w = 1.8): Opening => ({ side, at, w, bottom: 0, top: 2.4 });
export const bigDoor = (side: Side, at = 0, w = 5): Opening => ({ side, at, w, bottom: 0, top: 4.5 });
export const win = (side: Side, at = 0, w = 1.6): Opening => ({ side, at, w, bottom: 1.05, top: 2.1 });

/** Fluent helper for authoring maps out of boxes. */
export class MapBuilder {
  boxes: BoxDef[] = [];
  cylinders: CylinderDef[] = [];
  lights: LightDef[] = [];
  navHints: { x: number; z: number }[] = [];
  zones: Record<string, ZoneDef> = {};
  readonly rng: () => number;

  constructor(
    readonly half: number,
    seed: number,
  ) {
    this.rng = mulberry32(seed);
  }

  /** Axis-aligned box from (x0,z0) to (x1,z1) on the XZ plane, from y0 to y0+h. */
  box(x0: number, z0: number, x1: number, z1: number, h: number, mat: MatId, y0 = 0, collide = true): this {
    this.boxes.push({
      min: [Math.min(x0, x1), y0, Math.min(z0, z1)],
      max: [Math.max(x0, x1), y0 + h, Math.max(z0, z1)],
      mat,
      collide,
    });
    return this;
  }

  /** Box centred on (x,z) with size w (x) by d (z). */
  block(x: number, z: number, w: number, d: number, h: number, mat: MatId, y0 = 0, collide = true): this {
    return this.box(x - w / 2, z - d / 2, x + w / 2, z + d / 2, h, mat, y0, collide);
  }

  /** Flat decal-like floor patch that doesn't collide. */
  floor(x0: number, z0: number, x1: number, z1: number, mat: MatId, y = 0.01): this {
    return this.box(x0, z0, x1, z1, 0.02, mat, y - 0.01, false);
  }

  crate(x: number, z: number, s = 1.2, h = s): this {
    return this.block(x, z, s, s, h, 'wood');
  }

  crateStack(x: number, z: number): this {
    this.crate(x, z, 1.3);
    this.crate(x + 1.3, z, 1.3);
    return this.block(x + 0.65, z, 1.2, 1.2, 1.1, 'wood', 1.3);
  }

  sandbags(x0: number, z0: number, x1: number, z1: number, h = 1.05): this {
    const t = 0.7;
    if (Math.abs(x1 - x0) > Math.abs(z1 - z0)) return this.box(x0, z0 - t / 2, x1, z0 + t / 2, h, 'sandbag');
    return this.box(x0 - t / 2, z0, x0 + t / 2, z1, h, 'sandbag');
  }

  barrier(x: number, z: number, alongX: boolean, len = 3): this {
    return alongX ? this.block(x, z, len, 0.6, 1.1, 'concrete') : this.block(x, z, 0.6, len, 1.1, 'concrete');
  }

  car(x: number, z: number, alongX: boolean): this {
    const w = alongX ? 4.4 : 1.9;
    const d = alongX ? 1.9 : 4.4;
    this.block(x, z, w, d, 0.95, 'rust', 0.2);
    this.block(x, z, w * (alongX ? 0.55 : 0.9), d * (alongX ? 0.9 : 0.55), 0.6, 'dark', 1.15);
    // wheels area — fills gap under the body so nobody crawls under it
    return this.block(x, z, w * 0.85, d * 0.85, 0.2, 'dark', 0, true);
  }

  container(x: number, z: number, alongX: boolean, mat: MatId, levels = 1): this {
    const l = 6.1;
    const w = 2.44;
    for (let i = 0; i < levels; i++) {
      this.block(x, z, alongX ? l : w, alongX ? w : l, 2.6, i === 1 && levels > 1 ? alternate(mat) : mat, i * 2.6);
    }
    return this;
  }

  /** Thin wall between two points; must be axis aligned. */
  wall(x0: number, z0: number, x1: number, z1: number, h: number, mat: MatId, t = 0.4): this {
    if (Math.abs(x0 - x1) < 1e-6) return this.box(x0 - t / 2, z0, x0 + t / 2, z1, h, mat);
    return this.box(x0, z0 - t / 2, x1, z0 + t / 2, h, mat);
  }

  /** Walled compound edge with gaps. */
  wallWithGaps(x0: number, z0: number, x1: number, z1: number, h: number, mat: MatId, gaps: [number, number][]): this {
    const alongX = Math.abs(z0 - z1) < 1e-6;
    const a0 = alongX ? Math.min(x0, x1) : Math.min(z0, z1);
    const a1 = alongX ? Math.max(x0, x1) : Math.max(z0, z1);
    let cur = a0;
    const sorted = [...gaps].sort((a, b) => a[0] - b[0]);
    const seg = (s: number, e: number) => {
      if (e - s < 0.05) return;
      if (alongX) this.wall(s, z0, e, z0, h, mat);
      else this.wall(x0, s, x0, e, h, mat);
    };
    for (const [g0, g1] of sorted) {
      seg(cur, g0);
      cur = g1;
      const mid = (g0 + g1) / 2;
      if (alongX) this.navHints.push({ x: mid, z: z0 }, { x: mid, z: z0 - 1.4 }, { x: mid, z: z0 + 1.4 });
      else this.navHints.push({ x: x0, z: mid }, { x: x0 - 1.4, z: mid }, { x: x0 + 1.4, z: mid });
    }
    seg(cur, a1);
    return this;
  }

  /**
   * Hollow building with doors and windows. Walls are 0.3 thick and the roof
   * is a slab on top. Door centres are added as nav hints so bots can path inside.
   */
  building(cx: number, cz: number, w: number, d: number, h: number, mat: MatId, openings: Opening[], roof = true): this {
    const t = 0.3;
    const x0 = cx - w / 2;
    const x1 = cx + w / 2;
    const z0 = cz - d / 2;
    const z1 = cz + d / 2;
    const sides: Record<Side, { alongX: boolean; fixed: number; a0: number; a1: number; center: number; inward: number }> = {
      n: { alongX: true, fixed: z0 + t / 2, a0: x0, a1: x1, center: cx, inward: 1 },
      s: { alongX: true, fixed: z1 - t / 2, a0: x0, a1: x1, center: cx, inward: -1 },
      w: { alongX: false, fixed: x0 + t / 2, a0: z0 + t, a1: z1 - t, center: cz, inward: 1 },
      e: { alongX: false, fixed: x1 - t / 2, a0: z0 + t, a1: z1 - t, center: cz, inward: -1 },
    };
    for (const side of ['n', 's', 'w', 'e'] as Side[]) {
      const s = sides[side];
      const ops = openings
        .filter((o) => o.side === side)
        .map((o) => ({ ...o, s: s.center + o.at - o.w / 2, e: s.center + o.at + o.w / 2 }))
        .sort((a, b) => a.s - b.s);
      const piece = (a: number, b: number, y0: number, y1: number) => {
        if (b - a < 0.02 || y1 - y0 < 0.02) return;
        if (s.alongX) this.box(a, s.fixed - t / 2, b, s.fixed + t / 2, y1 - y0, mat, y0);
        else this.box(s.fixed - t / 2, a, s.fixed + t / 2, b, y1 - y0, mat, y0);
      };
      let cur = s.a0;
      for (const o of ops) {
        piece(cur, o.s, 0, h);
        piece(o.s, o.e, 0, o.bottom ?? 0);
        piece(o.s, o.e, o.top ?? 2.4, h);
        cur = o.e;
        if ((o.bottom ?? 0) === 0) {
          const mid = (o.s + o.e) / 2;
          for (const off of [-1.4, 0, 1.4]) {
            const f = s.fixed + off * s.inward;
            this.navHints.push(s.alongX ? { x: mid, z: f } : { x: f, z: mid });
          }
        }
      }
      piece(cur, s.a1, 0, h);
    }
    if (roof) this.box(x0 - 0.2, z0 - 0.2, x1 + 0.2, z1 + 0.2, 0.3, 'roof', h);
    this.floor(x0 + t, z0 + t, x1 - t, z1 - t, 'concrete', 0.015);
    // Interior nav hints so rooms get covered even if the grid misses them
    this.navHints.push({ x: cx, z: cz });
    return this;
  }

  cylinder(x: number, z: number, r: number, h: number, mat: MatId, y = 0, collide = true): this {
    this.cylinders.push({ x, z, y, r, h, mat, collide });
    // Collision uses an inscribed box — close enough for tanks and pillars.
    if (collide) this.block(x, z, r * 1.6, r * 1.6, h, 'invisible', y);
    return this;
  }

  lamp(x: number, z: number, color = 0xffd9a0, intensity = 30, distance = 26): this {
    this.block(x, z, 0.2, 0.2, 6, 'metal');
    this.block(x, z, 0.5, 0.5, 0.15, 'dark', 6, false);
    this.lights.push({ x, y: 5.8, z, color, intensity, distance });
    return this;
  }

  zone(id: string, x: number, z: number, r: number, label: string): this {
    this.zones[id] = { x, z, r, label };
    return this;
  }

  /** Perimeter: visible wall plus invisible tall wall so nobody leaves the map. */
  perimeter(h: number, mat: MatId, open: Side[] = []): this {
    const s = this.half;
    if (!open.includes('n')) this.box(-s - 1, -s - 1, s + 1, -s, h, mat);
    if (!open.includes('s')) this.box(-s - 1, s, s + 1, s + 1, h, mat);
    if (!open.includes('w')) this.box(-s - 1, -s, -s, s, h, mat);
    if (!open.includes('e')) this.box(s, -s, s + 1, s, h, mat);
    this.box(-s - 1, -s - 1, s + 1, -s, 40, 'invisible', h);
    this.box(-s - 1, s, s + 1, s + 1, 40, 'invisible', h);
    this.box(-s - 1, -s, -s, s, 40, 'invisible', h);
    this.box(s, -s, s + 1, s, 40, 'invisible', h);
    return this;
  }

  /** True when a footprint (with margin) is free of colliding boxes. */
  free(x: number, z: number, w: number, d: number, margin = 1.2): boolean {
    const ax0 = x - w / 2 - margin;
    const ax1 = x + w / 2 + margin;
    const az0 = z - d / 2 - margin;
    const az1 = z + d / 2 + margin;
    return !this.boxes.some(
      (b) => b.collide && b.max[1] > 0.05 && ax0 < b.max[0] && ax1 > b.min[0] && az0 < b.max[2] && az1 > b.min[2],
    );
  }

  /** Scatter cover pieces in a region, skipping spots that overlap anything. */
  scatter(count: number, x0: number, z0: number, x1: number, z1: number, place: (x: number, z: number, r: () => number) => void, size = 2.5): this {
    let placed = 0;
    for (let tries = 0; tries < count * 20 && placed < count; tries++) {
      const x = x0 + this.rng() * (x1 - x0);
      const z = z0 + this.rng() * (z1 - z0);
      if (!this.free(x, z, size, size, 1.6)) continue;
      place(x, z, this.rng);
      placed++;
    }
    return this;
  }

  build(meta: {
    id: string;
    name: string;
    description: string;
    ground: MatId;
    env: EnvDef;
    spawns: { a: SpawnPoint[]; b: SpawnPoint[]; ffa: SpawnPoint[] };
  }): MapDef {
    return {
      ...meta,
      half: this.half,
      boxes: this.boxes,
      cylinders: this.cylinders,
      lights: this.lights,
      zones: this.zones,
      navHints: this.navHints,
    };
  }
}

function alternate(mat: MatId): MatId {
  const order: MatId[] = ['containerRed', 'containerBlue', 'containerGreen', 'containerYellow'];
  const i = order.indexOf(mat);
  return i < 0 ? mat : order[(i + 1) % order.length];
}
