export type PhotoCategory = 'esercitazioni' | 'aib' | 'territorio' | 'gruppo'

export type Photo = {
  id: string
  src: string
  alt: string
  title: string
  caption: string
  category: PhotoCategory
  featured?: boolean
  width: number
  height: number
}

export const photoCategories: Record<
  PhotoCategory,
  { label: string; description: string }
> = {
  esercitazioni: {
    label: 'Esercitazioni',
    description: 'Prove operative e scenari di emergenza sul territorio.',
  },
  aib: {
    label: 'Antincendio boschivo',
    description: 'Attività e formazione AIB.',
  },
  territorio: {
    label: 'Territorio',
    description: 'Presidio e interventi a Busto Garolfo e dintorni.',
  },
  gruppo: {
    label: 'Il gruppo',
    description: 'Volontari, mezzi e vita associativa.',
  },
}

export const photos: Photo[] = [
  {
    id: 'mast-2025',
    src: '/photos/esercitazione-mast.svg',
    alt: 'Volontari di Protezione Civile durante un’esercitazione operativa',
    title: 'Esercitazione MAST',
    caption:
      'Scenario operativo nell’ambito delle esercitazioni metropolitane di Protezione Civile.',
    category: 'esercitazioni',
    featured: true,
    width: 1200,
    height: 800,
  },
  {
    id: 'aib-campo',
    src: '/photos/aib-campo.svg',
    alt: 'Attività di antincendio boschivo con modulo e squadra operativa',
    title: 'Antincendio boschivo',
    caption:
      'Formazione e capacità AIB per il contrasto agli incendi di interfaccia e boschivi.',
    category: 'aib',
    featured: true,
    width: 1200,
    height: 800,
  },
  {
    id: 'mezzi',
    src: '/photos/mezzi-operativi.svg',
    alt: 'Mezzi operativi del gruppo di Protezione Civile',
    title: 'Mezzi operativi',
    caption:
      'Dotazioni e mezzi a supporto degli interventi e della logistica di emergenza.',
    category: 'gruppo',
    featured: true,
    width: 1200,
    height: 800,
  },
  {
    id: 'territorio-bg',
    src: '/photos/territorio-busto-garolfo.svg',
    alt: 'Presidio del territorio a Busto Garolfo',
    title: 'Presidio del territorio',
    caption:
      'Presenza continuativa a Busto Garolfo a supporto della comunità locale.',
    category: 'territorio',
    featured: true,
    width: 1200,
    height: 800,
  },
  {
    id: 'formazione',
    src: '/photos/formazione.svg',
    alt: 'Momento formativo tra volontari di Protezione Civile',
    title: 'Formazione',
    caption:
      'Corsi, aggiornamenti ed esercitazioni per mantenere competenze operative.',
    category: 'esercitazioni',
    width: 1200,
    height: 800,
  },
  {
    id: 'volontari',
    src: '/photos/volontari.svg',
    alt: 'Gruppo di volontari SAFETY TEAM OdV GVPCBG',
    title: 'I volontari',
    caption:
      'Il volto del gruppo: persone impegnate nel servizio alla comunità.',
    category: 'gruppo',
    width: 1200,
    height: 800,
  },
]

export const featuredPhotos = photos.filter(photo => photo.featured)
