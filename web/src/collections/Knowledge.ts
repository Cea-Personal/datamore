import type { CollectionConfig } from 'payload'

export const Knowledge: CollectionConfig = {
  slug: 'knowledge',

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
      name: 'documentType',
      type: 'select',
      required: true,
      options: [
        { label: 'Project', value: 'project' },
        { label: 'Case Study', value: 'case-study' },
        { label: 'Meeting Notes', value: 'meeting-notes' },
        { label: 'Proposal', value: 'proposal' },
        { label: 'Architecture', value: 'architecture' },
        { label: 'Lesson Learned', value: 'lesson-learned' },
        { label: 'FAQ', value: 'faq' },
        { label: 'Service Knowledge', value: 'service' },
      ],
    },

    {
      name: 'entryMethod',
      type: 'select',
      defaultValue: 'manual',
      options: [
        {
          label: 'Manual Entry',
          value: 'manual',
        },
        {
          label: 'Document Upload',
          value: 'document',
        },
      ],
    },

    {
      name: 'sourceDocument',
      type: 'relationship',
      relationTo: 'media',
      required: false,
    },

    {
      name: 'industry',
      type: 'text',
    },

    {
      name: 'services',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'AI Automation',
          value: 'ai-automation',
        },
        {
          label: 'LLM Engineering',
          value: 'llm-engineering',
        },
        {
          label: 'Workflow Automation',
          value: 'workflow-automation',
        },
        {
          label: 'Data Engineering',
          value: 'data-engineering',
        },
        {
          label: 'Business Intelligence',
          value: 'business-intelligence',
        },
        {
          label: 'System Integration',
          value: 'system-integration',
        },
      ],
    },

    {
      name: 'problem',
      type: 'textarea',
    },

    {
      name: 'solution',
      type: 'textarea',
    },

    {
      name: 'outcomes',
      type: 'array',
      fields: [
        {
          name: 'outcome',
          type: 'text',
        },
      ],
    },

    {
      name: 'content',
      type: 'richText',
    },

    {
      name: 'summary',
      type: 'textarea',
    },

    {
      name: 'tags',
      type: 'text',
      hasMany: true,
    },

    {
      name: 'contentGenerationValue',
      type: 'number',
      min: 1,
      max: 10,
      defaultValue: 5,
    },

    {
      name: 'approvedForContentGeneration',
      type: 'checkbox',
      defaultValue: true,
    },

    {
      name: 'processingStatus',
      type: 'select',
      defaultValue: 'pending',
      options: [
        {
          label: 'Pending',
          value: 'pending',
        },
        {
          label: 'Processed',
          value: 'processed',
        },
        {
          label: 'Failed',
          value: 'failed',
        },
      ],
    },
  ],
}