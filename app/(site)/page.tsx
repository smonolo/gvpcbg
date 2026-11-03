import { ActivitiesPreview } from '@/components/home/ActivitiesPreview'
import { CallToAction } from '@/components/home/CallToAction'
import { Hero } from '@/components/home/Hero'
import { Highlights } from '@/components/home/Highlights'
import { NewsPreview } from '@/components/home/NewsPreview'
import { PhotosPreview } from '@/components/home/PhotosPreview'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildMetadata, pages, webPageJsonLd } from '@/lib/seo'
import { getArticles, getFeaturedPhotos } from '@/sanity/lib/content'

export const metadata = buildMetadata(pages.home)

export default async function HomePage() {
  const [articles, featuredPhotos] = await Promise.all([
    getArticles(),
    getFeaturedPhotos(),
  ])

  return (
    <>
      <JsonLd data={webPageJsonLd(pages.home)} />
      <Hero />
      <Highlights />
      <NewsPreview articles={articles} />
      <ActivitiesPreview />
      <PhotosPreview photos={featuredPhotos} />
      <CallToAction />
    </>
  )
}
