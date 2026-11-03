import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import Image from 'next/image'
import { externalLinkProps } from '@/lib/a11y'
import { coverImageUrl } from '@/sanity/lib/content'
import type { SanityImageAsset } from '@/sanity/lib/types'

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 text-2xl font-bold text-neutral first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-xl font-semibold text-neutral">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mt-4 text-neutral-secondary first:mt-0">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-primary pl-4 text-neutral-secondary italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-secondary">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-neutral-secondary">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href as string | undefined
      if (!href) return <>{children}</>
      const external = /^https?:\/\//i.test(href)
      return (
        <a
          href={href}
          className="font-semibold text-primary underline-offset-2 hover:underline"
          {...(external || value?.blank ? externalLinkProps : {})}
        >
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }: { value: SanityImageAsset }) => {
      const src = coverImageUrl(value)
      if (!src) return null
      return (
        <figure className="mt-8">
          <Image
            src={src}
            alt={value.alt || ''}
            width={1200}
            height={800}
            className="h-auto w-full rounded-sm border border-neutral-border object-cover"
            sizes="(max-width: 768px) 100vw, 48rem"
          />
          {value.caption ? (
            <figcaption className="mt-2 text-sm text-neutral-secondary">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      )
    },
  },
}

export function PortableBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />
}
