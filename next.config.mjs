/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Static export so the site is a pure CDN-served bundle on Vercel.
  // Pages under /app become HTML in /out, public/ assets are copied as-is.
  output: "export",
  trailingSlash: false,
  images: { unoptimized: true },
};

export default nextConfig;
