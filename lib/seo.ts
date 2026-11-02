import type { Metadata } from 'next'
import { site } from '@/lib/site'

export const seo = {
  titleDefault: `${site.shortName} · ${site.name}`,
  titleTemplate: `%s · ${site.shortName}`,
  description: site.description,
  locale: 'it_IT',
  language: 'it',
  keywords: [
    'GVPCBG',
    'SAFETY TEAM OdV',
    'Protezione Civile Busto Garolfo',
    'Gruppo Volontari Protezione Civile Busto Garolfo',
    'Protezione Civile',
    'volontariato',
    'Busto Garolfo',
    'Milano',
    'Lombardia',
    'emergenze',
    'prevenzione rischio',
    'antincendio boschivo',
    'AIB',
    'OdV',
    'organizzazione di volontariato',
  ],
  ogImage: {
    path: '/opengraph-image',
    width: 1200,
    height: 630,
    alt: `${site.shortName} — ${site.aka}`,
  },
  geo: {
    region: 'IT-MI',
    placename: 'Busto Garolfo',
    latitude: 45.553896,
    longitude: 8.880759,
  },
} as const

export const pages = {
  home: {
    path: '/',
    title: seo.titleDefault,
    absoluteTitle: true,
    description: site.description,
    keywords: [
      'sito ufficiale',
      'associazione protezione civile',
      'volontari Busto Garolfo',
    ],
  },
  chiSiamo: {
    path: '/chi-siamo',
    title: 'Chi siamo',
    description:
      'Storia, missione e organizzazione di SAFETY TEAM OdV GVPCBG: volontariato di Protezione Civile a Busto Garolfo dal 1993.',
    keywords: [
      'chi siamo',
      'storia GVPCBG',
      'missione',
      'Safety Team OdV',
      'registro volontariato Lombardia',
    ],
  },
  attivita: {
    path: '/attivita',
    title: 'Attività',
    description:
      'Attività di Protezione Civile a Busto Garolfo: emergenze, prevenzione, antincendio boschivo AIB, logistica e formazione.',
    keywords: [
      'attività protezione civile',
      'gestione emergenze',
      'prevenzione',
      'AIB',
      'logistica',
      'formazione volontari',
    ],
  },
  foto: {
    path: '/foto',
    title: 'Foto',
    description:
      'Galleria fotografica GVPCBG: esercitazioni, antincendio boschivo, mezzi e momenti di vita del gruppo a Busto Garolfo.',
    keywords: [
      'foto',
      'galleria',
      'esercitazioni',
      'antincendio boschivo',
      'volontari protezione civile',
    ],
  },
  diventaVolontario: {
    path: '/diventa-volontario',
    title: 'Diventa volontario',
    description:
      'Unisciti a GVPCBG: come diventare volontario di Protezione Civile a Busto Garolfo, requisiti e contatti per candidarti.',
    keywords: [
      'diventa volontario',
      'iscrizione volontariato',
      'candidatura',
      'protezione civile volontari',
    ],
  },
  contatti: {
    path: '/contatti',
    title: 'Contatti',
    description:
      'Contatti GVPCBG: Via San Domenico Savio 37, Busto Garolfo. Telefono 0331 536636, email e orari di apertura della sede.',
    keywords: [
      'contatti',
      'indirizzo',
      'telefono',
      'email',
      'orari',
      'sede protezione civile',
    ],
  },
  privacy: {
    path: '/privacy',
    title: 'Privacy',
    description:
      'Informativa privacy del sito GVPCBG: trattamento dei dati personali, cookie tecnici e diritti degli interessati.',
    keywords: ['privacy', 'GDPR', 'cookie', 'protezione dati'],
  },
  accessibilita: {
    path: '/accessibilita',
    title: 'Accessibilità',
    description:
      'Dichiarazione di accessibilità del sito GVPCBG, in coerenza con le linee guida AGID e i criteri WCAG.',
    keywords: ['accessibilità', 'AGID', 'WCAG', 'usabilità'],
  },
} as const

type PageSeo = {
  path: string
  title: string
  description: string
  keywords?: readonly string[]
  absoluteTitle?: boolean
}

