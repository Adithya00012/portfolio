# Adithya K — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Edit your content

Everything you'll want to change lives in one file: **`lib/data.ts`**
(name, bio, education, skills, projects, experience, email, GitHub, LinkedIn,
and your Formspree endpoint). Component files should rarely need edits.

## 1. Install dependencies

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open http://localhost:3000

## 3. Build for production

```bash
npm run build
npm start
```

## 4. Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts (link/create a project, accept defaults). Every subsequent
`vercel --prod` (or a push to your connected GitHub repo) redeploys.

Or without the CLI: push this folder to a GitHub repo, go to
https://vercel.com/new, import the repo, and click Deploy — Vercel
auto-detects Next.js, no config needed.

## 5. Deploy to Cloudflare Pages (alternative)

```bash
npm install -g @cloudflare/next-on-pages
npx @cloudflare/next-on-pages
```

In the Cloudflare dashboard: Pages → Create a project → connect your GitHub
repo → set build command to `npx @cloudflare/next-on-pages@1` and build
output directory to `.vercel/output/static`.

## 6. Connect a custom domain

**Vercel:** Project → Settings → Domains → add `yourname.dev` → follow the
DNS instructions shown (usually an A record or CNAME at your registrar).

**Cloudflare Pages:** Pages project → Custom domains → Set up a domain →
follow the shown DNS steps (simplest if the domain is already on Cloudflare).

## Notes

- Dark mode is on by default (`next-themes`, toggle in the navbar).
- The contact form posts to the Formspree endpoint set in `lib/data.ts` —
  create one free at https://formspree.io and paste your endpoint URL in.
- Replace placeholder education/experience entries in `lib/data.ts` with
  your real details.
- Add real project screenshots by dropping images in `public/` and wiring
  them into `ProjectCard.tsx` with `next/image` if you want thumbnails.
