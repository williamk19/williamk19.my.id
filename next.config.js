/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['strapi.williamk19.my.id'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapi.williamk19.my.id',
      },
    ],
  },
};

module.exports = nextConfig;
