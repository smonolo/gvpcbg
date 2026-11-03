import { defineField, defineType } from 'sanity'

export const photo = defineType({
  name: 'photo',
  title: 'Foto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Didascalia',
      type: 'text',
      rows: 3,
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Testo alternativo',
      type: 'string',
      description:
        'Descrizione breve per accessibilità e SEO. Non ripetere il titolo se è già descrittivo.',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Esercitazioni', value: 'esercitazioni' },
          { title: 'Antincendio boschivo', value: 'aib' },
          { title: 'Territorio', value: 'territorio' },
          { title: 'Il gruppo', value: 'gruppo' },
        ],
        layout: 'radio',
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Immagine',
      type: 'image',
      options: { hotspot: true },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'In evidenza in home',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Ordine',
      type: 'number',
      description: 'Valori più bassi compaiono prima. Opzionale.',
    }),
  ],
  orderings: [
    {
      title: 'Ordine',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' },
        { field: 'title', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'image',
      featured: 'featured',
    },
    prepare({ title, category, media, featured }) {
      return {
        title,
        subtitle: [category, featured ? 'In evidenza' : null]
          .filter(Boolean)
          .join(' · '),
        media,
      }
    },
  },
})
