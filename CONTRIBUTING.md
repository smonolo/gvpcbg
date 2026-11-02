# Contributing

Thanks for helping improve the GVPCBG website. This repo is a Next.js marketing site; keep changes focused and consistent with the existing institutional design.

## Development

```bash
npm install
npm run dev
```

Before opening a PR (or finishing an agent task):

```bash
npm run format
npm run lint
npm run build
```

## Code standards

- **No code comments** in source (`//`, `/* */`, JSDoc, JSX comments). Prefer clear names and structure. Generated files such as `next-env.d.ts` are exempt.
- Keep the tree **clean**: remove dead code, unused exports/deps, and duplicates; prefer shared helpers in `lib/` / `components/`.
- Match **Prettier** (`.prettierrc`: no semicolons, single quotes, `arrowParens: avoid`, Tailwind class sorting).
- Keep diffs **focused** — no unrelated refactors or unsolicited markdown unless docs need updating for the change.
- Accessibility: real controls need usable targets; do not inflate every text link with oversized min-heights.

Agent rules live in `.cursor/rules/` and mirror these expectations.

## Content edits

- Contacts / identity → `lib/site.ts`
- Navigation / activities → `lib/navigation.ts`
- SEO copy → `lib/seo.ts`
- Photos → `lib/photos.ts` + `public/photos/`

Site chrome and pages should stay Italian unless you are explicitly asked to change language.

## Pull requests

1. Describe **why** the change matters (not only what files moved).
2. Note any content or design review needed from the association.
3. Confirm `format`, `lint`, and `build` pass.
4. Do not commit secrets, `.env` files, or large binary dumps without discussion.

## License

By contributing, you agree that your contributions are licensed under the same [PolyForm Noncommercial License 1.0.0](./LICENSE) as the rest of the source code. Brand assets remain property of the association.
