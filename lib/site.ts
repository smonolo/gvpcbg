export const site = {
  shortName: 'GVPCBG',
  name: 'SAFETY TEAM',
  legalName: 'SAFETY TEAM OdV',
  fullName: 'SAFETY TEAM OdV Gruppo Volontari Protezione Civile Busto Garolfo',
  aka: 'Gruppo Volontari Protezione Civile Busto Garolfo',
  description:
    'Dal 1993 al servizio della comunità: prevenzione del rischio, gestione delle emergenze e volontariato operativo.',

  foundedYear: 1993,
  copyrightYear: 2026,
  address: {
    street: 'Via San Domenico Savio, 37',
    city: 'Busto Garolfo',
    province: 'MI',
    postalCode: '20020',
    region: 'Lombardia',
    country: 'Italia',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Via+San+Domenico+Savio+37+Busto+Garolfo',
  },
  phone: {
    display: '0331 536636',
    href: 'tel:+390331536636',
  },
  email: {
    display: 'gvpcbg1@libero.it',
    href: 'mailto:gvpcbg1@libero.it',
  },
  social: {
    facebook: {
      label: 'Facebook',
      href: 'https://www.facebook.com/GVPCBG/',
    },
  },
  hours: [
    { day: 'Lunedì', hours: '21:00 – 23:30' },
    { day: 'Sabato', hours: '14:00 – 17:00' },
  ],
  municipality: {
    name: 'Comune di Busto Garolfo',
    href: 'https://www.comune.bustogarolfo.mi.it/',
  },
  registry: {
    region: 'Registro Generale Regionale del Volontariato – Regione Lombardia',
    section: 'Sezione D) Protezione Civile',
    details: 'foglio 570, progressivo 2275 (decreto 17/12/1997)',
  },
  credits: {
    author: {
      name: 'Stefano Monolo',
      href: 'https://smnl.dev',
    },
    repository: {
      label: 'GitHub',
      href: 'https://github.com/smonolo/gvpcbg',
    },
    license: {
      label: 'PolyForm Noncommercial 1.0.0',
      href: 'https://github.com/smonolo/gvpcbg/blob/main/LICENSE',
    },
  },
} as const

export function gitCommitSha() {
  const sha =
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA
  return sha?.trim() || null
}

export function gitCommitShort() {
  const sha = gitCommitSha()
  return sha ? sha.slice(0, 7) : null
}

export function gitCommitHref() {
  const sha = gitCommitSha()
  if (!sha) return site.credits.repository.href
  return `${site.credits.repository.href}/commit/${sha}`
}

export function siteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '')
  if (configured) return configured

  const vercel =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL
  if (vercel) {
    return `https://${vercel.replace(/^https?:\/\//, '')}`
  }

  return 'http://localhost:3000'
}

export function formatCityLine(
  address: typeof site.address = site.address
): string {
  return `${address.postalCode} ${address.city} (${address.province})`
}

export function formatStreetCity(
  address: typeof site.address = site.address
): string {
  return `${address.street}, ${formatCityLine(address)}`
}
