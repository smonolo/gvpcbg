import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { site } from '@/lib/site'

export function CallToAction() {
  return (
    <Section
      className="bg-primary text-white"
      invert
      title="Vuoi unirti al gruppo?"
      lead="Cerchiamo persone motivate a formarsi e a impegnarsi per la sicurezza di chi vive qui."
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          href="/diventa-volontario"
          variant="secondary"
          size="lg"
          className="w-full sm:w-auto"
        >
          Diventa volontario
        </Button>
        <Button
          href={site.email.href}
          variant="inverse"
          size="lg"
          className="w-full sm:w-auto"
        >
          Scrivici
        </Button>
      </div>
    </Section>
  )
}
