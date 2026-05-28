import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Insights : CollectionConfig = {
  slug: 'insights',
  labels: {
    singular: 'Insight',
    plural: 'Insights',
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
        { label: 'Technology', value: 'technology' },
        { label: 'Industry', value: 'industry' },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({}),
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
      name: 'publishedDate',
      type: 'date',
      required: true,
    },
  ],
}