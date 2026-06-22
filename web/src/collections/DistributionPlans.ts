import type { CollectionConfig } from 'payload'
import { handleAfterReadHook, handleStatusWebhook } from './hooks'

export const DistributionPlans: CollectionConfig = {
  slug: 'distribution-plans',

  labels: {
    singular: 'Distribution Plan',
    plural: 'Distribution Plans',
  },

  admin: {
    useAsTitle: 'title',
  },

  access: {
    read: () => true,
  },
   hooks: {
      afterChange: [
        handleStatusWebhook({
          webhookurl: process.env.DISTRIBUTION_WEBHOOK_URL || "",
          event: "distribution-approved",
          collection: "distribution-plans",
          approvalStatus: "distribution-approved"
        })
      ]
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
      name: 'content',
      type: 'relationship',
      relationTo: 'content-pipeline',
      required: true,
    },

    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending-approval',
      options: [
        {
          label: 'Pending Approval',
          value: 'pending-approval',
        },
        {
          label: 'Distribution Approved',
          value: 'distribution-approved',
        },
        {
          label: 'Rejected',
          value: 'rejected',
        }
      ],
    },

    {
      name: 'primaryAsset',
      type: 'select',
      options: [
        {
          label: 'Insights Article',
          value: 'insights',
        },
        {
          label: 'YouTube Video',
          value: 'youtube',
        },
        {
          label: 'LinkedIn Post',
          value: 'linkedin',
        },
        {
          label: 'Facebook Post',
          value: 'facebook',
        },
      ],
    },

    {
      name: 'recommendedPlatforms',
      type: 'select',
      hasMany: true,
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
        {
          label: 'YouTube Shorts',
          value: 'youtube-shorts',
        },
        {
          label: 'Instagram Reels',
          value: 'instagram-reels',
        },
      ],
    },

    {
      name: 'publishingOrder',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: [
            {
              label: 'Insights',
              value: 'insights',
            },
            {
              label: 'YouTube',
              value: 'youtube',
            },
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
                label: 'YouTube Shorts',
                value: 'youtube-shorts',
              },
              {
                label: 'Instagram Reels',
                value: 'instagram-reels',
              },
          ],
        },

        {
          name: 'priority',
          type: 'number',
        },

        {
          name: 'recommendedDelayHours',
          type: 'number',
        },
      ],
    },

    {
      name: 'crossPromotionPlan',
      type: 'array',
      fields: [
        {
          name: 'sourcePlatform',
          type: 'text',
        },

        {
          name: 'targetPlatform',
          type: 'text',
        },

        {
          name: 'objective',
          type: 'textarea',
        },
      ],
    },

    {
      name: 'ctaStrategy',
      type: 'group',
      fields: [
        {
          name: 'linkedin',
          type: 'text',
        },

        {
          name: 'facebook',
          type: 'text',
        },

        {
          name: 'insights',
          type: 'text',
        },

        {
          name: 'youtube',
          type: 'text',
        },

        {
          name: 'instagram',
          type: 'text',
        },

        {
          name: 'tiktok',
          type: 'text',
        },
      ],
    },

    {
      name: 'scores',
      type: 'group',
      fields: [
        {
          name: 'authority',
          type: 'number',
        },

        {
          name: 'leadGeneration',
          type: 'number',
        },

        {
          name: 'engagement',
          type: 'number',
        },

        {
          name: 'repurposing',
          type: 'number',
        },
      ],
    },

    {
      name: 'reasoning',
      type: 'textarea',
    },

    {
      name: 'distributionNotes',
      type: 'textarea',
    },
  ],

  timestamps: true,
}