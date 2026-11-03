import Link from 'next/link'
import { opensInNewTabLabel, externalLinkProps } from '@/lib/a11y'
import { site } from '@/lib/site'

export function SlimHeader() {
  return (
    <div className="bg-primary-dark text-white">
      <div className="container-content flex w-full flex-wrap items-center justify-between gap-x-3 gap-y-1 text-sm sm:gap-x-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 sm:gap-x-4">
          <a
            href={site.social.facebook.href}
            className="inline-flex min-h-10 items-center py-1.5 text-white underline-offset-2 hover:underline sm:min-h-9"
            aria-label={opensInNewTabLabel(
              `${site.social.facebook.label} di ${site.name}`
            )}
            {...externalLinkProps}
          >
            {site.social.facebook.label}
          </a>
          <a
            href={site.phone.href}
            className="inline-flex min-h-10 items-center py-1.5 text-white underline-offset-2 hover:underline sm:min-h-9"
            aria-label={`Telefono ${site.phone.display}`}
          >
            {site.phone.display}
          </a>
        </div>
        <Link
          href="/studio"
          className="inline-flex min-h-10 items-center py-1.5 text-white underline-offset-2 hover:underline sm:min-h-9"
          aria-label={opensInNewTabLabel(
            'Apri Sanity Studio per modificare i contenuti'
          )}
          {...externalLinkProps}
        >
          Studio
        </Link>
      </div>
    </div>
  )
}
