/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    styledComponents: true,
  },

  webpack(conf) {
    conf.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return conf;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
