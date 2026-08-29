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
    default: "Khaira Studio | Software & AI Engineering Solutions",
    template: "%s | Khaira Studio",
  },
  description:
    "Khaira Studio by Khaira Digital Solutions Private Limited provides end-to-end fullstack product development, LLM fine-tuning, web scraping, cloud deployment, and embedded hardware integration.",
  keywords: [
    "Khaira Studio",
    "Khaira Digital Solutions Private Limited",
    "Fullstack Product Development",
    "Frontend Engineering",
    "Backend Architecture",
    "Mobile App Development",
    "Web Scraping Engines",
    "Concept to Code C-to-C",
    "Enterprise Solutions",
    "Workflow Automation",
    "Machine Learning AI",
    "Fine-Tuning Models",
    "Cloud Deployment DevOps",
    "Embedded Integration",
    "Hardware Software Integration",
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
    title: "Khaira Studio | Software & AI Engineering Solutions",
    description:
      "Fullstack web & mobile development, LLM fine-tuning, web scraping, cloud DevOps, and embedded hardware integration by Khaira Digital Solutions Private Limited.",
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
      "Fullstack development, LLM fine-tuning, web scraping, cloud deployment, and embedded hardware solutions.",
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
  "description": "Fullstack web & mobile development, AI model fine-tuning, web scraping, cloud deployment, and embedded hardware integration studio.",
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
