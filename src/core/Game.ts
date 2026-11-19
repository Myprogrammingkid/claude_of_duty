import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import type { Difficulty } from '../game/Difficulty';
import { Session, type Loadout } from '../game/Session';
import { BotMatch, type BotMatchConfig } from '../modes/BotMatch';
import { Campaign } from '../modes/Campaign';
import { formatTime } from '../modes/Mode';
import { MISSIONS, type MapId, type MissionDef } from '../modes/Missions';
import { HUD } from '../ui/HUD';
import { Menus } from '../ui/Menus';
import { ViewModel } from '../weapons/ViewModel';
import { buildDustline } from '../world/maps/dustline';
import { buildHarbor } from '../world/maps/harbor';
import { buildKessel } from '../world/maps/kessel';
import type { MapDef } from '../world/MapTypes';
import { AudioSystem } from './Audio';
import { Input } from './Input';
import { saveSettings, settings } from './Settings';

type State = 'menu' | 'loading' | 'ready' | 'playing' | 'paused' | 'results';

type Launch =
  | { kind: 'campaign'; index: number; difficulty: Difficulty; loadout: Loadout }
  | { kind: 'match'; cfg: BotMatchConfig; map: MapId; difficulty: Difficulty; loadout: Loadout };

const MAP_BUILDERS: Record<MapId, () => MapDef> = {
  dustline: buildDustline,
  harbor: buildHarbor,
  kessel: buildKessel,
};
const mapCache = new Map<MapId, MapDef>();
function getMap(id: MapId): MapDef {
  let m = mapCache.get(id);
  if (!m) mapCache.set(id, (m = MAP_BUILDERS[id]()));
  return m;
}

const SIM_STEP = 1 / 60;

/** Top-level app: renderer, main loop, state machine between menus and sessions. */
export class Game {
  private readonly renderer: THREE.WebGLRenderer;
  private readonly input: Input;
  private readonly audio = new AudioSystem();
  private readonly hud: HUD;
  private readonly menus: Menus;
  private readonly viewModel: ViewModel;
  private session: Session | null = null;
  private launch: Launch | null = null;
  private state: State = 'menu';
  private last = performance.now();
  private fps = 60;
  /** Neutral image-based lighting so metal surfaces don't render black. */
  private readonly envMap: THREE.Texture;

  constructor(container: HTMLElement) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.autoClear = false;
    const canvas = this.renderer.domElement;
    canvas.className = 'game-canvas';
    container.appendChild(canvas);

    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.envMap = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();

    this.input = new Input(canvas);
    this.viewModel = new ViewModel(window.innerWidth / window.innerHeight);
    this.hud = new HUD(container);
    this.menus = new Menus(container, this.audio, {
      startCampaign: (m, d, l) => this.startCampaign(m, d, l),
      startMatch: (cfg, map, d, l) => this.begin({ kind: 'match', cfg, map, difficulty: d, loadout: l }),
      resume: () => this.resume(),
      restart: () => this.launch && this.begin(this.launch),
      quitToMenu: () => this.quitToMenu(),
      nextMission: () => this.nextMission(),
      applySettings: () => this.applySettings(),
    });

