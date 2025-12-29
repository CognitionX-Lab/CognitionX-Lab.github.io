/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // This changes /team/slug to /team/slug/index.html
  images: {
    unoptimized: true,
  },
  // If your URL is https://CognitionX-Lab.github.io/ (no subfolder), 
  // you do NOT need basePath.
};

export default nextConfig;
