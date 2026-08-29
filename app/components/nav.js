'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const Navbar2 = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-blue-100/60 shadow-sm">
      <ScrollProgress className="top-[65px]" />
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-16">
          {/* Logo (Extreme Left) */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
              <span className="text-lg sm:text-xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent tracking-tight">
                Khaira Studio
              </span>
              <span className="text-xs font-semibold text-slate-500 hidden xl:inline">
                | Khaira Digital Solutions Private Limited
              </span>
            </Link>
          </div>

          {/* Desktop Nav (Center) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-8">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link key={label} href={href}>
                  <span
                    className={`relative cursor-pointer transition-colors duration-300 group ${
                      isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right Actions (Extreme Right) */}
          <div className="flex items-center space-x-4">
            {/* Mobile Hamburger Icon */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X className="w-6 h-6 text-blue-600" /> : <Menu className="w-6 h-6 text-gray-700" />}
              </button>
            </div>

            {/* CTA Button (Desktop Only) */}
            <div className="hidden md:block">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 font-medium">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-white/95 backdrop-blur-md border-t border-blue-100 shadow-md">
          <div className="flex flex-col space-y-4">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link key={label} href={href}>
                  <span
                    className={`block text-base font-medium transition-colors duration-300 ${
                      isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              );
            })}
            <Link href="/contact">
              <button className="mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 w-full">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
