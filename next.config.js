/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapi.williamk19.com',
      },
    ],
  },
};

module.exports = nextConfig;
