import * as THREE from 'three';
import type { Actor } from '../combat/Actor';
import { clamp } from '../core/math';
import type { Session } from '../game/Session';
import type { ScoreTeam } from '../modes/Mode';

interface FeedEntry {
  el: HTMLElement;
  time: number;
}

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls: string, parent?: HTMLElement, html?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  parent?.appendChild(e);
  return e;
}

function esc(s: string): string {
  return s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
}

const tmp = new THREE.Vector3();

/** DOM overlay for everything drawn on top of the 3D view. */
export class HUD {
  readonly root: HTMLElement;
  private readonly crosshair: HTMLElement;
  private readonly chLines: HTMLElement[];
  private readonly hitmarker: HTMLElement;
  private readonly vignette: HTMLElement;
  private readonly ammoMag: HTMLElement;
  private readonly ammoReserve: HTMLElement;
  private readonly weaponName: HTMLElement;
  private readonly fireMode: HTMLElement;
  private readonly reloadHint: HTMLElement;
  private readonly grenadeIcons: HTMLElement;
  private readonly healthFill: HTMLElement;
  private readonly staminaFill: HTMLElement;
  private readonly objTitle: HTMLElement;
  private readonly objDetail: HTMLElement;
  private readonly objPanel: HTMLElement;
  private readonly compassStrip: HTMLElement;
  private readonly compassMarker: HTMLElement;
  private readonly scoreBox: HTMLElement;
  private readonly timer: HTMLElement;
  private readonly killfeed: HTMLElement;
  private readonly messages: HTMLElement;
  private readonly prompt: HTMLElement;
  private readonly progress: HTMLElement;
  private readonly progressFill: HTMLElement;
  private readonly progressLabel: HTMLElement;
  private readonly marker: HTMLElement;
  private readonly markerLabel: HTMLElement;
  private readonly damageRing: HTMLElement;
  private readonly scope: HTMLElement;
  private readonly breathBar: HTMLElement;
  private readonly deathBox: HTMLElement;
  private readonly fps: HTMLElement;
  private readonly scoreboardEl: HTMLElement;
  private readonly grenadeWarn: HTMLElement;
  private readonly spawnShield: HTMLElement;
  private feed: FeedEntry[] = [];
  private msgs: FeedEntry[] = [];
  private hitTime = 0;
  private hitKill = false;
  private killedBy = '';
  private lastScoreboard = 0;
  private unsub: (() => void)[] = [];

  constructor(parent: HTMLElement) {
    this.root = el('div', 'hud hidden', parent);
    // Crosshair
    this.crosshair = el('div', 'crosshair', this.root);
    this.chLines = ['t', 'b', 'l', 'r'].map((d) => el('div', `ch ch-${d}`, this.crosshair));
    el('div', 'ch-dot', this.crosshair);
    this.hitmarker = el('div', 'hitmarker', this.root, '<i></i><i></i><i></i><i></i>');
    this.vignette = el('div', 'vignette', this.root);
    this.damageRing = el('div', 'damage-ring', this.root);
    this.scope = el('div', 'scope hidden', this.root, '<div class="scope-lens"></div><div class="scope-h"></div><div class="scope-v"></div>');
    this.breathBar = el('div', 'breath', this.scope, '<div></div>');

    // Bottom right: weapon
    const wbox = el('div', 'weapon-box', this.root);
    this.weaponName = el('div', 'weapon-name', wbox);
    const ammo = el('div', 'ammo', wbox);
    this.ammoMag = el('span', 'ammo-mag', ammo);
    el('span', 'ammo-sep', ammo, '/');
    this.ammoReserve = el('span', 'ammo-reserve', ammo);
    const row = el('div', 'weapon-row', wbox);
    this.fireMode = el('span', 'fire-mode', row);
    this.grenadeIcons = el('span', 'grenades', row);
    this.reloadHint = el('div', 'reload-hint', this.root);

    // Bottom left: vitals
    const vit = el('div', 'vitals', this.root);
    el('div', 'vital-label', vit, 'HEALTH');
    this.healthFill = el('div', 'bar-fill health', el('div', 'bar', vit));
    el('div', 'vital-label', vit, 'STAMINA');
    this.staminaFill = el('div', 'bar-fill stamina', el('div', 'bar thin', vit));

    // Top left: objective
    this.objPanel = el('div', 'objective', this.root);
    this.objTitle = el('div', 'obj-title', this.objPanel);
    this.objDetail = el('div', 'obj-detail', this.objPanel);

    // Top centre: compass + score
    const top = el('div', 'top-center', this.root);
    const compass = el('div', 'compass', top);
    this.compassStrip = el('div', 'compass-strip', compass);
    this.compassMarker = el('div', 'compass-marker', compass);
    el('div', 'compass-needle', compass);
    this.buildCompass();
    this.scoreBox = el('div', 'scorebox', top);
    this.timer = el('div', 'timer', top);

    this.killfeed = el('div', 'killfeed', this.root);
    this.messages = el('div', 'messages', this.root);
    this.prompt = el('div', 'prompt', this.root);
    this.progress = el('div', 'progress hidden', this.root);
    this.progressLabel = el('div', 'progress-label', this.progress);
    this.progressFill = el('div', 'progress-fill', el('div', 'progress-bar', this.progress));
    this.marker = el('div', 'marker', this.root, '<div class="marker-icon"></div>');
    this.markerLabel = el('div', 'marker-label', this.marker);
    this.deathBox = el('div', 'death hidden', this.root);
    this.fps = el('div', 'fps hidden', this.root);
    this.scoreboardEl = el('div', 'scoreboard hidden', this.root);
    this.grenadeWarn = el('div', 'grenade-warn hidden', this.root, '<span>!</span>');
    this.spawnShield = el('div', 'spawn-shield hidden', this.root, 'SPAWN PROTECTION');
  }

