import type { CollisionWorld } from '../world/Collision';

export interface NavNode {
  x: number;
  z: number;
  neighbors: number[];
  /** True when a waist-high or taller obstacle is right next to this node. */
  cover: boolean;
}

const AGENT_HW = 0.38;
const AGENT_H = 1.7;
const MIN_Y = 0.42; // things lower than this can be stepped over

/**
 * Ground-level waypoint graph generated automatically from level collision.
 * Extra hint points (doorways etc.) are merged into the grid.
 */
export class NavGraph {
  nodes: NavNode[] = [];

  static build(
    world: CollisionWorld,
    bounds: { minX: number; minZ: number; maxX: number; maxZ: number },
    spacing: number,
    hints: { x: number; z: number }[],
  ): NavGraph {
    const g = new NavGraph();
    const pts: { x: number; z: number }[] = [];
    for (let x = bounds.minX + spacing / 2; x < bounds.maxX; x += spacing) {
      for (let z = bounds.minZ + spacing / 2; z < bounds.maxZ; z += spacing) pts.push({ x, z });
    }
    pts.push(...hints);
    const valid = pts.filter((p) => !blocked(world, p.x, p.z));
    const nodes: NavNode[] = valid.map((p) => ({ x: p.x, z: p.z, neighbors: [], cover: false }));

    // Spatial hash for neighbour search
    const cell = spacing * 1.5;
    const hash = new Map<string, number[]>();
    nodes.forEach((n, i) => {
      const k = `${Math.floor(n.x / cell)},${Math.floor(n.z / cell)}`;
      let l = hash.get(k);
      if (!l) hash.set(k, (l = []));
      l.push(i);
    });
    const maxLink = spacing * 1.5;
    nodes.forEach((n, i) => {
      const cx = Math.floor(n.x / cell);
      const cz = Math.floor(n.z / cell);
      for (let ox = -1; ox <= 1; ox++) {
        for (let oz = -1; oz <= 1; oz++) {
          const l = hash.get(`${cx + ox},${cz + oz}`);
          if (!l) continue;
          for (const j of l) {
            if (j <= i) continue;
            const m = nodes[j];
            const d = Math.hypot(m.x - n.x, m.z - n.z);
            if (d > maxLink || d < 0.3) continue;
            if (sweepClear(world, n.x, n.z, m.x, m.z)) {
              n.neighbors.push(j);
              m.neighbors.push(i);
            }
          }
        }
      }
    });

    // Keep only the largest connected component so every node is reachable.
    const comp = new Int32Array(nodes.length).fill(-1);
    let bestComp = -1;
    let bestSize = 0;
    let c = 0;
    for (let i = 0; i < nodes.length; i++) {
      if (comp[i] !== -1) continue;
      let size = 0;
      const stack = [i];
      comp[i] = c;
      while (stack.length) {
        const k = stack.pop()!;
        size++;
        for (const nb of nodes[k].neighbors) {
          if (comp[nb] === -1) {
            comp[nb] = c;
            stack.push(nb);
          }
        }
      }
      if (size > bestSize) {
        bestSize = size;
        bestComp = c;
      }
      c++;
    }
    const remap = new Int32Array(nodes.length).fill(-1);
    nodes.forEach((n, i) => {
      if (comp[i] === bestComp) {
        remap[i] = g.nodes.length;
        g.nodes.push(n);
      }
    });
    for (const n of g.nodes) n.neighbors = n.neighbors.map((j) => remap[j]).filter((j) => j >= 0);

    for (const n of g.nodes) {
      n.cover =
        world.overlap(n.x - 1.1, 0.9, n.z - 1.1, n.x + 1.1, 1.0, n.z + 1.1) !== null;
    }
    return g;
  }

