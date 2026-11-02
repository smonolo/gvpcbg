# GVPCBG — SAFETY TEAM OdV

Sito istituzionale di **SAFETY TEAM OdV Gruppo Volontari Protezione Civile Busto Garolfo** (GVPCBG).

Realizzato con Next.js, TypeScript e Tailwind CSS (con componenti shadcn/ui restylati), seguendo i pattern visivi del design system italiano (Designers Italia / AGID): Titillium Web, header slim + brand + nav, footer istituzionale, focus accessibile.

## Sviluppo

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run lint
npm run format
```

## Contenuti

I dati anagrafici e di contatto sono centralizzati in `lib/site.ts`. La navigazione e le attività sono in `lib/navigation.ts`. SEO in `lib/seo.ts`.

### Galleria foto

Le foto sono definite in `lib/photos.ts` e i file stanno in `public/photos/`.
Per aggiungere uno scatto reale: metti il file in `public/photos/` (jpg/webp/png) e aggiorna la voce corrispondente in `lib/photos.ts`.

## Note

- Logo ufficiale recuperato dalla pagina Facebook [GVPCBG](https://www.facebook.com/GVPCBG/).
- Stile ispirato a [Designers Italia](https://designers.italia.it/) (Blu Italia `#0066CC`, Titillium Web, layout header/footer PA).
