import { defineField, defineType } from 'sanity'

export const announcement = defineType({
  name: 'announcement',
  title: 'Avviso',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: rule => rule.required().max(120),
    }),
    defineField({
      name: 'body',
      title: 'Testo',
      type: 'text',
      rows: 4,
      validation: rule => rule.required().max(500),
    }),
    defineField({
      name: 'href',
      title: 'Link (opzionale)',
      type: 'string',
      description: 'Percorso interno (es. /novita/…) o URL completo.',
    }),
    defineField({
      name: 'linkLabel',
      title: 'Etichetta del link',
      type: 'string',
      hidden: ({ parent }) => !parent?.href,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data di pubblicazione',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'expiresAt',
      title: 'Scadenza (opzionale)',
      type: 'datetime',
      description: 'Dopo questa data l’avviso non viene più mostrato.',
    }),
    defineField({
      name: 'pinned',
      title: 'Fissa in cima',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: 'Più recenti',
      name: 'publishedDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      pinned: 'pinned',
      publishedAt: 'publishedAt',
    },
    prepare({ title, pinned, publishedAt }) {
      const date = publishedAt
        ? new Date(publishedAt).toLocaleDateString('it-IT')
        : ''
      return {
        title,
        subtitle: [pinned ? 'Fissato' : null, date].filter(Boolean).join(' · '),
      }
    },
  },
})
