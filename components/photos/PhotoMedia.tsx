import Image from 'next/image'
import type { Photo } from '@/lib/photos'

type PhotoMediaProps = {
  photo: Photo
  priority?: boolean
  sizes?: string
  className?: string
  decorative?: boolean
}

export function PhotoMedia({
  photo,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 33vw',
  className = 'h-full w-full object-cover',
  decorative = false,
}: PhotoMediaProps) {
  const svg = photo.src.endsWith('.svg')

  return (
    <Image
      src={photo.src}
      alt={decorative ? '' : photo.alt}
      width={photo.width}
      height={photo.height}
      sizes={sizes}
      className={className}
      priority={priority}
      unoptimized={svg}
    />
  )
}
