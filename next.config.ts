import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Aktifkan kompresi gzip/brotli untuk response statis & dinamis
  compress: true,

  // Optimasi gambar modern: konversi otomatis ke AVIF & WebP (menghemat ukuran gambar hingga 70-90%)
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // Cache 30 hari di edge CDN Vercel
  },
};

export default nextConfig;
