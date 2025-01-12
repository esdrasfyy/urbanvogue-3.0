import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers/providers";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { BackToTop } from "./components/back-to-top/back-to-top";
import { Cart } from "./components/cart/cart.component";
import { NeedAuth } from "./components/need-auth/need-auth.component";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Urban Vogue",
  description: "Urban Vogue, a marca que traz as últimas tendências da moda para você. Com produtos exclusivos e de alta qualidade, meu objetivo é proporcionar uma experiência de compra única e estilosa. Venha descobrir o seu novo look!",
  icons: {
    icon: "favicon.ico",
  },
  openGraph: {
    locale: "pt-BR",
    title: "Urban Vogue",
    siteName: "Urban Vogue",
    type: "website",
    description: "Urban Vogue, a marca que traz as últimas tendências da moda para você. Com produtos exclusivos e de alta qualidade, meu objetivo é proporcionar uma experiência de compra única e estilosa. Venha descobrir o seu novo look!",
    url: "https://urbanvogue.cloud/",
    images: [
      {
        url: "favicon.ico",
      },
    ],
  },
  alternates: {
    canonical: "https://urbanvogue.cloud/",
  },
  keywords: ["Fernando Esdras da Silva", "Esdras", "Esdras Silva", "moda feminina", "roupas estilosas", "tendências de moda", "compras online", "roupas urbanas", "roupas da moda", "roupas elegantes", "estilo moderno", "coleção de moda", "moda jovem", "looks urbanos", "acessórios de moda", "fashion online", "outfits urbanos", "moda acessível", "estilo único"],
  authors: [{ name: "Fernando Esdras", url: "https://github.com/esdrasfyy" }],
};

export const viewport = { width: "device-width", initialScale: 1.0 };

export const themeColor = "var(--accent-color)";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} bg-custom-primaryBrand text-custom-textColor dark`}>
          <Header />
          {children}
          <NeedAuth />
          <Footer />
          <BackToTop />
          <Cart />
        </body>
      </Providers>
    </html>
  );
}
