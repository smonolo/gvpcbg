import { Suspense } from 'react'
import { PhotoCategoryFilters } from '@/components/photos/PhotoCategoryFilters'
import { PhotoGrid } from '@/components/photos/PhotoGrid'
import { JsonLd } from '@/components/seo/JsonLd'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/ui/PageHero'
import { Pagination } from '@/components/ui/Pagination'
import { Section } from '@/components/ui/Section'
import { breadcrumbs } from '@/lib/navigation'
import {
  PHOTO_PAGE_SIZE,
  paginateItems,
  parsePageParam,
} from '@/lib/pagination'
import { isPhotoCategory, photoCategories } from '@/lib/photos'
import {
  breadcrumbJsonLd,
  buildMetadata,
  pages,
  webPageJsonLd,
} from '@/lib/seo'
import { site, siteUrl } from '@/lib/site'
import { getPhotos } from '@/sanity/lib/content'

export const metadata = buildMetadata(pages.foto)

type FotoPageProps = {
  searchParams: Promise<{
    pagina?: string | string[]
    categoria?: string | string[]
  }>
}

export default function FotoPage({ searchParams }: FotoPageProps) {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(pages.foto),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Foto', path: pages.foto.path },
          ]),
        ]}
      />
      <PageHero
        title="Foto"
        description="Esercitazioni, mezzi e momenti di vita associativa."
        breadcrumbs={breadcrumbs('Foto')}
      />

      <Section>
        <Suspense fallback={<FotoFallback />}>
          <FotoResults searchParams={searchParams} />
        </Suspense>
        <div className="mt-10 rounded-sm border border-neutral-border bg-primary-lighter p-5">
          <h2 className="text-xl font-semibold text-neutral">
            Hai altre foto da condividere?
          </h2>
          <p className="mt-2 max-w-3xl text-neutral-secondary">
            Scrivici se hai scatti dalle attività da proporre, oppure seguici su
            Facebook.
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

async function FotoResults({
  searchParams,
}: {
  searchParams: FotoPageProps['searchParams']
}) {
  const params = await searchParams
  const rawCategory = Array.isArray(params.categoria)
    ? params.categoria[0]
    : params.categoria
  const category =
    rawCategory && isPhotoCategory(rawCategory) ? rawCategory : 'all'
  const photos = await getPhotos()
  const filtered =
    category === 'all'
      ? photos
      : photos.filter(photo => photo.category === category)
  const pageResult = paginateItems(
    filtered,
    parsePageParam(params.pagina),
    PHOTO_PAGE_SIZE
  )
  const categoryLabel =
    category === 'all' ? 'tutte le categorie' : photoCategories[category].label
  const statusText =
    pageResult.totalItems === 0
      ? `Nessuna foto disponibile per ${categoryLabel}.`
      : `${pageResult.totalItems} foto in ${categoryLabel}. Pagina ${pageResult.page} di ${pageResult.totalPages}.`

  const imageGalleryJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: `Galleria fotografica · ${site.name}`,
    description: pages.foto.description,
    url: `${siteUrl()}${pages.foto.path}`,
    isPartOf: { '@id': `${siteUrl()}/#website` },
    about: { '@id': `${siteUrl()}/#organization` },
    image: pageResult.items.map(photo =>
      photo.src.startsWith('http') ? photo.src : `${siteUrl()}${photo.src}`
    ),
  }

  return (
    <div id="elenco-foto">
      <JsonLd data={imageGalleryJsonLd} />
      <PhotoCategoryFilters pathname={pages.foto.path} active={category} />
      {pageResult.totalItems === 0 ? (
        <p className="rounded-sm border border-neutral-border bg-white p-6 text-neutral-secondary">
          Nessuna foto pubblicata per questa selezione.
        </p>
      ) : (
        <>
          <PhotoGrid photos={pageResult.items} statusText={statusText} />
          <Pagination
            pathname={pages.foto.path}
            state={pageResult}
            query={{
              categoria: category === 'all' ? undefined : category,
            }}
            label="Paginazione galleria fotografica"
            itemLabel="foto"
          />
        </>
      )}
    </div>
  )
}

function FotoFallback() {
  return (
    <p className="rounded-sm border border-neutral-border bg-white p-6 text-neutral-secondary">
      Caricamento galleria…
    </p>
  )
}
