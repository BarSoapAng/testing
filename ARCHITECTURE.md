# Architecture

**Purpose**
This repository is a single-screen Expo + Three.js template for 3D game building. It is optimized for AI agents that make direct, incremental changes to the codebase.

**Agent Operating Model**
- Follow `AGENTS.md` as the highest local authority.
- Keep `App.tsx` minimal and stable; concentrate changes under `src/game/`.
- Avoid navigation, routing, or multi-screen flows unless explicitly requested.
- Assets must be local files under `assets/`.

**Runtime Flow**
1. Expo bootstraps via `expo/AppEntry` (declared in `package.json`).
2. `App.tsx` renders the app shell and `GameCanvas`.
3. `src/game/index.ts` exports the platform-resolved `GameCanvas`.
4. `GameCanvas.native.tsx` or `GameCanvas.web.tsx` creates the React Three Fiber `Canvas`.
5. `Scene.tsx` defines the current 3D scene and per-frame updates (`useFrame`).
6. `config.ts` centralizes camera, lighting, and color defaults.

**File Tree (All Non-Ignored Paths)**
```text
.
├─ .git/                     # Local git metadata (not part of runtime/shipped code).
├─ .gitignore                # Ignore rules for build output and local tooling.
├─ AGENTS.md                 # Agent constraints and rules (must be respected).
├─ ARCHITECTURE.md           # This document.
├─ App.tsx                   # Single app entrypoint; renders GameCanvas + StatusBar.
├─ app.json                  # Expo app configuration; references assets in assets/images/.
├─ assets/                   # Runtime assets used by the game and app.
│  ├─ README.md              # Asset formats and naming conventions.
│  └─ images/                # App icons, splash image, and template images (files intentionally omitted).
├─ eslint.config.js          # ESLint configuration (Expo flat config).
├─ metro.config.js           # Metro bundler config; enables 3D asset extensions.
├─ package.json              # Dependencies and scripts (start/web/lint/typecheck/verify).
├─ package-lock.json         # NPM lockfile; keep in sync with package.json.
├─ README.md                 # Human-readable overview and quickstart.
├─ scripts/                  # Project scripts placeholder (currently empty).
├─ src/                      # Source root for app/game code.
│  └─ game/                  # Game runtime code (preferred extension point).
│     ├─ config.ts           # Camera, lighting, and color defaults.
│     ├─ GameCanvas.native.tsx # Native canvas wiring (@react-three/fiber/native).
│     ├─ GameCanvas.web.tsx  # Web canvas wiring (@react-three/fiber).
│     ├─ index.ts            # Re-exports GameCanvas for App.tsx.
│     └─ Scene.tsx           # Default scene and per-frame updates.
└─ tsconfig.json             # TypeScript config (strict, @/* path alias).
```

**Change Guidance**
- Prefer adding new systems, components, and scenes under `src/game/`.
- Keep per-frame updates inside `useFrame` and avoid allocations each frame.
- Update `assets/` and `app.json` together when changing app icons or splash assets.

**Verification**
- `npm run start` to run the Expo dev server.
- `npm run web` for the web target.
- `npm run verify` to lint and typecheck.
