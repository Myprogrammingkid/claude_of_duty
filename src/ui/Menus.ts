import type { AudioSystem } from '../core/Audio';
import { saveSettings, settings } from '../core/Settings';
import { DIFFICULTIES, type Difficulty } from '../game/Difficulty';
import type { Loadout } from '../game/Session';
import type { BotMatchConfig } from '../modes/BotMatch';
import type { ModeResult, ScoreTeam } from '../modes/Mode';
import { MISSIONS, type MapId, type MissionDef } from '../modes/Missions';
import { PRIMARIES, SECONDARIES, WEAPONS, type WeaponId } from '../weapons/WeaponDefs';
import { renderScoreboard } from './HUD';

export interface MenuCallbacks {
  startCampaign(mission: MissionDef, difficulty: Difficulty, loadout: Loadout): void;
  startMatch(cfg: BotMatchConfig, map: MapId, difficulty: Difficulty, loadout: Loadout): void;
  resume(): void;
  restart(): void;
  quitToMenu(): void;
  nextMission(): void;
  applySettings(): void;
}

export interface ResultStats {
  kills: number;
  deaths: number;
  accuracy: number;
  headshots: number;
  time: string;
}

const MAP_INFO: Record<MapId, { name: string; desc: string }> = {
  dustline: { name: 'Dustline', desc: 'Desert town. Close quarters on the market street, with longer sightlines across the back lots.' },
  harbor: { name: 'Harbor 9', desc: 'Container port at dusk. Mid-range fights down the container aisles.' },
  kessel: { name: 'Kessel Yard', desc: 'Rail yard at night. Low visibility around boxcars and the depot.' },
};

const PROGRESS_KEY = 'claude-of-duty.progress';
const LOADOUT_KEY = 'claude-of-duty.loadout';

function loadJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? { ...fallback, ...(JSON.parse(raw) as T) } : fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore
  }
}

function esc(s: string): string {
  return s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
}

/** All full-screen menus. Each screen replaces the root's content. */
export class Menus {
  readonly root: HTMLElement;
  private difficulty: Difficulty = 'regular';
  private loadout: Loadout = loadJSON<Loadout>(LOADOUT_KEY, { primary: 'kestrel', secondary: 'p9' });
  private progress = loadJSON<{ unlocked: number }>(PROGRESS_KEY, { unlocked: 1 });
  private match: BotMatchConfig & { map: MapId } = { variant: 'tdm', size: 6, scoreLimit: 30, timeLimit: 600, map: 'dustline' };

  constructor(
    parent: HTMLElement,
    private readonly audio: AudioSystem,
    private readonly cb: MenuCallbacks,
  ) {
    this.root = document.createElement('div');
    this.root.className = 'menu';
    parent.appendChild(this.root);
  }

  hide(): void {
    this.root.classList.add('hidden');
    this.root.innerHTML = '';
  }

