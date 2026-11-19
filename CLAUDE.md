# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**claude_of_duty** is a semi-realistic first-person shooter in the style of modern military FPS games. It is an original game: build its own setting, characters, weapons, maps and art rather than copying assets, names or levels from any existing franchise.

Remote: https://github.com/Myprogrammingkid/claude_of_duty (default branch `main`).

Setting: the player's side is the Ashgrove Rangers, fighting the Veldt Coalition. Single-player campaign (3 missions) plus offline bot matches (TDM / FFA) on 3 maps.

## Stack & commands

Browser game: **Three.js + TypeScript**, bundled with **Vite**. Node is installed at `C:\Program Files\nodejs` (Git Bash may need `export PATH="/c/Program Files/nodejs:$PATH"`).

- `npm install`: install dependencies
- `npm run dev`: dev server at http://localhost:5173
- `npm run build`: type-check (`tsc --noEmit`) and production build to `dist/`
- `npm run preview`: serve `dist/`
- `npm run lint`: ESLint over `src/`
- No tests yet (the user asked to defer them). Combat, nav and movement logic are kept free of rendering so tests can be added later.

## Architecture (`src/`)

- `core/Game.ts`: renderer, main loop and the app state machine (menu → loading → ready → playing ⇄ paused → results). The simulation runs in substeps of at most 1/60 s per frame. The view model is drawn in a second pass after `clearDepth()` so the gun never clips into walls. `window.game` is exposed for debugging.
- `core/`: `Input` (pointer lock and per-frame edge detection), `Audio` (all sound synthesized with WebAudio, no asset files), `Settings` (localStorage), `Events` (typed bus).
- `game/Session.ts`: one running match or mission. Owns the scene, level, actors, grenades, effects and mode. Handles all combat: `fire()` (hitscan, pellets, spread cone, damage, near-miss whiz, alerting bots), `explode()`, `melee()`, `dealDamage()`/kill events. `Difficulty.ts` holds the bot tuning per difficulty.
- `world/`: maps are data built with the `MapBuilder` helpers (boxes, buildings with door/window openings, containers, lamps, zones, spawns) in `world/maps/*.ts`. `Level` merges the geometry per material, uses world-space UVs and procedural canvas textures (`Textures.ts`), and builds the sky shader, `CollisionWorld` and `NavGraph`. `Collision.ts` is an AABB soup in a uniform grid: per-axis body movement with step-up, and slab raycasts.
- `combat/`: `Actor` is the base for the player and bots (health, regen, stats, and the hitbox ray test: head sphere and torso/legs cylinders). `Damage.ts` holds the pure damage math (range falloff, zone multipliers, explosion falloff).
- `player/`: `PlayerController` handles movement physics (walk/sprint/crouch/slide/jump, stamina). `Player` handles weapons, ADS, recoil with partial recovery, scope sway and hold-breath, melee, grenades, head bob and the camera.
- `weapons/`: `WeaponDefs.ts` is the data table for all guns (tune balance here). `Weapon` is the ammo/fire-rate/reload/spread state machine shared by the player and bots. `GunMeshes` builds the procedural gun models, `ViewModel` handles the first-person arms and animation, and `Grenade` the frag physics.
- `ai/`: `NavGraph` is an auto-generated waypoint grid with door hints, A* search, and largest-component pruning. `Bot` runs perception (vision cone + LOS, hearing gunfire, squad alerts) and a state machine (idle/patrol → engage ⇄ cover → search) with per-behavior idle logic (`roam`, `guard`, `patrol`, `assault`, `follow`).
- `characters/Soldier.ts`: low-poly soldier rig with procedural walk, crouch, aim and death animation, plus team styles.
- `modes/`: `Mode` is the base class (HUD data, scoreboard, `isEnemy`). `BotMatch` covers TDM/FFA with respawns and score/time limits. `Campaign` runs the objective sequence (`reach` / `eliminate` / `interact` / `defend` with waves) whose data lives in `Missions.ts`.
- `ui/`: `HUD` is a DOM overlay (spread-accurate crosshair, hitmarkers, compass, objective marker, killfeed, damage arcs, scope, scoreboard). `Menus` holds every full-screen menu, plus loadout and campaign unlock progress in localStorage.

Coordinate conventions: Y is up and units are metres. `yaw = 0` faces -Z (north), and forward is `(-sin yaw, 0, -cos yaw)`. Actor `position` is the feet.

## Environment notes

- Development happens on Windows. Git Bash's CA bundle fails SSL verification against GitHub on this machine; this repo's local git config sets `http.sslBackend=schannel` (Windows certificate store) to work around it. A fresh clone needs `git -c http.sslBackend=schannel clone ...` and then `git config --local http.sslBackend schannel`.
