# Scrollytelling Demo

A premium, cinematic landing page demo built with React + Vite + Framer Motion.

## Highlights

- Dark premium visual system with soft gradients and elevated cards
- Full-screen hero with staged intro motion
- Sticky storytelling section with text progression on scroll
- Three animated feature cards with fade-and-scale reveal
- Cinematic CTA ending with large typography
- Responsive, desktop-first layout
- Pointer-follow ambient light effect for extra depth on desktop
- Built-in reduced-motion toggle with preference persistence

## Tech

- React 18
- Vite 5
- Framer Motion

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Import this repository in Vercel.
2. Framework preset: `Vite`.
3. Build command: `npm run build`.
4. Output directory: `dist`.

## CI

A tiny GitHub Actions workflow is included at `.github/workflows/ci.yml`.

- Triggers on push and pull requests to `main`/`master`
- Runs `npm ci` and `npm run build`

