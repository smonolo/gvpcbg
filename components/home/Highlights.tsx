import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { site } from '@/lib/site'

const items = [
  {
    title: 'Dal 1993 sul territorio',
    body: `Attivi a Busto Garolfo da oltre trent’anni, con iscrizione al Registro Regionale del Volontariato della Lombardia.`,
  },
  {
    title: 'Convenzione con il Comune',
    body: `Collaborazione strutturata con il ${site.municipality.name} per prevenzione del rischio e gestione delle emergenze.`,
  },
  {
    title: 'Volontariato operativo',
    body: 'Formazione continua, esercitazioni e pronto intervento a servizio della comunità locale.',
  },
]

export function Highlights() {
  return (
    <Section
      eyebrow="In evidenza"
      title="Un gruppo di volontari al servizio della comunità"
      lead="Operiamo con professionalità e competenza a supporto dell’Amministrazione comunale e del sistema di Protezione Civile."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map(item => (
          <Card key={item.title} title={item.title}>
            <p>{item.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
