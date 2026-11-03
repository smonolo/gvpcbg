import { JsonLd } from '@/components/seo/JsonLd'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { emergencyNumbers } from '@/lib/emergency'
import { breadcrumbs } from '@/lib/navigation'
import {
  breadcrumbJsonLd,
  buildMetadata,
  pages,
  webPageJsonLd,
} from '@/lib/seo'
import { formatCityLine, site } from '@/lib/site'

export const metadata = buildMetadata(pages.contatti)

export default function ContattiPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(pages.contatti, { type: 'ContactPage' }),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Contatti', path: pages.contatti.path },
          ]),
        ]}
      />
      <PageHero
        title="Contatti"
        description="Sede, orari, recapiti del gruppo e numeri di emergenza."
        breadcrumbs={breadcrumbs('Contatti')}
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-sm border border-neutral-border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-neutral">Sede</h2>
            <address className="mt-4 space-y-3 text-neutral-secondary not-italic">
              <p>
                {site.address.street}
                <br />
                {formatCityLine()}
                <br />
                {site.address.region}, {site.address.country}
              </p>
              <p>
                Telefono:{' '}
                <a
                  href={site.phone.href}
                  className="font-semibold"
                  aria-label={`Telefono ${site.phone.display}`}
                >
                  {site.phone.display}
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  href={site.email.href}
                  className="font-semibold"
                  aria-label={`Email ${site.email.display}`}
                >
                  {site.email.display}
                </a>
              </p>
            </address>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                href={site.address.mapsUrl}
                aria-label="Apri la sede in Google Maps"
              >
                Apri in Google Maps
              </Button>
              <Button href={site.social.facebook.href} variant="outline">
                {site.social.facebook.label}
              </Button>
            </div>
          </div>

          <div className="rounded-sm border border-neutral-border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-neutral">
              Orari di apertura
            </h2>
            <p className="mt-2 text-neutral-secondary">
              Orari orientativi della sede operativa. Per urgenze sanitarie o di
              soccorso usa i numeri di emergenza qui sotto.
            </p>
            <ul className="mt-6 divide-y divide-neutral-border overflow-hidden rounded-sm border border-neutral-border bg-white">
              {site.hours.map(slot => (
                <li
                  key={slot.day}
                  className="flex items-center justify-between gap-4 px-4 py-3"
                >
                  <span className="font-semibold text-neutral">{slot.day}</span>
                  <span className="text-neutral-secondary">{slot.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        className="bg-neutral-bg-soft"
        title="Numeri di emergenza"
        lead="In caso di pericolo chiama subito i numeri ufficiali. Il telefono della sede non sostituisce il soccorso pubblico."
      >
        <ul className="divide-y divide-neutral-border overflow-hidden rounded-sm border border-neutral-border bg-white">
          {emergencyNumbers.map(entry => (
            <li
              key={entry.number}
              className="flex flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div className="min-w-0">
                <p className="font-semibold text-neutral">{entry.label}</p>
                <p className="mt-1 text-sm text-neutral-secondary">
                  {entry.detail}
                </p>
              </div>
              <a
                href={entry.href}
                className="inline-flex min-h-11 w-full shrink-0 items-center justify-center rounded-sm border border-primary bg-primary-lighter px-4 text-2xl font-bold text-primary sm:w-auto sm:justify-end sm:border-0 sm:bg-transparent sm:px-0"
                aria-label={`Chiama ${entry.label}: ${entry.number}`}
              >
                {entry.number}
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
