"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Globe } from "@/components/magicui/globe";
import { BackgroundLines } from "@/components/ui/background-lines";
import { SparklesText } from "@/components/magicui/sparkles-text";
import ProjectCarouselCard from "@/app/components/ProjectCarouselCard";

const featuredProjects = [
  {
    title: "CityWeaver Platform",
    link: "https://cityweaver.in/",
    category: "Smart City & Urban Governance",
    description: "Enterprise smart city portal and GIS infrastructure platform delivering real-time spatial data visualization, urban planning analytics, and municipal workflow automation.",
    techStack: ["Next.js", "GeoJSON / GIS", "Node.js", "PostgreSQL", "Cloud (Azure)"],
    images: [
      "/cityweaver/1.png",
      "/cityweaver/2.png",
      "/cityweaver/3.png",
      "/cityweaver/4.png",
    ]
  },
  {
    title: "Write Here Platform",
    link: "#",
    category: "Interactive E-Learning & Teaching",
    description: "Interactive e-learning and online teaching platform facilitating virtual classrooms, real-time course administration, digital whiteboard tools, and student engagement.",
    techStack: ["React", "WebSockets", "TailwindCSS", "Node.js", "Cloud Deployment"],
    images: [
      "/teaching/1.jpeg",
      "/teaching/2.jpeg",
      "/teaching/3.jpeg",
    ]
  }
];

const ProjectPage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.enable();
    }
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Mobile Hero View (Clean full width edge-to-edge with generous top gap) */}
      <section className="sm:hidden relative w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 pt-32 pb-16 px-6 text-center border-b border-gray-100">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent leading-tight mb-4 mt-4">
          <TypingAnimation className="text-4xl">Featured Projects</TypingAnimation>
        </h1>
        <p className="text-sm font-medium text-gray-700 leading-relaxed max-w-xl mx-auto mt-2">
          Explore our flagship engineering case studies featuring interactive image carousels, live platform links, and fullstack technology architectures.
        </p>
      </section>

      {/* Desktop Hero View (Interactive Beams, Rays & Full 3D Globe) */}
      <div className="hidden sm:block relative w-full min-h-screen bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-cyan-500/5">
        <BackgroundBeamsWithCollision className="min-h-screen w-full flex items-center justify-center pt-24">
          <BackgroundLines className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-20">
            <section className="relative w-full min-h-[80vh] flex items-center justify-center py-20">
              {/* Full Globe Background Centered in Middle */}
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <div className="w-[85vw] max-w-[680px] aspect-square opacity-85 transition-all duration-300">
                  <Globe />
                </div>
              </div>

              {/* Hero Content with Gap below Top Header */}
              <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
                <h1 className="text-6xl lg:text-7xl m-6 font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent leading-tight">
                  <TypingAnimation className="text-6xl lg:text-7xl">Featured Projects</TypingAnimation>
                </h1>

                <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed max-w-3xl mx-auto mt-6 px-2">
                  Explore our flagship engineering case studies featuring interactive image carousels, live platform links, and fullstack technology architectures.
                </p>
              </div>
            </section>
          </BackgroundLines>
        </BackgroundBeamsWithCollision>
      </div>

      {/* Projects Showcase Grid */}
      <section className="max-w-7xl mx-auto px-4 py-10 sm:py-20">
        <div className="text-center mb-16">
          <SparklesText className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Production Case Studies
          </SparklesText>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our flagship platforms engineered for smart city governance and interactive edtech learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {featuredProjects.map((project, index) => (
            <ProjectCarouselCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="pb-20 bg-white px-4">
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center p-12 sm:p-20 max-w-6xl mt-12 mb-0 mx-auto px-6 rounded-3xl shadow-2xl shadow-blue-500/20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Ready to Build Your Solution?</h2>
          <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how our software engineering, AI fine-tuning, and cloud architecture team can bring your product from concept to code.
          </p>
          <Link href={'/contact'}>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 hover:shadow-xl transform hover:scale-105 transition duration-300">
              Get Technical Consultation
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ProjectPage;
