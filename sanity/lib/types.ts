import type { PortableTextBlock } from '@portabletext/types'
import type { PhotoCategory } from '@/lib/photos'

export type SanityImageAsset = {
  _type?: string
  asset?: {
    _ref?: string
    _type?: string
  }
  alt?: string
  caption?: string
  hotspot?: unknown
  crop?: unknown
}

export type SanityPhoto = {
  _id: string
  title: string
  caption: string
  alt: string
  category: PhotoCategory
  featured?: boolean
  order?: number
  image: SanityImageAsset
}

export type SanityAnnouncement = {
  _id: string
  title: string
  body: string
  href?: string
  linkLabel?: string
  publishedAt: string
  expiresAt?: string
  pinned?: boolean
}

export type SanityArticleListItem = {
  _id: string
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  coverImage?: SanityImageAsset & { alt?: string }
}

export type SanityArticle = SanityArticleListItem & {
  body: PortableTextBlock[]
}
