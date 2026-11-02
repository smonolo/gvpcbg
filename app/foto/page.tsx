import { PhotoGrid } from '@/components/photos/PhotoGrid'
import { JsonLd } from '@/components/seo/JsonLd'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { breadcrumbs } from '@/lib/navigation'
import { photos } from '@/lib/photos'
import {
  breadcrumbJsonLd,
  buildMetadata,
  pages,
  webPageJsonLd,
} from '@/lib/seo'
import { site, siteUrl } from '@/lib/site'

export const metadata = buildMetadata(pages.foto)

export default function FotoPage() {
  const imageGalleryJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: `Galleria fotografica · ${site.shortName}`,
    description: pages.foto.description,
    url: `${siteUrl()}${pages.foto.path}`,
    isPartOf: { '@id': `${siteUrl()}/#website` },
    about: { '@id': `${siteUrl()}/#organization` },
    image: photos.map(photo => `${siteUrl()}${photo.src}`),
  }

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(pages.foto),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Foto', path: pages.foto.path },
          ]),
          imageGalleryJsonLd,
        ]}
      />
      <PageHero
        title="Foto"
        description="Momenti di esercitazione, attività operative e vita del gruppo sul territorio di Busto Garolfo."
        breadcrumbs={breadcrumbs('Foto')}
      />

      <Section
        title="Galleria"
        lead="Seleziona una categoria o apri una foto per vederla a dimensione intera."
      >
        <PhotoGrid photos={photos} showFilters />
        <div className="mt-10 rounded-sm border border-neutral-border bg-primary-lighter p-5">
          <h2 className="text-xl font-semibold text-neutral">
            Hai altre foto da condividere?
          </h2>
          <p className="mt-2 max-w-3xl text-neutral-secondary">
            Seguici su Facebook per gli aggiornamenti quotidiani, oppure
            contattaci se vuoi contribuire materiale fotografico delle attività
            del gruppo.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button href={site.social.facebook.href}>
              {site.social.facebook.label}
            </Button>
            <Button href="/contatti" variant="outline">
              Contatti
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
