'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, ChevronRight, ArrowLeft, X } from 'lucide-react';

export default function LegalPageLayout({ title, subtitle, lastUpdated, sections = [] }) {
  const [activeId, setActiveId] = useState(sections?.[0]?.id || '');
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  useEffect(() => {
    if (!sections || !Array.isArray(sections) || sections.length === 0) return;
    const elements = sections.map(s => document.getElementById(s.id)).filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          const sorted = visible.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveId(sorted[0].target.id);
        }
      },
      { rootMargin: '-10% 0px -60% 0px', threshold: 0 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  const safeSections = Array.isArray(sections) ? sections : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 text-gray-900 font-sans pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>

        {/* Hero Banner */}
        <div className="bg-white border border-gray-200/80 rounded-3xl p-8 lg:p-12 mb-8 shadow-xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <BookOpen size={13} /> Official Document
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent mb-3">
            {title}
          </h1>
          {subtitle && <p className="text-gray-600 text-sm sm:text-base max-w-3xl mb-4 leading-relaxed">{subtitle}</p>}
          <p className="text-xs text-gray-400">
            Last updated: {lastUpdated} &nbsp;·&nbsp; Khaira Digital Solutions Private Limited
          </p>
        </div>

        {/* Mobile Sticky TOC Collapsible Header */}
        <div className="lg:hidden sticky top-20 z-40 mb-6 bg-white/95 backdrop-blur-md border border-gray-200 shadow-md rounded-2xl p-4">
          <button
            onClick={() => setMobileTocOpen(!mobileTocOpen)}
            className="w-full flex items-center justify-between text-sm font-bold text-gray-800"
          >
            <div className="flex items-center gap-2 text-blue-600">
              <BookOpen size={16} />
              <span>ON THIS PAGE</span>
            </div>
            {mobileTocOpen ? <X size={18} className="text-blue-600" /> : <ChevronRight size={18} className="text-gray-600" />}
          </button>
          {mobileTocOpen && (
            <nav className="mt-3 pt-3 border-t border-gray-100 space-y-1">
              {safeSections.map(s => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={e => {
                    e.preventDefault();
                    setMobileTocOpen(false);
                    document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`block px-3 py-2 rounded-xl text-xs transition-colors ${
                    activeId === s.id
                      ? 'bg-blue-50 text-blue-600 font-semibold border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {s.heading}
                </a>
              ))}
            </nav>
          )}
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Desktop Sticky TOC Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-24 self-start z-30">
            <div className="bg-white/90 border border-gray-200/90 backdrop-blur-md rounded-2xl p-4 shadow-lg">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3 px-2">
                On this page
              </p>
              <nav className="space-y-1">
                {safeSections.map(s => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={e => {
                      e.preventDefault();
                      document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs transition-all ${
                      activeId === s.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-sm'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                    }`}
                  >
                    <ChevronRight
                      size={12}
                      className={`shrink-0 transition-opacity ${activeId === s.id ? 'opacity-100 text-white' : 'opacity-0'}`}
                    />
                    <span className="truncate">{s.heading}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Section Cards */}
          <div className="flex-1 space-y-6 w-full">
            {safeSections.map(s => (
              <section
                key={s.id}
                id={s.id}
                className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 scroll-mt-24 shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
                  {s.heading}
                </h2>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3">
                  {s.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
