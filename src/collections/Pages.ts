import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'Pages',
  admin: {
    useAsTitle: 'page',
  },
  versions: {
    drafts: {
      validate: true,
    },
    maxPerDoc: 1,
  },
  labels: {
    singular: {
      de: 'Seite',
      en: 'Page',
    },
    plural: {
      de: 'Seiten',
      en: 'Pages',
    },
  },
  access: {
    read: ({ req }) => (req.user ? true : false),
  },
  fields: [
    {
      name: 'page',
      type: 'text',
      required: true,
      unique: true,
      minLength: 1,
    },
  ],
}
