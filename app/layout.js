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
    default: "Khaira Studio | Fullstack Engineering, AI Model Fine-Tuning & Cloud Solutions",
    template: "%s | Khaira Studio",
  },
  description:
    "Khaira Studio by Khaira Digital Solutions Private Limited provides end-to-end fullstack product development, AI model fine-tuning, web scraping, cloud deployment (AWS/Azure), embedded hardware integration, and flagship production platforms like CityWeaver & Write Here.",
  keywords: [
    "Khaira Studio",
    "Khaira Digital Solutions Private Limited",
    "CityWeaver Platform",
    "Write Here Platform",
    "Smart City GIS Infrastructure",
    "Interactive E-Learning EdTech",
    "Fullstack Product Development",
    "Frontend Engineering Next.js React",
    "Backend Architecture Microservices",
    "Mobile App Development iOS Android",
    "Web Scraping Engines Data Mining",
    "Concept to Code C-to-C",
    "Enterprise Solutions ERP CRM",
    "Workflow Automation Webhooks",
    "Machine Learning AI RAG",
    "LLM Model Fine-Tuning",
    "Cloud Deployment Azure AWS DevOps",
    "Embedded Hardware Integration IoT",
    "Software Engineering Studio Noida India",
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
    title: "Khaira Studio | Fullstack Engineering, AI & Cloud Solutions",
    description:
      "Engineers of flagship production platforms including CityWeaver Smart City Portal & Write Here EdTech. Fullstack web & mobile apps, LLM fine-tuning, cloud DevOps, and hardware integration.",
    url: "https://khairadigitalsolutions.com",
    siteName: "Khaira Studio - Khaira Digital Solutions Private Limited",
    images: [
      {
        url: "/scheme-gloge.png",
        width: 1200,
        height: 630,
        alt: "Khaira Studio - Software & AI Engineering Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khaira Studio | Software & AI Engineering Solutions",
    description:
      "Fullstack engineering, LLM model fine-tuning, cloud deployment (AWS/Azure), and flagship platforms CityWeaver & Write Here.",
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
  "@type": "SoftwareApplication",
  "name": "Khaira Digital Solutions Private Limited",
  "alternateName": "Khaira Studio",
  "url": "https://khairadigitalsolutions.com",
  "logo": "https://khairadigitalsolutions.com/scheme-gloge.png",
  "image": "https://khairadigitalsolutions.com/scheme-gloge.png",
  "description": "Fullstack product engineering, LLM model fine-tuning, web scraping engines, cloud infrastructure (AWS/Azure), embedded hardware integration, and flagship production applications including CityWeaver and Write Here Platform.",
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
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software & AI Engineering Deliverables",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fullstack Product Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "LLM Fine-Tuning & AI Agents"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "CityWeaver Platform - Smart City Governance GIS"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Write Here Platform - Interactive E-Learning Whiteboard"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Deployment & DevOps Architecture (AWS/Azure)"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Embedded Systems & IoT Integration"
        }
      }
    ]
  }
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
