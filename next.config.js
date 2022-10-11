/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: "custom",
  },
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
};