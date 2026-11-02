import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/lib/site'

export function HeaderBrand() {
  return (
    <div className="border-b border-neutral-border bg-white">
      <div className="container-content flex items-center gap-4 py-4 md:gap-5 md:py-5">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-sm"
          aria-label={`${site.shortName} – Torna alla home`}
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={72}
            height={72}
            sizes="(max-width: 768px) 56px, 72px"
            className="h-14 w-14 object-contain md:h-[72px] md:w-[72px]"
            priority
          />
        </Link>
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-wide text-brand uppercase">
            {site.shortName}
          </p>
          <Link
            href="/"
            className="block rounded-sm text-neutral no-underline hover:text-primary"
          >
            <span className="block text-xl leading-tight font-bold md:text-2xl">
              {site.name}
            </span>
            <span className="mt-0.5 block text-sm leading-snug text-neutral-secondary md:text-base">
              {site.aka}
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
