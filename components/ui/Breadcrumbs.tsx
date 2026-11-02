import Link from 'next/link'

export type Crumb = {
  label: string
  href?: string
}

type BreadcrumbsProps = {
  items: Crumb[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Percorso di navigazione" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm text-neutral-secondary">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-1"
            >
              {index > 0 ? (
                <span aria-hidden="true" className="px-1 text-neutral-border">
                  /
                </span>
              ) : null}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-sm px-1 hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className={
                    isLast
                      ? 'inline-flex min-h-11 items-center px-1 font-semibold text-neutral'
                      : 'inline-flex min-h-11 items-center px-1'
                  }
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
