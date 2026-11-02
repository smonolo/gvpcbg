import type { MetadataRoute } from 'next'
import { siteRoutes } from '@/lib/navigation'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map(route => ({
    url: `${site.url}${route === '/' ? '' : route}`,
    lastModified: '2026-11-02',
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }))
}
