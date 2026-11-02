import { Breadcrumbs, type Crumb } from '@/components/ui/Breadcrumbs'

type PageHeroProps = {
  title: string
  description?: string
  breadcrumbs?: Crumb[]
}

export function PageHero({ title, description, breadcrumbs }: PageHeroProps) {
  return (
    <header className="border-b border-neutral-border bg-primary-lighter">
      <div className="container-content py-8 md:py-10">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <h1 className="text-3xl font-bold tracking-tight text-neutral md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-3xl text-lg text-neutral-secondary">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  )
}
