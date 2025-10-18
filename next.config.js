/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./src/i18n/request.ts');

module.exports = withNextIntl({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  }
});