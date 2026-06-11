import type { CollectionConfig } from 'payload'

export const Publications: CollectionConfig = {
  slug: 'publications',

  labels: {
    singular: 'Publication',
    plural: 'Publications',
  },
 
 admin: {
    useAsTitle: 'title',
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
          label: 'Insights',
          value: 'insights',
        },
        {
          label: 'YouTube',
          value: 'youtube',
        },
        {
          label: 'Instagram',
          value: 'instagram',
        },
        {
          label: 'TikTok',
          value: 'tiktok',
        },
      ],
    },

    {
      name: 'externalId',
      type: 'text',
    },

    {
      name: 'publishedUrl',
      type: 'text',
    },

    {
      name: 'publishedAt',
      type: 'date',
    },

    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Scheduled',
          value: 'scheduled',
        },
        {
          label: 'Published',
          value: 'published',
        },
        {
          label: 'Failed',
          value: 'failed',
        },
      ],
    },
  ],

  timestamps: true,
}