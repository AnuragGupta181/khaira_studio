'use client';

import React, { useState } from "react";
import { MapPin, Mail, ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";

const AccordionSection = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800/80 py-3.5 md:border-b-0 md:py-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left focus:outline-none md:pointer-events-none"
        aria-expanded={isOpen}
      >
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-200">
          {title}
        </h2>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-gray-400 transition-transform duration-300 md:hidden",
            isOpen && "rotate-180 text-white"
          )}
        />
      </button>

      <ul
        className={cn(
          "space-y-2.5 text-gray-400 text-sm mt-3 md:mt-4 transition-all duration-300",
          isOpen ? "block" : "hidden md:block"
        )}
      >
        {links.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="hover:text-white transition-colors block py-0.5">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const businessLinks = [
    { label: "Advertise With Us", href: "/advertise" },
    { label: "Business Plans", href: "/business/pricing" },
    { label: "Marketing Solutions", href: "/marketing" },
    { label: "Consultancy Plans", href: "/consultancy" },
    { label: "Fullstack Engineering", href: "/projects" },
    { label: "AI & Embedded Solutions", href: "/projects" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Service", href: "/legal/terms-of-service" },
    { label: "Data Sharing Policy", href: "/legal/data-sharing" },
    { label: "PII / SPI Data Policy", href: "/legal/pii-spi-policy" },
    { label: "Cookie Policy", href: "/legal/cookie-policy" },
    { label: "Refund & Cancellation", href: "/legal/refund-policy" },
    { label: "Grievance Redressal", href: "/legal/grievance" },
  ];

  const supportLinks = [
    { label: "Contact Us", href: "/contact" },
    { label: "Help Center", href: "/help" },
    { label: "Report Abuse", href: "/report-abuse" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ];

  return (
    <footer className="relative bg-gray-900 text-white py-12 px-6 overflow-hidden border-t border-gray-800">
      {/* Background Globe Graphic Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-30 sm:opacity-40">
        <img
          src="/scheme-gloge.png"
          alt=""
          className="w-full max-w-6xl h-full object-cover sm:object-contain mix-blend-screen pointer-events-none object-bottom select-none filter saturate-[3.5] contrast-135 brightness-95"
        />
      </div>

      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 z-0 animate-[slowPulse_20s_ease-in-out_infinite]"
        style={{ animationDelay: '2s' }}
      >
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
          ]}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 opacity-10"
          )}
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        {/* Brand & Address Column */}
        <div className="space-y-4 pb-4 md:pb-0 border-b border-gray-800/80 md:border-b-0">
          <h1 className="text-2xl font-bold">
            Khaira Digital Solutions <span className="text-blue-500">Private Limited</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Fullstack product development, AI model fine-tuning, web scraping, cloud deployment, and embedded hardware integration.
          </p>
          <address className="not-italic space-y-2.5 pt-2 text-xs text-gray-400">
            <div className="flex gap-2">
              <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <span>Prateek Laurel, Sector 120, Noida, Uttar Pradesh – 201301, India</span>
            </div>
            <div className="flex gap-2">
              <Mail className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <a href="mailto:info@khairadigital.com" className="hover:text-white transition-colors">
                info@khairadigital.com
              </a>
            </div>
          </address>
        </div>

        {/* Business & Growth Accordion */}
        <AccordionSection title="Business & Growth" links={businessLinks} />

        {/* Legal & Compliance Accordion */}
        <AccordionSection title="Legal & Compliance" links={legalLinks} />

        {/* Support Accordion */}
        <AccordionSection title="Support" links={supportLinks} />
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 mt-10 pt-6 border-t border-gray-800 text-center md:flex md:justify-between md:items-center max-w-7xl mx-auto text-gray-500 text-xs space-y-3 md:space-y-0">
        <div>
          © {currentYear} <span className="text-gray-300 font-medium">Khaira Digital Solutions Private Limited</span>. All rights reserved.
        </div>
        <div className="flex flex-wrap justify-center space-x-4">
          <Link href="/legal/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy</Link>
          <Link href="/legal/terms-of-service" className="hover:text-gray-400 transition-colors">Terms</Link>
          <Link href="/legal/cookie-policy" className="hover:text-gray-400 transition-colors">Cookies</Link>
          <Link href="/legal/grievance" className="hover:text-gray-400 transition-colors">Grievance</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
