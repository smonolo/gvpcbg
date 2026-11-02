import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type CardProps = {
  title: string
  children: ReactNode
  href?: string
  eyebrow?: string
}

export function Card({ title, children, href, eyebrow }: CardProps) {
  const content = (
    <>
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold text-primary">{eyebrow}</p>
      ) : null}
      <h3 className="text-xl font-semibold text-neutral">{title}</h3>
      <div className="mt-2 text-neutral-secondary">{children}</div>
    </>
  )

  const classes = cn(
    'block h-full rounded-sm border border-neutral-border bg-white p-5 shadow-sm transition-shadow',
    href &&
      'no-underline hover:shadow-md focus-visible:relative focus-visible:z-10 focus-visible:shadow-md'
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return <article className={classes}>{content}</article>
}
