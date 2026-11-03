import Link from 'next/link'
import { opensInNewTabLabel, externalLinkProps } from '@/lib/a11y'
import { mainNav, utilityNav } from '@/lib/navigation'
import { formatCityLine, gitCommitHref, gitCommitShort, site } from '@/lib/site'

export function Footer() {
  const commit = gitCommitShort()

  return (
    <footer className="mt-auto bg-primary-dark text-white">
      <div className="container-content grid gap-10 py-10 sm:py-12 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-xl font-bold">{site.legalName}</p>
          <p className="mt-1 text-sm text-white/80">{site.aka}</p>
          <p className="mt-4 text-sm text-white/80">
            Organizzazione di Volontariato (OdV) iscritta al Registro Regionale
            del Volontariato della Lombardia.
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
                  className="inline-flex py-1 text-white hover:underline"
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
                className="text-white hover:underline"
                aria-label={`Telefono ${site.phone.display}`}
              >
                {site.phone.display}
              </a>
            </p>
            <p>
              Email{' '}
              <a
                href={site.email.href}
                className="text-white hover:underline"
                aria-label={`Email ${site.email.display}`}
              >
                {site.email.display}
              </a>
            </p>
            <p>
              <a
                href={site.social.facebook.href}
                className="text-white hover:underline"
                aria-label={opensInNewTabLabel(
                  `Pagina Facebook ufficiale di ${site.name}`
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
                    className="inline-flex py-1 text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/15 bg-black/20">
        <div className="container-content flex flex-col gap-2 py-3 text-sm text-white/70 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-6">
          <p>
            Sito realizzato da{' '}
            <a
              href={site.credits.author.href}
              className="font-semibold text-white hover:underline"
              aria-label={opensInNewTabLabel(site.credits.author.name)}
              {...externalLinkProps}
            >
              {site.credits.author.name}
            </a>
          </p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <a
              href={site.credits.repository.href}
              className="text-white hover:underline"
              aria-label={opensInNewTabLabel(
                'Codice sorgente del sito su GitHub'
              )}
              {...externalLinkProps}
            >
              Codice sorgente su {site.credits.repository.label}
            </a>
            <span aria-hidden="true" className="text-white/40">
              ·
            </span>
            <a
              href={site.credits.license.href}
              className="text-white hover:underline"
              aria-label={opensInNewTabLabel(
                `Licenza ${site.credits.license.label}`
              )}
              {...externalLinkProps}
            >
              {site.credits.license.label}
            </a>
            {commit ? (
              <>
                <span aria-hidden="true" className="text-white/40">
                  ·
                </span>
                <a
                  href={gitCommitHref()}
                  className="font-mono text-white hover:underline"
                  aria-label={opensInNewTabLabel(`Commit ${commit}`)}
                  {...externalLinkProps}
                >
                  {commit}
                </a>
              </>
            ) : null}
          </p>
        </div>
      </div>
    </footer>
  )
}
