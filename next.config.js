/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cloudflare Images configuration
    loader: 'custom',
    loaderFile: './lib/cloudflare-image-loader.ts',
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  // Redirects configuration
  async redirects() {
    return [
      // Add redirects as needed
    ];
  },

  // Rewrites for API routes (if needed)
  async rewrites() {
    return [
      // Add rewrites as needed
    ];
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Custom webpack config if needed
    return config;
  },

  // Optimize bundle
  swcMinify: true,
  
  // Enable strict mode
  reactStrictMode: true,

  // Disable x-powered-by header
  poweredByHeader: false,
};

module.exports = nextConfig;