  private buildCompass(): void {
    const labels: Record<number, string> = { 0: 'N', 45: 'NE', 90: 'E', 135: 'SE', 180: 'S', 225: 'SW', 270: 'W', 315: 'NW' };
    let html = '';
    // Three full turns so the strip can scroll seamlessly
    for (let rep = -1; rep <= 1; rep++) {
      for (let d = 0; d < 360; d += 15) {
        const x = (rep * 360 + d) * 3;
        const lab = labels[d];
        html += lab
          ? `<span class="ct major" style="left:${x}px">${lab}</span>`
          : `<span class="ct" style="left:${x}px">${d % 45 === 0 ? '' : '|'}</span>`;
      }
    }
    this.compassStrip.innerHTML = html;
  }

  bind(session: Session): void {
    this.unbind();
    this.feed.forEach((f) => f.el.remove());
    this.msgs.forEach((f) => f.el.remove());
    this.feed = [];
    this.msgs = [];
    this.killedBy = '';
    const player = session.player;
    this.unsub.push(
      session.events.on('kill', (e) => {
        const color = (a: Actor | null) =>
          !a ? '#ccc' : a.isPlayer ? '#ffd65a' : session.isEnemy(player, a) ? '#ff6a5a' : '#6ab4ff';
        const killer = e.killer && e.killer !== e.victim ? `<b style="color:${color(e.killer)}">${esc(e.killer.name)}</b>` : '';
        const icon = e.headshot ? `[${esc(e.weapon)}] ✛` : `[${esc(e.weapon)}]`;
        const div = el('div', 'feed-item', this.killfeed, `${killer} <span class="feed-weapon">${icon}</span> <b style="color:${color(e.victim)}">${esc(e.victim.name)}</b>`);
        this.feed.push({ el: div, time: performance.now() });
        if (this.feed.length > 6) this.feed.shift()!.el.remove();
        if (e.victim.isPlayer) this.killedBy = e.killer && e.killer !== e.victim ? e.killer.name : 'yourself';
      }),
      session.events.on('hit', (e) => {
        if (!e.attacker.isPlayer || e.victim.isPlayer) return;
        this.hitTime = performance.now();
        this.hitKill = e.killed;
        session.audio.hitmarker(e.killed, e.zone === 'head');
      }),
      session.events.on('message', (e) => {
        const div = el('div', 'msg', this.messages, esc(e.text));
        if (e.color) div.style.color = e.color;
        this.msgs.push({ el: div, time: performance.now() });
        if (this.msgs.length > 4) this.msgs.shift()!.el.remove();
      }),
    );
  }

  unbind(): void {
    this.unsub.forEach((u) => u());
    this.unsub = [];
  }

  show(v: boolean): void {
    this.root.classList.toggle('hidden', !v);
  }

