# GVPCBG — SAFETY TEAM

Institutional website for **SAFETY TEAM** (OdV; sigla **GVPCBG** — Gruppo Volontari Protezione Civile Busto Garolfo): volunteer civil protection active in Busto Garolfo (MI) since 1993.

Site UI language: **Italian** · Design: Designers Italia / AGID-inspired (Titillium Web, Blu Italia, slim header + brand + nav)

Facebook: [GVPCBG](https://www.facebook.com/GVPCBG/)

License: [PolyForm Noncommercial 1.0.0](./LICENSE) · Built by [Stefano Monolo](https://smnl.dev)

## Features

- Marketing pages: home, chi siamo, attività, novità, foto, diventa volontario, contatti (con numeri di emergenza)
- Institutional chrome: slim utility bar, brand header, main nav (mobile menu), footer with open-source credits

- CMS (Sanity): photo gallery, announcements, news articles — editable at `/studio` without code changes
- Photo gallery with category filters, pagination, and accessible lightbox
- News listing with pagination (`/novita`)
- SEO: metadata, sitemap, robots, Open Graph image, JSON-LD
- Accessibility-oriented layout (skip link, landmarks, keyboard nav, reduced motion)
- Legal pages: privacy and accessibilità

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Base UI (Dialog) · Sanity · Prettier (+ Tailwind plugin)

## Setup

```bash
npm install
cp .env.example .env.local
```

Create a free Sanity project at [sanity.io/manage](https://www.sanity.io/manage), then set in `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=yourProjectId
NEXT_PUBLIC_SANITY_DATASET=production
```

Add `http://localhost:3000` as a CORS origin in the Sanity project (Credentials allowed). Invite editors under **Project → Members**.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the site and [http://localhost:3000/studio](http://localhost:3000/studio) for the editor.

Canonical absolute URLs (sitemap, Open Graph, JSON-LD) come from `NEXT_PUBLIC_SITE_URL` when set, otherwise Vercel’s URL in that environment, otherwise `http://localhost:3000`. Set the env var once a production domain is chosen.

Without Sanity env vars the site still builds: gallery falls back to local placeholders in `lib/photos.ts`; news and announcements stay empty.

```bash
npm run build
npm run lint
npm run format
npm run format:check
```

## Project layout

| Path             | Role                                            |
| ---------------- | ----------------------------------------------- |
| `app/(site)/`    | Public App Router pages                         |
| `app/studio/`    | Embedded Sanity Studio                          |
| `components/`    | Layout, home sections, photos, news, UI         |
| `lib/`           | Site copy, navigation, photo types, SEO helpers |
| `sanity/`        | Schemas, client, GROQ queries, content loaders  |
| `public/`        | Static assets (logo, icons, local photo files)  |
| `.cursor/rules/` | Agent rules (code quality, formatting, docs)    |

## Content

**Editable in Sanity Studio (`/studio`):**

- Foto (title, caption, alt, category, image, featured)
- Avvisi (site-wide banner below the navbar on every public page)
- Articoli (news at `/novita` and `/novita/[slug]`)

**Still in code (rarely changed):**

- Identity, contacts, hours: `lib/site.ts`
- Nav + activities: `lib/navigation.ts`
- SEO page map: `lib/seo.ts`
- Local gallery fallback: `lib/photos.ts` + `public/photos/`

Published CMS content is revalidated about every 60 seconds.

## Privacy

The association privacy notice for the public site is at `/privacy` (Italian). A short repo summary is in [PRIVACY.md](./PRIVACY.md).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Security reports: [SECURITY.md](./SECURITY.md).

## License

Source code is licensed under the [PolyForm Noncommercial License 1.0.0](./LICENSE) ([SPDX: `PolyForm-Noncommercial-1.0.0`](https://spdx.org/licenses/PolyForm-Noncommercial-1.0.0.html)): noncommercial use, modification, and redistribution are allowed; commercial use of the software is not.

The name **SAFETY TEAM OdV** / **GVPCBG**, the association logo, and related brand assets are **not** licensed under those terms. Do not reuse them for other products without permission from the association. Third-party libraries and fonts keep their own licenses.
