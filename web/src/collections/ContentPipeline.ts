import type { CollectionConfig } from "payload";
import { handleStatusWebhook } from "./hooks";

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
        relatedCollections: ["content-variants"],
        relatedCollectionsfieldName: ["content"],
      }),
        handleStatusWebhook({
        webhookurl: process.env.DISTRIBUTION_WEBHOOK_URL || "",
        event: "distribution-approved",
        collection: "content-pipeline",
        approvalStatus: "distribution-approved",
        relatedCollections: ["content-variants"],
        relatedCollectionsfieldName: ["content"],
      })

    ],
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
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
      name: "insightsArticle",
      type: "textarea",
    },

    {
      name: "youtubeScript",
      type: "textarea",
    },

    {
      name: "youtubeTitle",
      type: "text",
    },

    {
      name: "youtubeDescription",
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

    {
      name: "approvalNotes",
      type: "textarea",
    },
  ],

  timestamps: true,
};