  nearest(x: number, z: number): number {
    let best = -1;
    let bd = Infinity;
    for (let i = 0; i < this.nodes.length; i++) {
      const n = this.nodes[i];
      const d = (n.x - x) ** 2 + (n.z - z) ** 2;
      if (d < bd) {
        bd = d;
        best = i;
      }
    }
    return best;
  }

  within(x: number, z: number, r: number): number[] {
    const out: number[] = [];
    const r2 = r * r;
    for (let i = 0; i < this.nodes.length; i++) {
      const n = this.nodes[i];
      if ((n.x - x) ** 2 + (n.z - z) ** 2 <= r2) out.push(i);
    }
    return out;
  }

  random(): number {
    return Math.floor(Math.random() * this.nodes.length);
  }

  /** A* search; returns node indices from start to goal inclusive, or null. */
  findPath(start: number, goal: number): number[] | null {
    if (start < 0 || goal < 0) return null;
    if (start === goal) return [start];
    const n = this.nodes.length;
    const gScore = new Float32Array(n).fill(Infinity);
    const came = new Int32Array(n).fill(-1);
    const closed = new Uint8Array(n);
    const heap = new MinHeap();
    const goalNode = this.nodes[goal];
    const h = (i: number) => Math.hypot(this.nodes[i].x - goalNode.x, this.nodes[i].z - goalNode.z);
    gScore[start] = 0;
    heap.push(start, h(start));
    while (heap.size) {
      const cur = heap.pop();
      if (cur === goal) {
        const path = [cur];
        let k = cur;
        while (came[k] !== -1) {
          k = came[k];
          path.push(k);
        }
        return path.reverse();
      }
      if (closed[cur]) continue;
      closed[cur] = 1;
      const cn = this.nodes[cur];
      for (const nb of cn.neighbors) {
        if (closed[nb]) continue;
        const nn = this.nodes[nb];
        const g = gScore[cur] + Math.hypot(nn.x - cn.x, nn.z - cn.z);
        if (g < gScore[nb]) {
          gScore[nb] = g;
          came[nb] = cur;
          heap.push(nb, g + h(nb));
        }
      }
    }
    return null;
  }
}

function blocked(world: CollisionWorld, x: number, z: number): boolean {
  return world.overlap(x - AGENT_HW, MIN_Y, z - AGENT_HW, x + AGENT_HW, AGENT_H, z + AGENT_HW) !== null;
}

function sweepClear(world: CollisionWorld, x0: number, z0: number, x1: number, z1: number): boolean {
  const d = Math.hypot(x1 - x0, z1 - z0);
  const steps = Math.max(2, Math.ceil(d / 0.3));
  for (let s = 1; s < steps; s++) {
    const t = s / steps;
    if (blocked(world, x0 + (x1 - x0) * t, z0 + (z1 - z0) * t)) return false;
  }
  return true;
}

class MinHeap {
  private items: number[] = [];
  private prio: number[] = [];

  get size(): number {
    return this.items.length;
  }

  push(item: number, p: number): void {
    const a = this.items;
    const pr = this.prio;
    a.push(item);
    pr.push(p);
    let i = a.length - 1;
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (pr[parent] <= pr[i]) break;
      [a[i], a[parent]] = [a[parent], a[i]];
      [pr[i], pr[parent]] = [pr[parent], pr[i]];
      i = parent;
    }
  }

  pop(): number {
    const a = this.items;
    const pr = this.prio;
    const top = a[0];
    const lastI = a.pop()!;
    const lastP = pr.pop()!;
    if (a.length) {
      a[0] = lastI;
      pr[0] = lastP;
      let i = 0;
      for (;;) {
        const l = i * 2 + 1;
        const r = l + 1;
        let m = i;
        if (l < a.length && pr[l] < pr[m]) m = l;
        if (r < a.length && pr[r] < pr[m]) m = r;
        if (m === i) break;
        [a[i], a[m]] = [a[m], a[i]];
        [pr[i], pr[m]] = [pr[m], pr[i]];
        i = m;
      }
    }
    return top;
  }
}
