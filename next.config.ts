import type { NextConfig } from "next";

/**
 * `output: "standalone"` is what the self-hosting scripts in .zscripts expect
 * (start.sh runs .next/standalone/server.js). Vercel builds its own output and
 * cannot route a standalone bundle, so the setting is skipped there.
 */
const nextConfig: NextConfig = {
  ...(process.env.VERCEL ? {} : { output: "standalone" as const }),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
