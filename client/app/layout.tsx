import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers/providers";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { BackToTop } from "./components/back-to-top/back-to-top";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${geistSans.variable} ${geistMono.variable} bg-custom-primaryBrand text-custom-textColor light`}>
          <Header />
          {children}
          <Footer />
          <BackToTop />
        </body>
      </Providers>
    </html>
  );
}
