export const site = {
  shortName: 'GVPCBG',
  name: 'SAFETY TEAM OdV',
  fullName: 'SAFETY TEAM OdV Gruppo Volontari Protezione Civile Busto Garolfo',
  aka: 'Gruppo Volontari Protezione Civile Busto Garolfo',
  description:
    'Associazione di volontariato di Protezione Civile attiva a Busto Garolfo dal 1993: prevenzione del rischio, gestione delle emergenze e servizio alla comunità.',
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
  url: 'https://gvpcbg.it',
} as const

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
