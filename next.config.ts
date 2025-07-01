import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: '/AIML-500',
  assetPrefix: isProd ? "/AIML-500/" : "",
  images: { unoptimized: true },
};

export default nextConfig;
