const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === "production" ? "standalone" : undefined,
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    // Remove console.log from production except for error logs
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  images: {
    domains: ["localhost"],
  },
  async redirects() {
    return [
      {
        source: "/components",
        destination: "/docs/components/globe-github",
        permanent: true,
      },
      {
        source: "/docs/components",
        destination: "/docs/components/globe-github",
        permanent: true,
      },
      {
        source: "/components/:path*",
        destination: "/docs/components/:path*",
        permanent: true,
      },
   
    ];
  },
};

module.exports = withContentlayer(nextConfig);
