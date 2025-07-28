/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  trailingSlash: true,
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  }
}

module.exports = nextConfig
