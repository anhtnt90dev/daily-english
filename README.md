# Daily English Dictation

Daily English is a TypeScript React web app for English dictation practice. It is inspired by the learning workflow of https://dailydictation.com/, but it is an original implementation with original lesson text, browser-generated speech, custom UI, and no copied assets or proprietary content.

## Features

- Topic and lesson browsing for A1-C1 listening practice
- Sentence-by-sentence dictation player using browser speech synthesis
- Typed answer checking with punctuation/case normalization
- Missing and extra word feedback
- Hint and reveal controls
- Full transcript tab
- Local progress and accuracy tracking
- Light/dark theme
- Responsive layout for desktop and mobile
- Static GitHub Pages deployment workflow

## Tech Stack

- TypeScript
- React
- Vite
- React Router
- Vitest
- Testing Library
- Lucide React
- GitHub Actions and GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run test:run
npm run lint
npm run build
```

## Deployment

The app is configured for GitHub Pages. On `main` pushes, `.github/workflows/pages.yml` runs tests, builds with `GITHUB_PAGES=true`, uploads `dist`, and deploys Pages.

Expected public URL after deployment:

```text
https://anhtnt90dev.github.io/daily-english/
```

## Documentation

- English process document: [docs/PROCESS.en.md](docs/PROCESS.en.md)
- Vietnamese process document: [docs/PROCESS.vi.md](docs/PROCESS.vi.md)
- Design spec: [docs/superpowers/specs/2026-05-31-daily-english-design.md](docs/superpowers/specs/2026-05-31-daily-english-design.md)
- Implementation plan: [docs/superpowers/plans/2026-05-31-daily-english.md](docs/superpowers/plans/2026-05-31-daily-english.md)

