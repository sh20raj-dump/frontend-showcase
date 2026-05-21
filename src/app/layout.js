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

export const metadata = {
  title: {
    default: "Frontend Showcase - Modern UI Components & Full-Stack Applications",
    template: "%s | Frontend Showcase"
  },
  description: "Comprehensive collection of modern UI components, dashboards, and full-stack applications built with Next.js, React, and Tailwind CSS. Explore glassmorphism, neumorphic design, dark mode toggles, and more.",
  keywords: [
    "frontend",
    "react",
    "nextjs",
    "tailwind css",
    "ui components",
    "dashboard",
    "glassmorphism",
    "neumorphic",
    "dark mode",
    "e-commerce",
    "modern ui",
    "responsive design",
    "web development"
  ],
  authors: [{ name: "Frontend Showcase" }],
  creator: "Frontend Showcase",
  publisher: "Frontend Showcase",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://frontend-showcase.com",
    title: "Frontend Showcase - Modern UI Components & Applications",
    description: "Explore a curated collection of modern UI components, interactive dashboards, and full-stack applications. Built with cutting-edge technologies for developers and designers.",
    siteName: "Frontend Showcase",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frontend Showcase - Modern UI Components",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Showcase - Modern UI Components & Applications",
    description: "Comprehensive collection of modern UI components and full-stack applications built with Next.js, React, and Tailwind CSS.",
    images: ["/og-image.jpg"],
    creator: "@frontend_showcase",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
  category: "technology",
  classification: "Web Development Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
