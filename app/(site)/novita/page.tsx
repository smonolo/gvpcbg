import { Suspense } from 'react'
import { ArticleCard } from '@/components/news/ArticleCard'
import { JsonLd } from '@/components/seo/JsonLd'
import { PageHero } from '@/components/ui/PageHero'
import { Pagination } from '@/components/ui/Pagination'
import { Section } from '@/components/ui/Section'
import { breadcrumbs } from '@/lib/navigation'
import {
  ARTICLE_PAGE_SIZE,
  paginateItems,
  parsePageParam,
} from '@/lib/pagination'
import {
  breadcrumbJsonLd,
  buildMetadata,
  pages,
  webPageJsonLd,
} from '@/lib/seo'
import { getArticles } from '@/sanity/lib/content'

export const metadata = buildMetadata(pages.novita)

type NovitaPageProps = {
  searchParams: Promise<{
    pagina?: string | string[]
  }>
}

export default function NovitaPage({ searchParams }: NovitaPageProps) {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(pages.novita),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Novità', path: pages.novita.path },
          ]),
        ]}
      />
      <PageHero
        title="Novità"
        description="Comunicati, resoconti delle attività e aggiornamenti dal gruppo."
        breadcrumbs={breadcrumbs('Novità')}
      />

      <Section>
        <Suspense fallback={<NovitaFallback />}>
          <NovitaResults searchParams={searchParams} />
        </Suspense>
      </Section>
    </>
  )
}

async function NovitaResults({
  searchParams,
}: {
  searchParams: NovitaPageProps['searchParams']
}) {
  const params = await searchParams
  const articles = await getArticles()
  const pageResult = paginateItems(
    articles,
    parsePageParam(params.pagina),
    ARTICLE_PAGE_SIZE
  )

  if (pageResult.totalItems === 0) {
    return (
      <p className="rounded-sm border border-neutral-border bg-white p-6 text-neutral-secondary">
        Nessun articolo pubblicato al momento.
      </p>
    )
  }

  return (
    <div id="elenco-novita">
      <p className="sr-only" aria-live="polite">
        {pageResult.totalItems} articoli. Pagina {pageResult.page} di{' '}
        {pageResult.totalPages}.
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pageResult.items.map(article => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
      <Pagination
        pathname={pages.novita.path}
        state={pageResult}
        label="Paginazione novità"
        itemLabel="articoli"
      />
    </div>
  )
}

function NovitaFallback() {
  return (
    <p className="rounded-sm border border-neutral-border bg-white p-6 text-neutral-secondary">
      Caricamento novità…
    </p>
  )
}