  private screen(html: string, actions: Record<string, (el: HTMLElement) => void>, cls = ''): void {
    this.root.className = `menu ${cls}`;
    this.root.innerHTML = html;
    this.root.querySelectorAll<HTMLElement>('[data-act]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        this.audio.uiClick();
        const act = el.dataset.act!;
        const fn = actions[act] ?? actions[act.split(':')[0]];
        fn?.(el);
      });
    });
  }

  unlockMission(index: number): void {
    if (index + 1 > this.progress.unlocked) {
      this.progress.unlocked = Math.min(MISSIONS.length, index + 1);
      saveJSON(PROGRESS_KEY, this.progress);
    }
  }

  showMain(): void {
    this.screen(
      `<div class="title-block">
        <div class="logo">CLAUDE <span>OF</span> DUTY</div>
        <div class="tagline">ASHGROVE RANGERS // OPERATION VELDT</div>
      </div>
      <div class="main-buttons">
        <button data-act="campaign">Campaign</button>
        <button data-act="match">Bot Match</button>
        <button data-act="settings">Settings</button>
        <button data-act="controls">Controls</button>
      </div>
      <div class="footer">An original semi-realistic FPS. All models and sounds are generated in code.</div>`,
      {
        campaign: () => this.showCampaign(),
        match: () => this.showMatchSetup(),
        settings: () => this.showSettings(() => this.showMain()),
        controls: () => this.showControls(() => this.showMain()),
      },
      'main-menu',
    );
  }

  private difficultyPicker(): string {
    return `<div class="picker"><label>Difficulty</label>${(Object.keys(DIFFICULTIES) as Difficulty[])
      .map((d) => `<button class="chip ${d === this.difficulty ? 'on' : ''}" data-act="diff:${d}">${DIFFICULTIES[d].label}</button>`)
      .join('')}</div>`;
  }

  showCampaign(): void {
    const cards = MISSIONS.map((m, i) => {
      const locked = i + 1 > this.progress.unlocked;
      return `<div class="card mission ${locked ? 'locked' : ''}" ${locked ? '' : `data-act="mission:${i}"`}>
        <div class="card-kicker">MISSION ${i + 1}</div>
        <div class="card-title">${esc(m.title)}</div>
        <div class="card-sub">${esc(m.location)}</div>
        <div class="card-body">${locked ? 'Complete the previous mission to unlock.' : esc(m.briefing[0])}</div>
      </div>`;
    }).join('');
    this.screen(
      `<h1>Campaign</h1>
      <div class="cards">${cards}</div>
      ${this.difficultyPicker()}
      <div class="nav-row"><button class="ghost" data-act="back">Back</button></div>`,
      {
        mission: (el) => {
          const m = MISSIONS[Number(el.dataset.act!.split(':')[1])];
          this.showLoadout(() => this.showBriefing(m), () => this.showCampaign());
        },
        diff: (el) => {
          this.difficulty = el.dataset.act!.split(':')[1] as Difficulty;
          this.showCampaign();
        },
        back: () => this.showMain(),
      },
    );
  }

  showBriefing(m: MissionDef): void {
    this.screen(
      `<div class="briefing">
        <div class="card-kicker">${esc(m.location)}</div>
        <h1>${esc(m.title)}</h1>
        ${m.briefing.map((p) => `<p>${esc(p)}</p>`).join('')}
        <h3>Objectives</h3>
        <ol>${m.objectives.map((o) => `<li>${esc(o.text)}</li>`).join('')}</ol>
        <div class="loadout-summary">Loadout: <b>${WEAPONS[this.loadout.primary].name}</b> + <b>${WEAPONS[this.loadout.secondary].name}</b> · 2 frag grenades · ${DIFFICULTIES[this.difficulty].label}</div>
        <div class="nav-row"><button class="ghost" data-act="back">Back</button><button data-act="go">Deploy</button></div>
      </div>`,
      {
        back: () => this.showCampaign(),
        go: () => this.cb.startCampaign(m, this.difficulty, { ...this.loadout }),
      },
    );
  }

  showMatchSetup(): void {
    const m = this.match;
    const chip = (act: string, label: string, on: boolean) => `<button class="chip ${on ? 'on' : ''}" data-act="${act}">${label}</button>`;
    const maps = (Object.keys(MAP_INFO) as MapId[])
      .map(
        (id) => `<div class="card map ${m.map === id ? 'selected' : ''}" data-act="map:${id}">
          <div class="card-title">${MAP_INFO[id].name}</div><div class="card-body">${MAP_INFO[id].desc}</div></div>`,
      )
      .join('');
    const sizes = m.variant === 'tdm' ? [3, 4, 6, 8] : [5, 7, 9, 11];
    const limits = m.variant === 'tdm' ? [20, 30, 50, 75] : [10, 15, 20, 30];
    this.screen(
      `<h1>Bot Match</h1>
      <div class="picker"><label>Mode</label>${chip('variant:tdm', 'Team Deathmatch', m.variant === 'tdm')}${chip('variant:ffa', 'Free-for-All', m.variant === 'ffa')}</div>
      <div class="cards">${maps}</div>
      <div class="picker"><label>${m.variant === 'tdm' ? 'Team size' : 'Bots'}</label>${sizes.map((s) => chip(`size:${s}`, m.variant === 'tdm' ? `${s}v${s}` : String(s), m.size === s)).join('')}</div>
      <div class="picker"><label>Score limit</label>${limits.map((s) => chip(`limit:${s}`, String(s), m.scoreLimit === s)).join('')}</div>
      <div class="picker"><label>Time limit</label>${[300, 600, 900].map((s) => chip(`time:${s}`, `${s / 60} min`, m.timeLimit === s)).join('')}</div>
      ${this.difficultyPicker()}
      <div class="nav-row"><button class="ghost" data-act="back">Back</button><button data-act="go">Choose Loadout</button></div>`,
      {
        variant: (el) => {
          m.variant = el.dataset.act!.split(':')[1] as 'tdm' | 'ffa';
          m.size = m.variant === 'tdm' ? 6 : 7;
          m.scoreLimit = m.variant === 'tdm' ? 30 : 15;
          this.showMatchSetup();
        },
        map: (el) => {
          m.map = el.dataset.act!.split(':')[1] as MapId;
          this.showMatchSetup();
        },
        size: (el) => {
          m.size = Number(el.dataset.act!.split(':')[1]);
          this.showMatchSetup();
        },
        limit: (el) => {
          m.scoreLimit = Number(el.dataset.act!.split(':')[1]);
          this.showMatchSetup();
        },
        time: (el) => {
          m.timeLimit = Number(el.dataset.act!.split(':')[1]);
          this.showMatchSetup();
        },
        diff: (el) => {
          this.difficulty = el.dataset.act!.split(':')[1] as Difficulty;
          this.showMatchSetup();
        },
        back: () => this.showMain(),
        go: () =>
          this.showLoadout(
            () => this.cb.startMatch({ variant: m.variant, size: m.size, scoreLimit: m.scoreLimit, timeLimit: m.timeLimit }, m.map, this.difficulty, { ...this.loadout }),
            () => this.showMatchSetup(),
          ),
      },
    );
  }

  showLoadout(next: () => void, back: () => void): void {
    const statBar = (label: string, v: number) => `<div class="stat"><span>${label}</span><div class="stat-bar"><div style="width:${v * 100}%"></div></div></div>`;
    const card = (id: WeaponId, slot: 'primary' | 'secondary') => {
      const d = WEAPONS[id];
      const on = this.loadout[slot] === id;
      return `<div class="card weapon ${on ? 'selected' : ''}" data-act="${slot}:${id}">
        <div class="card-kicker">${d.kind.toUpperCase()}</div>
        <div class="card-title">${esc(d.name)}</div>
        <div class="card-body">${esc(d.description)}</div>
        ${statBar('Damage', d.stats.damage)}${statBar('Fire rate', d.stats.rate)}${statBar('Range', d.stats.range)}${statBar('Control', d.stats.control)}${statBar('Mobility', d.stats.mobility)}
        <div class="card-foot">${d.magSize} rds · ${d.rpm} rpm</div>
      </div>`;
    };
    this.screen(
      `<h1>Loadout</h1>
      <h3>Primary</h3><div class="cards">${PRIMARIES.map((id) => card(id, 'primary')).join('')}</div>
      <h3>Secondary</h3><div class="cards">${SECONDARIES.map((id) => card(id, 'secondary')).join('')}
        <div class="card info"><div class="card-kicker">EQUIPMENT</div><div class="card-title">2× Frag Grenade</div><div class="card-body">Press G to throw. The fuse is 3.2 seconds, and it bounces off walls.</div></div>
      </div>
      <div class="nav-row"><button class="ghost" data-act="back">Back</button><button data-act="go">Continue</button></div>`,
      {
        primary: (el) => {
          this.loadout.primary = el.dataset.act!.split(':')[1] as WeaponId;
          saveJSON(LOADOUT_KEY, this.loadout);
          this.showLoadout(next, back);
        },
        secondary: (el) => {
          this.loadout.secondary = el.dataset.act!.split(':')[1] as WeaponId;
          saveJSON(LOADOUT_KEY, this.loadout);
          this.showLoadout(next, back);
        },
        back,
        go: next,
      },
    );
  }

  showLoading(text: string): void {
    this.screen(`<div class="loading"><div class="spinner"></div><div>${esc(text)}</div></div>`, {}, 'overlay');
  }

  showClickToStart(title: string, sub: string): void {
    this.screen(
      `<div class="click-start" data-act="go"><h1>${esc(title)}</h1><p>${esc(sub)}</p><div class="pulse">Click to begin</div></div>`,
      { go: () => this.cb.resume() },
      'overlay',
    );
  }

  showPause(scoreboard: { title: string; teams: ScoreTeam[] } | null): void {
    this.screen(
      `<h1>Paused</h1>
      <div class="main-buttons">
        <button data-act="resume">Resume</button>
        <button data-act="restart">Restart</button>
        <button data-act="settings">Settings</button>
        <button data-act="controls">Controls</button>
        <button class="ghost" data-act="quit">Quit to Menu</button>
      </div>
      ${scoreboard ? `<div class="pause-sb">${renderScoreboard(scoreboard.title, scoreboard.teams)}</div>` : ''}`,
      {
        resume: () => this.cb.resume(),
        restart: () => this.cb.restart(),
        settings: () => this.showSettings(() => this.showPause(scoreboard)),
        controls: () => this.showControls(() => this.showPause(scoreboard)),
        quit: () => this.cb.quitToMenu(),
      },
      'overlay',
    );
  }

  showSettings(back: () => void): void {
    const slider = (key: string, label: string, min: number, max: number, step: number, value: number, fmt: (v: number) => string) =>
      `<div class="setting"><label>${label}</label><input type="range" data-key="${key}" min="${min}" max="${max}" step="${step}" value="${value}"><span class="val" data-val="${key}">${fmt(value)}</span></div>`;
    const toggle = (key: string, label: string, on: boolean) =>
      `<div class="setting"><label>${label}</label><button class="chip ${on ? 'on' : ''}" data-act="toggle:${key}">${on ? 'On' : 'Off'}</button></div>`;
    const fmts: Record<string, (v: number) => string> = {
      sensitivity: (v) => v.toFixed(1),
      adsSensitivity: (v) => `${Math.round(v * 100)}%`,
      fov: (v) => `${v}°`,
      volume: (v) => `${Math.round(v * 100)}%`,
    };
    this.screen(
      `<h1>Settings</h1>
      <div class="settings">
        ${slider('sensitivity', 'Mouse sensitivity', 0.5, 10, 0.1, settings.sensitivity, fmts.sensitivity)}
        ${slider('adsSensitivity', 'Aiming sensitivity', 0.3, 1.5, 0.05, settings.adsSensitivity, fmts.adsSensitivity)}
        ${slider('fov', 'Field of view', 65, 110, 1, settings.fov, fmts.fov)}
        ${slider('volume', 'Master volume', 0, 1, 0.05, settings.volume, fmts.volume)}
        ${toggle('invertY', 'Invert Y axis', settings.invertY)}
        ${toggle('showFps', 'Show FPS (F3)', settings.showFps)}
        ${toggle('shadows', 'Shadows (applies next match)', settings.shadows)}
      </div>
      <div class="nav-row"><button data-act="back">Done</button></div>`,
      {
        toggle: (el) => {
          const key = el.dataset.act!.split(':')[1] as 'invertY' | 'showFps' | 'shadows';
          settings[key] = !settings[key];
          saveSettings();
          this.cb.applySettings();
          this.showSettings(back);
        },
        back,
      },
      'overlay',
    );
    this.root.querySelectorAll<HTMLInputElement>('input[type=range]').forEach((input) => {
      input.addEventListener('input', () => {
        const key = input.dataset.key as 'sensitivity' | 'adsSensitivity' | 'fov' | 'volume';
        settings[key] = Number(input.value);
        this.root.querySelector(`[data-val="${key}"]`)!.textContent = fmts[key](settings[key]);
        saveSettings();
        this.cb.applySettings();
      });
    });
  }

  showControls(back: () => void): void {
    const rows: [string, string][] = [
      ['W A S D', 'Move'],
      ['Mouse', 'Look'],
      ['Left click', 'Fire'],
      ['Right click (hold)', 'Aim down sights'],
      ['Shift (hold)', 'Sprint (while scoped: hold breath)'],
      ['C', 'Crouch (while sprinting: slide)'],
      ['Space', 'Jump'],
      ['R', 'Reload'],
      ['1 / 2 / Q / Wheel', 'Switch weapon'],
      ['B', 'Toggle fire mode'],
      ['G', 'Throw frag grenade'],
      ['V', 'Melee'],
      ['E (hold)', 'Interact'],
      ['Tab (hold)', 'Scoreboard'],
      ['Esc', 'Pause'],
      ['F3', 'FPS counter'],
    ];
    this.screen(
      `<h1>Controls</h1><table class="controls">${rows.map(([k, v]) => `<tr><td><kbd>${k}</kbd></td><td>${v}</td></tr>`).join('')}</table>
      <div class="nav-row"><button data-act="back">Back</button></div>`,
      { back },
      'overlay',
    );
  }

  showResults(result: ModeResult, stats: ResultStats, opts: { campaignIndex: number | null; teams: ScoreTeam[]; modeTitle: string }): void {
    const hasNext = opts.campaignIndex !== null && result.victory && opts.campaignIndex + 1 < MISSIONS.length;
    if (opts.campaignIndex !== null && result.victory) this.unlockMission(opts.campaignIndex + 1);
    this.screen(
      `<div class="results ${result.victory ? 'win' : 'lose'}">
        <h1>${esc(result.title)}</h1>
        <p class="result-sub">${esc(result.subtitle)}</p>
        <div class="result-stats">
          <div><b>${stats.kills}</b><span>Kills</span></div>
          <div><b>${stats.deaths}</b><span>Deaths</span></div>
          <div><b>${stats.accuracy}%</b><span>Accuracy</span></div>
          <div><b>${stats.headshots}</b><span>Headshots</span></div>
          <div><b>${stats.time}</b><span>Time</span></div>
        </div>
        ${opts.campaignIndex === null ? renderScoreboard(opts.modeTitle, opts.teams) : ''}
        <div class="nav-row">
          <button class="ghost" data-act="menu">Main Menu</button>
          <button class="${hasNext ? 'ghost' : ''}" data-act="retry">${result.victory ? 'Play Again' : 'Retry'}</button>
          ${hasNext ? '<button data-act="next">Next Mission</button>' : ''}
        </div>
      </div>`,
      {
        menu: () => this.cb.quitToMenu(),
        retry: () => this.cb.restart(),
        next: () => this.cb.nextMission(),
      },
      'overlay',
    );
  }

  get currentLoadout(): Loadout {
    return { ...this.loadout };
  }

  get currentDifficulty(): Difficulty {
    return this.difficulty;
  }

  showMissionBriefing(index: number): void {
    this.showLoadout(() => this.showBriefing(MISSIONS[index]), () => this.showCampaign());
  }
}
