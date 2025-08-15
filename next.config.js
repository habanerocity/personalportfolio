/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/Contact',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/Projects', 
        destination: '/projects',
        permanent: true,
      },
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
};

module.exports = nextConfig;