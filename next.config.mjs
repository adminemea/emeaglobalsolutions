const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGithubActions ? 'export' : undefined,
  basePath: isGithubActions ? '/emeags' : '',
  images: {
    unoptimized: true,
  },
  ...(isGithubActions ? {} : {
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
          ],
        },
      ];
    },
    async redirects() {
      return [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'www.emeaglobalsolutions.com',
            },
          ],
          destination: 'https://emeaglobalsolutions.com/:path*',
          permanent: true,
        },
      ];
    },
  }),
};

export default nextConfig;
