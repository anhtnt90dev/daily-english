# Daily English Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a TypeScript React dictation practice app inspired by the learning workflow of DailyDictation, using only original project content.

**Architecture:** A Vite React SPA with typed lesson data, pure dictation/progress helpers, reusable layout/components, responsive CSS, bilingual documentation, and GitHub Pages deployment.

**Tech Stack:** TypeScript, React, Vite, React Router, Vitest, Testing Library, GitHub Actions, GitHub Pages.

---

### Task 1: Project Scaffold

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `.gitignore`
- Create: `.github/workflows/pages.yml`

- [ ] Add Vite React TypeScript scripts for `dev`, `build`, `preview`, `test`, `test:run`, and `lint`.
- [ ] Configure Vitest with jsdom and Testing Library setup.
- [ ] Configure GitHub Pages workflow with `actions/configure-pages`, `actions/upload-pages-artifact`, and `actions/deploy-pages`.

### Task 2: Domain Logic With TDD

**Files:**
- Create: `src/lib/dictation.test.ts`
- Create: `src/lib/dictation.ts`
- Create: `src/lib/progress.test.ts`
- Create: `src/lib/progress.ts`

- [ ] Write failing tests for answer normalization and token-level answer evaluation.
- [ ] Implement the minimal dictation helpers.
- [ ] Write failing tests for lesson progress summaries.
- [ ] Implement progress helpers and localStorage adapter.

### Task 3: Original Lesson Data

**Files:**
- Create: `src/types.ts`
- Create: `src/data/lessons.ts`
- Create: `src/data/leaderboard.ts`

- [ ] Define typed topics, lessons, lesson parts, and levels.
- [ ] Add original sample lessons across short stories, conversations, exam practice, numbers, names, and workplace English.
- [ ] Add sample leaderboard rows without copying real user data.

### Task 4: React App

**Files:**
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/components/*.tsx`
- Create: `src/pages/*.tsx`
- Create: `src/test/setup.ts`

- [ ] Write failing React tests for home rendering and lesson answer feedback.
- [ ] Implement router, layout, theme toggle, topic cards, lesson lists, and lesson player.
- [ ] Add speech synthesis playback, hint/reveal controls, transcript tab, and progress persistence.

### Task 5: Styling And Assets

**Files:**
- Create: `src/styles.css`
- Create: `public/icon.svg`

- [ ] Implement responsive original styling with stable layout dimensions.
- [ ] Add accessible focus styles, light/dark theme tokens, and visual icons.

### Task 6: Documentation

**Files:**
- Create: `README.md`
- Create: `docs/PROCESS.en.md`
- Create: `docs/PROCESS.vi.md`

- [ ] Document setup, scripts, architecture, testing, deployment, and originality/copyright assumptions in English and Vietnamese.

### Task 7: Verification And Deployment

**Files:**
- Modify: repository metadata and git remote as needed.

- [ ] Run `npm install`.
- [ ] Run `npm run test:run`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Start local preview for smoke testing.
- [ ] Initialize git, commit, create `anhtnt90dev/daily-english` if needed, push, and enable/deploy GitHub Pages when authentication allows.

