import { defineQuery } from 'next-sanity'

export const photosQuery = defineQuery(`
  *[_type == "photo" && defined(image)] | order(order asc, title asc) {
    _id,
    title,
    caption,
    alt,
    category,
    featured,
    order,
    image
  }
`)

export const featuredPhotosQuery = defineQuery(`
  *[_type == "photo" && featured == true && defined(image)] | order(order asc, title asc) {
    _id,
    title,
    caption,
    alt,
    category,
    featured,
    order,
    image
  }
`)

export const activeAnnouncementsQuery = defineQuery(`
  *[_type == "announcement"
    && defined(publishedAt)
    && publishedAt <= now()
    && (!defined(expiresAt) || expiresAt > now())
  ] | order(pinned desc, publishedAt desc) {
    _id,
    title,
    body,
    href,
    linkLabel,
    publishedAt,
    expiresAt,
    pinned
  }
`)

export const articlesQuery = defineQuery(`
  *[_type == "article" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()]
    | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    coverImage
  }
`)

export const articleBySlugQuery = defineQuery(`
  *[_type == "article" && slug.current == $slug && defined(publishedAt) && publishedAt <= now()][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    coverImage,
    body
  }
`)

export const articleSlugsQuery = defineQuery(`
  *[_type == "article" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()].slug.current
`)
