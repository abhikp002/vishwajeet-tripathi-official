import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: path.resolve(process.cwd()),
};

export default nextConfig;
