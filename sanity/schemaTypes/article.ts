import { defineArrayMember, defineField, defineType } from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Articolo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Sommario',
      type: 'text',
      rows: 3,
      validation: rule => rule.required().max(280),
    }),
    defineField({
      name: 'coverImage',
      title: 'Immagine di copertina',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Testo alternativo',
          type: 'string',
          validation: rule => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data di pubblicazione',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Contenuto',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normale', value: 'normal' },
            { title: 'Titolo 2', value: 'h2' },
            { title: 'Titolo 3', value: 'h3' },
            { title: 'Citazione', value: 'blockquote' },
          ],
          lists: [
            { title: 'Elenco', value: 'bullet' },
            { title: 'Numerato', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Grassetto', value: 'strong' },
              { title: 'Corsivo', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: rule =>
                      rule.uri({
                        allowRelative: true,
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  }),
                  defineField({
                    name: 'blank',
                    title: 'Apri in nuova scheda',
                    type: 'boolean',
                    initialValue: false,
                  }),
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Testo alternativo',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'caption',
              title: 'Didascalia',
              type: 'string',
            }),
          ],
        }),
      ],
      validation: rule => rule.required().min(1),
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
      media: 'coverImage',
      publishedAt: 'publishedAt',
    },
    prepare({ title, media, publishedAt }) {
      const date = publishedAt
        ? new Date(publishedAt).toLocaleDateString('it-IT')
        : ''
      return {
        title,
        subtitle: date,
        media,
      }
    },
  },
})
