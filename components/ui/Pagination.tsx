import Link from 'next/link'
import type { ReactNode } from 'react'
import {
  buildPageHref,
  visiblePageNumbers,
  type PaginationState,
} from '@/lib/pagination'
import { cn } from '@/lib/utils'

type PaginationProps = {
  pathname: string
  state: PaginationState
  query?: Record<string, string | undefined>
  label?: string
  itemLabel?: string
}

export function Pagination({
  pathname,
  state,
  query = {},
  label = 'Paginazione',
  itemLabel = 'elementi',
}: PaginationProps) {
  if (state.totalItems === 0 || state.totalPages <= 1) return null

  const pages = visiblePageNumbers(state.page, state.totalPages)
  const rangeStart = state.startIndex + 1
  const rangeEnd = state.endIndex
  const prevHref =
    state.page > 1 ? buildPageHref(pathname, state.page - 1, query) : null
  const nextHref =
    state.page < state.totalPages
      ? buildPageHref(pathname, state.page + 1, query)
      : null

  return (
    <nav className="mt-8" aria-label={label}>
      <p className="text-sm text-neutral-secondary" aria-live="polite">
        Pagina {state.page} di {state.totalPages} · {rangeStart}–{rangeEnd} di{' '}
        {state.totalItems} {itemLabel}
      </p>

      <div className="mt-3 flex gap-2 sm:hidden">
        {prevHref ? (
          <PaginationLink
            href={prevHref}
            rel="prev"
            className="flex-1"
            aria-label={`Pagina precedente, ${state.page - 1} di ${state.totalPages}`}
          >
            Precedente
          </PaginationLink>
        ) : (
          <PaginationDisabled className="flex-1">Precedente</PaginationDisabled>
        )}
        {nextHref ? (
          <PaginationLink
            href={nextHref}
            rel="next"
            className="flex-1"
            aria-label={`Pagina successiva, ${state.page + 1} di ${state.totalPages}`}
          >
            Successiva
          </PaginationLink>
        ) : (
          <PaginationDisabled className="flex-1">Successiva</PaginationDisabled>
        )}
      </div>

      <ul className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
        <li className="hidden sm:block">
          {prevHref ? (
            <PaginationLink
              href={prevHref}
              rel="prev"
              aria-label={`Pagina precedente, ${state.page - 1} di ${state.totalPages}`}
            >
              Precedente
            </PaginationLink>
          ) : (
            <PaginationDisabled>Precedente</PaginationDisabled>
          )}
        </li>
        {pages.map((page, index) => {
          const previous = pages[index - 1]
          const showEllipsis = previous != null && page - previous > 1
          const href = buildPageHref(pathname, page, query)
          const isCurrent = page === state.page

          return (
            <li key={page} className="flex items-center gap-2">
              {showEllipsis ? (
                <span
                  className="px-1 text-neutral-secondary"
                  aria-hidden="true"
                >
                  …
                </span>
              ) : null}
              {isCurrent ? (
                <span
                  aria-current="page"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-primary bg-primary px-3 text-sm font-semibold text-white"
                >
                  <span className="sr-only">Pagina </span>
                  {page}
                </span>
              ) : (
                <PaginationLink
                  href={href}
                  aria-label={`Vai alla pagina ${page}`}
                >
                  {page}
                </PaginationLink>
              )}
            </li>
          )
        })}
        <li className="hidden sm:block">
          {nextHref ? (
            <PaginationLink
              href={nextHref}
              rel="next"
              aria-label={`Pagina successiva, ${state.page + 1} di ${state.totalPages}`}
            >
              Successiva
            </PaginationLink>
          ) : (
            <PaginationDisabled>Successiva</PaginationDisabled>
          )}
        </li>
      </ul>
    </nav>
  )
}

function PaginationLink({
  href,
  children,
  rel,
  className,
  'aria-label': ariaLabel,
}: {
  href: string
  children: ReactNode
  rel?: string
  className?: string
  'aria-label'?: string
}) {
  return (
    <Link
      href={href}
      rel={rel}
      aria-label={ariaLabel}
      className={cn(
        'inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-neutral-border bg-white px-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-lighter',
        className
      )}
    >
      {children}
    </Link>
  )
}

function PaginationDisabled({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex min-h-11 min-w-11 cursor-not-allowed items-center justify-center rounded-sm border border-neutral-border bg-neutral-bg-soft px-3 text-sm font-semibold text-neutral-secondary',
        className
      )}
      aria-disabled="true"
    >
      {children}
    </span>
  )
}
