import * as THREE from 'three';
import { Actor, STAND_HEIGHT } from '../combat/Actor';
import type { HitZone } from '../combat/Damage';
import type { Input } from '../core/Input';
import { DEG, clamp, damp, hfovToVfov, rand, zoomFov } from '../core/math';
import { settings } from '../core/Settings';
import type { Loadout, Session } from '../game/Session';
import { Weapon } from '../weapons/Weapon';
import type { ViewModelState } from '../weapons/ViewModel';
import { PlayerController, WALK_SPEED, type MoveIntent } from './PlayerController';

export interface DamageIndicator {
  from: THREE.Vector3;
  time: number;
}

const SWITCH_LOWER = 0.22;
const SWITCH_RAISE = 0.28;
const MELEE_TIME = 0.55;
const THROW_TIME = 0.65;
const MAX_BREATH = 4;

/** The human-controlled soldier. */
export class Player extends Actor {
  readonly isPlayer = true;
  readonly controller: PlayerController;
  weapons: Weapon[];
  current = 0;
  private pendingWeapon = -1;
  switchTimer = 0;
  grenades = 2;
  readonly maxGrenades = 2;
  adsT = 0;
  sprintT = 0;
  slideT = 0;
  crouchT = 0;
  /** Seconds since sprinting stopped; must exceed a threshold to fire. */
  private sprintOut = 1;
  meleeTimer = -1;
  private meleeDone = false;
  throwTimer = -1;
  private thrown = false;
  breath = MAX_BREATH;
  holdingBreath = false;
  private breathLockout = 0;
  interactHeld = false;
  scoreboardHeld = false;
  // Look/recoil
  private pendingRecoilPitch = 0;
  private pendingRecoilYaw = 0;
  private sprayPitch = 0;
  private recoverPitch = 0;
  private viewPunch = 0;
  private scopeSwayT = 0;
  // Camera effects
  bobPhase = 0;
  bobAmp = 0;
  landDip = 0;
  private eyeY = 0;
  private lastStepPhase = 0;
  lookDX = 0;
  lookDY = 0;
  private fovKick = 0;
  deathTime = 0;
  readonly damageIndicators: DamageIndicator[] = [];
  /** Hook for the view model's recoil/flash animation. */
  onShot: ((w: Weapon) => void) | null = null;
  /** Set for one frame when the player hits/kills an enemy (HUD hitmarker) */
  hitFlash: { t: number; kill: boolean; head: boolean } = { t: 0, kill: false, head: false };
  // Input latches
  private intent: MoveIntent = { x: 0, z: 0, sprint: false, jump: false, crouchPressed: false, speedMult: 1, blockSprint: false };
  private triggerDown = false;
  private adsHeld = false;
  private reloadPressed = false;
  private switchTo = -1;
  private meleePressed = false;
  private grenadePressed = false;
  private fireModePressed = false;
  private triggerPressed = false;

  constructor(
    loadout: Loadout,
    private readonly session: Session,
  ) {
    super('You', 0);
    this.controller = new PlayerController(this);
    this.weapons = [new Weapon(loadout.primary), new Weapon(loadout.secondary)];
  }

  get weapon(): Weapon {
    return this.weapons[this.current];
  }

  spawn(pos: THREE.Vector3, yaw: number): void {
    this.position.copy(pos);
    this.velocity.set(0, 0, 0);
    this.yaw = yaw;
    this.pitch = 0;
    this.health = this.maxHealth;
    this.alive = true;
    this.controller.reset();
    this.eyeY = pos.y + STAND_HEIGHT - 0.13;
    this.grenades = this.maxGrenades;
    for (const w of this.weapons) w.refill();
    this.current = 0;
    this.pendingWeapon = -1;
    this.switchTimer = SWITCH_RAISE;
    this.adsT = 0;
    this.meleeTimer = -1;
    this.throwTimer = -1;
    this.spawnProtection = 2;
    this.damageIndicators.length = 0;
    this.pendingRecoilPitch = this.pendingRecoilYaw = this.sprayPitch = this.recoverPitch = 0;
  }

