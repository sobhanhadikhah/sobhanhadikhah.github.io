/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static HTML export: `pnpm build` writes a self-contained site to `out/`
  // that can be uploaded to any static host (cPanel / Apache, Nginx, etc.).
  output: "export",
  // Emit `/page/index.html` so Apache serves clean URLs without rewrites.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Security headers are set in `public/.htaccess` (Next.js `headers()` is not
  // supported with static export).
};

export default nextConfig;
