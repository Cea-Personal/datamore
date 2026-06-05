import type { CollectionConfig } from 'payload'

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

    {
      name: 'audience',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'SME Founder',
          value: 'sme-founder',
        },
        {
          label: 'Startup Founder',
          value: 'startup-founder',
        },
        {
          label: 'Operations Manager',
          value: 'operations-manager',
        },
        {
          label: 'Business Analyst',
          value: 'business-analyst',
        },
        {
          label: 'Executive',
          value: 'executive',
        },
      ],
    },

    {
      name: 'contentType',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'Thought Leadership',
          value: 'thought-leadership',
        },
        {
          label: 'Case Study',
          value: 'case-study',
        },
        {
          label: 'Tutorial',
          value: 'tutorial',
        },
        {
          label: 'Industry Insight',
          value: 'industry-insight',
        },
        {
          label: 'Opinion',
          value: 'opinion',
        },
        {
          label: 'Build In Public',
          value: 'build-in-public',
        },
      ],
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
      type: 'select',
      defaultValue: 'tier-2',
      options: [
        {
          label: 'Tier 1 - Social',
          value: 'tier-1',
        },
        {
          label: 'Tier 2 - Authority',
          value: 'tier-2',
        },
        {
          label: 'Tier 3 - Authority + Insights',
          value: 'tier-3',
        },
        {
          label: 'Tier 4 - Full Funnel',
          value: 'tier-4',
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
      name: 'contentPriority',
      type: 'select',
      defaultValue: 'medium',
      options: [
        {
          label: 'Low',
          value: 'low',
        },
        {
          label: 'Medium',
          value: 'medium',
        },
        {
          label: 'High',
          value: 'high',
        },
        {
          label: 'Flagship',
          value: 'flagship',
        },
      ],
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
          type: 'select',
          options: [
            {
              label: 'Faceless',
              value: 'faceless',
            },
            {
              label: 'Presenter',
              value: 'presenter',
            },
            {
              label: 'Screen Recording',
              value: 'screen-recording',
            },
          ],
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
          label: 'Selected',
          value: 'selected',
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
      name: 'approvedForContentGeneration',
      type: 'checkbox',
      defaultValue: false,
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