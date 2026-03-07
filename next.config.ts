import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers: () => [
    {
      source: "/.well-known/apple-app-site-association",
      headers: [
        {
          key: "Content-Type",
          value: "application/json",
        },
      ],
    },
  ],
  redirects: () => [
    {
      source: "/",
      destination: "https://apps.apple.com/app/6760223128",
      permanent: false,
    },
  ],
};

export default nextConfig;
