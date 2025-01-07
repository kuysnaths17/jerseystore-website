import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["res.cloudinary.com"], // Add the hostname(s) you want to allow
  },
};

export default nextConfig;
