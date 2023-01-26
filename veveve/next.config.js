/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

// next.config.js

// You can choose which headers to add to the list
// after learning more below.
const securityHeaders = [];

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
        //X-frame-Option implemented in _app.tsx; test needed
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
        // X-XSS-protection // not in use yet
        key: "X-XSS-Protection",
        value: "1; mode=block",
      },
    ];
  },
};
