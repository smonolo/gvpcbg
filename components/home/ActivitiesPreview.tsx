import { activities } from '@/lib/navigation'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'

export function ActivitiesPreview() {
  return (
    <Section
      className="bg-neutral-bg-soft"
      eyebrow="Cosa facciamo"
      title="Attività di Protezione Civile"
      lead="Dalla prevenzione alla risposta operativa: ambiti in cui il gruppo opera quotidianamente."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
          Scopri tutte le attività
        </Button>
      </div>
    </Section>
  )
}
