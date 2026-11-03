import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PortableBody } from '@/components/news/PortableBody'
import { JsonLd } from '@/components/seo/JsonLd'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { formatItalianDate } from '@/lib/dates'
import {
  breadcrumbJsonLd,
  buildMetadata,
  pages,
  webPageJsonLd,
} from '@/lib/seo'
import { siteUrl } from '@/lib/site'
import {
  coverImageUrl,
  getArticleBySlug,
  getArticleSlugs,
} from '@/sanity/lib/content'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getArticleSlugs()
  if (slugs.length === 0) {
    return [{ slug: '_' }]
  }
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) {
    return buildMetadata({
      path: `${pages.novita.path}/${slug}`,
      title: 'Articolo',
      description: pages.novita.description,
    })
  }

  return buildMetadata({
    path: `${pages.novita.path}/${article.slug}`,
    title: article.title,
    description: article.excerpt,
    keywords: ['novità', 'comunicazioni', 'articoli'],
  })
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) notFound()

  const cover = coverImageUrl(article.coverImage)
  const path = `${pages.novita.path}/${article.slug}`

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    url: `${siteUrl()}${path}`,
    isPartOf: { '@id': `${siteUrl()}/#website` },
    author: { '@id': `${siteUrl()}/#organization` },
    publisher: { '@id': `${siteUrl()}/#organization` },
    ...(cover
      ? {
          image: cover,
        }
      : {}),
  }

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path,
            title: article.title,
            description: article.excerpt,
          }),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Novità', path: pages.novita.path },
            { name: article.title, path },
          ]),
          articleJsonLd,
        ]}
      />
      <PageHero
        title={article.title}
        description={article.excerpt}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Novità', href: pages.novita.path },
          { label: article.title },
        ]}
      />

      <Section>
        <div className="max-w-3xl space-y-8 text-neutral-secondary">
          <time
            dateTime={article.publishedAt}
            className="block text-sm font-semibold text-primary"
          >
            {formatItalianDate(article.publishedAt)}
          </time>
          {cover ? (
            <figure>
              <Image
                src={cover}
                alt={article.coverImage?.alt || article.title}
                width={1200}
                height={675}
                className="h-auto w-full rounded-sm border border-neutral-border object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 48rem"
              />
            </figure>
          ) : null}
          <div className="text-neutral-secondary">
            <PortableBody value={article.body} />
          </div>
        </div>
      </Section>
    </>
  )
}
