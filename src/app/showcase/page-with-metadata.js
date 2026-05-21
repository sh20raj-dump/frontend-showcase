import { Metadata } from 'next'
import FrontendShowcase from './showcase-client'

export const metadata = {
  title: "Frontend Showcase - Modern UI Components & Full-Stack Applications",
  description: "Explore our comprehensive collection of 7+ projects including glassmorphism UI kits, neumorphic designs, dark mode toggles, e-commerce clones, and professional dashboards. Built with Next.js, React, and Tailwind CSS.",
  keywords: [
    "frontend showcase",
    "modern ui components",
    "react projects",
    "nextjs applications",
    "tailwind css components",
    "glassmorphism",
    "neumorphic design",
    "dark mode toggle",
    "e-commerce clone",
    "dashboard design",
    "responsive web design",
    "interactive components"
  ],
  openGraph: {
    title: "Frontend Showcase - Modern UI & Full-Stack Projects",
    description: "Discover 7+ beautifully crafted projects: UI kits, dashboards, e-commerce clones, and interactive components. Perfect for developers and designers seeking inspiration.",
    type: "website",
    images: [
      {
        url: "/showcase-og.jpg",
        width: 1200,
        height: 630,
        alt: "Frontend Showcase - Collection of Modern UI Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Showcase - Modern UI & Full-Stack Projects",
    description: "7+ beautifully crafted projects: UI kits, dashboards, e-commerce clones, and interactive components.",
    images: ["/showcase-og.jpg"],
  },
  alternates: {
    canonical: "/showcase",
  },
}

export default function ShowcasePage() {
  return <FrontendShowcase />
}