export function buildMetadata(page: PageSeo): Metadata {
  const url = page.path === '/' ? site.url : `${site.url}${page.path}`
  const title = page.absoluteTitle ? { absolute: page.title } : page.title
  const keywords = [...seo.keywords, ...(page.keywords ?? [])]
  const image = {
    url: seo.ogImage.path,
    width: seo.ogImage.width,
    height: seo.ogImage.height,
    alt: seo.ogImage.alt,
  }

  return {
    title,
    description: page.description,
    keywords,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      type: 'website',
      locale: seo.locale,
      siteName: site.fullName,
      title: page.absoluteTitle
        ? page.title
        : `${page.title} · ${site.shortName}`,
      description: page.description,
      url,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.absoluteTitle
        ? page.title
        : `${page.title} · ${site.shortName}`,
      description: page.description,
      images: [seo.ogImage.path],
    },
  }
}

export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(site.url),
    title: {
      default: seo.titleDefault,
      template: seo.titleTemplate,
    },
    description: seo.description,
    applicationName: site.shortName,
    authors: [{ name: site.fullName, url: site.url }],
    creator: site.fullName,
    publisher: site.fullName,
    category: 'Protezione Civile',
    keywords: [...seo.keywords],
    referrer: 'origin-when-cross-origin',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
        { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    },
    openGraph: {
      type: 'website',
      locale: seo.locale,
      siteName: site.fullName,
      title: seo.titleDefault,
      description: seo.description,
      url: site.url,
      images: [
        {
          url: seo.ogImage.path,
          width: seo.ogImage.width,
          height: seo.ogImage.height,
          alt: seo.ogImage.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.titleDefault,
      description: seo.description,
      images: [seo.ogImage.path],
    },
    other: {
      'geo.region': seo.geo.region,
      'geo.placename': seo.geo.placename,
      'geo.position': `${seo.geo.latitude};${seo.geo.longitude}`,
      ICBM: `${seo.geo.latitude}, ${seo.geo.longitude}`,
    },
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['NGO', 'CivicStructure'],
    '@id': `${site.url}/#organization`,
    name: site.fullName,
    legalName: site.fullName,
    alternateName: [site.shortName, site.aka, site.name],
    description: site.description,
    url: site.url,
    logo: `${site.url}/images/logo.png`,
    image: `${site.url}/images/logo.png`,
    email: site.email.display,
    telephone: '+390331536636',
    foundingDate: String(site.foundedYear),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.province,
      postalCode: site.address.postalCode,
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: seo.geo.latitude,
      longitude: seo.geo.longitude,
    },
    sameAs: [site.social.facebook.href],
    affiliation: {
      '@type': 'GovernmentOrganization',
      name: site.municipality.name,
      url: site.municipality.href,
    },
    areaServed: {
      '@type': 'City',
      name: site.address.city,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Lombardia',
      },
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: '+390331536636',
        email: site.email.display,
        availableLanguage: ['Italian'],
        areaServed: 'IT',
      },
    ],
    openingHoursSpecification: site.hours.map(slot => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: slot.day === 'Lunedì' ? 'Monday' : 'Saturday',
      opens: slot.hours.split(' – ')[0],
      closes: slot.hours.split(' – ')[1],
    })),
    knowsAbout: [
      'Protezione Civile',
      'Gestione delle emergenze',
      'Prevenzione del rischio',
      'Antincendio boschivo',
      'Volontariato',
    ],
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: seo.titleDefault,
    description: seo.description,
    inLanguage: seo.language,
    publisher: {
      '@id': `${site.url}/#organization`,
    },
  }
}

export function webPageJsonLd(
  page: PageSeo,
  options?: { type?: 'WebPage' | 'ContactPage' | 'AboutPage' }
) {
  const url = page.path === '/' ? site.url : `${site.url}${page.path}`
  const name = page.absoluteTitle
    ? page.title
    : `${page.title} · ${site.shortName}`

  return {
    '@context': 'https://schema.org',
    '@type': options?.type ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description: page.description,
    inLanguage: seo.language,
    isPartOf: {
      '@id': `${site.url}/#website`,
    },
    about: {
      '@id': `${site.url}/#organization`,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${site.url}${seo.ogImage.path}`,
    },
  }
}

export function breadcrumbJsonLd(
  items: ReadonlyArray<{ name: string; path: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path === '/' ? site.url : `${site.url}${item.path}`,
    })),
  }
}
