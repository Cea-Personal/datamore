import { buildConfig } from 'payload';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import path from 'path';
import { fileURLToPath } from 'url';
import Users from './collections/Users.ts';
import Insights from './collections/Insights.ts';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  secret: process.env.PAYLOAD_SECRET || 'k4Q6z9XpR2sV8wZ1yN3jM5tG7vB0xC4qL8mP2nU5rW9y',
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/datamore',
  }),
  collections: [Users, Insights],
  admin: {
    user: 'users',
  },
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
});
