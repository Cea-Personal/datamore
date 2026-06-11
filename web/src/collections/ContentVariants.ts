import type { CollectionConfig } from 'payload'

export const ContentVariants: CollectionConfig = {
  slug: 'content-variants',

  labels: {
    singular: 'Content Variant',
    plural: 'Content Variants',
  },

  admin: {
    useAsTitle: 'title',
  },

  access: {
    read: () => true,
  },

  fields: [
    { name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'relationship',
      relationTo: 'content-pipeline',
      required: true,
    },

    {
      name: 'platform',
      type: 'select',
      required: true,
      options: [
        {
          label: 'LinkedIn',
          value: 'linkedin',
        },
        {
          label: 'Facebook',
          value: 'facebook',
        },
        {
          label: 'Instagram',
          value: 'instagram',
        },
        {
          label: 'TikTok',
          value: 'tiktok',
        },
        {
          label: 'YouTube Short',
          value: 'youtube-short',
        },
      ],
    },

    {
      name: 'contentBody',
      type: 'textarea',
    },

    {
      name: 'version',
      type: 'number',
      defaultValue: 1,
    },
  ],

  timestamps: true,
}