/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'react-icons']
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
  // For GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : undefined,
  assetPrefix: process.env.NODE_ENV === 'production'
    ? 'https://sai33e0.github.io/portfolio'
    : undefined,
};

module.exports = nextConfig;