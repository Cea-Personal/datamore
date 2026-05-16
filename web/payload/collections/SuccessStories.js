// web/payload/collections/SuccessStories.js
import { CollectionConfig } from 'payload'

export const SuccessStories: CollectionConfig = {
  slug: 'success-stories',
  labels: {
    singular: 'Success Story',
    plural: 'Success Stories',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Business Intelligence', value: 'bi' },
        { label: 'AI & LLM Automation', value: 'ai' },
        { label: 'Data Engineering', value: 'data-engineering' },
        { label: 'Data Strategy', value: 'data-strategy' },
        { label: 'Managed Data Services', value: 'managed-data' },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: false,
    },
    {
      name: 'metrics',
      type: 'array',
      label: 'Metrics',
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'client',
      type: 'text',
      required: false,
    },
    {
      name: 'challenge',
      type: 'richText',
      required: false,
    },
    {
      name: 'solution',
      type: 'richText',
      required: false,
    },
    {
      name: 'result',
      type: 'richText',
      required: false,
    },
  ],
}