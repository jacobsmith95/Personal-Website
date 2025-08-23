import type { NextConfig } from "next";

const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: isGitHubPages ? 'https://<Account-name>/<Repository-name>' : '',
  output: "export",
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/personal-website' : '',
};

export default nextConfig;
