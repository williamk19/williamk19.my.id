/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['strapi.williamk19.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapi.williamk19.com',
      },
    ],
  },
};

module.exports = nextConfig;
