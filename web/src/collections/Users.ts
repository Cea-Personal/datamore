
import { APIError, type CollectionConfig } from 'payload'
export const Users : CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'User',
    plural: 'Users',
  },
  admin: {
    useAsTitle: 'email',
  },
  access: {
    // 1. Who can create users?
    // Public registration = return true. Admin-only = check for admin role.
    create: () => true, 

    // 2. Who can see user records?
    // Admins see all. Users see only their own document.
    read: ({ req: { user } }) => {
      if (user?.roles?.includes('admin')) return true
      if (user) return { id: { equals: user.id } } // Query constraint
      return false
    },
 
    readVersions: ({ req: { user } }) => user?.roles?.includes('admin') || false,
    // 3. Who can update user records?
    // Admins can update anyone. Users can update only themselves.
    update: ({ req: { user } }) => {
      if (user?.roles?.includes('admin')) return true
      if (user) return { id: { equals: user.id } }
      return false
    },
     // 4. Who can delete users?
    // Strictly restricted to administrators.
    delete: ({ req: { user } }) => user?.roles?.includes('admin') || false,
    
    // 5. Who can log into the Payload Admin Panel UI?
    admin: ({ req: { user } }) => user?.roles?.includes('admin') || false,
    // 6. Who can unlock user accounts after max login attempts?
    unlock: ({ req: { user } }) => user?.roles?.includes('admin') || false,
  },
  auth: {
    useAPIKey: true,
    tokenExpiration: 7200, // How many seconds to keep the user logged in
    verify: true, // Require email verification before being allowed to authenticate
    maxLoginAttempts: 5, // Automatically lock a user out after X amount of failed logins
    lockTime: 600 * 1000,
    loginWithUsername: {
      allowEmailLogin: true, // default: false
      requireEmail: false,
    },
  },
  hooks: {
      beforeOperation: [
        ({ args, operation }) => {
          // We only care about mutation operations
          if (['create', 'update', 'delete'].includes(operation)) {
            const req = args.req;
            
            // Cleanly throw an explicit 401 to the client API
            if (!req || !req.user) {
              throw new APIError('Bad Request:- No User Payload', 400)
            }
          }
          return args
        }
      ]
    },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'username',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      required: true,
      defaultValue: ['user'],
      options: [
        {
          label: 'User',
          value: 'user',
        },
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        }
      ],
      access: {
        // Only admins can assign roles
        update: ({ req: { user } }) => user?.roles?.includes('admin') || false,
        read: ({ req: { user } }) => user?.roles?.includes('admin') || false,
      },
    }
  ],
}