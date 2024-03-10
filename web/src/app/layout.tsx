import type { Metadata } from "next";
import { Sora } from "next/font/google";

import { Header, Nav, TopLeftImage } from "@/components";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tech Build - Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${sora.className} page bg-site text-white bg-cover bg-no-repeat font-sora relative`}
      >
        <TopLeftImage />
        <Nav />
        <Header />

        {children}
      </body>
    </html>
  );
}
