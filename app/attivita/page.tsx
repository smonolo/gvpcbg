import { JsonLd } from '@/components/seo/JsonLd'
import { Card } from '@/components/ui/Card'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { activities, breadcrumbs } from '@/lib/navigation'
import {
  breadcrumbJsonLd,
  buildMetadata,
  pages,
  webPageJsonLd,
} from '@/lib/seo'

export const metadata = buildMetadata(pages.attivita)

const methods = [
  {
    title: 'Formazione continua',
    body: 'Corsi, aggiornamenti ed esercitazioni per mantenere competenze operative allineate agli standard di Protezione Civile.',
  },
  {
    title: 'Coordinamento',
    body: 'Interventi integrati con il Comune, le autorità competenti e gli altri gruppi del territorio.',
  },
  {
    title: 'Servizio alla comunità',
    body: 'Supporto in emergenza e nelle attività di prevenzione e sensibilizzazione rivolte ai cittadini.',
  },
] as const

export default function AttivitaPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(pages.attivita),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Attività', path: pages.attivita.path },
          ]),
        ]}
      />
      <PageHero
        title="Attività"
        description="Gli ambiti in cui i volontari del gruppo operano, si formano e supportano il territorio."
        breadcrumbs={breadcrumbs('Attività')}
      />

      <Section
        title="Ambiti operativi"
        lead="Un impegno concreto che unisce preparazione tecnica, presenza sul territorio e collaborazione istituzionale."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {activities.map(activity => (
            <Card key={activity.slug} title={activity.title}>
              <p>{activity.summary}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-neutral-bg-soft" title="Come lavoriamo">
        <div className="grid gap-5 md:grid-cols-3">
          {methods.map(item => (
            <Card key={item.title} title={item.title}>
              <p>{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
