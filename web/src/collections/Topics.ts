import type { CollectionConfig} from 'payload'
import { handleStatusWebhook } from './hooks'
export const Topics: CollectionConfig = {
  slug: 'topics',

  labels: {
    singular: 'Topic',
    plural: 'Topics',
  },

  admin: {
    useAsTitle: 'title',
    defaultColumns: [
      'title',
      'status',
      'contentPriority',
      'distributionTier',
      'createdAt',
    ],
  },

  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
hooks: {
        afterChange: [handleStatusWebhook],
    },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'problem',
      type: 'textarea',
      required: true,
    },

    {
      name: 'angle',
      type: 'textarea',
      required: true,
    },

    {   name: 'audience',
        type: 'json',
        
    },

    {
      name: 'contentType',
      type: 'json',


    },

    {
      name: 'cta',
      type: 'text',
    },

    {
      name: 'scores',
      type: 'group',
      fields: [
        {
          name: 'authority',
          type: 'number',
          min: 1,
          max: 10,
        },
        {
          name: 'leadGeneration',
          type: 'number',
          min: 1,
          max: 10,
        },
        {
          name: 'evergreen',
          type: 'number',
          min: 1,
          max: 10,
        },
        {
          name: 'youtubePotential',
          type: 'number',
          min: 1,
          max: 10,
        },
        {
          name: 'overallScore',
          type: 'number',
          min: 1,
          max: 50,
        },
      ],
    },

    {
      name: 'distributionTier',
      type: 'text',
    },

    {
      name: 'recommendedPlatforms',
      type: 'json',
     
    },

    {
      name: 'contentPriority',
      type: 'text'
    },

    {
      name: 'aiRecommendations',
      type: 'group',
      fields: [
        {
          name: 'reasoning',
          type: 'textarea',
        },
        {
          name: 'youtubeMode',
          type: 'text'
        },
        {
          name: 'estimatedLeadPotential',
          type: 'number',
          min: 1,
          max: 10,
        },
      ],
    },

    {
      name: 'status',
      type: 'select',
      defaultValue: 'generated',
      required: true,
  
      options: [
        {
          label: 'Generated',
          value: 'generated',
        },
        {
          label: 'Approved',
          value: 'approved',
        },
        {
          label: 'Rejected',
          value: 'rejected',
        },
        {
          label: 'Content Created',
          value: 'content-created',
        },
      ],
    },

    {
      name: 'topicHash',
      type: 'text',
      unique: true,
      admin: {
        readOnly: true,
      },
    },

    {
      name: 'generatedBy',
      type: 'select',
      defaultValue: 'ai',
      options: [
        {
          label: 'AI',
          value: 'ai',
        },
        {
          label: 'Human',
          value: 'human',
        },
      ],
    },
    {
        name: 'rawAIOutput',
        type: 'json',
        admin: {
            hidden: true
        }
    }
  ],

  timestamps: true,
}