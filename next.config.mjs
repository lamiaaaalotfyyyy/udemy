/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "frontends.udemycdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s.udemycdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img-c.udemycdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img-b.udemycdn.com",
        hostname: "img-b.udemycdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img-c.udemycdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img-d.udemycdn.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
