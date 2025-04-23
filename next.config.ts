import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["catstagram.amornnan.xyz"], // ✅ เพิ่มโดเมนที่อนุญาตให้โหลดภาพ
  },
};

export default nextConfig;
