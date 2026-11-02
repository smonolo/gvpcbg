'use client'

import { useEffect, useId, useMemo, useState } from 'react'
import { PhotoMedia } from '@/components/photos/PhotoMedia'
import { Button } from '@/components/ui/Button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { photoCategories, type Photo, type PhotoCategory } from '@/lib/photos'

type PhotoGridProps = {
  photos: readonly Photo[]
  showFilters?: boolean
  columns?: 'home' | 'page'
}

export function PhotoGrid({
  photos,
  showFilters = false,
  columns = 'page',
}: PhotoGridProps) {
  const [filter, setFilter] = useState<PhotoCategory | 'all'>('all')
  const [activeId, setActiveId] = useState<string | null>(null)
  const statusId = useId()

  const filtered = useMemo(
    () =>
      filter === 'all'
        ? [...photos]
        : photos.filter(photo => photo.category === filter),
    [filter, photos]
  )
  const activeIndex = filtered.findIndex(photo => photo.id === activeId)
  const active = activeIndex >= 0 ? filtered[activeIndex] : null
  const open = active !== null
  const filterLabel =
    filter === 'all' ? 'tutte le categorie' : photoCategories[filter].label

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        const next = filtered[(activeIndex + 1) % filtered.length]
        setActiveId(next.id)
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        const prev =
          filtered[(activeIndex - 1 + filtered.length) % filtered.length]
        setActiveId(prev.id)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, activeIndex, filtered])

  return (
    <div>
      {showFilters ? (
        <div
          className="mb-6 flex flex-wrap gap-2"
          role="group"
          aria-label="Filtra le foto per categoria"
        >
          <FilterChip
            active={filter === 'all'}
            onClick={() => setFilter('all')}
          >
            Tutte
          </FilterChip>
          {(Object.keys(photoCategories) as PhotoCategory[]).map(category => (
            <FilterChip
              key={category}
              active={filter === category}
              onClick={() => setFilter(category)}
            >
              {photoCategories[category].label}
            </FilterChip>
          ))}
        </div>
      ) : null}

      <p id={statusId} className="sr-only" aria-live="polite" aria-atomic="true">
        {filtered.length === 0
          ? `Nessuna foto disponibile per ${filterLabel}.`
          : `${filtered.length} ${filtered.length === 1 ? 'foto' : 'foto'} in ${filterLabel}.`}
      </p>

      {filtered.length === 0 ? (
        <p className="rounded-sm border border-neutral-border bg-white p-6 text-neutral-secondary">
          Nessuna foto in questa categoria.
        </p>
      ) : (
        <ul
          className={cn(
            'grid gap-4',
            columns === 'home'
              ? 'sm:grid-cols-2 lg:grid-cols-4'
              : 'sm:grid-cols-2 lg:grid-cols-3'
          )}
          aria-describedby={statusId}
        >
          {filtered.map((photo, index) => (
            <li key={photo.id}>
              <button
                type="button"
                onClick={() => setActiveId(photo.id)}
                aria-label={`Apri foto: ${photo.title}. ${photo.caption}`}
                className="group block w-full overflow-hidden rounded-sm border border-neutral-border bg-white text-left shadow-sm transition-shadow hover:shadow-md focus-visible:relative focus-visible:z-10"
              >
                <span className="relative block aspect-[3/2] overflow-hidden bg-primary-lighter">
                  <PhotoMedia
                    photo={photo}
                    priority={index < 2}
                    decorative
                    sizes={
                      columns === 'home'
                        ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                        : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    }
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </span>
                <span className="block p-4">
                  <span className="text-sm font-semibold text-primary">
                    {photoCategories[photo.category].label}
                  </span>
                  <span className="mt-1 block text-lg font-semibold text-neutral">
                    {photo.title}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <Dialog
        modal
        open={open}
        onOpenChange={nextOpen => {
          if (!nextOpen) setActiveId(null)
        }}
      >
        <DialogContent showCloseButton>
          {active ? (
            <>
              <DialogHeader>
                <p className="text-sm font-semibold text-primary">
                  {photoCategories[active.category].label}
                </p>
                <DialogTitle>{active.title}</DialogTitle>
              </DialogHeader>
              <div className="overflow-y-auto bg-neutral-bg-soft p-4">
                <PhotoMedia
                  photo={active}
                  sizes="90vw"
                  className="mx-auto h-auto max-h-[min(60vh,28rem)] w-full object-contain"
                />
                <DialogDescription className="mt-4">
                  {active.caption}
                </DialogDescription>
                {filtered.length > 1 ? (
                  <p className="mt-2 text-sm text-neutral-secondary" aria-live="polite">
                    Foto {activeIndex + 1} di {filtered.length}. Usa i tasti
                    freccia per navigare.
                  </p>
                ) : null}
              </div>
              {filtered.length > 1 ? (
                <DialogFooter>
                  <Button
                    variant="outline"
                    aria-label={`Foto precedente: ${
                      filtered[
                        (activeIndex - 1 + filtered.length) % filtered.length
                      ].title
                    }`}
                    onClick={() => {
                      const prev =
                        filtered[
                          (activeIndex - 1 + filtered.length) % filtered.length
                        ]
                      setActiveId(prev.id)
                    }}
                  >
                    Precedente
                  </Button>
                  <Button
                    variant="outline"
                    aria-label={`Foto successiva: ${
                      filtered[(activeIndex + 1) % filtered.length].title
                    }`}
                    onClick={() => {
                      const next = filtered[(activeIndex + 1) % filtered.length]
                      setActiveId(next.id)
                    }}
                  >
                    Successiva
                  </Button>
                </DialogFooter>
              ) : null}
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  )
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: string
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        'min-h-11 rounded-sm border px-4 text-sm font-semibold transition-colors',
        active
          ? 'border-primary bg-primary text-white'
          : 'border-neutral-border bg-white text-primary hover:bg-primary-lighter'
      )}
    >
      {children}
    </button>
  )
}
