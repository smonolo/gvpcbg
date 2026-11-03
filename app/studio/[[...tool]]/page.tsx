import type { Metadata, Viewport } from 'next'
import { Suspense } from 'react'
import { connection } from 'next/server'
import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export const instant = false

export function generateStaticParams() {
  return [{ tool: [] as string[] }]
}

export const metadata: Metadata = {
  title: 'Studio · GVPCBG',
  referrer: 'same-origin',
  robots: 'noindex',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

async function Studio() {
  await connection()
  return <NextStudio config={config} />
}

export default function StudioPage() {
  return (
    <Suspense fallback={null}>
      <Studio />
    </Suspense>
  )
}
