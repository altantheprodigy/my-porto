import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compression for static & dynamic responses
  compress: true,

  // Image optimization: auto conversion to AVIF & WebP
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache on Vercel Edge
  },

  // Permanent 308 redirect from legacy /AllProjects route to standardized /projects
  async redirects() {
    return [
      {
        source: "/AllProjects",
        destination: "/projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
