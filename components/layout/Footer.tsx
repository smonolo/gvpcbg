import Link from 'next/link'
import { opensInNewTabLabel, externalLinkProps } from '@/lib/a11y'
import { mainNav, utilityNav } from '@/lib/navigation'
import { formatCityLine, site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="mt-auto bg-primary-dark text-white">
      <div className="container-content grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold tracking-wide text-primary-light uppercase">
            {site.shortName}
          </p>
          <p className="mt-2 text-xl font-bold">{site.name}</p>
          <p className="mt-1 text-sm text-white/80">{site.aka}</p>
          <p className="mt-4 text-sm text-white/80">
            Organizzazione di Volontariato iscritta al Registro Regionale del
            Volontariato della Lombardia.
          </p>
        </div>

        <nav aria-labelledby="footer-nav-heading">
          <h2 id="footer-nav-heading" className="text-lg font-semibold">
            Navigazione
          </h2>
          <ul className="mt-3 space-y-2">
            {mainNav.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-white hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 id="footer-contacts-heading" className="text-lg font-semibold">
            Contatti
          </h2>
          <address
            className="mt-3 space-y-2 text-sm text-white/90 not-italic"
            aria-labelledby="footer-contacts-heading"
          >
            <p>
              {site.address.street}
              <br />
              {formatCityLine()}
            </p>
            <p>
              Tel.{' '}
              <a
                href={site.phone.href}
                className="inline-flex min-h-11 items-center text-white hover:underline"
                aria-label={`Telefono ${site.phone.display}`}
              >
                {site.phone.display}
              </a>
            </p>
            <p>
              Email{' '}
              <a
                href={site.email.href}
                className="inline-flex min-h-11 items-center text-white hover:underline"
                aria-label={`Email ${site.email.display}`}
              >
                {site.email.display}
              </a>
            </p>
            <p>
              <a
                href={site.social.facebook.href}
                className="inline-flex min-h-11 items-center text-white hover:underline"
                aria-label={opensInNewTabLabel(
                  `Pagina Facebook ufficiale di ${site.shortName}`
                )}
                {...externalLinkProps}
              >
                Pagina Facebook ufficiale
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-content flex flex-col gap-3 py-4 text-sm text-white/80 md:flex-row md:items-center md:justify-between">
          <p>
            © {site.copyrightYear} {site.fullName}
          </p>
          <nav aria-label="Informazioni legali e accessibilità">
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {utilityNav.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
