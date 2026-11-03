import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'

export default function NotFound() {
  return (
    <Section className="py-20 text-center">
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">
        Errore 404
      </p>
      <h1 className="mt-3 text-4xl font-bold text-neutral">
        Pagina non trovata
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-lg text-neutral-secondary">
        Il contenuto che stai cercando non esiste o è stato spostato.
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="/">Torna alla home</Button>
      </div>
    </Section>
  )
}
