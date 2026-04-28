# conference-team-skills-website

Marketing site for the [Conference Team Skills](https://github.com/msg2ai/conference-team-skills) — eight free Claude Skills for conference organizing teams.

Built with **Next.js 16** (App Router, TypeScript, static export). Deploys cleanly to Vercel.

## What's here

- `/` — landing page (hero, 8 role cards with cartoon characters, mock conference showcase, copy-paste guide for Claude.ai / Claude Code / Codex / Cursor, contact form, FAQ, footer with privacy/terms/MIT)
- `/mock` — interactive viewer for the FutureStack 2026 mock conference (8 skill sections × 3 sample artifacts each, rendered from markdown via `marked`)
- `/privacy` — privacy policy
- `/terms` — terms of service

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export to ./out
npm run start        # serve the production build
npm run typecheck    # tsc --noEmit
```

## Deploying to Vercel

Three options.

**1. Connect the GitHub repo to Vercel (recommended)**

```bash
# 1. Push this repo to github.com/msg2ai/conference-team-skills-website
# 2. Go to vercel.com → New Project → Import the repo
# 3. Framework: Next.js (auto-detected). No env vars needed. Deploy.
```

Every PR gets a preview URL automatically. The apex domain (`conference-team-skills.com` or whatever you choose) can be wired in Vercel → Domains.

**2. One-shot deploy via Vercel CLI**

```bash
npm install -g vercel
vercel link        # link to your Vercel team / create project
vercel             # deploy a preview
vercel --prod      # promote to production
```

**3. Static export to any host**

```bash
npm run build       # produces ./out/ — pure static HTML/CSS/JS
# upload ./out to S3, Netlify, Cloudflare Pages, GitHub Pages, anywhere
```

## Project structure

```
conference-team-skills-website/
├── app/
│   ├── layout.tsx           ← shared shell + Google Fonts
│   ├── globals.css          ← all styles, no Tailwind
│   ├── page.tsx             ← landing page
│   ├── components/
│   │   ├── CharacterSvgs.tsx  ← 8 inline cartoon characters
│   │   ├── ContactForm.tsx    ← mailto: form (client)
│   │   └── PasteSection.tsx   ← Claude.ai/Code/Codex/Cursor tabs (client)
│   ├── mock/
│   │   ├── page.tsx           ← /mock route
│   │   └── MockViewer.tsx     ← client component, renders markdown via marked.js
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── public/
│   ├── campaign-visual.png  ← rendered from the parent repo's docs/
│   └── mock-data/           ← 24 markdown files copied from the parent repo's mock/outputs/
├── package.json             ← Next 16.1.2, React 19.1
├── next.config.mjs          ← static export config
├── tsconfig.json
└── README.md
```

## Updating the mock content

The 24 sample artifact markdown files in `public/mock-data/` are copies from the parent repo at [`mock/outputs/`](https://github.com/msg2ai/conference-team-skills/tree/main/mock). When the source updates, refresh them:

```bash
cp -R ../conference-team-skills/mock/outputs/. public/mock-data/
cp ../conference-team-skills/mock/conference.md public/mock-data/_conference.md
```

## License

MIT — same as the parent repo. See [LICENSE](./LICENSE).