  /** Called once per rendered frame with raw input. */
  readInput(input: Input): void {
    this.scoreboardHeld = input.down('Tab');
    if (!this.alive) {
      this.triggerDown = false;
      return;
    }
    // Mouse look happens per-frame for responsiveness.
    const zoom = this.weapon.def.adsZoom;
    const adsScale = 1 + (1 / zoom - 1) * this.adsT;
    const sens = settings.sensitivity * 0.0004 * (this.adsT > 0.5 ? settings.adsSensitivity * adsScale : 1);
    this.lookDX = input.mouseDX;
    this.lookDY = input.mouseDY;
    this.yaw -= input.mouseDX * sens;
    this.pitch -= input.mouseDY * sens * (settings.invertY ? -1 : 1);
    this.pitch = clamp(this.pitch, -1.5, 1.5);

    let x = 0;
    let z = 0;
    if (input.down('KeyW')) z += 1;
    if (input.down('KeyS')) z -= 1;
    if (input.down('KeyD')) x += 1;
    if (input.down('KeyA')) x -= 1;
    this.intent.x = x;
    this.intent.z = z;
    this.intent.sprint = input.down('ShiftLeft') || input.down('ShiftRight');
    this.intent.jump = this.intent.jump || input.wasPressed('Space');
    // Ctrl is deliberately not bound: Ctrl+W closes the browser tab.
    this.intent.crouchPressed = this.intent.crouchPressed || input.wasPressed('KeyC');
    this.triggerDown = input.mouseDown(0);
    this.triggerPressed = this.triggerPressed || input.mousePressed(0);
    this.adsHeld = input.mouseDown(2);
    this.reloadPressed = this.reloadPressed || input.wasPressed('KeyR');
    this.meleePressed = this.meleePressed || input.wasPressed('KeyV');
    this.grenadePressed = this.grenadePressed || input.wasPressed('KeyG');
    this.fireModePressed = this.fireModePressed || input.wasPressed('KeyB');
    this.interactHeld = input.down('KeyE');
    if (input.wasPressed('Digit1')) this.switchTo = 0;
    if (input.wasPressed('Digit2')) this.switchTo = 1;
    if (input.wasPressed('KeyQ') || input.wheel !== 0) this.switchTo = 1 - (this.pendingWeapon >= 0 ? this.pendingWeapon : this.current);
  }

