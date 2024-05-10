/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "marclou.com",
      "mood2movie.com",
      "naval25.com",
      "buddycrush.co",
      "decisiongame.co",
      "visualizehabit.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
