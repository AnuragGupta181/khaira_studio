'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Code } from 'lucide-react';
import Link from 'next/link';

export default function ProjectCarouselCard({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!project.images || project.images.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [project.images]);

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300">
      {/* Image Carousel Container */}
      <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-900">
        <img
          src={project.images[currentIndex]}
          alt={`${project.title} screenshot ${currentIndex + 1}`}
          className="w-full h-full object-cover object-top transition-all duration-500"
        />

        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow">
          {project.category}
        </div>

        {/* Carousel Nav Arrows */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-all duration-200 opacity-80 hover:opacity-100"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-all duration-200 opacity-80 hover:opacity-100"
              aria-label="Next Image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4 bg-white">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
              {project.title}
            </h3>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-sm font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-full transition-colors"
              >
                <span>Visit</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex flex-wrap gap-2 items-center">
            <Code className="w-4 h-4 text-gray-400" />
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-md font-mono font-medium border border-gray-200/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
