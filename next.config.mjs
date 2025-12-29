/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // This changes /team/slug to /team/slug/index.html
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
