import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { NavGraph } from '../ai/NavGraph';
import { settings } from '../core/Settings';
import { CollisionWorld, type AABB } from './Collision';
import type { MapDef, MatId } from './MapTypes';
import { getMaterial, texScale } from './Textures';

const SKY_COLORS = {
  day: { top: 0x4a7fc4, horizon: 0xd9e4ee, ground: 0xb9a888, sun: 0xfff2d0 },
  dusk: { top: 0x2c3e6b, horizon: 0xf0a070, ground: 0x4a3a35, sun: 0xffb060 },
  night: { top: 0x04060d, horizon: 0x141a2a, ground: 0x07080c, sun: 0x8899cc },
};

/** Builds renderable geometry, collision and navigation for a MapDef. */
export class Level {
  readonly group = new THREE.Group();
  readonly world: CollisionWorld;
  readonly nav: NavGraph;
  readonly sun: THREE.DirectionalLight;
  private readonly sky: THREE.Mesh;
  private readonly geometries: THREE.BufferGeometry[] = [];
  private readonly ownedMaterials: THREE.Material[] = [];

  constructor(
    readonly def: MapDef,
    scene: THREE.Scene,
  ) {
    const env = def.env;
    scene.add(this.group);
    scene.fog = new THREE.FogExp2(env.fogColor, env.fogDensity);

    // --- Lights ---
    const hemi = new THREE.HemisphereLight(env.hemiSky, env.hemiGround, env.hemiIntensity);
    this.group.add(hemi);
    this.sun = new THREE.DirectionalLight(env.sunColor, env.sunIntensity);
    const sd = new THREE.Vector3(...env.sunDir).normalize();
    this.sun.position.copy(sd).multiplyScalar(120);
    this.sun.target.position.set(0, 0, 0);
    this.group.add(this.sun, this.sun.target);
    if (settings.shadows) {
      this.sun.castShadow = true;
      const s = this.sun.shadow;
      s.mapSize.set(4096, 4096);
      const ext = def.half + 8;
      s.camera.left = -ext;
      s.camera.right = ext;
      s.camera.top = ext;
      s.camera.bottom = -ext;
      s.camera.near = 1;
      s.camera.far = 300;
      s.bias = -0.0004;
      s.normalBias = 0.04;
    }
    for (const l of def.lights) {
      const p = new THREE.PointLight(l.color, l.intensity, l.distance, 1.6);
      p.position.set(l.x, l.y, l.z);
      this.group.add(p);
      const bulbMat = new THREE.MeshBasicMaterial({ color: l.color });
      this.ownedMaterials.push(bulbMat);
      const bulbGeo = new THREE.SphereGeometry(0.18, 8, 6);
      this.geometries.push(bulbGeo);
      const bulb = new THREE.Mesh(bulbGeo, bulbMat);
      bulb.position.set(l.x, l.y - 0.1, l.z);
      this.group.add(bulb);
    }

    // --- Static geometry merged per material ---
    const byMat = new Map<MatId, THREE.BufferGeometry[]>();
    const push = (mat: MatId, g: THREE.BufferGeometry) => {
      let list = byMat.get(mat);
      if (!list) byMat.set(mat, (list = []));
      list.push(g);
    };
    for (const b of def.boxes) {
      if (b.mat === 'invisible') continue;
      const w = b.max[0] - b.min[0];
      const h = b.max[1] - b.min[1];
      const d = b.max[2] - b.min[2];
      const g = new THREE.BoxGeometry(w, h, d);
      g.translate((b.min[0] + b.max[0]) / 2, (b.min[1] + b.max[1]) / 2, (b.min[2] + b.max[2]) / 2);
      worldUVs(g, texScale(b.mat));
      push(b.mat, g);
    }
    for (const c of def.cylinders) {
      const g = new THREE.CylinderGeometry(c.r, c.r, c.h, 20, 1);
      g.translate(c.x, c.y + c.h / 2, c.z);
      const uv = g.getAttribute('uv') as THREE.BufferAttribute;
      for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * c.r * 2, uv.getY(i) * (c.h / 3));
      push(c.mat, g);
    }
    for (const [mat, list] of byMat) {
      const merged = mergeGeometries(list, false);
      list.forEach((g) => g.dispose());
      if (!merged) continue;
      this.geometries.push(merged);
      const mesh = new THREE.Mesh(merged, getMaterial(mat));
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.group.add(mesh);
    }

