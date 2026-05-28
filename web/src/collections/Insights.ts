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
      unique: true,
      required: true,
      virtual: true,
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data?.title && !data?.slug) {
              return data.slug || data.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')
            }
            return data?.slug
          },
        ],
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'AI & ML', value: 'ai-ml' },
        { label: 'Business Intelligence', value: 'bi' },
        { label: 'Data Engineering', value: 'data-engineering' },
        { label: 'Data Strategy', value: 'data-strategy' },
        { label: 'Managed Data Services', value: 'managed-data' },
        { label: 'Software Development', value: 'software-development' },
        { label: 'Technology', value: 'technology' },
        { label: 'Case Study', value: 'case-study' },
        { label: 'Industry', value: 'industry' },
      ],
    },
    {
      name: 'summary',
      type: 'textarea',
      required: false,
    },
    {
      name: 'readTime',
      type: 'text',
      required: false,
    },
    {
      name: 'author',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: false,
        },
        {
          name: 'title',
          type: 'text',
          required: false,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
    {
      name: 'heroImage',
      type: 'group',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
    {
      name: 'sections',
      type: 'array',
      required: false,
      fields: [
        {
          name: 'type',
          type: 'select',
          required: true,
          options: [
            { label: 'Text', value: 'text' },
            { label: 'Heading', value: 'heading' },
            { label: 'Chart', value: 'Chart' },
            { label: 'Image', value: 'image' },
          ],
        },
        {
          name: 'content',
          type: 'textarea',
          required: false,
        },
        {
          name: 'title',
          type: 'text',
          required: false,
        },
        {
          name: 'variant',
          type: 'text',
          required: false,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
        {
          name: 'data',
          type: 'array',
          label: 'ROI Data',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: false,
            },
            {
              name: 'value',
              type: 'text',
              required: false,
            },
            {
              name: 'color',
              type: 'text',
              required: false,
            },
          ],
        },
      ],
    },
    {
      name: 'socialShare',
      type: 'checkbox',
      defaultValue: false,
      required: false,
    },
    {
      name: 'relatedArticles',
      type: 'array',
      label: 'Related Articles',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: false,
        },
        {
          name: 'readTime',
          type: 'text',
          required: false,
        },
        {
          name: 'imageUrl',
          type: 'text',
          required: false,
        },
      ],
    },
    {
      name: 'cta',
      type: 'group',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
    },
    {
      name: 'likes',
      type: 'number',
      defaultValue: 0,
      required: false,
      admin: {
        description: 'Total number of likes for this insight',
      },
    },
  ],
}