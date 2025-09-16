/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [320, 420, 768, 1024, 1200, 1920],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 31536000, // 1 year
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