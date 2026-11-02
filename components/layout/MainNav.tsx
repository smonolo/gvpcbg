'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { isActivePath, mainNav } from '@/lib/navigation'

export function MainNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [navPath, setNavPath] = useState(pathname)
  const menuId = useId()
  const toggleId = useId()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  if (navPath !== pathname) {
    setNavPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstLinkRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className="border-b border-neutral-border bg-white">
      <div className="container-content">
        <div className="flex items-center justify-between gap-3 py-2 md:hidden">
          <p id={toggleId} className="text-sm font-semibold text-neutral">
            Menu di navigazione
          </p>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-neutral-border bg-white px-3 font-semibold text-primary"
            aria-expanded={open}
            aria-controls={menuId}
            aria-labelledby={toggleId}
            onClick={() => setOpen(value => !value)}
          >
            {open ? 'Chiudi' : 'Apri'}
          </button>
        </div>

        {open ? (
          <button
            type="button"
            className="fixed inset-0 z-30 bg-primary-dark/40 md:hidden"
            aria-label="Chiudi menu di navigazione"
            onClick={() => {
              setOpen(false)
              toggleRef.current?.focus()
            }}
          />
        ) : null}

        <nav
          aria-label="Navigazione principale"
          id={menuId}
          className="relative z-40"
        >
          <ul
            className={cn(
              'flex-col gap-1 pb-3 md:flex md:flex-row md:items-stretch md:gap-0 md:pb-0',
              open ? 'flex' : 'hidden md:flex'
            )}
          >
            {mainNav.map((item, index) => {
              const active = isActivePath(pathname, item.href)
              return (
                <li key={item.href}>
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex min-h-11 items-center border-b-4 px-3 py-3 text-base font-semibold no-underline transition-colors md:px-4',
                      active
                        ? 'border-primary text-primary'
                        : 'border-transparent text-neutral hover:border-primary-light hover:text-primary'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}
