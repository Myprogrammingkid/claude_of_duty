import * as THREE from 'three';
import { rand } from './math';

export type ShotKind = 'rifle' | 'smg' | 'sniper' | 'shotgun' | 'pistol';

interface ShotProfile {
  lowpass: number;
  decay: number;
  gain: number;
  thumpFreq: number;
  tail: number;
}

const SHOT_PROFILES: Record<ShotKind, ShotProfile> = {
  rifle: { lowpass: 3800, decay: 0.22, gain: 0.9, thumpFreq: 140, tail: 0.5 },
  smg: { lowpass: 4600, decay: 0.14, gain: 0.75, thumpFreq: 170, tail: 0.3 },
  sniper: { lowpass: 2600, decay: 0.55, gain: 1.1, thumpFreq: 90, tail: 1.1 },
  shotgun: { lowpass: 2200, decay: 0.4, gain: 1.05, thumpFreq: 80, tail: 0.7 },
  pistol: { lowpass: 5200, decay: 0.16, gain: 0.7, thumpFreq: 190, tail: 0.25 },
};

/**
 * Every sound in the game is synthesized from noise and oscillators,
 * so the project ships no audio assets.
 */
export class AudioSystem {
  private ctx: AudioContext | null = null;
  private master!: GainNode;
  private noise!: AudioBuffer;
  private ambience: { src: AudioBufferSourceNode; gain: GainNode } | null = null;
  private volume = 0.7;
  private readonly tmpFwd = new THREE.Vector3();
  private readonly tmpUp = new THREE.Vector3();
  private readonly listenerPos = new THREE.Vector3();

