import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This will ignore ESLint errors during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This will ignore TypeScript errors during production builds
    ignoreBuildErrors: true,
  },
  output: 'standalone',
};

module.exports = nextConfig;
