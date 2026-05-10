import type { CollectionConfig } from 'payload';

const Insights: CollectionConfig = {
  slug: 'insights',
  labels: {
    singular: 'Insight',
    plural: 'Insights',
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
      index: true,
    },
    {
      name: 'excerpt',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'AI/ML', value: 'ai-ml' },
        { label: 'Data Engineering', value: 'data-engineering' },
        { label: 'Analytics', value: 'analytics' },
        { label: 'Cloud Architecture', value: 'cloud-architecture' },
      ],
    },
    {
      name: 'image',
      type: 'text',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
    {
      name: 'readTime',
      type: 'text',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'horizontal',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
};

export default Insights;
