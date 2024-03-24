/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['strapi.williamk19.my.id', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapi.williamk19.my.id',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
};

module.exports = nextConfig;
