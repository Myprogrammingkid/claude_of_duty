import * as THREE from 'three';

export interface AABB {
  minX: number;
  minY: number;
  minZ: number;
  maxX: number;
  maxY: number;
  maxZ: number;
}

export interface RayHit {
  dist: number;
  nx: number;
  ny: number;
  nz: number;
}

/** A moving upright box (player, bot, grenade uses its own sphere logic). */
export interface Body {
  pos: THREE.Vector3; // feet position (center of the bottom face)
  vel: THREE.Vector3;
  halfW: number;
  height: number;
  grounded: boolean;
}

const CELL = 6;
const EPS = 0.001;

/**
 * Static level collision: a soup of axis-aligned boxes in a uniform grid.
 * Movement is resolved per axis, which gives wall sliding for free.
 */
export class CollisionWorld {
  private grid = new Map<number, number[]>();
  private big: number[] = [];
  private stamp: Uint32Array;
  private stampId = 1;
  private scratch: number[] = [];

  constructor(readonly boxes: AABB[]) {
    this.stamp = new Uint32Array(boxes.length);
    boxes.forEach((b, i) => {
      const x0 = Math.floor(b.minX / CELL);
      const x1 = Math.floor(b.maxX / CELL);
      const z0 = Math.floor(b.minZ / CELL);
      const z1 = Math.floor(b.maxZ / CELL);
      if ((x1 - x0 + 1) * (z1 - z0 + 1) > 48) {
        this.big.push(i);
        return;
      }
      for (let x = x0; x <= x1; x++) {
        for (let z = z0; z <= z1; z++) {
          const k = key(x, z);
          let list = this.grid.get(k);
          if (!list) this.grid.set(k, (list = []));
          list.push(i);
        }
      }
    });
  }

  /** Box indices whose XZ footprint may touch the given rectangle. Result buffer is reused. */
  query(minX: number, minZ: number, maxX: number, maxZ: number): number[] {
    const out = this.scratch;
    out.length = 0;
    this.stampId++;
    if (this.stampId > 0xfffffff0) {
      this.stamp.fill(0);
      this.stampId = 1;
    }
    const id = this.stampId;
    for (const i of this.big) {
      this.stamp[i] = id;
      out.push(i);
    }
    const x0 = Math.floor(minX / CELL);
    const x1 = Math.floor(maxX / CELL);
    const z0 = Math.floor(minZ / CELL);
    const z1 = Math.floor(maxZ / CELL);
    for (let x = x0; x <= x1; x++) {
      for (let z = z0; z <= z1; z++) {
        const list = this.grid.get(key(x, z));
        if (!list) continue;
        for (const i of list) {
          if (this.stamp[i] !== id) {
            this.stamp[i] = id;
            out.push(i);
          }
        }
      }
    }
    return out;
  }

  /** Returns the first box overlapping the given volume, or null. */
  overlap(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): AABB | null {
    const idx = this.query(minX, minZ, maxX, maxZ);
    for (const i of idx) {
      const b = this.boxes[i];
      if (minX < b.maxX && maxX > b.minX && minY < b.maxY && maxY > b.minY && minZ < b.maxZ && maxZ > b.minZ) {
        return b;
      }
    }
    return null;
  }

  bodyOverlaps(x: number, y: number, z: number, halfW: number, height: number): boolean {
    return this.overlap(x - halfW, y, z - halfW, x + halfW, y + height, z + halfW) !== null;
  }

