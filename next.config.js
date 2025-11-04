/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // `ppr` is an experimental feature that requires the latest Next.js canary.
    // Disable by default to avoid the "CanaryOnlyError" when using stable releases.
    // If you want to enable it, install the canary: `npm i next@canary`.
    ppr: false,
  },
};

module.exports = nextConfig;
