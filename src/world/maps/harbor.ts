import { MapBuilder, bigDoor, door, win } from '../MapBuilder';
import type { MapDef, MatId } from '../MapTypes';

/** Harbor 9 — container port at dusk with warehouses and a gantry crane. */
export function buildHarbor(): MapDef {
  const b = new MapBuilder(64, 9009);
  b.perimeter(5, 'concrete', ['s']);

  // Quay edge: water lies beyond z = 50; a low wall keeps players on the dock.
  b.box(-64, 50, 64, 51, 0.9, 'concrete');
  b.box(-64, 51, 64, 52, 40, 'invisible');
  b.floor(-64, 38, 64, 50, 'concrete', 0.02);
  for (let x = -58; x <= 58; x += 8) b.cylinder(x, 49, 0.35, 0.8, 'dark', 0.9, false);

  // Warehouses (north)
  b.building(-34, -44, 28, 16, 8, 'metal', [bigDoor('s', -6), bigDoor('s', 7), door('e', 2), door('w', -3), win('n', 0, 3)]);
  b.building(26, -44, 24, 16, 8, 'rust', [bigDoor('s', 0), door('w', 3), door('e', -2), win('n', -6, 3), win('n', 6, 3)]);
  // Interior cover in warehouses
  b.crateStack(-40, -46);
  b.crateStack(-28, -40);
  b.container(-34, -48, true, 'containerBlue');
  b.crateStack(22, -46);
  b.container(30, -40, false, 'containerGreen');

  // Harbour office
  b.building(-50, 20, 10, 8, 3.5, 'stucco', [door('e', 0), win('n', 0), win('s', -2)]);

  // Container yard — a grid of stacks with aisles
  const colors: MatId[] = ['containerRed', 'containerBlue', 'containerGreen', 'containerYellow'];
  let ci = 0;
  const rows = [-20, -10, 2, 12, 24];
  const cols = [-36, -26, -16, 10, 20, 30, 40];
  for (const z of rows) {
    for (const x of cols) {
      const r = b.rng();
      if (r < 0.12) continue;
      const levels = r > 0.65 ? 2 : 1;
      b.container(x, z, true, colors[ci++ % colors.length], levels);
      if (b.rng() < 0.35) b.container(x, z + 3.2, true, colors[ci++ % colors.length]);
    }
  }
  // Central plaza with the uplink tower left open for the objective
  b.block(0, 6, 2, 2, 4.5, 'metal');
  b.block(0, 6, 0.4, 0.4, 9, 'metal', 4.5, false);
  b.block(0, 6, 1.6, 0.2, 1.0, 'dark', 9, false);
  b.sandbags(-6, 0, -6, 4);
  b.sandbags(5, 9, 5, 13);
  b.sandbags(-3, 14, 3, 14);
  b.barrier(4, -1, true);
  b.zone('uplink', 0, 6, 7, 'Uplink Mast');

  // Gantry crane near the quay
  for (const [x, z] of [
    [-4, 34],
    [4, 34],
    [-4, 44],
    [4, 44],
  ]) {
    b.block(x, z, 1, 1, 22, 'containerYellow');
  }
  b.block(0, 34, 9, 1, 1.2, 'containerYellow', 22, false);
  b.block(0, 44, 9, 1, 1.2, 'containerYellow', 22, false);
  b.block(0, 39, 2.5, 30, 1.5, 'containerYellow', 23.2, false);
  b.block(0, 39, 3, 3, 2.5, 'dark', 20, false);

  // Quay clutter
  b.container(-22, 42, true, 'containerBlue');
  b.container(18, 42, true, 'containerRed', 2);
  b.container(34, 44, false, 'containerGreen');
  b.crateStack(-36, 40);
  b.crate(-12, 44);
  b.crate(10, 40, 1.4);
  b.barrier(46, 38, true);
  b.zone('extract', 50, 44, 6, 'Extraction Boat');

  // Fuel tanks east
  b.cylinder(52, -14, 3.2, 7, 'metal');
  b.cylinder(52, -2, 3.2, 7, 'metal');
  b.sandbags(44, -20, 44, -14);

  b.scatter(14, -60, -30, 60, 36, (x, z, r) => (r() < 0.6 ? b.crate(x, z, 1.25) : b.barrier(x, z, r() < 0.5)), 2.2);

  for (const [x, z] of [
    [-20, 34],
    [24, 34],
    [-40, -28],
    [30, -28],
    [-6, -8],
    [48, 20],
  ]) {
    b.lamp(x, z, 0xffc890, 18, 24);
  }

  b.zone('yard', 0, -4, 10, 'Container Yard');

  return b.build({
    id: 'harbor',
    name: 'Harbor 9',
    description: 'Container port at dusk. Long aisles between the stacks, warehouses to the north and open water to the south.',
    ground: 'asphalt',
    env: {
      sky: 'dusk',
      sunDir: [0.7, 0.25, 0.55],
      sunColor: 0xffb07a,
      sunIntensity: 2.2,
      hemiSky: 0x8aa0c8,
      hemiGround: 0x5a4a40,
      hemiIntensity: 0.9,
      fogColor: 0xb09080,
      fogDensity: 0.008,
      ambience: 'harbor',
      water: { z: 51, color: 0x1d3c52 },
    },
    spawns: {
      a: [
        [-56, 44, 0],
        [-50, 42, 0],
        [-44, 44, 0],
        [-56, 34, 0],
        [-58, 26, 0],
        [-40, 34, 0],
      ],
      b: [
        [50, -56, 0],
        [56, -50, 0],
        [44, -56, 0],
        [56, -34, 0],
        [40, -30, 0],
        [58, -40, 0],
      ],
      ffa: [
        [-56, 44, 0],
        [50, -56, 0],
        [-34, -44, 0],
        [26, -44, 0],
        [0, 30, 0],
        [-50, 0, 0],
        [56, 10, 0],
        [0, -20, 0],
        [30, 44, 0],
        [-56, -54, 0],
      ],
    },
  });
}
