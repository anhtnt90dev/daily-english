# Daily English Build Process

## 1. Objective

The goal was to build a TypeScript web application that offers a dictation learning workflow similar to the public structure of DailyDictation: browsing exercise categories, choosing lessons, listening to sentences, typing answers, checking accuracy, and reviewing transcripts.

Because the reference site is a third-party website, this project does not copy its brand, lesson content, audio files, source code, user data, or exact visual design. The result is an original app with a comparable educational workflow.

Reference observed:

- https://dailydictation.com/
- https://dailydictation.com/exercises/short-stories/1-first-snowfall.1/listen-and-type

## 2. Product Decisions

- The app is a static single page application so it can deploy cleanly to GitHub Pages.
- Audio uses the browser `speechSynthesis` API, avoiding licensed audio assets.
- Lesson content is local TypeScript data written specifically for this project.
- Progress is stored in `localStorage`, avoiding backend setup.
- Login and registration pages are visual placeholders only because no backend credentials or database were provided.
- The expected deployment target is `anhtnt90dev/daily-english` on GitHub Pages.

## 3. Architecture

The app is split into small units:

- `src/data/lessons.ts`: topic and lesson catalog plus filtering helpers.
- `src/data/leaderboard.ts`: sample leaderboard data.
- `src/lib/dictation.ts`: answer normalization, tokenization, scoring, and hints.
- `src/lib/progress.ts`: lesson progress summaries and localStorage persistence.
- `src/components`: shared layout, cards, and progress UI.
- `src/pages`: route-level pages for home, exercises, topic, lesson, top users, auth, and not found.
- `.github/workflows/pages.yml`: GitHub Pages build and deploy workflow.

## 4. Implementation Steps

1. Created design and implementation plan documents under `docs/superpowers`.
2. Added Vite, React, TypeScript, Vitest, Testing Library, and GitHub Pages configuration.
3. Wrote failing tests for dictation helpers, progress helpers, catalog selectors, and the React user flow.
4. Implemented the minimum logic needed to pass the tests.
5. Added original lesson data across short stories, conversations, exam practice, numbers and names, pronunciation, and workplace English.
6. Built the React router, page layout, topic cards, lesson cards, dictation UI, transcript tab, theme toggle, leaderboard, and static auth pages.
7. Added responsive CSS and a custom SVG icon.
8. Upgraded Vite/Vitest/plugin-react to matching current versions after typecheck exposed a dependency type mismatch.
9. Wrote bilingual documentation.
10. Prepared the repository for GitHub Pages deployment.

## 5. Testing Strategy

The core logic was built test-first:

- `normalizeAnswer` ignores capitalization, punctuation, apostrophes, and extra spacing.
- `evaluateAnswer` reports correct, missing, and extra words with a percentage score.
- `revealHint` masks words while preserving first letters.
- `mergePartResult` updates one sentence result without losing prior progress.
- `buildLessonProgress` calculates completed parts and average accuracy.
- Catalog tests validate topics, lesson lookup, filtering, and featured lessons.
- React tests validate the home page and lesson feedback flow.

## 6. Commands

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run tests:

```bash
npm run test:run
```

Run typecheck:

```bash
npm run lint
```

Build production assets:

```bash
npm run build
```

Preview the build:

```bash
npm run preview
```

## 7. Deployment

The workflow in `.github/workflows/pages.yml` performs these steps:

1. Check out the repository.
2. Install Node.js 24.
3. Run `npm ci`.
4. Run `npm run test:run`.
5. Run `GITHUB_PAGES=true npm run build`.
6. Copy `dist/index.html` to `dist/404.html` so direct SPA routes render in browsers on GitHub Pages.
7. Upload `dist`.
8. Deploy to GitHub Pages.

The Vite config uses `/daily-english/` as the base path when `GITHUB_PAGES=true`, so assets resolve correctly on:

```text
https://anhtnt90dev.github.io/daily-english/
```

Direct clean routes such as `/daily-english/lesson/morning-at-the-station` are served through the GitHub Pages `404.html` SPA fallback. GitHub still returns an HTTP 404 for direct deep-link fetches, but browsers render the React route correctly.

## 8. Limitations

- Speech quality depends on the browser and operating system voices.
- Progress is local to the browser and is not synced across devices.
- Login/register pages are placeholders because this static deployment has no backend.
- The leaderboard uses sample data, not real user accounts.
