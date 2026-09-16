/** @type {import('next').NextConfig} */
const nextConfig = {
  // Phase 1: static export — comment out output line when adding API routes (Phase 2+)
  output: "export",

  images: {
    // Required when using output: "export"
    unoptimized: true,
  },
};

export default nextConfig;
