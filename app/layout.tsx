import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import GNB from "@/components/GNB";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "LCTech Holdings",
  description: "폴더블 디바이스 리페어 산업 기반 기술 기업",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${notoSansKR.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <GNB />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
