import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

import { Insights } from './src/payload/collections/Insights'
import { SuccessStories } from './src/payload/collections/SuccessStories'
import { Services } from './src/payload/collections/Services'

const filename = fileURLToPath(import.meta.url)
const dirnameValue = dirname(filename)

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: process.env.PAYLOAD_ADMIN_USER || 'admin',
    password: process.env.PAYLOAD_ADMIN_PASSWORD || 'admin',
  },
  collections: [Insights, SuccessStories, Services],
  typescript: {
    outputFile: join(dirnameValue, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: join(dirnameValue, 'generated-schema.graphql'),
  },
})