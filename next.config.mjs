/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
    images: {
        remotePatterns: [{
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
                hostname: "cms-images.udemycdn.com",
                port: "",
                pathname: "/**",

            },

        ],
    },
=======
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
    ],
  },
>>>>>>> f6c9f63fd921cb0ff24604f6f50771592fd7ae95
};

export default nextConfig;