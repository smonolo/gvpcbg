import type { Metadata } from 'next'
import { site, siteUrl } from '@/lib/site'

export const seo = {
  titleDefault: `${site.name} · Busto Garolfo`,
  titleTemplate: `%s · ${site.name}`,
  description: site.description,
  locale: 'it_IT',
  language: 'it',
  keywords: [
    'GVPCBG',
    'SAFETY TEAM',
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
    'organizzazione di volontariato',
  ],
  ogImage: {
    path: '/opengraph-image',
    width: 1200,
    height: 630,
    alt: `${site.name} — ${site.aka}`,
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
      'Storia, missione e organizzazione: volontariato operativo dal 1993 al servizio della comunità.',
    keywords: [
      'chi siamo',
      'storia GVPCBG',
      'missione',
      'SAFETY TEAM',

      'registro volontariato Lombardia',
    ],
  },
  attivita: {
    path: '/attivita',
    title: 'Attività',
    description:
      'Emergenze, prevenzione, antincendio boschivo AIB, logistica e formazione sul territorio.',
    keywords: [
      'attività protezione civile',
      'gestione emergenze',
      'prevenzione',
      'AIB',
      'logistica',
      'formazione volontari',
    ],
  },
  novita: {
    path: '/novita',
    title: 'Novità',
    description:
      'Comunicati, resoconti delle attività e aggiornamenti dal gruppo.',
    keywords: [
      'novità',
      'notizie',
      'comunicazioni',
      'avvisi',
      'articoli protezione civile',
    ],
  },
  foto: {
    path: '/foto',
    title: 'Foto',
    description:
      'Esercitazioni, antincendio boschivo, mezzi e momenti di vita associativa.',
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
      'Cosa comporta entrare nel gruppo, requisiti e come candidarti.',
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
      'Sede, orari, recapiti del gruppo e numeri di emergenza italiani (112, 113, 115, 118, 1515).',
    keywords: [
      'contatti',
      'indirizzo',
      'telefono',
      'email',
      'orari',
      'sede protezione civile',
      'numeri emergenza',
      '112',
      '118',
    ],
  },

  privacy: {
    path: '/privacy',
    title: 'Privacy',
    description:
      'Come trattiamo i dati di chi naviga il sito, cookie tecnici e diritti degli interessati.',
    keywords: ['privacy', 'GDPR', 'cookie', 'protezione dati'],
  },
  accessibilita: {
    path: '/accessibilita',
    title: 'Accessibilità',
    description:
      'Impegno AGID e WCAG: rendere i contenuti fruibili da tutte le persone.',
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
  const url = page.path === '/' ? siteUrl() : `${siteUrl()}${page.path}`
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
      title: page.absoluteTitle ? page.title : `${page.title} · ${site.name}`,
      description: page.description,
      url,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.absoluteTitle ? page.title : `${page.title} · ${site.name}`,

      description: page.description,
      images: [seo.ogImage.path],
    },
  }
}

export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl()),
    title: {
      default: seo.titleDefault,
      template: seo.titleTemplate,
    },
    description: seo.description,
    applicationName: site.name,
    authors: [{ name: site.fullName, url: siteUrl() }],
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
      url: siteUrl(),
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
    '@id': `${siteUrl()}/#organization`,
    name: site.fullName,
    legalName: site.fullName,
    alternateName: [site.shortName, site.legalName, site.aka, site.name],

    description: site.description,
    url: siteUrl(),
    logo: `${siteUrl()}/images/logo.png`,
    image: `${siteUrl()}/images/logo.png`,
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
    '@id': `${siteUrl()}/#website`,
    url: siteUrl(),
    name: seo.titleDefault,
    description: seo.description,
    inLanguage: seo.language,
    publisher: {
      '@id': `${siteUrl()}/#organization`,
    },
  }
}

export function webPageJsonLd(
  page: PageSeo,
  options?: { type?: 'WebPage' | 'ContactPage' | 'AboutPage' }
) {
  const url = page.path === '/' ? siteUrl() : `${siteUrl()}${page.path}`
  const name = page.absoluteTitle ? page.title : `${page.title} · ${site.name}`

  return {
    '@context': 'https://schema.org',
    '@type': options?.type ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description: page.description,
    inLanguage: seo.language,
    isPartOf: {
      '@id': `${siteUrl()}/#website`,
    },
    about: {
      '@id': `${siteUrl()}/#organization`,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${siteUrl()}${seo.ogImage.path}`,
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
      item: item.path === '/' ? siteUrl() : `${siteUrl()}${item.path}`,
    })),
  }
}
