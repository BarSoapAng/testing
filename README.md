# 3D Game Template (Expo + Three.js)

Single-screen Expo template for agent-driven 3D game building. The entrypoint is `App.tsx` and all game logic lives under `src/game`.

## Quickstart
1. `npm install`
2. `npm run start`
3. `npm run web`

## Entry Point
- `App.tsx` is the only app entrypoint.
- `src/game/index.ts` exports `GameCanvas`.

## Structure
- `App.tsx` : App shell and status bar.
- `src/game/GameCanvas.*` : Platform-specific canvas wiring.
- `src/game/Scene.tsx` : Minimal spinning cube scene.
- `src/game/config.ts` : Camera, lighting, and color defaults.
- `assets/` : Runtime models, textures, and audio.

## Asset Pipeline
See `assets/README.md` for formats and naming conventions.

## Agent Guidelines
- Keep `App.tsx` minimal and stable.
- Add systems, components, and scenes under `src/game`.
- Prefer data-driven configuration in `src/game/config.ts`.
- Avoid adding routers or multi-screen navigation unless explicitly requested.
- Keep frame times stable and avoid heavy allocations inside `useFrame`.

## Commands
- `npm run start` : Start Expo dev server.
- `npm run web` : Run web build.
- `npm run lint` : Lint the codebase.
- `npm run typecheck` : TypeScript type check.
- `npm run verify` : Lint + type check.
