/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com", "localhost", "as1.ftcdn.net", "www.balancaservice.com.br", "static.ecosweb.com.br", "ph-cdn3.ecosweb.com.br", "example.com", "lh3.googleusercontent.com", "avatars.githubusercontent.com"],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_HOST: process.env.HOST,
    NEXT_PUBLIC_SECRET: process.env.SECRET,
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    NEXT_PUBLIC_GITHUB_CLIENT_ID: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    NEXT_PUBLIC_OAUTH_REDIRECT_URL: process.env.OAUTH_REDIRECT_URL,
  },
  experimental: {
    missingSuspenseWithCSRBailout: true,
  },
};

export default nextConfig;
