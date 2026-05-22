const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGithubActions ? 'export' : undefined,
  basePath: isGithubActions ? '/emeags' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
