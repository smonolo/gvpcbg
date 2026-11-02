import Image from 'next/image'
import type { Photo } from '@/lib/photos'

type PhotoMediaProps = {
  photo: Photo
  priority?: boolean
  sizes?: string
  className?: string
  /** When true, alt is empty because adjacent text already describes the image. */
  decorative?: boolean
}

export function PhotoMedia({
  photo,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 33vw',
  className = 'h-full w-full object-cover',
  decorative = false,
}: PhotoMediaProps) {
  const alt = decorative ? '' : photo.alt

  if (photo.src.endsWith('.svg')) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={photo.src}
        alt={alt}
        width={photo.width}
        height={photo.height}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    )
  }

  return (
    <Image
      src={photo.src}
      alt={alt}
      width={photo.width}
      height={photo.height}
      sizes={sizes}
      className={className}
      priority={priority}
    />
  )
}
