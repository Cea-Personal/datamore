import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import path, { dirname, join } from 'path'
import sharp from 'sharp'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { s3Storage } from '@payloadcms/storage-s3'
import { Insights } from './src/collections/Insights'
import { SuccessStories } from './src/collections/SuccessStories'
import { Services } from './src/collections/Services'
import { Users } from './src/collections/Users'
import { Media } from './src/collections/Media'
import { Admins } from './src/collections/Admins'
import { Topics } from './src/collections/Topics'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

const filename = fileURLToPath(import.meta.url)
const dirnameValue = dirname(filename)


export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Admins.slug,
    importMap: {
      baseDir: path.resolve(dirnameValue),
    },
  },
  collections: [Insights, SuccessStories, Services, Users, Media, Admins, Topics],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: join(dirnameValue, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: join(dirnameValue, 'generated-schema.graphql')
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    }
  }),
  sharp
  // upload: {
  //   storage: s3Storage({
  //     bucket: process.env.S3_BUCKET || 'datamore-media',
  //     prefix: 'payload',
  //     config: {
  //       credentials: {
  //         accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
  //         secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
  //       },
  //       region: process.env.S3_REGION || 'us-east-1',
  //       endpoint: process.env.S3_ENDPOINT || '',
  //     },
  //     clientUploads: true,
  //   }),
  // },
})