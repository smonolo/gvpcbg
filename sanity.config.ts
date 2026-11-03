'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { dataset, projectId } from '@/sanity/env'
import { schemaTypes } from '@/sanity/schemaTypes'

const configuredProjectId = projectId || 'placeholder'

export default defineConfig({
  name: 'gvpcbg',
  title: 'GVPCBG',
  basePath: '/studio',
  projectId: configuredProjectId,
  dataset,
  plugins: [
    structureTool({
      structure: S =>
        S.list()
          .title('Contenuti')
          .items([
            S.documentTypeListItem('photo').title('Foto'),
            S.documentTypeListItem('announcement').title('Avvisi'),
            S.documentTypeListItem('article').title('Articoli'),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
