import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
};

export default nextConfig;
