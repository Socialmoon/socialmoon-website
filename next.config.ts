import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', 'socialmoon.com'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
