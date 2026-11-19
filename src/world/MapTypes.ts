export type MatId =
  | 'sand'
  | 'dirt'
  | 'asphalt'
  | 'concrete'
  | 'stucco'
  | 'stuccoDark'
  | 'brick'
  | 'metal'
  | 'rust'
  | 'wood'
  | 'roof'
  | 'sandbag'
  | 'containerRed'
  | 'containerBlue'
  | 'containerGreen'
  | 'containerYellow'
  | 'dark'
  | 'gravel'
  | 'invisible';

export interface BoxDef {
  min: [number, number, number];
  max: [number, number, number];
  mat: MatId;
  collide: boolean;
}

export interface CylinderDef {
  x: number;
  z: number;
  y: number;
  r: number;
  h: number;
  mat: MatId;
  collide: boolean;
}

export interface LightDef {
  x: number;
  y: number;
  z: number;
  color: number;
  intensity: number;
  distance: number;
}

export interface ZoneDef {
  x: number;
  z: number;
  r: number;
  label: string;
}

/** [x, z, yawDegrees] */
export type SpawnPoint = [number, number, number];

export interface EnvDef {
  sky: 'day' | 'dusk' | 'night';
  sunDir: [number, number, number];
  sunColor: number;
  sunIntensity: number;
  hemiSky: number;
  hemiGround: number;
  hemiIntensity: number;
  fogColor: number;
  fogDensity: number;
  ambience: 'wind' | 'harbor' | 'night';
  water?: { z: number; color: number };
}

export interface MapDef {
  id: string;
  name: string;
  description: string;
  half: number;
  ground: MatId;
  env: EnvDef;
  boxes: BoxDef[];
  cylinders: CylinderDef[];
  lights: LightDef[];
  spawns: { a: SpawnPoint[]; b: SpawnPoint[]; ffa: SpawnPoint[] };
  zones: Record<string, ZoneDef>;
  navHints: { x: number; z: number }[];
}
