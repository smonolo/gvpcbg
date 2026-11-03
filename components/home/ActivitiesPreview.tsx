import { activities } from '@/lib/navigation'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'

export function ActivitiesPreview() {
  return (
    <Section
      className="bg-neutral-bg-soft"
      eyebrow="Cosa facciamo"
      title="Ambiti di intervento"
      lead="Dalla prevenzione alla risposta operativa, in rete con le istituzioni."
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {activities.slice(0, 3).map(activity => (
          <Card
            key={activity.slug}
            title={activity.title}
            href="/attivita"
            eyebrow="Attività"
          >
            <p>{activity.summary}</p>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <Button href="/attivita" variant="outline">
          Tutte le attività
        </Button>
      </div>
    </Section>
  )
}
