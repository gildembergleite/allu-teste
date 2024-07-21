/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'v2-allugator-images.s3.amazonaws.com',
        protocol: 'https',
      },
      {
        hostname: 'yacare-products-image.s3.sa-east-1.amazonaws.com',
        protocol: 'https',
      },
    ],
  },
}

export default nextConfig
