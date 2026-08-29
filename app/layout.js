import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav";
import Footer from "./components/Footer";
import { Pointer } from "@/components/magicui/pointer";

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
    default: "Khaira Studio | Khaira Digital Solutions Private Limited",
    template: "%s | Khaira Studio",
  },
  description:
    "Khaira Studio by Khaira Digital Solutions Private Limited is a full-service creative agency specializing in commercial ad video production, voiceover, dubbing, 2D/3D animation, graphic design, and digital ad strategies by RJ Mohit (Akashwani Radio).",
  keywords: [
    "Khaira Studio",
    "Khaira Digital Solutions Private Limited",
    "Khaira Digital Solutions",
    "RJ Mohit",
    "RJ Mohit Mathuriya",
    "Voiceover Artist India",
    "Akashvani Radio Voiceover",
    "Ad Video Production",
    "Commercial Shoots Noida",
    "Animation Ad Production",
    "Dubbing Studio India",
    "Graphic Design Noida",
    "Digital Marketing Agency",
    "Facebook Ads Agency",
    "Instagram Video Production",
    "Search Engine Marketing",
  ],
  authors: [
    {
      name: "Khaira Digital Solutions Private Limited",
      url: "https://khairadigitalsolutions.com",
    },
  ],
  creator: "Khaira Digital Solutions Private Limited",
  metadataBase: new URL("https://khairadigitalsolutions.com"),
  alternates: {
    canonical: "https://khairadigitalsolutions.com",
  },
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
    title: "Khaira Studio | Khaira Digital Solutions Private Limited",
    description:
      "Transform your brand with studio-quality voiceovers, commercial ad video production, animation, and digital ad strategy by RJ Mohit (Akashwani Radio). Fast 24-48 hr delivery.",
    url: "https://khairadigitalsolutions.com",
    siteName: "Khaira Studio - Khaira Digital Solutions Private Limited",
    images: [
      {
        url: "/scheme-gloge.png",
        width: 1200,
        height: 630,
        alt: "Khaira Studio - Khaira Digital Solutions Private Limited",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khaira Studio | Khaira Digital Solutions Private Limited",
    description:
      "High-impact commercial video production, voiceovers, dubbing, and digital marketing by Khaira Digital Solutions Private Limited.",
    images: ["/scheme-gloge.png"],
    creator: "@khairadigital",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#ffffff",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Khaira Digital Solutions Private Limited",
  "alternateName": "Khaira Studio",
  "url": "https://khairadigitalsolutions.com",
  "logo": "https://khairadigitalsolutions.com/scheme-gloge.png",
  "image": "https://khairadigitalsolutions.com/scheme-gloge.png",
  "description": "Full-service commercial ad video production, voiceover, dubbing, animation, and digital marketing studio in Noida, UP, India.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Prateek Laurel, Sector 120",
    "addressLocality": "Noida",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "201301",
    "addressCountry": "IN"
  },
  "email": "info@khairadigital.com",
  "priceRange": "$$",
  "sameAs": [
    "https://www.youtube.com/@rsstoryanalysis9547"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Navbar />
        {children}
        <Pointer className="fill-purple-500" />
        <Footer />
      </body>
    </html>
  );
}
