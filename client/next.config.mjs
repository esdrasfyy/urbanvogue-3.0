/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["imgs.search.brave.com", "urbanvogue.cloud", "firebasestorage.googleapis.com", "localhost", "as1.ftcdn.net", "www.balancaservice.com.br", "static.ecosweb.com.br", "ph-cdn3.ecosweb.com.br", "example.com", "lh3.googleusercontent.com", "avatars.githubusercontent.com"],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_HOST: process.env.HOST,
    NEXT_PUBLIC_SECRET: process.env.SECRET,
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    NEXT_PUBLIC_GITHUB_CLIENT_ID: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    NEXT_PUBLIC_OAUTH_REDIRECT_URL: process.env.OAUTH_REDIRECT_URL,
    NEXT_UPLOAD_IMAGE_PROVIDER: process.env.NEXT_UPLOAD_IMAGE_PROVIDER,
    NEXT_FIREBASE_API_KEY: process.env.NEXT_FIREBASE_API_KEY,
    NEXT_FIREBASE_AUTH_DOMAIN: process.env.NEXT_FIREBASE_AUTH_DOMAIN,
    NEXT_FIREBASE_DATABASE_URL: process.env.NEXT_FIREBASE_DATABASE_URL,
    NEXT_FIREBASE_PROJECT_ID: process.env.NEXT_FIREBASE_PROJECT_ID,
    NEXT_FIREBASE_STORAGE_BUCKET: process.env.NEXT_FIREBASE_STORAGE_BUCKET,
    NEXT_FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_FIREBASE_MESSAGING_SENDER_ID,
    NEXT_FIREBASE_APP_ID: process.env.NEXT_FIREBASE_APP_ID,
    SESSION_COOKIE: process.env.SESSION_COOKIE,
  },
  experimental: {},
};

export default nextConfig;
