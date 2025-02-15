/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        zlib: require.resolve("browserify-zlib"),
      };
    }
    return config;
  },
};

module.exports = nextConfig;
