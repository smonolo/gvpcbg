import { cacheLife } from 'next/cache'
import {
  featuredPhotos as localFeaturedPhotos,
  photos as localPhotos,
  type Photo,
} from '@/lib/photos'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import {
  activeAnnouncementsQuery,
  articleBySlugQuery,
  articlesQuery,
  articleSlugsQuery,
  featuredPhotosQuery,
  photosQuery,
} from '@/sanity/lib/queries'
import type {
  SanityAnnouncement,
  SanityArticle,
  SanityArticleListItem,
  SanityImageAsset,
  SanityPhoto,
} from '@/sanity/lib/types'

function imageDimensions(image: SanityImageAsset) {
  const ref = image.asset?._ref
  if (!ref) return { width: 1200, height: 800 }

  const match = ref.match(/-(\d+)x(\d+)-/)
  if (!match) return { width: 1200, height: 800 }

  return {
    width: Number(match[1]),
    height: Number(match[2]),
  }
}

function mapPhoto(doc: SanityPhoto): Photo {
  const { width, height } = imageDimensions(doc.image)

  return {
    id: doc._id,
    src: urlForImage(doc.image).width(1600).quality(80).auto('format').url(),
    alt: doc.alt,
    title: doc.title,
    caption: doc.caption,
    category: doc.category,
    featured: doc.featured,
    width,
    height,
  }
}

async function fetchSanity<T>(
  query: string,
  params: Record<string, unknown> = {}
): Promise<T | null> {
  if (!client) return null

  try {
    return await client.fetch<T>(query, params)
  } catch {
    return null
  }
}

export async function getPhotos(): Promise<Photo[]> {
  'use cache'
  cacheLife('minutes')

  const docs = await fetchSanity<SanityPhoto[]>(photosQuery)
  if (!docs) return localPhotos
  if (docs.length === 0) return []
  return docs.map(mapPhoto)
}

export async function getFeaturedPhotos(): Promise<Photo[]> {
  'use cache'
  cacheLife('minutes')

  const docs = await fetchSanity<SanityPhoto[]>(featuredPhotosQuery)
  if (!docs) return localFeaturedPhotos
  if (docs.length === 0) return []
  return docs.map(mapPhoto)
}

export async function getAnnouncements(): Promise<SanityAnnouncement[]> {
  'use cache'
  cacheLife('minutes')

  const docs = await fetchSanity<SanityAnnouncement[]>(activeAnnouncementsQuery)
  return docs ?? []
}

export async function getArticles(): Promise<SanityArticleListItem[]> {
  'use cache'
  cacheLife('minutes')

  const docs = await fetchSanity<SanityArticleListItem[]>(articlesQuery)
  return docs ?? []
}

export async function getArticleBySlug(
  slug: string
): Promise<SanityArticle | null> {
  'use cache'
  cacheLife('minutes')

  return fetchSanity<SanityArticle | null>(articleBySlugQuery, { slug })
}

export async function getArticleSlugs(): Promise<string[]> {
  'use cache'
  cacheLife('minutes')

  const slugs = await fetchSanity<string[]>(articleSlugsQuery)
  return slugs ?? []
}

export function coverImageUrl(image: SanityImageAsset | undefined) {
  if (!image?.asset?._ref) return null
  return urlForImage(image).width(1600).quality(80).auto('format').url()
}
