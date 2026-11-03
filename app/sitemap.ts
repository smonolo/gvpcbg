import type { MetadataRoute } from 'next'
import { siteRoutes } from '@/lib/navigation'
import { siteUrl } from '@/lib/site'
import { getArticles } from '@/sanity/lib/content'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles()
  const now = new Date().toISOString().slice(0, 10)

  const staticEntries: MetadataRoute.Sitemap = siteRoutes.map(route => ({
    url: `${siteUrl()}${route === '/' ? '' : route}`,
    lastModified: now,
    changeFrequency:
      route === '/' || route === '/novita' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route === '/novita' ? 0.8 : 0.7,
  }))

  const articleEntries: MetadataRoute.Sitemap = articles.map(article => ({
    url: `${siteUrl()}/novita/${article.slug}`,
    lastModified: article.publishedAt,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticEntries, ...articleEntries]
}
