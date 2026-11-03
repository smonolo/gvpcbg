import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/lib/site'

export function HeaderBrand() {
  return (
    <div className="border-b border-neutral-border bg-white">
      <div className="container-content flex items-center gap-3 py-3 sm:gap-4 sm:py-4 md:gap-5 md:py-5">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-sm"
          aria-label={`${site.name} – Torna alla home`}
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={72}
            height={72}
            sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 72px"
            className="h-12 w-12 object-contain sm:h-14 sm:w-14 md:h-[72px] md:w-[72px]"
            priority
          />
        </Link>
        <div className="min-w-0">
          <Link
            href="/"
            className="block rounded-sm text-neutral no-underline hover:text-primary"
          >
            <span className="block text-lg leading-tight font-bold sm:text-xl md:text-2xl">
              {site.name}
            </span>
            <span className="mt-0.5 line-clamp-2 block text-xs leading-snug text-neutral-secondary sm:text-sm md:text-base">
              {site.aka}
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