    this.input.onLockChange = (locked) => this.onLockChange(locked);
    this.input.onKey = (code) => {
      if (code === 'F3') {
        settings.showFps = !settings.showFps;
        saveSettings();
      }
    };
    canvas.addEventListener('click', () => {
      if (this.state === 'ready' || this.state === 'paused') this.resume();
    });
    window.addEventListener('resize', () => this.onResize());
    this.applySettings();
    this.menus.showMain();
  }

  start(): void {
    const loop = (now: number) => {
      this.frame(now);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  private applySettings(): void {
    this.audio.setVolume(settings.volume);
  }

  private onResize(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h);
    this.viewModel.camera.aspect = w / h;
    this.viewModel.camera.updateProjectionMatrix();
  }

  private startCampaign(m: MissionDef, difficulty: Difficulty, loadout: Loadout): void {
    this.begin({ kind: 'campaign', index: MISSIONS.indexOf(m), difficulty, loadout });
  }

  private begin(launch: Launch): void {
    this.audio.ensure();
    this.disposeSession();
    this.launch = launch;
    this.state = 'loading';
    this.hud.show(false);
    this.menus.showLoading(launch.kind === 'campaign' ? `Deploying to ${MISSIONS[launch.index].location}...` : 'Building the battlefield...');
    // Let the loading screen paint before the heavy build.
    setTimeout(() => {
      const mapId = launch.kind === 'campaign' ? MISSIONS[launch.index].map : launch.map;
      const mode = launch.kind === 'campaign' ? new Campaign(MISSIONS[launch.index]) : new BotMatch(launch.cfg);
      const session = new Session({ map: getMap(mapId), mode, loadout: launch.loadout, difficulty: launch.difficulty }, this.audio, window.innerWidth / window.innerHeight);
      session.player.onShot = (w) => this.viewModel.onShot(w);
      const sky = session.level.def.env.sky;
      const envIntensity = sky === 'night' ? 0.12 : sky === 'dusk' ? 0.35 : 0.5;
      session.scene.environment = this.envMap;
      session.scene.environmentIntensity = envIntensity;
      this.viewModel.setEnvironment(this.envMap, envIntensity + 0.15);
      this.viewModel.setLighting(session.level.def.env);
      session.start();
      this.session = session;
      this.hud.bind(session);
      this.state = 'ready';
      // Compile shaders now rather than mid-fight
      this.renderer.compile(session.scene, session.camera);
      const title = launch.kind === 'campaign' ? MISSIONS[launch.index].title : `${mode.title} · ${session.level.def.name}`;
      const sub = launch.kind === 'campaign' ? MISSIONS[launch.index].objectives[0].text : 'Click to lock the mouse. Press Esc to pause.';
      this.menus.showClickToStart(title, sub);
    }, 40);
  }

  private resume(): void {
    if (!this.session) return;
    this.audio.ensure();
    this.input.requestLock();
  }

  private onLockChange(locked: boolean): void {
    if (locked && (this.state === 'ready' || this.state === 'paused')) {
      this.state = 'playing';
      this.menus.hide();
      this.hud.show(true);
    } else if (!locked && this.state === 'playing') {
      this.state = 'paused';
      const s = this.session!;
      this.menus.showPause({ title: s.mode.title, teams: s.mode.scoreboard() });
    }
  }

  private quitToMenu(): void {
    this.input.exitLock();
    this.disposeSession();
    this.state = 'menu';
    this.hud.show(false);
    this.menus.showMain();
  }

  private nextMission(): void {
    if (!this.launch || this.launch.kind !== 'campaign') return;
    const next = this.launch.index + 1;
    this.disposeSession();
    this.state = 'menu';
    this.hud.show(false);
    this.menus.showMissionBriefing(next);
  }

  private disposeSession(): void {
    if (!this.session) return;
    this.hud.unbind();
    this.session.dispose();
    this.session = null;
  }

  private endSession(): void {
    const s = this.session!;
    const result = s.mode.result!;
    this.state = 'results';
    this.input.exitLock();
    this.hud.show(false);
    const st = s.player.stats;
    this.menus.showResults(
      result,
      {
        kills: st.kills,
        deaths: st.deaths,
        accuracy: st.shots ? Math.round((st.hits / st.shots) * 100) : 0,
        headshots: st.headshots,
        time: formatTime(s.time),
      },
      {
        campaignIndex: this.launch?.kind === 'campaign' ? this.launch.index : null,
        teams: s.mode.scoreboard(),
        modeTitle: s.mode.title,
      },
    );
    this.audio.beep(result.victory ? 880 : 330, 0.25);
  }

  private frame(now: number): void {
    const dt = Math.min(0.1, (now - this.last) / 1000);
    this.last = now;
    if (dt > 0) this.fps += (1 / dt - this.fps) * 0.05;
    const s = this.session;
    this.renderer.clear();
    if (s) {
      if (this.state === 'playing') {
        s.player.readInput(this.input);
        const steps = Math.max(1, Math.ceil(dt / SIM_STEP - 0.01));
        const h = dt / steps;
        for (let i = 0; i < steps; i++) s.update(h);
        if (s.mode.result) this.endSession();
      }
      const aspect = window.innerWidth / window.innerHeight;
      s.player.updateCamera(s.camera, dt, aspect, s.shake);
      s.level.update(s.camera);
      this.audio.updateListener(s.camera);
      if (this.state === 'playing' || this.state === 'ready') this.viewModel.update(dt, s.player.viewModelState());
      this.renderer.render(s.scene, s.camera);
      if (this.state !== 'results') {
        this.renderer.clearDepth();
        this.renderer.render(this.viewModel.scene, this.viewModel.camera);
      }
      if (this.state === 'playing') this.hud.update(s, s.camera, this.fps, settings.showFps);
    }
    this.input.endFrame();
  }
}