  /** Must be called from a user gesture before audio can play. */
  ensure(): void {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') void this.ctx.resume();
      return;
    }
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return;
    this.ctx = new Ctor();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.volume;
    const comp = this.ctx.createDynamicsCompressor();
    comp.threshold.value = -12;
    comp.ratio.value = 6;
    this.master.connect(comp).connect(this.ctx.destination);
    const len = this.ctx.sampleRate * 2;
    this.noise = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  }

  setVolume(v: number): void {
    this.volume = v;
    if (this.ctx) this.master.gain.value = v;
  }

  updateListener(camera: THREE.Camera): void {
    if (!this.ctx) return;
    camera.getWorldPosition(this.listenerPos);
    camera.getWorldDirection(this.tmpFwd);
    this.tmpUp.set(0, 1, 0).applyQuaternion(camera.quaternion);
    const l = this.ctx.listener;
    const p = this.listenerPos;
    if (l.positionX) {
      const t = this.ctx.currentTime;
      l.positionX.setValueAtTime(p.x, t);
      l.positionY.setValueAtTime(p.y, t);
      l.positionZ.setValueAtTime(p.z, t);
      l.forwardX.setValueAtTime(this.tmpFwd.x, t);
      l.forwardY.setValueAtTime(this.tmpFwd.y, t);
      l.forwardZ.setValueAtTime(this.tmpFwd.z, t);
      l.upX.setValueAtTime(this.tmpUp.x, t);
      l.upY.setValueAtTime(this.tmpUp.y, t);
      l.upZ.setValueAtTime(this.tmpUp.z, t);
    } else {
      l.setPosition(p.x, p.y, p.z);
      l.setOrientation(this.tmpFwd.x, this.tmpFwd.y, this.tmpFwd.z, this.tmpUp.x, this.tmpUp.y, this.tmpUp.z);
    }
  }

  /** Destination node: positional panner when pos is given, master otherwise. */
  private out(pos?: THREE.Vector3, refDistance = 4): AudioNode {
    const ctx = this.ctx!;
    if (!pos) return this.master;
    const panner = ctx.createPanner();
    panner.panningModel = 'equalpower';
    panner.distanceModel = 'inverse';
    panner.refDistance = refDistance;
    panner.maxDistance = 300;
    panner.rolloffFactor = 1;
    if (panner.positionX) {
      panner.positionX.value = pos.x;
      panner.positionY.value = pos.y;
      panner.positionZ.value = pos.z;
    } else {
      panner.setPosition(pos.x, pos.y, pos.z);
    }
    panner.connect(this.master);
    return panner;
  }

  private distanceTo(pos?: THREE.Vector3): number {
    return pos ? pos.distanceTo(this.listenerPos) : 0;
  }

  private noiseBurst(
    dest: AudioNode,
    when: number,
    opts: { type: BiquadFilterType; freq: number; q?: number; gain: number; attack?: number; decay: number },
  ): void {
    const ctx = this.ctx!;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    src.playbackRate.value = rand(0.85, 1.15);
    const filter = ctx.createBiquadFilter();
    filter.type = opts.type;
    filter.frequency.value = opts.freq;
    filter.Q.value = opts.q ?? 0.7;
    const g = ctx.createGain();
    const attack = opts.attack ?? 0.002;
    g.gain.setValueAtTime(0.0001, when);
    g.gain.exponentialRampToValueAtTime(opts.gain, when + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, when + attack + opts.decay);
    src.connect(filter).connect(g).connect(dest);
    src.start(when, rand(0, 1.5));
    src.stop(when + attack + opts.decay + 0.05);
  }

  private tone(
    dest: AudioNode,
    when: number,
    opts: { type: OscillatorType; from: number; to?: number; gain: number; decay: number; attack?: number },
  ): void {
    const ctx = this.ctx!;
    const osc = ctx.createOscillator();
    osc.type = opts.type;
    osc.frequency.setValueAtTime(opts.from, when);
    if (opts.to) osc.frequency.exponentialRampToValueAtTime(opts.to, when + opts.decay);
    const g = ctx.createGain();
    const attack = opts.attack ?? 0.003;
    g.gain.setValueAtTime(0.0001, when);
    g.gain.exponentialRampToValueAtTime(opts.gain, when + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, when + attack + opts.decay);
    osc.connect(g).connect(dest);
    osc.start(when);
    osc.stop(when + attack + opts.decay + 0.05);
  }

  shot(kind: ShotKind, pos?: THREE.Vector3): void {
    if (!this.ctx) return;
    const p = SHOT_PROFILES[kind];
    const t = this.ctx.currentTime;
    const dist = this.distanceTo(pos);
    // Distant shots lose their high end, like real gunfire carrying across a map.
    const distanceDamp = dist > 25 ? Math.max(0.25, 25 / dist) : 1;
    const dest = this.out(pos, 6);
    const own = !pos;
    const gain = p.gain * (own ? 0.55 : 1);
    this.noiseBurst(dest, t, { type: 'lowpass', freq: p.lowpass * distanceDamp, gain, decay: p.decay });
    this.noiseBurst(dest, t, { type: 'bandpass', freq: 1200, q: 1.5, gain: gain * 0.5, decay: p.decay * 0.5 });
    this.tone(dest, t, { type: 'sine', from: p.thumpFreq, to: 35, gain: gain * (own ? 0.9 : 0.6), decay: 0.12 });
    // Reverb-ish tail
    this.noiseBurst(dest, t + 0.04, {
      type: 'lowpass',
      freq: 700 * distanceDamp + 200,
      gain: gain * 0.18,
      attack: 0.03,
      decay: p.tail,
    });
    if (own) {
      this.tone(this.master, t + 0.02, { type: 'square', from: 2600, gain: 0.03, decay: 0.02 });
    }
  }

  reload(duration: number, perRound = false): void {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    if (perRound) {
      this.clack(t + duration * 0.6, 1600, 0.25);
      return;
    }
    this.clack(t + duration * 0.15, 1400, 0.3);
    this.clack(t + duration * 0.55, 2000, 0.35);
    this.clack(t + duration * 0.62, 900, 0.25);
    this.clack(t + duration * 0.85, 2400, 0.3);
  }

  bolt(): void {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.clack(t + 0.25, 1700, 0.3);
    this.clack(t + 0.45, 2300, 0.3);
  }

  pump(): void {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.clack(t + 0.2, 900, 0.4);
    this.clack(t + 0.38, 1300, 0.4);
  }

  private clack(when: number, freq: number, gain: number): void {
    this.noiseBurst(this.master, when, { type: 'bandpass', freq, q: 4, gain, decay: 0.05 });
    this.tone(this.master, when, { type: 'triangle', from: freq * 0.5, gain: gain * 0.15, decay: 0.04 });
  }

  dryFire(): void {
    if (!this.ctx) return;
    this.clack(this.ctx.currentTime, 3000, 0.25);
  }

  weaponSwitch(): void {
    if (!this.ctx) return;
    this.clack(this.ctx.currentTime + 0.05, 1200, 0.2);
  }

  footstep(pos?: THREE.Vector3, loud = 1): void {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.noiseBurst(this.out(pos, 2), t, {
      type: 'lowpass',
      freq: rand(450, 750),
      gain: 0.22 * loud,
      attack: 0.005,
      decay: 0.08,
    });
  }

  land(): void {
    if (!this.ctx) return;
    this.noiseBurst(this.master, this.ctx.currentTime, { type: 'lowpass', freq: 400, gain: 0.4, decay: 0.15 });
  }

  hitmarker(kill: boolean, headshot: boolean): void {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.tone(this.master, t, { type: 'triangle', from: headshot ? 2400 : 1800, gain: 0.15, decay: 0.05 });
    if (kill) this.tone(this.master, t + 0.06, { type: 'triangle', from: 1200, gain: 0.15, decay: 0.12 });
  }

  impact(pos: THREE.Vector3, flesh: boolean): void {
    if (!this.ctx || this.distanceTo(pos) > 40) return;
    this.noiseBurst(this.out(pos, 2), this.ctx.currentTime, {
      type: 'bandpass',
      freq: flesh ? 500 : rand(2500, 4000),
      q: 2,
      gain: flesh ? 0.3 : 0.15,
      decay: flesh ? 0.08 : 0.04,
    });
  }

  whiz(pos: THREE.Vector3): void {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    const f = ctx.createBiquadFilter();
    f.type = 'bandpass';
    f.Q.value = 6;
    f.frequency.setValueAtTime(5000, t);
    f.frequency.exponentialRampToValueAtTime(1500, t + 0.15);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.5, t + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
    src.connect(f).connect(g).connect(this.out(pos, 1));
    src.start(t);
    src.stop(t + 0.2);
  }

  hurt(): void {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.tone(this.master, t, { type: 'sine', from: 110, to: 50, gain: 0.5, decay: 0.2 });
    this.noiseBurst(this.master, t, { type: 'lowpass', freq: 300, gain: 0.3, decay: 0.12 });
  }

  explosion(pos: THREE.Vector3): void {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const dist = this.distanceTo(pos);
    const dest = this.out(pos, 10);
    this.noiseBurst(dest, t, { type: 'lowpass', freq: dist > 30 ? 500 : 1400, gain: 1.3, decay: 1.4 });
    this.tone(dest, t, { type: 'sine', from: 70, to: 22, gain: 1.2, decay: 0.8 });
    this.noiseBurst(dest, t + 0.1, { type: 'lowpass', freq: 300, gain: 0.4, attack: 0.1, decay: 2.2 });
  }

  grenadeBounce(pos: THREE.Vector3): void {
    if (!this.ctx) return;
    this.noiseBurst(this.out(pos, 2), this.ctx.currentTime, { type: 'bandpass', freq: 2200, q: 5, gain: 0.25, decay: 0.05 });
  }

  melee(): void {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.noiseBurst(this.master, t, { type: 'bandpass', freq: 800, q: 1, gain: 0.4, attack: 0.04, decay: 0.12 });
  }

  beep(freq = 880, gain = 0.15): void {
    if (!this.ctx) return;
    this.tone(this.master, this.ctx.currentTime, { type: 'sine', from: freq, gain, decay: 0.12 });
  }

  uiClick(): void {
    this.ensure();
    if (!this.ctx) return;
    this.tone(this.master, this.ctx.currentTime, { type: 'triangle', from: 1400, gain: 0.08, decay: 0.04 });
  }

  startAmbience(kind: 'wind' | 'harbor' | 'night'): void {
    if (!this.ctx) return;
    this.stopAmbience();
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    src.loop = true;
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = kind === 'harbor' ? 520 : kind === 'night' ? 260 : 380;
    const gain = ctx.createGain();
    gain.gain.value = kind === 'night' ? 0.05 : 0.08;
    // Slow LFO makes the wind gust.
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.12;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.035;
    lfo.connect(lfoGain).connect(gain.gain);
    lfo.start();
    src.connect(f).connect(gain).connect(this.master);
    src.start();
    this.ambience = { src, gain };
  }

  stopAmbience(): void {
    if (this.ambience) {
      try {
        this.ambience.src.stop();
      } catch {
        // already stopped
      }
      this.ambience.gain.disconnect();
      this.ambience = null;
    }
  }
}
