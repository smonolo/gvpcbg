# GVPCBG — SAFETY TEAM OdV

Institutional website for **SAFETY TEAM OdV Gruppo Volontari Protezione Civile Busto Garolfo** (GVPCBG): volunteer civil protection active in Busto Garolfo (MI) since 1993.

Site UI language: **Italian** · Design: Designers Italia / AGID-inspired (Titillium Web, Blu Italia, slim header + brand + nav)

Facebook: [GVPCBG](https://www.facebook.com/GVPCBG/)

License: [PolyForm Noncommercial 1.0.0](./LICENSE) · Built by [Stefano Monolo](https://smnl.dev)

## Features

- Marketing pages: home, chi siamo, attività, foto, diventa volontario, contatti
- Institutional chrome: slim utility bar, brand header, main nav (mobile menu), footer
- Photo gallery with category filters and accessible lightbox
- SEO: metadata, sitemap, robots, Open Graph image, JSON-LD
- Accessibility-oriented layout (skip link, landmarks, keyboard nav, reduced motion)
- Legal pages: privacy and accessibilità

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Base UI (Dialog) · Prettier (+ Tailwind plugin)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Canonical absolute URLs (sitemap, Open Graph, JSON-LD) come from `NEXT_PUBLIC_SITE_URL` when set, otherwise Vercel’s URL in that environment, otherwise `http://localhost:3000`. Set the env var once a production domain is chosen.

```bash
npm run build
npm run lint
npm run format
npm run format:check
```

## Project layout

| Path             | Role                                             |
| ---------------- | ------------------------------------------------ |
| `app/`           | Next.js App Router pages, layout, SEO routes     |
| `components/`    | Layout, home sections, photos, UI primitives     |
| `lib/`           | Site copy, navigation, photos, SEO, a11y helpers |
| `public/`        | Static assets (logo, icons, photo files)         |
| `.cursor/rules/` | Agent rules (code quality, formatting, docs)     |

## Content

- Identity, contacts, hours: `lib/site.ts`
- Nav + activities: `lib/navigation.ts`
- SEO page map: `lib/seo.ts`
- Gallery entries: `lib/photos.ts` + files under `public/photos/`

To add a real photo: put the file in `public/photos/` (jpg/webp/png) and update the matching entry in `lib/photos.ts`.

## Privacy

The association privacy notice for the public site is at `/privacy` (Italian). A short repo summary is in [PRIVACY.md](./PRIVACY.md).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Security reports: [SECURITY.md](./SECURITY.md).

## License

Source code is licensed under the [PolyForm Noncommercial License 1.0.0](./LICENSE) ([SPDX: `PolyForm-Noncommercial-1.0.0`](https://spdx.org/licenses/PolyForm-Noncommercial-1.0.0.html)): noncommercial use, modification, and redistribution are allowed; commercial use of the software is not.

The name **SAFETY TEAM OdV** / **GVPCBG**, the association logo, and related brand assets are **not** licensed under those terms. Do not reuse them for other products without permission from the association. Third-party libraries and fonts keep their own licenses.