  update(session: Session, camera: THREE.PerspectiveCamera, fps: number, showFps: boolean): void {
    const now = performance.now();
    const p = session.player;
    const w = p.weapon;
    const def = w.def;
    const W = window.innerWidth;
    const H = window.innerHeight;
    const modeHud = session.mode.hud();

    // Crosshair: gap matches the actual spread cone on screen
    const spread = p.currentSpread();
    const gapPx = (Math.tan(spread) / Math.tan((camera.fov * Math.PI) / 360)) * (H / 2);
    const gap = clamp(gapPx, 3, 140);
    this.chLines[0].style.transform = `translate(-50%, ${-gap - 10}px)`;
    this.chLines[1].style.transform = `translate(-50%, ${gap}px)`;
    this.chLines[2].style.transform = `translate(${-gap - 10}px, -50%)`;
    this.chLines[3].style.transform = `translate(${gap}px, -50%)`;
    const hideCh = !p.alive || p.adsT > 0.5 || p.sprintT > 0.5 || (def.scope === true && p.adsT > 0.2);
    this.crosshair.style.opacity = hideCh ? '0' : '1';

    // Hitmarker
    const ht = (now - this.hitTime) / 1000;
    this.hitmarker.style.opacity = ht < 0.25 ? String(1 - ht / 0.25) : '0';
    this.hitmarker.classList.toggle('kill', this.hitKill);

    // Health vignette
    const hp = p.health / p.maxHealth;
    this.vignette.style.opacity = String(clamp((1 - hp) * 1.3, 0, 0.95));
    this.healthFill.style.width = `${clamp(hp * 100, 0, 100)}%`;
    this.healthFill.classList.toggle('low', hp < 0.35);
    this.staminaFill.style.width = `${(p.controller.stamina / p.controller.maxStamina) * 100}%`;

    // Damage direction indicators
    let ring = '';
    for (const d of p.damageIndicators) {
      const age = session.time - d.time;
      const dx = d.from.x - p.position.x;
      const dz = d.from.z - p.position.z;
      const world = Math.atan2(-dx, -dz);
      const rel = (world - p.yaw) * (180 / Math.PI);
      ring += `<div class="dmg-arc" style="transform: translate(-50%,-50%) rotate(${-rel}deg); opacity:${clamp(1 - age / 1.6, 0, 1)}"></div>`;
    }
    this.damageRing.innerHTML = ring;

    // Scope
    const scoped = def.scope === true && p.adsT > 0.85 && p.alive;
    this.scope.classList.toggle('hidden', !scoped);
    if (scoped) (this.breathBar.firstElementChild as HTMLElement).style.width = `${(p.breath / p.breathMax) * 100}%`;
    this.breathBar.classList.toggle('active', p.holdingBreath);

    // Ammo
    this.weaponName.textContent = def.name;
    this.ammoMag.textContent = String(w.mag);
    this.ammoMag.classList.toggle('low', w.mag <= Math.ceil(def.magSize * 0.25));
    this.ammoReserve.textContent = String(w.reserve);
    this.fireMode.textContent = def.fireModes.length > 1 ? (w.fireMode === 'auto' ? 'AUTO [B]' : 'SEMI [B]') : def.cycleAction ? def.cycleAction.toUpperCase() : 'SEMI';
    this.grenadeIcons.innerHTML = '<i class="nade"></i>'.repeat(p.grenades) + '<i class="nade empty"></i>'.repeat(p.maxGrenades - p.grenades);
    let hint = '';
    if (w.state === 'reloading') hint = 'RELOADING';
    else if (w.mag === 0 && w.reserve === 0) hint = p.weapons.some((o) => o !== w && o.mag + o.reserve > 0) ? 'NO AMMO: SWITCH WEAPON [Q]' : 'NO AMMO';
    else if (w.mag <= Math.ceil(def.magSize * 0.25) && w.reserve > 0) hint = 'RELOAD [R]';
    this.reloadHint.textContent = p.alive ? hint : '';

    // Objective panel
    this.objPanel.style.display = modeHud.objective ? '' : 'none';
    this.objTitle.textContent = modeHud.objective ?? '';
    this.objDetail.textContent = modeHud.objectiveDetail ?? '';

    // Score & timer
    if (modeHud.score) {
      const s = modeHud.score;
      this.scoreBox.innerHTML = `<span class="sa">${esc(s.labelA)} <b>${s.a}</b></span><span class="slim">${s.limit}</span><span class="sb"><b>${s.b}</b> ${esc(s.labelB)}</span>`;
      this.scoreBox.style.display = '';
    } else this.scoreBox.style.display = 'none';
    this.timer.textContent = modeHud.timer ?? '';

    // Compass
    const heading = ((-p.yaw * 180) / Math.PI) % 360;
    const hd = (heading + 360) % 360;
    this.compassStrip.style.transform = `translateX(${-hd * 3}px)`;

    // Objective marker (world -> screen)
    if (modeHud.marker && p.alive) {
      const mp = modeHud.marker.pos;
      tmp.copy(mp).project(camera);
      const behind = tmp.z > 1;
      let sx = (tmp.x * 0.5 + 0.5) * W;
      let sy = (-tmp.y * 0.5 + 0.5) * H;
      if (behind) {
        sx = W - sx;
        sy = H - 40;
      }
      const margin = 40;
      sx = clamp(sx, margin, W - margin);
      sy = clamp(sy, margin + 60, H - margin);
      const dist = Math.round(Math.hypot(mp.x - p.position.x, mp.z - p.position.z));
      this.marker.style.display = '';
      this.marker.style.transform = `translate(${sx}px, ${sy}px)`;
      this.markerLabel.textContent = `${modeHud.marker.label} ${dist}m`;
      // Compass pip
      const ang = (Math.atan2(mp.x - p.position.x, -(mp.z - p.position.z)) * 180) / Math.PI;
      let rel = ang - hd;
      while (rel > 180) rel -= 360;
      while (rel < -180) rel += 360;
      this.compassMarker.style.display = Math.abs(rel) < 70 ? '' : 'none';
      this.compassMarker.style.transform = `translateX(${rel * 3}px)`;
    } else {
      this.marker.style.display = 'none';
      this.compassMarker.style.display = 'none';
    }

    // Prompt & progress
    this.prompt.textContent = modeHud.prompt ?? '';
    if (modeHud.progress) {
      this.progress.classList.remove('hidden');
      this.progressLabel.textContent = modeHud.progress.label;
      this.progressFill.style.width = `${clamp(modeHud.progress.value, 0, 1) * 100}%`;
    } else this.progress.classList.add('hidden');

    // Feed fades
    for (const f of this.feed) {
      const age = (now - f.time) / 1000;
      f.el.style.opacity = String(clamp(6 - age, 0, 1));
    }
    for (const m of this.msgs) {
      const age = (now - m.time) / 1000;
      m.el.style.opacity = String(clamp(4 - age, 0, 1));
    }

    // Death screen
    if (!p.alive) {
      this.deathBox.classList.remove('hidden');
      const respawn = modeHud.respawnIn !== null ? `<div class="respawn">Respawning in ${modeHud.respawnIn.toFixed(1)}</div>` : '';
      this.deathBox.innerHTML = `<div class="killed">KILLED BY <b>${esc(this.killedBy.toUpperCase())}</b></div>${respawn}`;
    } else this.deathBox.classList.add('hidden');
    this.spawnShield.classList.toggle('hidden', !(p.alive && p.spawnProtection > 0 && modeHud.score !== null));

    // Grenade warning
    let nade: THREE.Vector3 | null = null;
    for (const g of session.grenades.live) {
      if (g.thrower !== p && g.pos.distanceTo(p.position) < 9) nade = g.pos;
    }
    if (nade && p.alive) {
      tmp.copy(nade).project(camera);
      let sx = (tmp.x * 0.5 + 0.5) * W;
      let sy = (-tmp.y * 0.5 + 0.5) * H;
      if (tmp.z > 1) {
        sx = W - sx;
        sy = H * 0.75;
      }
      this.grenadeWarn.classList.remove('hidden');
      this.grenadeWarn.style.transform = `translate(${clamp(sx, 40, W - 40)}px, ${clamp(sy, 80, H - 60)}px)`;
    } else this.grenadeWarn.classList.add('hidden');

    // FPS
    this.fps.classList.toggle('hidden', !showFps);
    if (showFps) this.fps.textContent = `${fps.toFixed(0)} FPS`;

    // Scoreboard (throttled)
    const showSb = p.scoreboardHeld || (!p.alive && modeHud.score !== null);
    this.scoreboardEl.classList.toggle('hidden', !showSb);
    if (showSb && now - this.lastScoreboard > 250) {
      this.lastScoreboard = now;
      this.scoreboardEl.innerHTML = renderScoreboard(session.mode.title, session.mode.scoreboard());
    }
  }
}

export function renderScoreboard(title: string, teams: ScoreTeam[]): string {
  let html = `<div class="sb-title">${esc(title)}</div><div class="sb-teams">`;
  for (const t of teams) {
    html += `<div class="sb-team"><div class="sb-head" style="border-color:${t.color}"><span style="color:${t.color}">${esc(t.name)}</span><span>${t.score ?? ''}</span></div>`;
    if (t.rows.length) {
      html += '<table><tr><th>Name</th><th>K</th><th>D</th><th>Score</th></tr>';
      for (const r of t.rows) {
        html += `<tr class="${r.isPlayer ? 'me' : ''} ${r.alive ? '' : 'dead'}"><td>${esc(r.name)}</td><td>${r.kills}</td><td>${r.deaths}</td><td>${r.score}</td></tr>`;
      }
      html += '</table>';
    }
    html += '</div>';
  }
  return html + '</div>';
}
