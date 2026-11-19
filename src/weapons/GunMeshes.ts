import * as THREE from 'three';
import type { WeaponId } from './WeaponDefs';

export interface GunModel {
  root: THREE.Group;
  /** Tip of the barrel */
  muzzle: THREE.Object3D;
  /** Magazine (animated during reload) */
  mag: THREE.Object3D;
  /** Moving part for bolt/pump animation */
  action: THREE.Object3D | null;
  /** Height of the sight line above the root origin */
  sightY: number;
  /** Where the left hand holds the gun */
  supportZ: number;
}

const mats = {
  metal: new THREE.MeshStandardMaterial({ color: 0x45484d, roughness: 0.42, metalness: 0.55 }),
  polymer: new THREE.MeshStandardMaterial({ color: 0x4a4b44, roughness: 0.75, metalness: 0.05 }),
  tan: new THREE.MeshStandardMaterial({ color: 0x7d6e52, roughness: 0.85 }),
  wood: new THREE.MeshStandardMaterial({ color: 0x5a3a20, roughness: 0.7 }),
  glass: new THREE.MeshStandardMaterial({ color: 0x88aacc, roughness: 0.05, metalness: 0.2, transparent: true, opacity: 0.18, depthWrite: false }),
  dot: new THREE.MeshBasicMaterial({ color: 0xff2a2a }),
};

function box(parent: THREE.Object3D, w: number, h: number, d: number, x: number, y: number, z: number, mat: THREE.Material, rx = 0): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  m.rotation.x = rx;
  parent.add(m);
  return m;
}

function tube(parent: THREE.Object3D, r: number, len: number, x: number, y: number, z: number, mat: THREE.Material): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 10), mat);
  m.rotation.x = Math.PI / 2;
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}

