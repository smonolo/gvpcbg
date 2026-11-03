import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'
import { dataset, projectId } from '@/sanity/env'

const builder =
  projectId && dataset ? createImageUrlBuilder({ projectId, dataset }) : null

export function urlForImage(source: SanityImageSource) {
  if (!builder) {
    throw new Error('Sanity image URL builder is not configured')
  }
  return builder.image(source)
}
