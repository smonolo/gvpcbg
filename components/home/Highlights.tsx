import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { site } from '@/lib/site'

const items = [
  {
    title: 'Dal 1993 sul territorio',
    body: 'Iscritti al Registro Regionale del Volontariato della Lombardia, con presenza continuativa nella comunità locale.',
  },
  {
    title: 'Convenzione con il Comune',
    body: `Collaborazione strutturata con il ${site.municipality.name} su prevenzione del rischio e gestione delle emergenze.`,
  },
  {
    title: 'Volontariato operativo',
    body: 'Formazione continua, esercitazioni e pronto intervento quando serve.',
  },
]

export function Highlights() {
  return (
    <Section
      eyebrow="In evidenza"
      title="Cosa ci distingue"
      lead="Formazione, accordo con l’Amministrazione comunale e presenza sul campo."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(item => (
          <Card key={item.title} title={item.title}>
            <p>{item.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
