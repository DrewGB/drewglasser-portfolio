import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Drew Glasser-Brown | Software Developer",
    description: "Portfolio of Drew Glasser-Brown, a full-stack developer based in Saskatoon. Passionate about accessible systems, clean code, and impactful software.",
    keywords: ["Drew Glasser-Brown", "software developer", "Saskatoon", "portfolio", "full-stack", "Next.js", "Blazor", "accessibility"],
    authors: [{ name: "Drew Glasser-Brown" }],
    creator: "Drew Glasser-Brown",
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        title: "Drew Glasser-Brown | Software Developer",
        description: "Building accessible, meaningful systems — full-stack, modern, and user-first.",
        url: "https://drewglasser.dev",
        siteName: "drewglasser.dev",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Drew Glasser-Brown Portfolio",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Drew Glasser-Brown | Software Developer",
        description: "Portfolio of Drew Glasser-Brown. Full-stack developer focused on accessibility and clean systems.",
        images: ["/og-image.png"],
    },
};

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
