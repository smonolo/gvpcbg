export type NavItem = {
  href: string
  label: string
}

export const mainNav: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/chi-siamo', label: 'Chi siamo' },
  { href: '/attivita', label: 'Attività' },
  { href: '/novita', label: 'Novità' },
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
      'Interventi operativi a supporto del Comune quando sul territorio si verificano eventi critici.',
  },
  {
    slug: 'prevenzione',
    title: 'Prevenzione e pianificazione',
    summary:
      'Esercitazioni e collaborazione alla pianificazione di emergenza comunale.',
  },
  {
    slug: 'aib',
    title: 'Antincendio boschivo (AIB)',
    summary:
      'Formazione e capacità per contrastare incendi di interfaccia e boschivi, in rete con gli altri gruppi.',
  },
  {
    slug: 'logistica',
    title: 'Logistica e supporto',
    summary:
      'Mezzi, comunicazioni e assistenza alla popolazione in eventi, manifestazioni e criticità.',
  },
  {
    slug: 'formazione',
    title: 'Formazione e sensibilizzazione',
    summary:
      'Corsi ed esercitazioni per i volontari, più iniziative rivolte alla cittadinanza.',
  },
  {
    slug: 'territorio',
    title: 'Presidio del territorio',
    summary:
      'Presenza continuativa e collaborazione con amministrazioni e associazioni locali.',
  },
] as const
