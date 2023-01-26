/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

// next.config.js
const helmet = require("helmet");

module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    headers: helmet.frameguard({ action: "sameorigin" }),
    headers: helmet.crossOriginResourcePolicy({ policy: "same-origin" }),
  },
};
