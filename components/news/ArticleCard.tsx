import Image from 'next/image'
import Link from 'next/link'
import { coverImageUrl } from '@/sanity/lib/content'
import type { SanityArticleListItem } from '@/sanity/lib/types'
import { formatItalianDate } from '@/lib/dates'

type ArticleCardProps = {
  article: SanityArticleListItem
}

export function ArticleCard({ article }: ArticleCardProps) {
  const cover = coverImageUrl(article.coverImage)

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-sm border border-neutral-border bg-white shadow-sm">
      {cover ? (
        <Link
          href={`/novita/${article.slug}`}
          className="relative block aspect-[16/10] overflow-hidden bg-primary-lighter"
          aria-hidden="true"
          tabIndex={-1}
        >
          <Image
            src={cover}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </Link>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <time
          dateTime={article.publishedAt}
          className="text-sm font-semibold text-primary"
        >
          {formatItalianDate(article.publishedAt)}
        </time>
        <h2 className="mt-2 text-xl font-semibold text-neutral">
          <Link
            href={`/novita/${article.slug}`}
            className="hover:underline focus-visible:underline"
          >
            {article.title}
          </Link>
        </h2>
        <p className="mt-2 flex-1 text-neutral-secondary">{article.excerpt}</p>
        <p className="mt-4">
          <Link
            href={`/novita/${article.slug}`}
            className="text-sm font-semibold text-primary hover:underline"
          >
            Leggi l’articolo
          </Link>
        </p>
      </div>
    </article>
  )
}
