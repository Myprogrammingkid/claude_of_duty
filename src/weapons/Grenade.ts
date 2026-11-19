import * as THREE from 'three';
import type { Actor } from '../combat/Actor';
import type { Session } from '../game/Session';

interface LiveGrenade {
  mesh: THREE.Mesh;
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  fuse: number;
  thrower: Actor | null;
  lastBounce: number;
}

const R = 0.07;
const geo = new THREE.SphereGeometry(R, 10, 8);
const mat = new THREE.MeshStandardMaterial({ color: 0x3d4a2e, roughness: 0.6, metalness: 0.3 });

/** Frag grenades: bouncing physics against level boxes, then a radial blast. */
export class GrenadeSystem {
  readonly live: LiveGrenade[] = [];
  private readonly group = new THREE.Group();

  constructor(private readonly session: Session) {
    session.scene.add(this.group);
  }

  throw(thrower: Actor | null, origin: THREE.Vector3, vel: THREE.Vector3, fuse: number): void {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    mesh.position.copy(origin);
    this.group.add(mesh);
    this.live.push({ mesh, pos: origin.clone(), vel: vel.clone(), fuse, thrower, lastBounce: 0 });
  }

  update(dt: number): void {
    const world = this.session.world;
    for (let i = this.live.length - 1; i >= 0; i--) {
      const g = this.live[i];
      g.fuse -= dt;
      g.lastBounce -= dt;
      if (g.fuse <= 0) {
        g.mesh.removeFromParent();
        this.live.splice(i, 1);
        this.session.explode(g.pos, g.thrower);
        continue;
      }
      g.vel.y -= 17 * dt;
      // Move one axis at a time and reflect on contact
      for (let axis = 0; axis < 3; axis++) {
        const d = (axis === 0 ? g.vel.x : axis === 1 ? g.vel.y : g.vel.z) * dt;
        if (d === 0) continue;
        g.pos.setComponent(axis, g.pos.getComponent(axis) + d);
        const hit = world.overlap(g.pos.x - R, g.pos.y - R, g.pos.z - R, g.pos.x + R, g.pos.y + R, g.pos.z + R);
        if (hit) {
          g.pos.setComponent(axis, g.pos.getComponent(axis) - d);
          const v = g.vel.getComponent(axis);
          g.vel.setComponent(axis, -v * 0.35);
          // Friction on the other axes
          for (let o = 0; o < 3; o++) if (o !== axis) g.vel.setComponent(o, g.vel.getComponent(o) * 0.7);
          if (Math.abs(v) > 2 && g.lastBounce <= 0) {
            this.session.audio.grenadeBounce(g.pos);
            g.lastBounce = 0.1;
          }
        }
      }
      g.mesh.position.copy(g.pos);
      g.mesh.rotation.x += g.vel.length() * dt * 3;
    }
  }

  dispose(): void {
    this.group.removeFromParent();
    this.live.length = 0;
  }
}
