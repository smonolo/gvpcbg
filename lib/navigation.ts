export type NavItem = {
  href: string
  label: string
}

export const mainNav: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/chi-siamo', label: 'Chi siamo' },
  { href: '/attivita', label: 'Attività' },
  { href: '/foto', label: 'Foto' },
  { href: '/diventa-volontario', label: 'Diventa volontario' },
  { href: '/contatti', label: 'Contatti' },
]

export const utilityNav: NavItem[] = [
  { href: '/accessibilita', label: 'Accessibilità' },
  { href: '/privacy', label: 'Privacy' },
]

export const siteRoutes = [
  ...mainNav.map(item => item.href),
  ...utilityNav.map(item => item.href),
] as const

export function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function breadcrumbs(
  label: string
): Array<{ label: string; href?: string }> {
  return [{ label: 'Home', href: '/' }, { label }]
}

export const activities = [
  {
    slug: 'emergenza',
    title: 'Gestione delle emergenze',
    summary:
      'Interventi operativi a supporto del Comune e del sistema di Protezione Civile in caso di eventi emergenziali sul territorio.',
  },
  {
    slug: 'prevenzione',
    title: 'Prevenzione e pianificazione',
    summary:
      'Attività di prevenzione del rischio, esercitazioni e collaborazione alla pianificazione di emergenza comunale.',
  },
  {
    slug: 'aib',
    title: 'Antincendio boschivo (AIB)',
    summary:
      'Formazione e capacità operative per il contrasto agli incendi di interfaccia e boschivi, in rete con i gruppi del territorio.',
  },
  {
    slug: 'logistica',
    title: 'Logistica e supporto',
    summary:
      'Supporto logistico, comunicazioni e assistenza alla popolazione durante eventi, manifestazioni e situazioni di criticità.',
  },
  {
    slug: 'formazione',
    title: 'Formazione e sensibilizzazione',
    summary:
      'Corsi, esercitazioni e iniziative di sensibilizzazione per volontari e cittadinanza sulla cultura di Protezione Civile.',
  },
  {
    slug: 'territorio',
    title: 'Presidio del territorio',
    summary:
      'Presenza continuativa a Busto Garolfo e collaborazione con le amministrazioni e le associazioni del territorio.',
  },
] as const
