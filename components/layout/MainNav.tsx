'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'
import { isActivePath, mainNav, utilityNav } from '@/lib/navigation'
import { cn } from '@/lib/utils'

export function MainNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [navPath, setNavPath] = useState(pathname)
  const menuId = useId()
  const titleId = useId()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  if (navPath !== pathname) {
    setNavPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  function closeMenu() {
    setOpen(false)
    toggleRef.current?.focus()
  }

  return (
    <div className="border-b border-neutral-border bg-white">
      <div className="container-content">
        <div className="flex items-center justify-between gap-3 py-2 lg:hidden">
          <p className="text-sm font-semibold text-neutral">Menu</p>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex min-h-11 items-center justify-center rounded-sm border border-neutral-border bg-white px-4 font-semibold text-primary"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen(true)}
          >
            Apri
          </button>
        </div>

        <nav aria-label="Navigazione principale" className="hidden lg:block">
          <ul className="flex flex-row flex-wrap items-stretch">
            {mainNav.map(item => {
              const active = isActivePath(pathname, item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'flex min-h-11 items-center border-b-4 px-3 py-3 text-sm font-semibold no-underline transition-colors xl:px-4 xl:text-base',
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

      {open ? (
        <div
          ref={panelRef}
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-50 flex flex-col bg-white pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] motion-safe:animate-in motion-safe:duration-200 motion-safe:fade-in lg:hidden"
        >
          <div className="flex items-center justify-between gap-3 border-b border-neutral-border px-4 py-3">
            <p id={titleId} className="text-lg font-bold text-neutral">
              Menu di navigazione
            </p>
            <button
              ref={closeRef}
              type="button"
              className="inline-flex min-h-11 items-center justify-center rounded-sm border border-neutral-border bg-white px-4 font-semibold text-primary"
              onClick={closeMenu}
            >
              Chiudi
            </button>
          </div>

          <nav
            aria-label="Navigazione principale"
            className="flex-1 overflow-y-auto overscroll-contain"
          >
            <ul className="flex flex-col py-2">
              {mainNav.map(item => {
                const active = isActivePath(pathname, item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'flex min-h-14 items-center border-l-4 px-5 text-lg font-semibold no-underline',
                        active
                          ? 'border-primary bg-primary-lighter text-primary'
                          : 'border-transparent text-neutral hover:bg-neutral-bg-soft hover:text-primary'
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="border-t border-neutral-border px-5 py-4">
            <ul className="flex flex-col gap-1">
              {utilityNav.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center text-base text-neutral-secondary no-underline hover:text-primary hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  )
}
