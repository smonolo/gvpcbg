import { opensInNewTabLabel, externalLinkProps } from '@/lib/a11y'
import { site } from '@/lib/site'

export function SlimHeader() {
  return (
    <div className="bg-primary-dark text-white">
      <div className="container-content flex flex-wrap items-center justify-end gap-x-4 text-sm">
        <a
          href={site.social.facebook.href}
          className="inline-flex min-h-9 items-center py-1.5 text-white underline-offset-2 hover:underline"
          aria-label={opensInNewTabLabel(
            `${site.social.facebook.label} di ${site.shortName}`
          )}
          {...externalLinkProps}
        >
          {site.social.facebook.label}
        </a>
        <a
          href={site.phone.href}
          className="inline-flex min-h-9 items-center py-1.5 text-white underline-offset-2 hover:underline"
          aria-label={`Telefono ${site.phone.display}`}
        >
          {site.phone.display}
        </a>
      </div>
    </div>
  )
}