  update(dt: number): void {
    const s = this.session;
    if (this.spawnProtection > 0) this.spawnProtection -= dt;
    if (!this.alive) {
      this.deathTime += dt;
      this.adsT = damp(this.adsT, 0, 10, dt);
      return;
    }
    this.regen(dt, s.time);
    this.weapon.update(dt);
    const w = this.weapon;

    // --- Weapon switching ---
    if (this.switchTo >= 0 && this.switchTo !== this.current && this.pendingWeapon < 0 && this.meleeTimer < 0) {
      this.pendingWeapon = this.switchTo;
      this.switchTimer = SWITCH_LOWER + SWITCH_RAISE;
      w.cancelReload();
      s.audio.weaponSwitch();
    }
    this.switchTo = -1;
    if (this.switchTimer > 0) {
      this.switchTimer -= dt;
      if (this.pendingWeapon >= 0 && this.switchTimer <= SWITCH_RAISE) {
        this.current = this.pendingWeapon;
        this.pendingWeapon = -1;
      }
    }
    const switching = this.switchTimer > 0;

    // --- Fire mode ---
    if (this.fireModePressed) {
      const m = w.cycleFireMode();
      if (w.def.fireModes.length > 1) s.message(`Fire mode: ${m === 'auto' ? 'Full auto' : 'Semi-auto'}`);
      s.audio.dryFire();
    }

    // --- ADS ---
    const busy = switching || this.meleeTimer >= 0 || this.throwTimer >= 0;
    const canAds = this.adsHeld && !busy && !this.controller.sliding && (w.state !== 'reloading' || w.def.reloadPerRound === true);
    const adsRate = 1 / w.def.adsTime;
    this.adsT = clamp(this.adsT + (canAds ? adsRate : -adsRate * 1.3) * dt, 0, 1);

    // Firing cancels sprint (sprint-out delay applies)
    const wantsFire = this.triggerDown && !busy;
    this.intent.blockSprint = this.adsHeld || wantsFire || this.meleeTimer >= 0;
    this.intent.speedMult = w.def.moveSpeedMult * (1 - this.adsT * 0.45);

    // --- Movement ---
    this.controller.update(dt, this.intent, s.world);
    this.intent.jump = false;
    this.intent.crouchPressed = false;
    const sprinting = this.controller.sprinting;
    this.sprintT = damp(this.sprintT, sprinting ? 1 : 0, 10, dt);
    this.slideT = damp(this.slideT, this.controller.sliding ? 1 : 0, 10, dt);
    this.crouchT = damp(this.crouchT, this.crouching ? 1 : 0, 10, dt);
    this.sprintOut = sprinting ? 0 : this.sprintOut + dt;
    if (this.controller.landImpact > 4) {
      this.landDip = Math.min(1, this.controller.landImpact / 10);
      s.audio.land();
    }
    this.landDip = damp(this.landDip, 0, 6, dt);

    // --- Breath (sniper scope) ---
    const scoped = w.def.scope === true && this.adsT > 0.9;
    this.breathLockout -= dt;
    this.holdingBreath = scoped && this.intent.sprint && this.breath > 0 && this.breathLockout <= 0;
    if (this.holdingBreath) {
      this.breath -= dt;
      if (this.breath <= 0) this.breathLockout = 2.5;
    } else {
      this.breath = Math.min(MAX_BREATH, this.breath + dt * 0.8);
    }

    // --- Reload ---
    if (this.reloadPressed && !busy && w.startReload()) {
      s.audio.reload(w.reloadDuration, w.def.reloadPerRound);
    }
    this.reloadPressed = false;
    if (w.justReloaded && w.def.reloadPerRound && w.state === 'reloading') s.audio.reload(w.reloadDuration, true);

    // --- Melee ---
    if (this.meleePressed && this.meleeTimer < 0 && !switching && this.throwTimer < 0) {
      this.meleeTimer = 0;
      this.meleeDone = false;
      w.cancelReload();
      s.audio.melee();
    }
    this.meleePressed = false;
    if (this.meleeTimer >= 0) {
      this.meleeTimer += dt;
      if (!this.meleeDone && this.meleeTimer > 0.15) {
        this.meleeDone = true;
        const eye = this.eyePosition(new THREE.Vector3());
        if (s.melee(this, eye, this.forward(new THREE.Vector3()))) this.viewPunch += 0.5;
      }
      if (this.meleeTimer > MELEE_TIME) this.meleeTimer = -1;
    }

    // --- Grenade ---
    if (this.grenadePressed && this.grenades > 0 && this.throwTimer < 0 && !switching && this.meleeTimer < 0) {
      this.throwTimer = 0;
      this.thrown = false;
      w.cancelReload();
    }
    this.grenadePressed = false;
    if (this.throwTimer >= 0) {
      this.throwTimer += dt;
      if (!this.thrown && this.throwTimer > 0.28) {
        this.thrown = true;
        this.grenades--;
        const eye = this.eyePosition(new THREE.Vector3());
        const fwd = this.forward(new THREE.Vector3());
        const vel = fwd.clone().multiplyScalar(16).add(new THREE.Vector3(0, 3.5, 0)).addScaledVector(this.velocity, 0.6);
        s.grenades.throw(this, eye.addScaledVector(fwd, 0.4), vel, 3.2);
      }
      if (this.throwTimer > THROW_TIME) this.throwTimer = -1;
    }

    // --- Fire ---
    const canFire = !busy && this.sprintOut > 0.12 && !this.controller.sliding;
    if (canFire) {
      const result = w.tryFire(this.triggerDown);
      if (result === 'fired') this.shoot();
      else if (result === 'empty') {
        s.audio.dryFire();
        if (w.startReload()) s.audio.reload(w.reloadDuration, w.def.reloadPerRound);
      }
    } else {
      w.tryFire(false);
    }
    this.triggerPressed = false;
    // Auto-reload when the mag runs dry
    if (w.mag === 0 && w.state === 'ready' && w.cooldown <= 0 && !busy && w.reserve > 0 && w.startReload()) {
      s.audio.reload(w.reloadDuration, w.def.reloadPerRound);
    }

    // --- Recoil application & recovery ---
    const apply = Math.min(1, dt * 28);
    const ap = this.pendingRecoilPitch * apply;
    const ay = this.pendingRecoilYaw * apply;
    this.pitch = clamp(this.pitch + ap, -1.5, 1.5);
    this.yaw += ay;
    this.pendingRecoilPitch -= ap;
    this.pendingRecoilYaw -= ay;
    this.sprayPitch += ap;
    if (w.sinceShot > w.interval * 1.5 + 0.06 && this.sprayPitch > 0) {
      this.recoverPitch += this.sprayPitch * w.def.recoilRecover;
      this.sprayPitch = 0;
    }
    if (this.recoverPitch > 0) {
      const r = this.recoverPitch * Math.min(1, dt * 7);
      this.pitch -= r;
      this.recoverPitch -= r;
      if (this.recoverPitch < 1e-4) this.recoverPitch = 0;
    }
    this.viewPunch = damp(this.viewPunch, 0, 18, dt);

    // --- Head bob & footsteps ---
    const speed = this.controller.horizontalSpeed();
    if (this.grounded && speed > 0.5 && !this.controller.sliding) {
      this.bobPhase += dt * speed * 1.9;
      this.bobAmp = damp(this.bobAmp, clamp(speed / WALK_SPEED, 0, 1.6), 8, dt);
      const stepIdx = Math.floor(this.bobPhase / Math.PI);
      if (stepIdx !== this.lastStepPhase) {
        this.lastStepPhase = stepIdx;
        if (!this.crouching) s.audio.footstep(undefined, sprinting ? 1 : 0.6);
      }
    } else {
      this.bobAmp = damp(this.bobAmp, 0, 8, dt);
    }
    this.fovKick = damp(this.fovKick, sprinting ? 1 : this.controller.sliding ? 1.4 : 0, 6, dt);

    // Expire damage indicators
    for (let i = this.damageIndicators.length - 1; i >= 0; i--) {
      if (s.time - this.damageIndicators[i].time > 1.6) this.damageIndicators.splice(i, 1);
    }
    if (this.hitFlash.t > 0) this.hitFlash.t -= dt;
    this.scopeSwayT += dt;
  }

