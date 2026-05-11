import type { NextConfig } from "next";

const githubPagesBasePath = process.env.GITHUB_PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  env: {
    SITE_PASSWORD_HASH: process.env.NEXT_PUBLIC_SITE_PASSWORD_HASH || "",
  },
  ...(process.env.GITHUB_PAGES === "true" && githubPagesBasePath
    ? {
        basePath: githubPagesBasePath,
        assetPrefix: githubPagesBasePath,
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
