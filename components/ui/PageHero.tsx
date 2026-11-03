import { Breadcrumbs, type Crumb } from '@/components/ui/Breadcrumbs'

type PageHeroProps = {
  title: string
  description?: string
  breadcrumbs?: Crumb[]
}

export function PageHero({ title, description, breadcrumbs }: PageHeroProps) {
  return (
    <header className="border-b border-neutral-border bg-primary-lighter">
      <div className="container-content py-6 sm:py-8 md:py-10">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <h1 className="text-3xl font-bold tracking-tight break-words text-neutral sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-3xl text-base text-neutral-secondary sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  )
}
