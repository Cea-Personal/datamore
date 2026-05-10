import type { NextConfig } from "next";
import { fileURLToPath } from 'url';
import path from 'path';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const nextConfig: NextConfig = {
  turbopack: {
    root: dirname,
  },
  output: 'standalone',
};

export default nextConfig;
