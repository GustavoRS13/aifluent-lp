import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Fotos corporativas servidas via CDN do Unsplash, otimizadas pelo next/image.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
