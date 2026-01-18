import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // App subdomain URL for CTAs
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://app.example.com',
  },
};

export default nextConfig;
