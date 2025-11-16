import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'socialmoon.com',
      },
      {
        protocol: 'https',
        hostname: '*.vercel.app',
      },
      {
        protocol: 'https',
        hostname: '*.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: '*.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '*.imgix.net',
      },
      {
        protocol: 'https',
        hostname: '*.unsplash.com',
      },
    ],
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
