import * as THREE from 'three';
import { BODY_HALF_WIDTH, CROUCH_HEIGHT, STAND_HEIGHT, type Actor } from '../combat/Actor';
import { clamp, damp } from '../core/math';
import type { Body, CollisionWorld } from '../world/Collision';

export interface MoveIntent {
  /** -1..1 strafe (right positive) */
  x: number;
  /** -1..1 forward (forward positive) */
  z: number;
  sprint: boolean;
  jump: boolean;
  crouchPressed: boolean;
  /** Speed multiplier from the held weapon and aiming */
  speedMult: number;
  /** True when something prevents sprinting (aiming, firing) */
  blockSprint: boolean;
}

export const WALK_SPEED = 4.4;
export const SPRINT_SPEED = 6.9;
export const CROUCH_SPEED = 2.3;
const SLIDE_SPEED = 9.5;
const SLIDE_TIME = 0.75;
const JUMP_VELOCITY = 5.3;
const GRAVITY = 17;
const STEP_HEIGHT = 0.45;
const MAX_STAMINA = 100;

/**
 * Movement physics: walking, sprinting with stamina, crouching, sliding
 * and jumping. Operates on the actor's position/velocity.
 */
export class PlayerController {
  stamina = MAX_STAMINA;
  private staminaCooldown = 0;
  sprinting = false;
  sliding = false;
  private slideTimer = 0;
  private slideCooldown = 0;
  private readonly slideDir = new THREE.Vector3();
  wantCrouch = false;
  /** Vertical speed at the moment of landing (for camera dip & sound) */
  landImpact = 0;
  private readonly body: Body;
  private readonly wish = new THREE.Vector3();

  constructor(private readonly actor: Actor) {
    this.body = {
      pos: actor.position,
      vel: actor.velocity,
      halfW: BODY_HALF_WIDTH,
      height: STAND_HEIGHT,
      grounded: false,
    };
  }

  get maxStamina(): number {
    return MAX_STAMINA;
  }

  reset(): void {
    this.stamina = MAX_STAMINA;
    this.sprinting = false;
    this.sliding = false;
    this.wantCrouch = false;
    this.actor.crouching = false;
    this.actor.height = STAND_HEIGHT;
    this.body.grounded = false;
  }

  update(dt: number, intent: MoveIntent, world: CollisionWorld): void {
    const a = this.actor;
    const grounded = this.body.grounded;
    const v = a.velocity;
    const hSpeed = Math.hypot(v.x, v.z);
    this.landImpact = 0;
    this.slideCooldown -= dt;

    // --- Crouch / slide ---
    if (intent.crouchPressed) {
      if (this.sprinting && grounded && hSpeed > 5 && this.slideCooldown <= 0 && this.stamina > 10) {
        this.sliding = true;
        this.slideTimer = SLIDE_TIME;
        this.slideCooldown = 1.1;
        this.slideDir.set(v.x, 0, v.z).normalize();
        v.x = this.slideDir.x * SLIDE_SPEED;
        v.z = this.slideDir.z * SLIDE_SPEED;
        this.stamina -= 10;
        this.wantCrouch = true;
      } else {
        this.wantCrouch = !this.wantCrouch;
      }
    }

    // --- Sprint ---
    const forwardHeld = intent.z > 0.5;
    if (intent.sprint && forwardHeld && !intent.blockSprint && grounded && !this.sliding) {
      if (!this.sprinting && this.stamina > 15) {
        this.sprinting = true;
        this.wantCrouch = false;
      }
    }
    if (this.sprinting && (!intent.sprint || !forwardHeld || intent.blockSprint || this.stamina <= 0)) {
      this.sprinting = false;
    }
    if (this.sprinting) {
      this.stamina -= 18 * dt;
      this.staminaCooldown = 1.0;
    } else {
      this.staminaCooldown -= dt;
      if (this.staminaCooldown <= 0) this.stamina = Math.min(MAX_STAMINA, this.stamina + 30 * dt);
    }
    this.stamina = clamp(this.stamina, 0, MAX_STAMINA);

    // --- Stance ---
    const wantLow = this.wantCrouch || this.sliding;
    if (wantLow) {
      a.crouching = true;
    } else if (a.crouching) {
      // Only stand up if there's headroom
      if (!world.bodyOverlaps(a.position.x, a.position.y + 0.01, a.position.z, BODY_HALF_WIDTH, STAND_HEIGHT)) a.crouching = false;
      else this.wantCrouch = true;
    }
    this.body.height = a.crouching ? CROUCH_HEIGHT : STAND_HEIGHT;
    a.height = damp(a.height, this.body.height, 14, dt);

    // --- Horizontal movement ---
    const sin = Math.sin(a.yaw);
    const cos = Math.cos(a.yaw);
    // forward = (-sin, -cos), right = (cos, -sin)
    this.wish.set(-sin * intent.z + cos * intent.x, 0, -cos * intent.z - sin * intent.x);
    if (this.wish.lengthSq() > 1) this.wish.normalize();

    if (this.sliding) {
      this.slideTimer -= dt;
      const decay = Math.exp(-2.2 * dt);
      v.x *= decay;
      v.z *= decay;
      // Slight steering
      v.x += this.wish.x * 3 * dt;
      v.z += this.wish.z * 3 * dt;
      if (this.slideTimer <= 0 || Math.hypot(v.x, v.z) < 3 || !grounded) this.sliding = false;
    } else {
      let speed = WALK_SPEED;
      if (this.sprinting) speed = SPRINT_SPEED;
      else if (a.crouching) speed = CROUCH_SPEED;
      speed *= intent.speedMult;
      if (this.stamina < 10 && !this.sprinting) speed *= 0.95;
      const tx = this.wish.x * speed;
      const tz = this.wish.z * speed;
      const accel = grounded ? 12 : 2;
      v.x = damp(v.x, tx, accel, dt);
      v.z = damp(v.z, tz, accel, dt);
    }

    // --- Jump & gravity ---
    if (intent.jump && grounded && !a.crouching && this.stamina > 5) {
      v.y = JUMP_VELOCITY;
      this.stamina -= 6;
      this.body.grounded = false;
    } else if (intent.jump && grounded && a.crouching && !this.sliding) {
      this.wantCrouch = false; // jump key stands you up
    }
    v.y -= GRAVITY * dt;
    const preVy = v.y;
    world.moveBody(this.body, v.x * dt, v.y * dt, v.z * dt, STEP_HEIGHT);
    if (!grounded && this.body.grounded) this.landImpact = -preVy;
    a.grounded = this.body.grounded;
  }

  horizontalSpeed(): number {
    return Math.hypot(this.actor.velocity.x, this.actor.velocity.z);
  }
}
