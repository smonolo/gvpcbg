import Link from 'next/link'
import type { SanityAnnouncement } from '@/sanity/lib/types'

type AnnouncementBannerProps = {
  announcements: readonly SanityAnnouncement[]
}

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href) || href.startsWith('mailto:')
}

function MegaphoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 11 18-5v12L3 13v-2z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  )
}

export function AnnouncementBanner({ announcements }: AnnouncementBannerProps) {
  if (announcements.length === 0) return null

  const [primary] = announcements

  return (
    <aside
      className="border-b border-neutral-border bg-focus/15 text-neutral"
      aria-label="Avvisi"
    >
      <div className="container-content flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="flex min-w-0 gap-3">
          <MegaphoneIcon className="mt-0.5 size-5 shrink-0 text-focus" />
          <div className="min-w-0">
            <p className="font-semibold text-neutral">{primary.title}</p>
            <p className="mt-1 text-sm text-neutral-secondary">
              {primary.body}
            </p>
          </div>
        </div>
        {primary.href ? (
          <Link
            href={primary.href}
            className="inline-flex min-h-11 shrink-0 items-center self-start text-sm font-semibold text-primary underline-offset-2 hover:underline sm:self-center"

            {...(isExternalHref(primary.href)
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {primary.linkLabel || 'Scopri di più'}
          </Link>
        ) : null}
      </div>
    </aside>
  )
}
