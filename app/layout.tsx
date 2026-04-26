import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://vercel.com/pijako9357-1154s-projects/v0-image-to-particles"),
  title: {
    default: "Retro Shader Studio - Interactive Halftone Particle Effects",
    template: "%s | Retro Shader Studio",
  },
  description: "Transform images into stunning interactive halftone particle effects with real-time mouse interaction. Upload your photos and apply retro shader effects online for free.",
  keywords: [
    "halftone effect",
    "particle effects",
    "image converter",
    "photo effects",
    "retro shader",
    "dot matrix",
    "image to particles",
    "interactive art",
    "photo filter",
    "image editor",
    "shader effects",
    "canvas animation",
    "web effects",
    "image manipulation",
  ],
  authors: [{ name: "Girish Lade" }],
  creator: "Girish Lade",
  publisher: "Vercel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vercel.com/pijako9357-1154s-projects/v0-image-to-particles",
    siteName: "Retro Shader Studio",
    title: "Retro Shader Studio - Interactive Halftone Particle Effects",
    description: "Transform images into stunning interactive halftone particle effects with real-time mouse interaction. Upload your photos and apply retro shader effects online for free.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Retro Shader Studio - Halftone Particle Effect Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retro Shader Studio - Interactive Halftone Particle Effects",
    description: "Transform images into stunning interactive halftone particle effects with real-time mouse interaction.",
    creator: "@girishlade",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://vercel.com/pijako9357-1154s-projects/v0-image-to-particles",
    languages: {
      en: "https://vercel.com/pijako9357-1154s-projects/v0-image-to-particles",
    },
  },
  category: "technology",
  classification: "Image Editing, Photo Effects, Web Tools",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}