  /**
   * Moves a body by delta (already multiplied by dt), resolving collisions.
   * Supports stepping up onto ledges up to stepHeight while grounded.
   */
  moveBody(body: Body, dx: number, dy: number, dz: number, stepHeight: number): { hitWall: boolean } {
    const p = body.pos;
    const hw = body.halfW;
    const h = body.height;
    const wasGrounded = body.grounded;
    let hitWall = false;

    // --- Vertical ---
    p.y += dy;
    body.grounded = false;
    {
      const idx = this.query(p.x - hw, p.z - hw, p.x + hw, p.z + hw);
      let landY = -Infinity;
      let ceilY = Infinity;
      for (const i of idx) {
        const b = this.boxes[i];
        if (!(p.x - hw < b.maxX && p.x + hw > b.minX && p.z - hw < b.maxZ && p.z + hw > b.minZ)) continue;
        if (p.y < b.maxY && p.y + h > b.minY) {
          if (dy <= 0) landY = Math.max(landY, b.maxY);
          else ceilY = Math.min(ceilY, b.minY);
        }
      }
      if (landY > -Infinity) {
        p.y = landY;
        if (body.vel.y < 0) body.vel.y = 0;
        body.grounded = true;
      } else if (ceilY < Infinity) {
        p.y = ceilY - h - EPS;
        if (body.vel.y > 0) body.vel.y = 0;
      }
    }

    // --- Horizontal, one axis at a time ---
    for (let axis = 0; axis < 2; axis++) {
      const d = axis === 0 ? dx : dz;
      if (d === 0) continue;
      if (axis === 0) p.x += d;
      else p.z += d;
      const idx = this.query(p.x - hw, p.z - hw, p.x + hw, p.z + hw);
      for (const i of idx) {
        const b = this.boxes[i];
        if (!(p.x - hw < b.maxX && p.x + hw > b.minX && p.y < b.maxY && p.y + h > b.minY && p.z - hw < b.maxZ && p.z + hw > b.minZ)) {
          continue;
        }
        const rise = b.maxY - p.y;
        if ((wasGrounded || body.grounded) && rise > 0 && rise <= stepHeight && !this.bodyOverlaps(p.x, b.maxY + EPS, p.z, hw, h)) {
          p.y = b.maxY;
          body.grounded = true;
          continue;
        }
        hitWall = true;
        if (axis === 0) {
          p.x = d > 0 ? b.minX - hw - EPS : b.maxX + hw + EPS;
          body.vel.x = 0;
        } else {
          p.z = d > 0 ? b.minZ - hw - EPS : b.maxZ + hw + EPS;
          body.vel.z = 0;
        }
      }
    }

    // Ground probe: stick to the ground when walking down small steps.
    if (!body.grounded && wasGrounded && body.vel.y <= 0) {
      const below = this.groundBelow(p.x, p.y + EPS, p.z, hw);
      if (p.y - below <= stepHeight) {
        p.y = below;
        body.grounded = true;
      }
    }
    return { hitWall };
  }

  /** Highest box top at or below y under the given footprint. */
  groundBelow(x: number, y: number, z: number, hw: number): number {
    let best = -Infinity;
    const idx = this.query(x - hw, z - hw, x + hw, z + hw);
    for (const i of idx) {
      const b = this.boxes[i];
      if (x - hw < b.maxX && x + hw > b.minX && z - hw < b.maxZ && z + hw > b.minZ && b.maxY <= y) {
        best = Math.max(best, b.maxY);
      }
    }
    return best;
  }

  /** Ray vs every box; dir must be normalized. */
  raycast(ox: number, oy: number, oz: number, dx: number, dy: number, dz: number, maxDist: number): RayHit | null {
    const ex = ox + dx * maxDist;
    const ez = oz + dz * maxDist;
    const idx = this.query(Math.min(ox, ex), Math.min(oz, ez), Math.max(ox, ex), Math.max(oz, ez));
    let best = maxDist;
    let hit: RayHit | null = null;
    // Avoid 0 * Infinity = NaN in the slab test for axis-parallel rays.
    const ix = 1 / (dx || 1e-9);
    const iy = 1 / (dy || 1e-9);
    const iz = 1 / (dz || 1e-9);
    for (const i of idx) {
      const b = this.boxes[i];
      let t1 = (b.minX - ox) * ix;
      let t2 = (b.maxX - ox) * ix;
      let tmin = Math.min(t1, t2);
      let tmax = Math.max(t1, t2);
      let axis = 0;
      t1 = (b.minY - oy) * iy;
      t2 = (b.maxY - oy) * iy;
      let n = Math.min(t1, t2);
      if (n > tmin) {
        tmin = n;
        axis = 1;
      }
      tmax = Math.min(tmax, Math.max(t1, t2));
      t1 = (b.minZ - oz) * iz;
      t2 = (b.maxZ - oz) * iz;
      n = Math.min(t1, t2);
      if (n > tmin) {
        tmin = n;
        axis = 2;
      }
      tmax = Math.min(tmax, Math.max(t1, t2));
      if (tmax < tmin || tmax < 0 || tmin < 0 || tmin >= best) continue;
      best = tmin;
      hit = {
        dist: tmin,
        nx: axis === 0 ? -Math.sign(dx) : 0,
        ny: axis === 1 ? -Math.sign(dy) : 0,
        nz: axis === 2 ? -Math.sign(dz) : 0,
      };
    }
    return hit;
  }

  /** True if nothing blocks the straight line between a and b. */
  lineClear(a: THREE.Vector3, b: THREE.Vector3): boolean {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const dz = b.z - a.z;
    const len = Math.hypot(dx, dy, dz);
    if (len < 1e-4) return true;
    return this.raycast(a.x, a.y, a.z, dx / len, dy / len, dz / len, len) === null;
  }
}

function key(x: number, z: number): number {
  return (x + 2048) * 4096 + (z + 2048);
}
