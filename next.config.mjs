import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next',
  outputFileTracingRoot: path.resolve(process.cwd()),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
