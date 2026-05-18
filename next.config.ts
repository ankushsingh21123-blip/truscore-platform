import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow unicornstudio-react (uses canvas + browser APIs) to be client-only
  transpilePackages: ["unicornstudio-react"],

  // Suppress TS errors during builds (dev safety net)
  typescript: {
    ignoreBuildErrors: false,
  },

  // Enable React strict mode for better DX
  reactStrictMode: true,

  // Image domains if needed later
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "storage.unicorn.studio" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
    ],
  },
};

export default nextConfig;
