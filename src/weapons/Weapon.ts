import { DEG } from '../core/math';
import { WEAPONS, type FireMode, type WeaponDef, type WeaponId } from './WeaponDefs';

export type WeaponState = 'ready' | 'reloading' | 'cycling';

/**
 * Ammo, fire rate, reload and spread bookkeeping for one gun.
 * Shared by the player and bots; it knows nothing about rendering.
 */
export class Weapon {
  readonly def: WeaponDef;
  mag: number;
  reserve: number;
  state: WeaponState = 'ready';
  fireMode: FireMode;
  /** Seconds until the next round can fire. */
  cooldown = 0;
  reloadTimer = 0;
  reloadDuration = 0;
  private reloadingEmpty = false;
  /** Extra spread in degrees from sustained fire. */
  bloom = 0;
  /** Seconds since the last shot. */
  sinceShot = 99;
  /** Shots in the current spray (for recoil pattern). */
  sprayCount = 0;
  private triggerWasDown = false;
  /** Set when a reload just finished, consumed by the viewmodel/audio. */
  justReloaded = false;

  constructor(id: WeaponId) {
    this.def = WEAPONS[id];
    this.mag = this.def.magSize;
    this.reserve = this.def.reserve;
    this.fireMode = this.def.fireModes[0];
  }

  get id(): WeaponId {
    return this.def.id;
  }

  get interval(): number {
    return 60 / this.def.rpm;
  }

  cycleFireMode(): FireMode {
    const modes = this.def.fireModes;
    this.fireMode = modes[(modes.indexOf(this.fireMode) + 1) % modes.length];
    return this.fireMode;
  }

  /**
   * Returns true if a round was fired this call. Handles semi-auto by
   * requiring the trigger to be released between shots.
   */
  tryFire(triggerDown: boolean): 'fired' | 'empty' | null {
    const pressedNow = triggerDown && !this.triggerWasDown;
    this.triggerWasDown = triggerDown;
    if (!triggerDown) return null;
    if (this.state === 'reloading' && this.def.reloadPerRound && this.mag > 0 && pressedNow) {
      // Shotguns can interrupt a shell-by-shell reload
      this.state = 'ready';
      this.cooldown = Math.max(this.cooldown, 0.1);
    }
    if (this.state !== 'ready' || this.cooldown > 0) return null;
    if (this.fireMode === 'semi' && !pressedNow) return null;
    if (this.mag <= 0) return pressedNow ? 'empty' : null;
    this.mag--;
    this.cooldown += this.interval;
    if (this.cooldown < 0) this.cooldown = this.interval;
    this.bloom = Math.min(this.def.maxBloom, this.bloom + this.def.bloomPerShot);
    this.sinceShot = 0;
    this.sprayCount++;
    if (this.def.cycleAction && this.mag > 0) this.state = 'cycling';
    return 'fired';
  }

  canReload(): boolean {
    return this.state !== 'reloading' && this.mag < this.def.magSize && this.reserve > 0;
  }

  startReload(): boolean {
    if (!this.canReload()) return false;
    this.state = 'reloading';
    this.reloadingEmpty = this.mag === 0;
    this.reloadDuration = this.reloadingEmpty ? this.def.reloadEmptyTime : this.def.reloadTime;
    this.reloadTimer = this.reloadDuration;
    return true;
  }

  cancelReload(): void {
    if (this.state === 'reloading') this.state = 'ready';
  }

  /** 0..1 progress of the current reload (for animation). */
  reloadProgress(): number {
    if (this.state !== 'reloading') return 0;
    return 1 - this.reloadTimer / this.reloadDuration;
  }

  update(dt: number): void {
    this.justReloaded = false;
    this.sinceShot += dt;
    if (this.cooldown > 0) this.cooldown -= dt;
    if (this.state === 'cycling' && this.cooldown <= 0) this.state = 'ready';
    if (this.cooldown < -0.05) this.cooldown = 0;
    if (this.sinceShot > this.interval * 1.6) {
      this.sprayCount = 0;
      this.bloom = Math.max(0, this.bloom - dt * this.def.maxBloom * 3);
    }
    if (this.state === 'reloading') {
      this.reloadTimer -= dt;
      if (this.reloadTimer <= 0) {
        if (this.def.reloadPerRound) {
          this.mag++;
          this.reserve--;
          this.justReloaded = true;
          if (this.mag < this.def.magSize && this.reserve > 0) {
            this.reloadTimer = this.reloadDuration;
          } else {
            this.state = 'ready';
          }
        } else {
          const need = this.def.magSize - this.mag;
          const take = Math.min(need, this.reserve);
          this.mag += take;
          this.reserve -= take;
          this.state = 'ready';
          this.justReloaded = true;
        }
      }
    }
  }

  /** Current cone half-angle in radians, given ADS progress and movement. */
  spread(adsT: number, moveFactor: number): number {
    const d = this.def;
    const base = d.hipSpread + (d.adsSpread - d.hipSpread) * adsT;
    const bloom = this.bloom * (1 - adsT * 0.6);
    const movePenalty = 1 + moveFactor * (1 - adsT * 0.7);
    return (base * movePenalty + bloom) * DEG;
  }

  refill(): void {
    this.mag = this.def.magSize;
    this.reserve = this.def.reserve;
    this.state = 'ready';
  }

  wasReloadingEmpty(): boolean {
    return this.reloadingEmpty;
  }
}
