import { ActivitiesPreview } from '@/components/home/ActivitiesPreview'
import { CallToAction } from '@/components/home/CallToAction'
import { Hero } from '@/components/home/Hero'
import { Highlights } from '@/components/home/Highlights'
import { PhotosPreview } from '@/components/home/PhotosPreview'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildMetadata, pages, webPageJsonLd } from '@/lib/seo'

export const metadata = buildMetadata(pages.home)

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(pages.home)} />
      <Hero />
      <Highlights />
      <ActivitiesPreview />
      <PhotosPreview />
      <CallToAction />
    </>
  )
}
