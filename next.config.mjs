/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;
