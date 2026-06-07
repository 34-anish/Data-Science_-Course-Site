import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: "/Data-Science_-Course-Site",
  assetPrefix: "/Data-Science_-Course-Site",
  reactCompiler: true,
};

export default nextConfig;
