import { MapBuilder, bigDoor, door, win } from '../MapBuilder';
import type { MapDef } from '../MapTypes';

/** Kessel Yard — a rail depot at night, lit by sodium lamps. */
export function buildKessel(): MapDef {
  const b = new MapBuilder(60, 4242);
  b.perimeter(4, 'brick');
  b.floor(-60, -32, 60, 32, 'gravel', 0.01);

  // Rail tracks (decorative)
  for (const z of [-22, -10, 2, 14, 26]) {
    b.floor(-60, z - 0.9, 60, z + 0.9, 'dark', 0.02);
    b.box(-60, z - 0.75, 60, z - 0.65, 0.12, 'metal', 0, false);
    b.box(-60, z + 0.65, 60, z + 0.75, 0.12, 'metal', 0, false);
  }

  // Boxcars and the locomotive
  const car = (x: number, z: number, mat: 'rust' | 'containerRed' | 'containerBlue' | 'containerGreen') => {
    b.block(x, z, 12, 3, 3, mat, 0.6);
    b.block(x, z, 10, 2.2, 0.6, 'dark');
  };
  car(-40, -22, 'rust');
  car(-26, -22, 'containerRed');
  car(20, -22, 'rust');
  car(-48, -10, 'containerBlue');
  car(-6, -10, 'rust');
  car(8, -10, 'containerGreen');
  car(40, -10, 'rust');
  car(-30, 2, 'containerRed');
  car(24, 2, 'rust');
  car(38, 2, 'containerBlue');
  car(-44, 14, 'rust');
  car(-4, 14, 'containerGreen');
  car(30, 14, 'rust');
  car(-20, 26, 'containerBlue');
  car(14, 26, 'rust');
  // Locomotive inside the depot
  b.block(0, -46, 14, 3.2, 3.6, 'containerYellow', 0.6);
  b.block(4, -46, 4, 3.2, 1.2, 'dark', 4.2);
  b.block(0, -46, 12, 2.4, 0.6, 'dark');

  // Depot (north) with big doors on the south side
  b.building(0, -46, 40, 18, 9, 'brick', [bigDoor('s', -12, 6), bigDoor('s', 12, 6), door('w', 3), door('e', -3), win('n', -10, 3), win('n', 10, 3)]);
  b.crateStack(-14, -50);
  b.crateStack(12, -41);
  b.sandbags(-6, -40, 6, -40);
  b.zone('depot', 0, -40, 7, 'Rail Depot');
  b.zone('charge', 0, -43.2, 2.5, 'Locomotive');

  // Signal box and sheds
  b.building(-46, -44, 10, 8, 4, 'brick', [door('s', 2), win('e', 0), win('n', 0)]);
  b.building(46, -44, 10, 10, 4, 'stuccoDark', [door('s', -2), door('w', 0), win('n', 2)]);
  b.building(-46, 44, 12, 8, 3.5, 'stuccoDark', [door('n', 0), door('e', 1), win('s', 0)]);
  b.building(44, 44, 12, 10, 4, 'brick', [door('n', -3), win('w', 0), door('s', 2)]);

  // Fuel tanks
  b.cylinder(20, 44, 3.5, 6, 'metal');
  b.cylinder(8, 44, 3.5, 6, 'metal');
  b.sandbags(14, 37, 14, 41);

  // Yard clutter
  b.scatter(16, -56, -34, 56, 34, (x, z, r) => (r() < 0.5 ? b.crate(x, z, 1.25) : r() < 0.5 ? b.crateStack(x, z) : b.barrier(x, z, r() < 0.5)), 2.6);
  b.scatter(6, -56, 36, 56, 56, (x, z) => b.crate(x, z, 1.2));

  // Lamps — the only real light on this map
  for (const [x, z] of [
    [-36, -30],
    [0, -30],
    [36, -30],
    [-20, 8],
    [20, 8],
    [-40, 36],
    [0, 36],
    [40, 36],
  ]) {
    b.lamp(x, z, 0xffb35c, 40, 30);
  }
  b.lights.push({ x: 0, y: 8, z: -46, color: 0xc8dcff, intensity: 30, distance: 30 });

  b.zone('extract', -48, 30, 6, 'Extraction');

  return b.build({
    id: 'kessel',
    name: 'Kessel Yard',
    description: 'Rail yard at night. Rows of boxcars, a big depot building and long sightlines down the tracks.',
    ground: 'dirt',
    env: {
      sky: 'night',
      sunDir: [0.3, 0.7, -0.5],
      sunColor: 0x9fb4ff,
      sunIntensity: 0.55,
      hemiSky: 0x40507a,
      hemiGround: 0x1a1a22,
      hemiIntensity: 0.9,
      fogColor: 0x10141f,
      fogDensity: 0.016,
      ambience: 'night',
    },
    spawns: {
      a: [
        [-52, 48, 0],
        [-44, 52, 0],
        [-34, 50, 0],
        [-54, 36, 0],
        [-28, 40, 0],
        [-56, 22, 0],
      ],
      b: [
        [52, -52, 0],
        [44, -54, 0],
        [34, -54, 0],
        [54, -34, 0],
        [56, -20, 0],
        [28, -54, 0],
      ],
      ffa: [
        [-52, 48, 0],
        [52, -52, 0],
        [0, -46, 0],
        [0, 50, 0],
        [-54, -20, 0],
        [54, 20, 0],
        [-20, -30, 0],
        [24, 34, 0],
        [-46, -44, 0],
        [46, 44, 0],
      ],
    },
  });
}
