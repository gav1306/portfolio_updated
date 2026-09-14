import type { Metadata } from "next";
import { Inter, Caveat, Fredoka } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap",
});

// Using Fredoka for the bubbly display font
// This is a rounded, friendly font that matches the retro aesthetic
// You can replace with custom fonts later by adding them to public/fonts/
const displayFont = Fredoka({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "graphic design",
    "video editing",
    "content creation",
    "visual storytelling",
    "creative portfolio",
  ],
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${caveat.variable} ${displayFont.variable} font-sans antialiased bg-cream`}
      >
        {children}
      </body>
    </html>
  );
}
