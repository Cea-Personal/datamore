import type { CollectionConfig } from "payload";
import { handleAfterReadHook, handleStatusWebhook } from "./hooks";

export const ContentPipeline: CollectionConfig = {
  slug: "content-pipeline",

  labels: {
    singular: "Content",
    plural: "Content",
  },

  admin: {
    useAsTitle: "title",
  },

  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  hooks: {
    afterChange: [
      handleStatusWebhook({
        webhookurl: process.env.CONTENT_WEBHOOK_URL || "",
        event: "content-approved",
        collection: "content-pipeline",
        approvalStatus: "content-approved",
      }),
    ],
  },

  fields: [
     {
      name: 'title',
      type: 'text',    
    },
    {
      name: "topic",
      type: "relationship",
      relationTo: "topics",
      required: true,
    },

    {
      name: "status",
      type: "select",
      defaultValue: "draft",
      options: [
        {
          label: "Draft",
          value: "draft",
        },
        {
          label: "Content Approved",
          value: "content-approved",
        },
        {
          label: "Distribution Approved",
          value: "distribution-approved",
        },
        {
          label: "Published",
          value: "published",
        },
        {
          label: "Rejected",
          value: "rejected",
        },
      ],
    },

    {
      name: "coreMessage",
      type: "textarea",
    },

    {
      name: "content",
      type: "array",
      fields: [
        {
          name: "platform",
          type: "select",
          required: true,
          options: [
            {
              label: "Insights",
              value: "insights",
            },
            {
              label: "LinkedIn",
              value: "linkedin",
            },
            {
              label: "Facebook",
              value: "facebook",
            },
            {
              label: "Instagram",
              value: "instagram",
            },
            {
              label: "TikTok",
              value: "tiktok",
            },
            {
              label: "YouTube",
              value: "youtube",
            },
            {
              label: "YouTube-Short",
              value: "youtube-short",
            },
          ],
        },
        {
          name: "contentBody",
          type: "textarea",
        },
        {
          name: "thumbnailIdeas",
          type: "array",
          fields: [
            {
              name: "idea",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      name: "approvalNotes",
      type: "textarea",
    },
  ],

  timestamps: true,
};
