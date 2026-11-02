import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { site } from '@/lib/site'

export function CallToAction() {
  return (
    <Section
      className="bg-primary text-white"
      invert
      title="Vuoi unirti al gruppo?"
      lead="Cerchiamo persone motivate a formarsi e a mettere tempo ed energie al servizio della sicurezza della comunità di Busto Garolfo."
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href="/diventa-volontario" variant="secondary" size="lg">
          Diventa volontario
        </Button>
        <Button href={site.email.href} variant="inverse" size="lg">
          Scrivici
        </Button>
      </div>
    </Section>
  )
}
