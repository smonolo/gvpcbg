import { PhotoGrid } from '@/components/photos/PhotoGrid'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { featuredPhotos } from '@/lib/photos'

export function PhotosPreview() {
  return (
    <Section
      eyebrow="Galleria"
      title="Foto dal territorio"
      lead="Esercitazioni, antincendio boschivo, mezzi e momenti di vita del gruppo."
    >
      <PhotoGrid photos={featuredPhotos} columns="home" />
      <div className="mt-8">
        <Button href="/foto" variant="outline">
          Vedi tutte le foto
        </Button>
      </div>
    </Section>
  )
}
