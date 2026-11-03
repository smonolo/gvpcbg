import { JsonLd } from '@/components/seo/JsonLd'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { breadcrumbs } from '@/lib/navigation'
import {
  breadcrumbJsonLd,
  buildMetadata,
  pages,
  webPageJsonLd,
} from '@/lib/seo'
import { formatStreetCity, site } from '@/lib/site'

export const metadata = buildMetadata(pages.privacy)

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(pages.privacy),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Privacy', path: pages.privacy.path },
          ]),
        ]}
      />
      <PageHero
        title="Informativa privacy"
        description="Come trattiamo i dati di chi naviga questo sito."
        breadcrumbs={breadcrumbs('Privacy')}
      />

      <Section>
        <div className="max-w-3xl space-y-8 text-neutral-secondary">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-neutral">Titolare</h2>
            <p>
              Il titolare del trattamento è{' '}
              <strong className="text-neutral">{site.fullName}</strong>, con
              sede in {formatStreetCity()}.
            </p>
            <p>
              Contatti: <a href={site.email.href}>{site.email.display}</a> —{' '}
              <a href={site.phone.href}>{site.phone.display}</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-neutral">
              Dati trattati tramite il sito
            </h2>
            <p>
              Questo sito ha finalità informative e non richiede la creazione di
              un account da parte dei visitatori. Possono essere trattati dati
              di navigazione tecnici (ad esempio log di sicurezza del server)
              strettamente necessari al funzionamento del servizio.
            </p>
            <p>
              Foto, avvisi e articoli pubblicati sul sito sono gestiti tramite
              Sanity (Content Lake e CDN). Il trattamento riguarda i contenuti
              pubblicati dall’associazione, non un profilo dei visitatori.
            </p>
            <p>
              Se ci contattate via email o telefono, tratteremo i dati che ci
              comunicherete esclusivamente per rispondere alla richiesta.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-neutral">Cookie</h2>
            <p>
              Il sito non utilizza cookie di profilazione. Eventuali cookie
              tecnici, se presenti, sono impiegati solo per garantire
              funzionalità essenziali o preferenze di base.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-neutral">Diritti</h2>
            <p>
              Gli interessati possono esercitare i diritti previsti dal
              Regolamento (UE) 2016/679 (accesso, rettifica, cancellazione,
              limitazione, opposizione, portabilità ove applicabile) contattando
              il titolare agli indirizzi indicati sopra. È inoltre possibile
              proporre reclamo al Garante per la protezione dei dati personali.
            </p>
          </section>

          <p className="text-sm">Ultimo aggiornamento: 3 novembre 2026.</p>
        </div>
      </Section>
    </>
  )
}
