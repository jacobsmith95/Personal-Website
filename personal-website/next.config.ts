import type { NextConfig } from "next";

const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: isGitHubPages ? 'https://<Account-name>/<Repository-name>' : '',
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
