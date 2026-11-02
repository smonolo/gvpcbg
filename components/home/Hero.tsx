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
      <div className="relative container-content py-14 md:py-20">
        <h1
          id="hero-heading"
          className="max-w-3xl text-4xl leading-tight font-bold tracking-tight md:text-5xl"
        >
          {site.name}
        </h1>
        <p className="mt-2 text-xl text-white/90">{site.aka}</p>
        <p className="mt-5 max-w-2xl text-lg text-white/90">{site.description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/diventa-volontario" variant="secondary" size="lg">
            Diventa volontario
          </Button>
          <Button href="/contatti" variant="inverse" size="lg">
            Contattaci
          </Button>
        </div>
      </div>
    </section>
  )
}
