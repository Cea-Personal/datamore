import type { CollectionConfig } from 'payload'
export const Admin : CollectionConfig = {
  slug: 'admin',
  labels: {
    singular: 'Admin',
    plural: 'Admins',
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: false,
    },
    {
      name: 'lastName',
      type: 'text',
      required: false,
    },
  ],
}