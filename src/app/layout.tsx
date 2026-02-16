import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://akenterprises.com'),
  title: "AK Enterprises | Leading Industrial & scrap Processing Solutions",
  description: "AK Enterprises provides world-class industrial solutions, scrap processing, and metal recovery services. With over 20 years of experience, we deliver excellence and sustainable practices.",
  keywords: ["industrial solutions", "scrap processing", "metal recovery", "recycling", "AK Enterprises", "manufacturing"],
  authors: [{ name: "AK Enterprises" }],
  openGraph: {
    title: "AK Enterprises | Leading Industrial Solutions",
    description: "Your trusted partner for industrial scrap processing and sustainable recycling solutions.",
    url: "https://akenterprises.com",
    siteName: "AK Enterprises",
    images: [
      {
        url: "/assets/ak-enterprises-logo.png",
        width: 1200,
        height: 630,
        alt: "AK Enterprises Industrial Facility",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AK Enterprises | Industrial Solutions",
    description: "Leading provider of industrial solutions and scrap processing services.",
    images: ["/assets/ak-enterprises-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/assets/ak-enterprises-favicon.png',
  },
};

import SmoothScroll from "@/components/SmoothScroll";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { HashScrollHandler } from "@/components/HashScrollHandler";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HashScrollHandler />
        <SmoothScroll>{children}</SmoothScroll>
        <FloatingContactButtons />
      </body>
    </html>
  );
}
