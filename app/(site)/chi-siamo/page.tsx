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
import { formatStreetCity, site } from '@/lib/site'

export const metadata = buildMetadata(pages.chiSiamo)

export default function ChiSiamoPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(pages.chiSiamo, { type: 'AboutPage' }),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Chi siamo', path: pages.chiSiamo.path },
          ]),
        ]}
      />
      <PageHero
        title="Chi siamo"
        description="Volontariato operativo dal 1993, al servizio della comunità."
        breadcrumbs={breadcrumbs('Chi siamo')}
      />

      <Section title="La nostra identità">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-lg text-neutral-secondary">
            <p>
              <strong className="font-semibold text-neutral">
                {site.fullName}
              </strong>{' '}
              (in breve{' '}
              <strong className="font-semibold text-neutral">
                {site.shortName}
              </strong>
              ) è un’Organizzazione di Volontariato attiva nella Protezione
              Civile sul territorio di Busto Garolfo.
            </p>
            <p>
              Nata come gruppo di volontariato e attiva dal {site.foundedYear},
              l’associazione collabora da anni con l’Amministrazione comunale
              nella prevenzione del rischio e nella gestione delle emergenze,
              con professionalità e competenza.
            </p>
            <p>
              Oggi è conosciuta come{' '}
              <strong className="font-semibold text-neutral">
                {site.name}
              </strong>{' '}
              (
              <strong className="font-semibold text-neutral">
                {site.legalName}
              </strong>
              ), mantenendo l’identità storica di {site.aka}.
            </p>
          </div>

          <aside className="rounded-sm border border-neutral-border bg-primary-lighter p-5">
            <h2 className="text-lg font-semibold text-neutral">In sintesi</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-neutral">Denominazione</dt>
                <dd className="text-neutral-secondary">{site.fullName}</dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral">Sigla</dt>
                <dd className="text-neutral-secondary">{site.shortName}</dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral">Fondazione</dt>
                <dd className="text-neutral-secondary">{site.foundedYear}</dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral">Sede</dt>
                <dd className="text-neutral-secondary">{formatStreetCity()}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>

      <Section
        className="bg-neutral-bg-soft"
        title="Missione"
        lead="Essere un punto di riferimento affidabile per la sicurezza della comunità locale."
      >
        <ul className="grid gap-4 md:grid-cols-2">
          {[
            'Supportare il Comune nella prevenzione e nella gestione delle emergenze.',
            'Garantire disponibilità operativa attraverso formazione ed esercitazioni.',
            'Promuovere la cultura di Protezione Civile tra cittadini e volontari.',
            'Collaborare in rete con altri gruppi e istituzioni del territorio.',
          ].map(item => (
            <li
              key={item}
              className="rounded-sm border border-neutral-border bg-white p-4 text-neutral-secondary"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Riconoscimenti e collaborazioni">
        <div className="space-y-4 text-neutral-secondary">
          <p>
            Il gruppo risulta iscritto al{' '}
            <strong className="font-semibold text-neutral">
              {site.registry.region}
            </strong>
            , {site.registry.section}, {site.registry.details}.
          </p>
          <p>
            Opera in convenzione con il{' '}
            <a
              href={site.municipality.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
            >
              {site.municipality.name}
            </a>{' '}
            per la cooperazione nella prevenzione del rischio e nella gestione
            delle emergenze.
          </p>
        </div>
      </Section>
    </>
  )
}
