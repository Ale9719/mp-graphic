import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/mp-graphic',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;