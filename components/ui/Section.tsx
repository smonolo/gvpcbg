import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionProps = {
  eyebrow?: string
  title?: string
  lead?: string
  children: ReactNode
  className?: string
  /** Use light text on dark backgrounds (e.g. CTA bands). */
  invert?: boolean
}

function sectionTitleId(title: string) {
  return `sezione-${title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')}`
}

export function Section({
  eyebrow,
  title,
  lead,
  children,
  className,
  invert = false,
}: SectionProps) {
  const titleId = title ? sectionTitleId(title) : undefined

  return (
    <section
      className={cn('py-12 md:py-16', className)}
      aria-labelledby={titleId}
    >
      <div className="container-content">
        {(eyebrow || title || lead) && (
          <header className="mb-8 max-w-3xl md:mb-10">
            {eyebrow ? (
              <p
                className={cn(
                  'mb-2 text-sm font-semibold tracking-wide uppercase',
                  invert ? 'text-white/90' : 'text-primary'
                )}
              >
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2
                id={titleId}
                className={cn(
                  'text-3xl font-bold tracking-tight md:text-4xl',
                  invert ? 'text-white' : 'text-neutral'
                )}
              >
                {title}
              </h2>
            ) : null}
            {lead ? (
              <p
                className={cn(
                  'mt-3 text-lg',
                  invert ? 'text-white/90' : 'text-neutral-secondary'
                )}
              >
                {lead}
              </p>
            ) : null}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
