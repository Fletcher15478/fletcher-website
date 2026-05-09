import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /** Avoid picking up unrelated lockfiles higher in the filesystem during tracing. */
  outputFileTracingRoot: path.join(process.cwd()),
};

export default nextConfig;
