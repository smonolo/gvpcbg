import type { ReactNode } from 'react'
import { Suspense } from 'react'
import { AnnouncementsSlot } from '@/components/announcements/AnnouncementsSlot'
import { Footer } from '@/components/layout/Footer'
import { HeaderBrand } from '@/components/layout/HeaderBrand'
import { MainNav } from '@/components/layout/MainNav'
import { SkipLink } from '@/components/layout/SkipLink'
import { SlimHeader } from '@/components/layout/SlimHeader'

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SkipLink />
      <header className="relative z-40">
        <SlimHeader />
        <HeaderBrand />
        <MainNav />
      </header>
      <Suspense fallback={null}>
        <AnnouncementsSlot />
      </Suspense>
      <main
        id="contenuto-principale"
        className="flex-1 outline-none"
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}