/** Builds a gun pointing down -Z with the grip at the origin. */
export function buildGun(id: WeaponId, opts: { redDot?: boolean } = {}): GunModel {
  const root = new THREE.Group();
  const muzzle = new THREE.Object3D();
  const magPivot = new THREE.Group();
  let action: THREE.Object3D | null = null;
  let sightY = 0.08;
  let supportZ = -0.3;

  switch (id) {
    case 'kestrel': {
      box(root, 0.065, 0.085, 0.42, 0, 0.03, -0.08, mats.metal);
      box(root, 0.075, 0.075, 0.24, 0, 0.03, -0.39, mats.tan);
      tube(root, 0.012, 0.22, 0, 0.035, -0.6, mats.metal);
      tube(root, 0.018, 0.06, 0, 0.035, -0.72, mats.metal);
      box(root, 0.05, 0.09, 0.26, 0, 0.0, 0.25, mats.tan);
      box(root, 0.055, 0.12, 0.05, 0, -0.04, 0.39, mats.polymer);
      box(root, 0.04, 0.11, 0.05, 0, -0.06, 0.04, mats.polymer, 0.25);
      box(root, 0.02, 0.012, 0.36, 0, 0.078, -0.16, mats.metal); // rail
      if (opts.redDot !== false) {
        // Hollow red-dot frame so the sight picture stays clear when aiming
        const cy = 0.112;
        box(root, 0.036, 0.018, 0.07, 0, 0.088, -0.05, mats.metal); // mount
        box(root, 0.042, 0.005, 0.05, 0, cy + 0.02, -0.06, mats.metal); // top
        box(root, 0.005, 0.044, 0.05, -0.0185, cy, -0.06, mats.metal); // left
        box(root, 0.005, 0.044, 0.05, 0.0185, cy, -0.06, mats.metal); // right
        box(root, 0.042, 0.005, 0.05, 0, cy - 0.02, -0.06, mats.metal); // bottom
        box(root, 0.032, 0.035, 0.002, 0, cy, -0.084, mats.glass);
        box(root, 0.0025, 0.0025, 0.001, 0, cy, -0.086, mats.dot);
        sightY = cy;
      }
      magPivot.position.set(0, -0.02, -0.12);
      box(magPivot, 0.035, 0.16, 0.07, 0, -0.08, 0, mats.polymer, 0.18);
      muzzle.position.set(0, 0.035, -0.76);
      supportZ = -0.38;
      break;
    }
    case 'harrow': {
      box(root, 0.06, 0.08, 0.3, 0, 0.03, -0.06, mats.metal);
      box(root, 0.064, 0.065, 0.14, 0, 0.025, -0.26, mats.polymer);
      tube(root, 0.012, 0.12, 0, 0.035, -0.38, mats.metal);
      box(root, 0.02, 0.06, 0.22, 0, 0.0, 0.2, mats.metal);
      box(root, 0.035, 0.08, 0.035, 0, -0.01, 0.31, mats.polymer);
      box(root, 0.038, 0.1, 0.045, 0, -0.055, 0.04, mats.polymer, 0.25);
      box(root, 0.006, 0.03, 0.006, 0, 0.082, -0.3, mats.metal);
      box(root, 0.03, 0.02, 0.02, 0, 0.078, 0.05, mats.metal);
      sightY = 0.088;
      magPivot.position.set(0, -0.01, -0.1);
      box(magPivot, 0.032, 0.2, 0.045, 0, -0.1, 0, mats.metal);
      muzzle.position.set(0, 0.035, -0.45);
      supportZ = -0.24;
      break;
    }
    case 'longreach': {
      box(root, 0.07, 0.08, 0.5, 0, 0.03, -0.1, mats.metal);
      tube(root, 0.014, 0.55, 0, 0.04, -0.62, mats.metal);
      tube(root, 0.022, 0.08, 0, 0.04, -0.9, mats.metal);
      box(root, 0.06, 0.1, 0.32, 0, -0.005, 0.27, mats.polymer);
      box(root, 0.07, 0.15, 0.06, 0, -0.03, 0.42, mats.polymer);
      box(root, 0.045, 0.11, 0.05, 0, -0.06, 0.04, mats.polymer, 0.25);
      box(root, 0.07, 0.06, 0.3, 0, 0.0, -0.34, mats.polymer);
      // Scope
      tube(root, 0.022, 0.3, 0, 0.11, -0.08, mats.metal);
      tube(root, 0.03, 0.06, 0, 0.11, -0.24, mats.metal);
      tube(root, 0.028, 0.05, 0, 0.11, 0.08, mats.metal);
      box(root, 0.02, 0.04, 0.02, 0, 0.08, -0.15, mats.metal);
      box(root, 0.02, 0.04, 0.02, 0, 0.08, 0.0, mats.metal);
      sightY = 0.11;
      action = new THREE.Group();
      action.position.set(0.045, 0.04, 0.05);
      box(action, 0.06, 0.012, 0.012, 0.03, 0, 0, mats.metal);
      root.add(action);
      magPivot.position.set(0, -0.015, -0.06);
      box(magPivot, 0.045, 0.06, 0.09, 0, -0.03, 0, mats.metal);
      muzzle.position.set(0, 0.04, -0.95);
      supportZ = -0.36;
      break;
    }
    case 'brute': {
      box(root, 0.065, 0.08, 0.34, 0, 0.03, -0.06, mats.metal);
      tube(root, 0.016, 0.46, 0, 0.045, -0.44, mats.metal);
      tube(root, 0.013, 0.36, 0, 0.005, -0.38, mats.metal);
      box(root, 0.055, 0.1, 0.3, 0, -0.01, 0.26, mats.wood);
      box(root, 0.06, 0.14, 0.05, 0, -0.04, 0.4, mats.wood);
      box(root, 0.04, 0.1, 0.05, 0, -0.06, 0.04, mats.wood, 0.25);
      box(root, 0.006, 0.006, 0.006, 0, 0.065, -0.66, mats.dot);
      sightY = 0.07;
      action = new THREE.Group();
      action.position.set(0, 0.0, -0.36);
      box(action, 0.06, 0.05, 0.16, 0, 0, 0, mats.wood);
      root.add(action);
      magPivot.position.set(0, 0.0, -0.08);
      box(magPivot, 0.02, 0.03, 0.04, 0, -0.03, 0, mats.metal);
      muzzle.position.set(0, 0.045, -0.68);
      supportZ = -0.36;
      break;
    }
    case 'p9': {
      action = new THREE.Group();
      action.position.set(0, 0.04, -0.07);
      box(action, 0.034, 0.034, 0.19, 0, 0, 0, mats.metal);
      box(action, 0.006, 0.01, 0.006, 0, 0.022, -0.085, mats.metal);
      box(action, 0.02, 0.01, 0.006, 0, 0.022, 0.085, mats.metal);
      root.add(action);
      box(root, 0.031, 0.03, 0.16, 0, 0.012, -0.075, mats.polymer);
      box(root, 0.032, 0.11, 0.05, 0, -0.045, 0.0, mats.polymer, 0.22);
      sightY = 0.067;
      magPivot.position.set(0, -0.03, 0.005);
      box(magPivot, 0.026, 0.1, 0.04, 0, -0.04, 0, mats.metal, 0.22);
      muzzle.position.set(0, 0.04, -0.17);
      supportZ = 0.0;
      break;
    }
  }
  root.add(magPivot);
  root.add(muzzle);
  root.traverse((o) => {
    if ((o as THREE.Mesh).isMesh) {
      o.castShadow = true;
    }
  });
  return { root, muzzle, mag: magPivot, action, sightY, supportZ };
}

export function disposeGun(model: GunModel): void {
  model.root.traverse((o) => {
    const m = o as THREE.Mesh;
    if (m.isMesh) m.geometry.dispose();
  });
}
