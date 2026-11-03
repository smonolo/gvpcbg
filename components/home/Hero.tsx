import { Button } from '@/components/ui/Button'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-neutral-border bg-primary-dark text-white"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hero-wash opacity-30"
      />
      <div className="relative container-content py-10 sm:py-14 md:py-20">
        <h1
          id="hero-heading"
          className="max-w-3xl text-3xl leading-tight font-bold tracking-tight sm:text-4xl md:text-5xl"
        >
          {site.name}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/90 sm:mt-5 sm:text-lg">
          {site.description}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
          <Button
            href="/diventa-volontario"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Diventa volontario
          </Button>
          <Button
            href="/contatti"
            variant="inverse"
            size="lg"
            className="w-full sm:w-auto"
          >
            Contattaci
          </Button>
        </div>
      </div>
    </section>
  )
}
