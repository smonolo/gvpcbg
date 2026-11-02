import { JsonLd } from '@/components/seo/JsonLd'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
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

export const metadata = buildMetadata(pages.diventaVolontario)

const reasons = [
  {
    title: 'Impari sul campo',
    body: 'Acquisisci competenze utili in emergenza e nella vita quotidiana, con percorsi formativi strutturati.',
  },
  {
    title: 'Fai parte di una squadra',
    body: 'Lavori insieme ad altri volontari, con ruoli chiari e uno spirito di servizio condiviso.',
  },
  {
    title: 'Aiuti davvero',
    body: 'Contribuisci alla sicurezza di Busto Garolfo e al supporto delle persone in situazioni critiche.',
  },
] as const

const requirements = [
  'Maggior età e disponibilità a impegnarti con costanza.',
  'Partecipazione alle attività formative e alle esercitazioni.',
  'Rispetto delle procedure, dello spirito di squadra e della riservatezza.',
  'Voglia di metterti in gioco, anche partendo da zero.',
] as const

export default function DiventaVolontarioPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(pages.diventaVolontario),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            {
              name: 'Diventa volontario',
              path: pages.diventaVolontario.path,
            },
          ]),
        ]}
      />
      <PageHero
        title="Diventa volontario"
        description="Metti tempo, energie e voglia di imparare al servizio della tua comunità."
        breadcrumbs={breadcrumbs('Diventa volontario')}
      />

      <Section
        title="Perché entrare nel gruppo"
        lead="Il volontariato di Protezione Civile è un impegno serio e gratificante, fatto di formazione, squadra e responsabilità."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {reasons.map(item => (
            <Card key={item.title} title={item.title}>
              <p>{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-neutral-bg-soft" title="Cosa ti chiediamo">
        <ol className="space-y-4">
          {requirements.map((item, index) => (
            <li
              key={item}
              className="flex gap-4 rounded-sm border border-neutral-border bg-white p-4"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <p className="pt-1 text-neutral-secondary">
                <span className="sr-only">{index + 1}. </span>
                {item}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Come candidarti">
        <div className="max-w-3xl space-y-4 text-neutral-secondary">
          <p>
            Contattaci per presentarti, conoscere le prossime occasioni di
            ingresso e ricevere informazioni sul percorso di inserimento.
          </p>
          <p>
            Puoi scriverci a{' '}
            <a
              href={site.email.href}
              className="font-semibold"
              aria-label={`Email ${site.email.display}`}
            >
              {site.email.display}
            </a>
            , chiamare il{' '}
            <a
              href={site.phone.href}
              className="font-semibold"
              aria-label={`Telefono ${site.phone.display}`}
            >
              {site.phone.display}
            </a>{' '}
            oppure venirci a trovare in sede negli orari di apertura.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button href={site.email.href}>Invia una email</Button>
            <Button href="/contatti" variant="outline">
              Vai ai contatti
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
