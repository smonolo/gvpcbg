import { ArticleCard } from '@/components/news/ArticleCard'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import type { SanityArticleListItem } from '@/sanity/lib/types'

type NewsPreviewProps = {
  articles: readonly SanityArticleListItem[]
}

export function NewsPreview({ articles }: NewsPreviewProps) {
  if (articles.length === 0) return null

  return (
    <Section eyebrow="Novità" title="Dal gruppo">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.slice(0, 3).map(article => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
      <div className="mt-8">
        <Button href="/novita" variant="outline">
          Tutte le novità
        </Button>
      </div>
    </Section>
  )
}
