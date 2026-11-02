export const externalLinkProps = {
  target: '_blank' as const,
  rel: 'noopener noreferrer',
}

export function opensInNewTabLabel(label: string) {
  return `${label} (si apre in una nuova scheda)`
}