  /** Current aim direction including scope sway. */
  private aimDirection(out: THREE.Vector3): THREE.Vector3 {
    const sway = this.scopeSway();
    const cp = Math.cos(this.pitch + sway.y);
    return out.set(-Math.sin(this.yaw + sway.x) * cp, Math.sin(this.pitch + sway.y), -Math.cos(this.yaw + sway.x) * cp).normalize();
  }

  private scopeSway(): { x: number; y: number } {
    const w = this.weapon;
    if (!w.def.scope || this.adsT < 0.5) return { x: 0, y: 0 };
    const t = this.scopeSwayT;
    const amp = (this.holdingBreath ? 0.08 : 0.55) * DEG * (this.crouching ? 0.6 : 1) * (1 + this.bobAmp);
    return { x: Math.sin(t * 0.9) * amp + Math.sin(t * 2.3) * amp * 0.3, y: Math.sin(t * 1.3) * amp * 0.8 };
  }

  private shoot(): void {
    const s = this.session;
    const w = this.weapon;
    const def = w.def;
    const eye = this.eyePosition(new THREE.Vector3());
    const dir = this.aimDirection(new THREE.Vector3());
    const speed = this.controller.horizontalSpeed();
    let moveFactor = clamp(speed / WALK_SPEED, 0, 1) * 0.8;
    if (!this.grounded) moveFactor += 1.5;
    let spread = w.spread(this.adsT, moveFactor);
    if (this.crouching) spread *= 0.85;
    const muzzle = eye
      .clone()
      .addScaledVector(dir, 0.9)
      .add(new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw)).multiplyScalar(0.12 * (1 - this.adsT)))
      .add(new THREE.Vector3(0, -0.12 * (1 - this.adsT), 0));
    s.fire(this, eye, dir, w, spread, muzzle);
    // Recoil
    const adsMult = 1 - this.adsT * 0.3;
    const crouchMult = this.crouching ? 0.82 : 1;
    const ramp = Math.min(1, 0.6 + w.sprayCount * 0.08);
    this.pendingRecoilPitch += def.recoilUp * DEG * adsMult * crouchMult * ramp;
    this.pendingRecoilYaw += rand(-def.recoilSide, def.recoilSide * 1.3) * DEG * adsMult * crouchMult;
    this.recoverPitch = 0;
    this.viewPunch += def.recoilUp * 0.5 * DEG;
    if (def.cycleAction === 'bolt' && w.mag > 0) s.audio.bolt();
    if (def.cycleAction === 'pump' && w.mag > 0) s.audio.pump();
    this.onShot?.(w);
  }

  override onDamaged(_amount: number, from: THREE.Vector3 | null, _attacker: Actor | null, _zone: HitZone | null): void {
    if (from) this.damageIndicators.push({ from: from.clone(), time: this.session.time });
    this.session.audio.hurt();
    this.viewPunch += 0.6 * DEG;
  }

  override onKilled(): void {
    this.deathTime = 0;
    this.controller.sprinting = false;
  }

  /** Gives ammo on kills so long missions stay playable. */
  scavenge(): void {
    for (const w of this.weapons) {
      w.reserve = Math.min(Math.round(w.def.reserve * 1.5), w.reserve + Math.ceil(w.def.magSize * 0.5));
    }
  }

  /** Positions the main camera for this frame. */
  updateCamera(camera: THREE.PerspectiveCamera, dt: number, aspect: number, shake: number): void {
    const targetEye = this.position.y + this.eyeHeight();
    // Smooth step-ups and crouch transitions
    this.eyeY = Math.abs(targetEye - this.eyeY) > 2 ? targetEye : damp(this.eyeY, targetEye, 18, dt);
    let y = this.eyeY;
    const bobScale = 1 - this.adsT * 0.8;
    y += -Math.abs(Math.cos(this.bobPhase)) * 0.035 * this.bobAmp * bobScale;
    y -= this.landDip * 0.12;
    let roll = Math.sin(this.bobPhase) * 0.004 * this.bobAmp * bobScale + this.slideT * 0.06;
    let pitchOff = this.viewPunch;
    if (!this.alive) {
      const t = Math.min(1, this.deathTime / 0.8);
      y = this.position.y + 0.3 + (1 - t) * (this.eyeHeight() - 0.3);
      roll += t * 0.9;
      pitchOff -= t * 0.3;
    }
    const sway = this.scopeSway();
    const sx = (Math.random() - 0.5) * shake * 0.03;
    const sy = (Math.random() - 0.5) * shake * 0.03;
    camera.position.set(
      this.position.x + Math.cos(this.yaw) * Math.sin(this.bobPhase) * 0.02 * this.bobAmp * bobScale,
      y,
      this.position.z - Math.sin(this.yaw) * Math.sin(this.bobPhase) * 0.02 * this.bobAmp * bobScale,
    );
    camera.rotation.set(this.pitch + pitchOff + sway.y + sy, this.yaw + sway.x + sx, roll, 'YXZ');
    const baseV = hfovToVfov(settings.fov + this.fovKick * 6, aspect);
    const zoom = 1 + (this.weapon.def.adsZoom - 1) * this.adsT;
    const fov = zoomFov(baseV, zoom);
    if (Math.abs(camera.fov - fov) > 0.01 || camera.aspect !== aspect) {
      camera.fov = fov;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
    }
  }

  viewModelState(): ViewModelState {
    const lowerT =
      this.switchTimer > 0
        ? this.pendingWeapon >= 0
          ? 1 - (this.switchTimer - SWITCH_RAISE) / SWITCH_LOWER
          : this.switchTimer / SWITCH_RAISE
        : 0;
    return {
      weapon: this.weapon,
      adsT: this.adsT,
      sprintT: this.sprintT,
      bobPhase: this.bobPhase,
      bobAmp: this.bobAmp,
      lookDX: this.lookDX,
      lookDY: this.lookDY,
      lowerT: clamp(lowerT, 0, 1),
      meleeT: this.meleeTimer >= 0 ? this.meleeTimer / MELEE_TIME : -1,
      throwT: this.throwTimer >= 0 ? this.throwTimer / THROW_TIME : -1,
      crouchT: this.crouchT,
      landDip: this.landDip,
      slideT: this.slideT,
      hidden: !this.alive || (this.weapon.def.scope === true && this.adsT > 0.85),
    };
  }

  /** 0..1 for the HUD crosshair gap. */
  currentSpread(): number {
    const speed = this.controller.horizontalSpeed();
    let mf = clamp(speed / WALK_SPEED, 0, 1) * 0.8;
    if (!this.grounded) mf += 1.5;
    return this.weapon.spread(this.adsT, mf) * (this.crouching ? 0.85 : 1);
  }

  get breathMax(): number {
    return MAX_BREATH;
  }
}
