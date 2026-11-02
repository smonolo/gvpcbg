import { JsonLd } from '@/components/seo/JsonLd'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { breadcrumbs } from '@/lib/navigation'
import {
  breadcrumbJsonLd,
  buildMetadata,
  pages,
  webPageJsonLd,
} from '@/lib/seo'
import { site } from '@/lib/site'

export const metadata = buildMetadata(pages.accessibilita)

export default function AccessibilitaPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(pages.accessibilita),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Accessibilità', path: pages.accessibilita.path },
          ]),
        ]}
      />
      <PageHero
        title="Accessibilità"
        description="Impegno a rendere i contenuti fruibili da tutte le persone, in coerenza con le linee guida AGID."
        breadcrumbs={breadcrumbs('Accessibilità')}
      />

      <Section>
        <div className="max-w-3xl space-y-8 text-neutral-secondary">
          <section className="space-y-3" aria-labelledby="impegno-heading">
            <h2 id="impegno-heading" className="text-2xl font-bold text-neutral">
              Il nostro impegno
            </h2>
            <p>
              {site.fullName} si impegna a rendere questo sito accessibile,
              secondo i principi di percettibilità, utilizzabilità,
              comprensibilità e solidità previsti dalle WCAG 2.1 (livello AA) e
              richiamati dalle Linee guida AGID sull’accessibilità degli
              strumenti informatici.
            </p>
          </section>

          <section className="space-y-3" aria-labelledby="misure-heading">
            <h2 id="misure-heading" className="text-2xl font-bold text-neutral">
              Misure adottate
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Lingua della pagina dichiarata in italiano, struttura semantica
                e titoli gerarchici.
              </li>
              <li>
                Landmark principali (header, navigazione, contenuto, footer) e
                link “Vai al contenuto principale”.
              </li>
              <li>
                Navigazione completa da tastiera, focus visibile e menu mobile
                con etichette ARIA e chiusura con Esc.
              </li>
              <li>
                Aree cliccabili di almeno 44×44 px e layout responsive senza
                blocco dello zoom.
              </li>
              <li>
                Testi alternativi per le immagini informative; elementi
                decorativi nascosti alle tecnologie assistive.
              </li>
              <li>
                Etichette accessibili per link esterni, telefono ed email;
                finestre di dialogo con titolo, descrizione e pulsante di
                chiusura.
              </li>
              <li>
                Rispetto di `prefers-reduced-motion` per ridurre animazioni e
                transizioni.
              </li>
              <li>
                Tipografia Titillium Web e contrasto cromatico orientato ai
                criteri WCAG.
              </li>
            </ul>
          </section>

          <section className="space-y-3" aria-labelledby="segnalazioni-heading">
            <h2
              id="segnalazioni-heading"
              className="text-2xl font-bold text-neutral"
            >
              Segnalazioni
            </h2>
            <p>
              Se riscontrate barriere di accessibilità, segnalatecele scrivendo
              a{' '}
              <a
                href={site.email.href}
                className="inline-flex min-h-11 items-center font-semibold"
                aria-label={`Email ${site.email.display}`}
              >
                {site.email.display}
              </a>
              . Indicate la pagina interessata e una breve descrizione del
              problema: interverremo quanto prima.
            </p>
          </section>

          <p className="text-sm">Ultimo aggiornamento: novembre 2026.</p>
        </div>
      </Section>
    </>
  )
}
