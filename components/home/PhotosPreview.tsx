import { PhotoGrid } from '@/components/photos/PhotoGrid'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import type { Photo } from '@/lib/photos'

type PhotosPreviewProps = {
  photos: readonly Photo[]
}

export function PhotosPreview({ photos }: PhotosPreviewProps) {
  if (photos.length === 0) return null

  return (
    <Section eyebrow="Galleria" title="Sul campo">
      <PhotoGrid
        photos={photos}
        columns="home"
        statusText={`${photos.length} foto in evidenza.`}
      />
      <div className="mt-8">
        <Button href="/foto" variant="outline">
          Tutte le foto
        </Button>
      </div>
    </Section>
  )
}
