import Link from 'next/link'
import { buildPageHref } from '@/lib/pagination'
import { photoCategories, type PhotoCategory } from '@/lib/photos'
import { cn } from '@/lib/utils'

type PhotoCategoryFiltersProps = {
  pathname: string
  active: PhotoCategory | 'all'
}

export function PhotoCategoryFilters({
  pathname,
  active,
}: PhotoCategoryFiltersProps) {
  const categories = Object.keys(photoCategories) as PhotoCategory[]

  return (
    <div
      className="mb-6 flex flex-wrap gap-2"
      role="group"
      aria-label="Filtra le foto per categoria"
    >
      <FilterLink href={buildPageHref(pathname, 1)} active={active === 'all'}>
        Tutte
      </FilterLink>
      {categories.map(category => (
        <FilterLink
          key={category}
          href={buildPageHref(pathname, 1, { categoria: category })}
          active={active === category}
        >
          {photoCategories[category].label}
        </FilterLink>
      ))}
    </div>
  )
}

function FilterLink({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: string
}) {
  return (
    <Link
      href={href}
      aria-current={active ? 'true' : undefined}
      className={cn(
        'inline-flex min-h-11 items-center rounded-sm border px-4 text-sm font-semibold transition-colors',
        active
          ? 'border-primary bg-primary text-white'
          : 'border-neutral-border bg-white text-primary hover:bg-primary-lighter'
      )}
    >
      {children}
    </Link>
  )
}
