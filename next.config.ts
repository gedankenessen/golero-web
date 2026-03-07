import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: () => [
    {
      source: "/",
      destination: "https://apps.apple.com/app/6760223128",
      permanent: false,
    },
  ],
};

export default nextConfig;
