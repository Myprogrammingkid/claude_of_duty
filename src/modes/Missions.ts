import type { BotBehavior } from '../ai/Bot';
import type { WeaponId } from '../weapons/WeaponDefs';

export type MapId = 'dustline' | 'harbor' | 'kessel';

export interface EnemyGroup {
  id: string;
  behavior: BotBehavior;
  points: [number, number][];
  weapons?: WeaponId[];
  radius?: number;
}

interface ObjectiveBase {
  text: string;
  /** Groups spawned when this objective begins */
  spawn?: EnemyGroup[];
}

export type Objective =
  | (ObjectiveBase & { type: 'reach'; zone: string })
  | (ObjectiveBase & { type: 'eliminate'; groups: string[] })
  | (ObjectiveBase & { type: 'interact'; zone: string; seconds: number; prompt: string })
  | (ObjectiveBase & { type: 'defend'; zone: string; seconds: number; waves: { at: number; group: EnemyGroup }[] });

export interface MissionDef {
  id: string;
  title: string;
  location: string;
  map: MapId;
  briefing: string[];
  playerStart: [number, number];
  allies: [number, number][];
  groups: EnemyGroup[];
  objectives: Objective[];
  outro: string;
}

export const MISSIONS: MissionDef[] = [
  {
    id: 'm1',
    title: 'Dust and Static',
    location: 'Dustline, Veldt border region, 0640 hrs',
    map: 'dustline',
    briefing: [
      'The Veldt Coalition has taken over the Dustline radio tower and is using it to coordinate artillery across the border.',
      'Your fireteam will clear the market street, take the tower compound and plant an uplink relay so Ashgrove intelligence can tap their network.',
      'Expect militia in the buildings on both sides of the street. Use the windows and keep moving.',
    ],
    playerStart: [-54, 0],
    allies: [
      [-55, -2.5],
      [-55, 2.5],
    ],
    groups: [
      { id: 'street', behavior: 'patrol', points: [[-26, 2], [-2, -2], [10, 3], [24, 1]], radius: 10 },
      { id: 'houses', behavior: 'guard', points: [[-13, -18], [-14, 18], [14, -16], [12, 18], [-36, -16]] },
      { id: 'tower', behavior: 'guard', points: [[38, -40], [44, -38], [34, -44], [48, -46], [40, -50], [30, -36]] },
    ],
    objectives: [
      { type: 'eliminate', groups: ['street', 'houses'], text: 'Clear the market street' },
      { type: 'reach', zone: 'tower', text: 'Breach the radio tower compound' },
      { type: 'eliminate', groups: ['tower'], text: 'Eliminate the tower garrison' },
      { type: 'interact', zone: 'tower', seconds: 5, text: 'Plant the uplink relay', prompt: 'Hold [E] to plant the relay' },
      {
        type: 'defend',
        zone: 'tower',
        seconds: 60,
        text: 'Defend the relay while it transmits',
        waves: [
          { at: 4, group: { id: 'w1', behavior: 'assault', points: [[54, 10], [52, -6], [56, 20]] } },
          { at: 24, group: { id: 'w2', behavior: 'assault', points: [[16, -54], [8, -50], [2, -56]] } },
          { at: 42, group: { id: 'w3', behavior: 'assault', points: [[55, -10], [50, 6], [54, 16], [56, -22]] } },
        ],
      },
      {
        type: 'reach',
        zone: 'extract',
        text: 'Reach the extraction helipad',
        spawn: [{ id: 'pursuit', behavior: 'assault', points: [[50, 0], [52, 12], [48, -12]] }],
      },
    ],
    outro: 'The relay is transmitting. Ashgrove intelligence now has a live feed of Coalition artillery traffic.',
  },
  {
    id: 'm2',
    title: 'Iron Tide',
    location: 'Harbor 9, Veldt coast, 1910 hrs',
    map: 'harbor',
    briefing: [
      'Coalition supply ships are unloading weapons at Harbor 9 under the cover of a communications mast in the container yard.',
      'Land on the west quay, push through the container yard and plant a jammer on the uplink mast.',
      'Once the jammer is live, the warehouse garrisons will counter-attack. Hold the mast, clean up, and get to the boat.',
    ],
    playerStart: [-56, 44],
    allies: [
      [-54, 41.5],
      [-58, 41.5],
    ],
    groups: [
      { id: 'dock', behavior: 'patrol', points: [[-30, 34], [-10, 40], [10, 36]], radius: 12 },
      { id: 'yard', behavior: 'patrol', points: [[-20, -5], [-6, -14], [6, 18], [20, -14], [34, 8], [-30, 14], [14, 28]], radius: 10 },
      { id: 'warehouse', behavior: 'guard', points: [[-34, -44], [-26, -46], [26, -44], [22, -40]] },
    ],
    objectives: [
      { type: 'reach', zone: 'yard', text: 'Push through the container yard' },
      { type: 'interact', zone: 'uplink', seconds: 5, text: 'Plant the jammer on the uplink mast', prompt: 'Hold [E] to plant the jammer' },
      {
        type: 'defend',
        zone: 'uplink',
        seconds: 75,
        text: 'Hold the mast while the jammer runs',
        waves: [
          { at: 3, group: { id: 'w1', behavior: 'assault', points: [[-34, -44], [-30, -40], [-40, -40]] } },
          { at: 25, group: { id: 'w2', behavior: 'assault', points: [[26, -44], [30, -46], [20, -42]] } },
          { at: 50, group: { id: 'w3', behavior: 'assault', points: [[50, -50], [56, -40], [44, -30], [0, -55]] } },
        ],
      },
      { type: 'eliminate', groups: ['dock', 'yard', 'warehouse', 'w1', 'w2', 'w3'], text: 'Eliminate the remaining hostiles' },
      { type: 'reach', zone: 'extract', text: 'Get to the extraction boat' },
    ],
    outro: 'With the mast jammed, the Coalition fleet has lost contact with shore. The harbor is ours.',
  },
  {
    id: 'm3',
    title: 'Last Light',
    location: 'Kessel Yard, Veldt interior, 0220 hrs',
    map: 'kessel',
    briefing: [
      "An armored train is being prepared at Kessel Yard to move the Coalition's last artillery battery to the front.",
      'Move through the rail yard under cover of darkness, clear the depot and plant a charge on the locomotive.',
      'Once it blows, every patrol in the yard will come after you. Reach the landing zone and hold until the helicopter arrives.',
    ],
    playerStart: [-52, 48],
    allies: [[-50, 50.5]],
    groups: [
      { id: 'yard', behavior: 'patrol', points: [[-30, 30], [-10, 20], [10, 8], [30, 20], [-40, -4], [20, -4], [0, -16]], radius: 12 },
      { id: 'depot', behavior: 'guard', points: [[-10, -44], [10, -44], [-16, -40], [16, -40], [0, -52], [-5, -35]] },
      { id: 'sheds', behavior: 'guard', points: [[-46, -38], [46, -38]] },
    ],
    objectives: [
      { type: 'reach', zone: 'depot', text: 'Infiltrate the rail depot' },
      { type: 'eliminate', groups: ['depot'], text: 'Clear the depot' },
      { type: 'interact', zone: 'charge', seconds: 5, text: 'Plant the charge on the locomotive', prompt: 'Hold [E] to plant the charge' },
      {
        type: 'reach',
        zone: 'extract',
        text: 'Get clear and reach the landing zone',
        spawn: [{ id: 'hunters', behavior: 'assault', points: [[50, -50], [54, -30], [40, -54], [56, -10], [30, -54]] }],
      },
      {
        type: 'defend',
        zone: 'extract',
        seconds: 45,
        text: 'Hold the LZ until the helicopter arrives',
        waves: [
          { at: 6, group: { id: 'lz1', behavior: 'assault', points: [[40, 40], [50, 30], [30, 50]] } },
          { at: 24, group: { id: 'lz2', behavior: 'assault', points: [[0, 0], [10, -10], [-10, -20], [20, 10]] } },
        ],
      },
    ],
    outro: 'The locomotive is wrecked and the battery is stranded. Ashgrove armor rolls through Kessel at dawn.',
  },
];
