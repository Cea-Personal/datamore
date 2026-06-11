import type { CollectionConfig } from 'payload'

export const ContentPipeline: CollectionConfig = {
  slug: 'content-pipeline',

  labels: {
    singular: 'Content',
    plural: 'Content',
  },

  admin: {
    useAsTitle: 'title',
  },

  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'topic',
      type: 'relationship',
      relationTo: 'topics',
      required: true,
    },

    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Awaiting Content Approval',
          value: 'awaiting-content-approval',
        },
        {
          label: 'Content Approved',
          value: 'content-approved',
        },
        {
          label: 'Awaiting Distribution Approval',
          value: 'awaiting-distribution-approval',
        },
        {
          label: 'Distribution Approved',
          value: 'distribution-approved',
        },
        {
          label: 'Published',
          value: 'published',
        },
        {
          label: 'Rejected',
          value: 'rejected',
        },
      ],
    },

    {
      name: 'coreMessage',
      type: 'textarea',
    },

    {
      name: 'insightsArticle',
      type: 'richText',
    },

    {
      name: 'youtubeScript',
      type: 'textarea',
    },

    {
      name: 'youtubeTitle',
      type: 'text',
    },

    {
      name: 'youtubeDescription',
      type: 'textarea',
    },

    {
      name: 'thumbnailIdeas',
      type: 'array',
      fields: [
        {
          name: 'idea',
          type: 'text',
        },
      ],
    },

    {
      name: 'approvalNotes',
      type: 'textarea',
    },
  ],

  timestamps: true,
}