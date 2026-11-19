import { MapBuilder, door, win } from '../MapBuilder';
import type { MapDef } from '../MapTypes';

/** Dustline — a sun-bleached desert town split by a market street. */
export function buildDustline(): MapDef {
  const b = new MapBuilder(60, 1337);
  b.perimeter(4, 'stuccoDark');

  // Main street and side alleys
  b.floor(-60, -6, 60, 6, 'asphalt');
  b.floor(-3, -60, 3, -6, 'dirt');
  b.floor(-3, 6, 3, 60, 'dirt');

  // North row
  b.building(-36, -16, 14, 10, 4, 'stucco', [door('s', 0), win('s', -4.5), win('s', 4.5), door('e', 1), win('w', 0), win('n', -3)]);
  b.building(-13, -18, 12, 12, 4.5, 'stuccoDark', [door('s', -2), door('n', 3), win('e', -2), win('w', 2), win('s', 3)]);
  b.building(14, -16, 16, 10, 4, 'stucco', [door('s', 4), win('s', -3), door('w', 0), win('n', 2), win('e', -1)]);
  b.building(38, -18, 12, 10, 5, 'brick', [door('s', -2), win('s', 2.5), win('e', 0), door('n', 2)]);

  // South row
  b.building(-38, 17, 12, 12, 4, 'stuccoDark', [door('n', 0), win('e', -2), door('s', 2), win('w', 0)]);
  b.building(-14, 18, 14, 10, 4.5, 'stucco', [door('n', -3), win('n', 3), win('w', 0), door('e', 1)]);
  b.building(12, 18, 12, 12, 4, 'brick', [door('n', 0), door('w', 3), win('s', 0), win('e', -2)]);
  b.building(36, 16, 14, 10, 4, 'stucco', [door('n', 2), win('n', -4), door('e', 0), win('s', 1)]);

  // Radio tower compound (north-east)
  b.wallWithGaps(24, -54, 24, -32, 2.6, 'concrete', [[-46, -42]]);
  b.wallWithGaps(24, -32, 56, -32, 2.6, 'concrete', [[44, 49]]);
  const towerX = 42;
  const towerZ = -45;
  for (const [ox, oz] of [
    [-2, -2],
    [2, -2],
    [-2, 2],
    [2, 2],
  ]) {
    b.block(towerX + ox, towerZ + oz, 0.4, 0.4, 18, 'metal');
  }
  for (let y = 3; y < 18; y += 3.5) {
    b.block(towerX, towerZ - 2, 4.4, 0.15, 0.15, 'metal', y, false);
    b.block(towerX, towerZ + 2, 4.4, 0.15, 0.15, 'metal', y, false);
    b.block(towerX - 2, towerZ, 0.15, 4.4, 0.15, 'metal', y, false);
    b.block(towerX + 2, towerZ, 0.15, 4.4, 0.15, 'metal', y, false);
  }
  b.block(towerX, towerZ, 1.5, 1.5, 0.6, 'containerRed', 18, false);
  b.block(34, -47, 6, 4, 3, 'metal'); // generator hut
  b.crateStack(30, -38);
  b.sandbags(36, -36, 42, -36);
  b.sandbags(47, -40, 47, -34);
  b.barrier(52, -42, false);
  b.zone('tower', towerX - 4, towerZ + 5, 6, 'Radio Tower');

  // Helipad / extraction (south-west)
  b.floor(-48, 38, -36, 50, 'concrete', 0.02);
  b.zone('extract', -42, 44, 6, 'Extraction');
  b.sandbags(-50, 34, -44, 34);
  b.sandbags(-34, 36, -34, 42);

  // Market street clutter
  b.car(-24, -2, true);
  b.car(4, 3, true);
  b.car(26, -3.5, true);
  b.sandbags(-6, -2, -6, 3);
  b.sandbags(8, -3, 8, 1.5);
  b.barrier(-44, 2, false);
  b.barrier(46, -1, false);
  b.crate(-30, 3.5);
  b.crateStack(18, 3);
  b.crate(-16, -4.2, 1.1);
  b.crate(36, 4);
  // Market stalls: table + canopy that doesn't collide
  for (const [x, z] of [
    [-8, -9],
    [2, -9],
    [24, 9.5],
    [-26, 9.5],
  ]) {
    b.block(x, z, 3, 1.2, 0.9, 'wood');
    b.block(x, z, 3.4, 2, 0.08, 'containerRed', 2.4, false);
  }
  b.zone('market', 0, 0, 8, 'Market Street');

  // Back lots
  b.scatter(10, -56, -56, 20, -26, (x, z, r) => (r() < 0.5 ? b.crate(x, z, 1.3) : b.sandbags(x - 2, z, x + 2, z)));
  b.scatter(10, -30, 26, 56, 56, (x, z, r) => (r() < 0.5 ? b.crateStack(x, z) : b.barrier(x, z, r() < 0.5)));
  b.scatter(6, -56, -26, -46, 26, (x, z) => b.crate(x, z, 1.2));
  b.scatter(6, 46, -26, 56, 26, (x, z) => b.crate(x, z, 1.2));

  b.zone('a_side', -50, 0, 8, 'West Gate');
  b.zone('b_side', 50, 0, 8, 'East Gate');

  return b.build({
    id: 'dustline',
    name: 'Dustline',
    description: 'Desert town. Tight market street, buildings with windows on both sides, radio tower compound.',
    ground: 'sand',
    env: {
      sky: 'day',
      sunDir: [-0.5, 0.8, 0.35],
      sunColor: 0xfff1d6,
      sunIntensity: 2.6,
      hemiSky: 0xbfd6ff,
      hemiGround: 0xb59a74,
      hemiIntensity: 1.1,
      fogColor: 0xd9cdb6,
      fogDensity: 0.006,
      ambience: 'wind',
    },
    spawns: {
      a: [
        [-54, -3, -90],
        [-54, 3, -90],
        [-52, -10, -90],
        [-52, 10, -90],
        [-56, 0, -90],
        [-50, -22, -90],
        [-50, 24, -90],
      ],
      b: [
        [54, -3, 90],
        [54, 3, 90],
        [52, -10, 90],
        [52, 10, 90],
        [56, 0, 90],
        [50, -24, 90],
        [50, 24, 90],
      ],
      ffa: [
        [-54, 0, -90],
        [54, 0, 90],
        [0, -50, 0],
        [0, 50, 180],
        [-40, -40, -45],
        [40, 40, 135],
        [-42, 44, -135],
        [44, -44, 45],
        [-14, 18, 0],
        [14, -16, 180],
      ],
    },
  });
}
