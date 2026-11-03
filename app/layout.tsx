import type { Viewport } from 'next'
import { Titillium_Web } from 'next/font/google'
import { JsonLd } from '@/components/seo/JsonLd'
import { organizationJsonLd, rootMetadata, websiteJsonLd } from '@/lib/seo'
import { cn } from '@/lib/utils'
import './globals.css'

const titillium = Titillium_Web({
  variable: '--font-titillium',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata = rootMetadata()

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#003366' },
    { media: '(prefers-color-scheme: dark)', color: '#003366' },
  ],
  colorScheme: 'light',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="it"
      data-scroll-behavior="smooth"
      className={cn(titillium.variable, 'h-full font-sans antialiased')}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        {children}
      </body>
    </html>
  )
}