    // --- Ground ---
    const size = def.half * 2 + 60;
    const groundGeo = new THREE.PlaneGeometry(size, size);
    groundGeo.rotateX(-Math.PI / 2);
    worldUVs(groundGeo, texScale(def.ground));
    this.geometries.push(groundGeo);
    const ground = new THREE.Mesh(groundGeo, getMaterial(def.ground));
    ground.receiveShadow = true;
    this.group.add(ground);

    if (env.water) {
      const wg = new THREE.PlaneGeometry(1200, 800);
      wg.rotateX(-Math.PI / 2);
      wg.translate(0, 0.05, env.water.z + 400);
      this.geometries.push(wg);
      const wm = new THREE.MeshStandardMaterial({ color: env.water.color, roughness: 0.12, metalness: 0.4 });
      this.ownedMaterials.push(wm);
      this.group.add(new THREE.Mesh(wg, wm));
    }

    // --- Sky dome ---
    const colors = SKY_COLORS[env.sky];
    const skyMat = new THREE.ShaderMaterial({
      uniforms: {
        top: { value: new THREE.Color(colors.top) },
        horizon: { value: new THREE.Color(colors.horizon) },
        ground: { value: new THREE.Color(colors.ground) },
        sunColor: { value: new THREE.Color(colors.sun) },
        sunDir: { value: sd },
        night: { value: env.sky === 'night' ? 1 : 0 },
      },
      vertexShader: /* glsl */ `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_Position = p.xyww;
        }`,
      fragmentShader: /* glsl */ `
        uniform vec3 top; uniform vec3 horizon; uniform vec3 ground; uniform vec3 sunColor; uniform vec3 sunDir;
        uniform float night;
        varying vec3 vDir;
        float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453); }
        void main() {
          vec3 d = normalize(vDir);
          float h = d.y;
          vec3 col = mix(horizon, top, pow(clamp(h, 0.0, 1.0), 0.55));
          col = mix(col, ground, smoothstep(0.0, -0.15, h));
          float s = max(dot(d, normalize(sunDir)), 0.0);
          col += sunColor * (pow(s, 900.0) * 6.0 + pow(s, 12.0) * 0.25 * (1.0 - night));
          if (night > 0.5 && h > 0.05) {
            vec3 cell = floor(d * 300.0);
            float st = step(0.9975, hash(cell));
            col += vec3(st) * 0.9 * smoothstep(0.05, 0.4, h);
          }
          gl_FragColor = vec4(col, 1.0);
        }`,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
    });
    this.ownedMaterials.push(skyMat);
    const skyGeo = new THREE.SphereGeometry(500, 32, 16);
    this.geometries.push(skyGeo);
    this.sky = new THREE.Mesh(skyGeo, skyMat);
    this.sky.frustumCulled = false;
    this.sky.renderOrder = -1;
    this.group.add(this.sky);

    // --- Collision & navigation ---
    const boxes: AABB[] = def.boxes
      .filter((b) => b.collide)
      .map((b) => ({ minX: b.min[0], minY: b.min[1], minZ: b.min[2], maxX: b.max[0], maxY: b.max[1], maxZ: b.max[2] }));
    boxes.push({ minX: -1000, minY: -5, minZ: -1000, maxX: 1000, maxY: 0, maxZ: 1000 });
    this.world = new CollisionWorld(boxes);
    const hb = def.half - 1;
    this.nav = NavGraph.build(this.world, { minX: -hb, minZ: -hb, maxX: hb, maxZ: hb }, 2.5, def.navHints);
  }

  update(camera: THREE.Camera): void {
    this.sky.position.copy(camera.position);
  }

  dispose(): void {
    this.group.removeFromParent();
    for (const g of this.geometries) g.dispose();
    for (const m of this.ownedMaterials) m.dispose();
    if (this.sun.shadow.map) this.sun.shadow.map.dispose();
  }
}

/** Replace UVs with world-space projections so textures tile uniformly. */
function worldUVs(g: THREE.BufferGeometry, scale: number): void {
  const pos = g.getAttribute('position') as THREE.BufferAttribute;
  const nor = g.getAttribute('normal') as THREE.BufferAttribute;
  const uv = g.getAttribute('uv') as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) {
    const nx = Math.abs(nor.getX(i));
    const ny = Math.abs(nor.getY(i));
    const nz = Math.abs(nor.getZ(i));
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    if (ny >= nx && ny >= nz) uv.setXY(i, x / scale, z / scale);
    else if (nx >= nz) uv.setXY(i, z / scale, y / scale);
    else uv.setXY(i, x / scale, y / scale);
  }
  uv.needsUpdate = true;
}
