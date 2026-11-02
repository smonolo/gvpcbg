import Link from 'next/link'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { opensInNewTabLabel } from '@/lib/a11y'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'outline' | 'inverse'
type Size = 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'border-transparent bg-primary text-primary-foreground shadow-sm hover:bg-primary-hover',
  secondary:
    'border-transparent bg-brand text-white shadow-sm hover:bg-brand-dark',
  outline:
    'border border-primary bg-white text-primary hover:bg-primary-lighter',
  inverse: 'border border-white bg-transparent text-white hover:bg-white/10',
}

const sizes: Record<Size, string> = {
  md: 'min-h-11 px-4 text-base',
  lg: 'min-h-12 px-5 text-lg',
}

type CommonProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  'aria-label'?: string
}

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'children'> & {
    href?: undefined
  }

type ButtonAsLink = CommonProps & {
  href: string
}

function isAbsoluteHref(href: string) {
  return /^(https?:|mailto:|tel:|#)/.test(href)
}

function isExternalHttp(href: string) {
  return /^https?:/.test(href)
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className,
    'aria-label': ariaLabel,
  } = props
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-sm border font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60',
    variants[variant],
    sizes[size],
    className
  )

  if ('href' in props && props.href) {
    const { href } = props
    const external = isExternalHttp(href)
    const label =
      ariaLabel != null
        ? external
          ? opensInNewTabLabel(ariaLabel)
          : ariaLabel
        : external && typeof children === 'string'
          ? opensInNewTabLabel(children)
          : ariaLabel

    if (isAbsoluteHref(href)) {
      return (
        <a
          href={href}
          className={classes}
          aria-label={label}
          {...(external
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          {children}
        </a>
      )
    }

    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  const { type = 'button', ...buttonProps } = props as ButtonAsButton
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
