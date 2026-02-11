# AGENTS.md

## Authority
AGENTS.md is a project-local constraint layer that narrows behavior beyond the global system prompt. If AGENTS.md conflicts with the system prompt, AGENTS.md takes precedence for this repository.

## Project Scope
This repository is a single-screen Expo + Three.js template for 3D game building.

## File Stability Levels
- Stable (do not modify unless instructed): `App.tsx`, `src/game/index.ts`
- Extensible (preferred for changes): `src/game/**`
- Asset-only: `assets/**`

## Allowed Change Types
You may:
- Add new components or systems under `src/game/`.
- Extend `src/game/Scene.tsx` or replace it with a new scene entry.

You must not:
- Introduce navigation, routing, or multi-screen flows.
- Reorganize directories.
- Rename public exports.

## Native Modules (Platform-Specific)
- Import or use native modules only from `*.native.ts` or `*.native.tsx` files.
- Do not import native modules from shared files or `*.web.*` files, even with `Platform` guards.
- Use platform-specific file splits (e.g., `Thing.native.tsx` / `Thing.web.tsx`) to isolate native dependencies.

## Data Flow Rules
- Game state must be scene-local by default (React state, refs, or local hooks in `src/game/**`).
- Shared module state is allowed only when required and must live in `src/game/` with clear ownership and reversible side effects.
- Per-frame logic must be placed inside `useFrame` only.
- Side effects must be isolated and reversible; avoid global mutable state.

## Performance Rules (Mobile-First)
- Reuse vectors, refs, and objects; do not allocate per-frame in `useFrame`.
- Do not create geometries or materials inside `useFrame`.
- Assume mobile performance constraints even when targeting web.

## Examples
Example: `useFrame` allocation  
Good:
```ts
const temp = useMemo(() => new Vector3(), []);
useFrame(() => {
  temp.set(1, 2, 3);
  meshRef.current?.position.copy(temp);
});
```
Bad:
```ts
useFrame(() => {
  const temp = new Vector3(1, 2, 3);
  meshRef.current?.position.copy(temp);
});
```

Example: scene-local vs module-global state  
Good:
```ts
export function Scene() {
  const [score, setScore] = useState(0);
  // ...
}
```
Bad:
```ts
let score = 0;
export function Scene() {
  score += 1;
  // ...
}
```

Example: correct vs incorrect file placement  
Good: `src/game/Player.tsx`  
Bad: `components/Player.tsx` or `src/ui/Player.tsx`

## Asset Usage Rules
- Assets must be local files under `assets/`.
- Do not reference remote assets or URLs.
- Placeholder assets are allowed only when required for a task.
- Keep assets small and minimal: default limit is 5 new assets, each = 1 MB, unless explicitly requested otherwise.

## What Not to Build (Non-Goals)
Do not add any of the following unless explicitly requested:
- Menus, editors, or HUD systems.
- Physics engines.
- Multiplayer or networking features.

## Verification
Changes must leave the project runnable within this template. The system prompt requires verification when appropriate; this repository assumes verification before task completion.

## Incremental Change Contract
- Changes must be incremental: one new mechanic or system at a time.
- Broad refactors are not allowed.

## Change Checklist
- Changes confined to `src/game/**` unless explicitly requested.
- `App.tsx` and `src/game/index.ts` untouched unless explicitly requested.
- No new dependencies or devDependencies; no edits to `package.json` or `package-lock.json` unless explicitly requested.
- No navigation, routing, or multi-screen flows added.
- Assets are local under `assets/` (no remote URLs).
- No per-frame allocations or geometry/material creation inside `useFrame`.

## Final Authority
If unsure, do not modify code. Ask for clarification.
