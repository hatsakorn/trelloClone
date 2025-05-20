/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/2048-in-react",
  // output: "export",
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;
