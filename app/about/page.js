"use client"

import React, { useEffect, useState } from 'react';
import { Award, Users, Lightbulb, Code, Brain, Cloud, Star, Cpu, Server, Terminal, Smartphone, Search, Layers, Workflow, Bot } from 'lucide-react';
import Image from 'next/image';
import { WordRotate } from '@/components/magicui/word-rotate';
import { SparklesText } from '@/components/magicui/sparkles-text';

const slides = [
  {
    title: "Fullstack Product Development",
    description: "End-to-end web & SaaS application engineering built with Next.js, Node.js, and modern databases."
  },
  {
    title: "LLM Fine-Tuning & AI Models",
    description: "Domain-adapted AI model training, RAG knowledge retrieval, and autonomous AI agents."
  },
  {
    title: "Web Scraping & Data Extraction",
    description: "Distributed scraping clusters, proxy rotation, and automated anti-bot data extraction engines."
  }
];

const services = [
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1280&auto=format&fit=crop",
    title: "Fullstack Product Development",
    description: "Building scalable web and enterprise SaaS applications with robust frontend and backend architectures.",
  },
  {
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1280&auto=format&fit=crop",
    title: "LLM Model Fine-Tuning & AI",
    description: "Customizing open-source LLMs (Llama, Mistral) with proprietary datasets and retrieval pipelines.",
  },
  {
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1280&auto=format&fit=crop",
    title: "Web Scraping & Data Extraction",
    description: "High-throughput data collection infrastructure with proxy rotation and headful browser automation.",
  },
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1280&auto=format&fit=crop",
    title: "Mobile App Development",
    description: "Cross-platform iOS & Android mobile apps engineered for fluid 60fps performance.",
  },
  {
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1280&auto=format&fit=crop",
    title: "Concept-to-Code (C-to-C)",
    description: "Rapid prototyping transforming startup product concepts into launch-ready production software.",
  },
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1280&auto=format&fit=crop",
    title: "Cloud Deployment & DevOps",
    description: "Automated AWS/GCP cloud deployments, Docker containerization, Kubernetes, and CI/CD pipelines.",
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1280&auto=format&fit=crop",
    title: "Embedded & Hardware Integration",
    description: "IoT firmware development, microcontrollers (ESP32, ARM), and hardware-to-cloud communication.",
  },
];

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const fadeInUp = (id) => 
    `transform transition-all duration-1000 ease-out ${
      isVisible[id] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-red-50 text-gray-900 font-sans">
      {/* About Hero Section */}
      <section id="about-hero" className="py-24 px-6 text-center">
        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
          About Us
        </h1>
        <p className="text-xl mt-4 max-w-3xl mx-auto text-gray-600">
          We are a full-stack engineering studio specializing in modern web and mobile applications, AI model fine-tuning, cloud infrastructure, web scraping engines, and hardware-software integration.
        </p>
      </section>

      {/* What We Do */}
      <section id="services-about" className="py-20 bg-gradient-to-br from-red-50 via-pink-100 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-1xl font-bold mb-10 text-gray-900"><SparklesText className='text-4xl'>What We Do</SparklesText></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Fullstack Engineering', icon: <Code className="w-8 h-8" />, text: 'High-performance web applications and API microservices.' },
              { title: 'AI & Model Fine-Tuning', icon: <Brain className="w-8 h-8" />, text: 'Custom LLM fine-tuning, RAG pipelines, and autonomous AI agents.' },
              { title: 'Cloud & Embedded Integration', icon: <Cpu className="w-8 h-8" />, text: 'DevOps cloud deployment and IoT hardware-software telemetry.' }
            ].map((service, i) => (
              <div key={i} id={`services-${i}`} className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition ${fadeInUp('services-'+i)}`}>
                <div className="text-red-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              <div className="flex justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-xl w-full max-w-[500px] h-64 object-cover"
                />
              </div>

              <div className="text-center md:text-left max-w-md">
                <h2 className="text-3xl font-bold text-red-600 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Mission */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=60"
            className="w-full rounded-2xl shadow-xl"
            alt="Our Mission"
          />
          <div className={fadeInUp('mission')}>
            <h2 className="text-4xl font-bold mb-4 text-gray-900"><SparklesText>Our Mission</SparklesText></h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower founders and enterprises with robust, production-grade software solutions. From Concept-to-Code (C-to-C) execution to AI fine-tuning and embedded hardware integration, we build systems designed for scalability and reliability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-50 via-pink-100 to-white text-gray-800">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div>
            <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-7 my-7 rounded-xl text-center shadow">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Your end-to-end technology & engineering partner
              </h2>
            </div>

            <h2 className="text-4xl font-bold mb-6 p-4 text-center"><SparklesText>Engineering Domains</SparklesText></h2>
            <div className="grid grid-cols-2 font-bold md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
              {[
                "Fullstack Product",
                "Frontend Engineering",
                "Backend Architecture",
                "Mobile App Dev",
                "Web Scraping Engines",
                "Concept to Code (C-to-C)",
                "Enterprise ERP",
                "Workflow Automation",
                "Machine Learning",
                "Model Fine-Tuning",
                "Cloud DevOps",
                "Embedded Systems",
                "Hardware Integration",
                "REST & GraphQL APIs",
                "Microservices",
                "Database Architecture",
              ].map((service, index) => (
                <span
                  key={index}
                  className="bg-white px-3 py-2.5 rounded-lg shadow text-center hover:bg-blue-50 transition border border-gray-100"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10 text-gray-900"><SparklesText>Why Choose Us</SparklesText></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { label: "12+ Years Engineering", icon: <Star className="w-8 h-8" /> },
              { label: "500+ Codebases Shipped", icon: <Award className="w-8 h-8" /> },
              { label: "Rapid C-to-C Sprints", icon: <Lightbulb className="w-8 h-8" /> },
              { label: "200+ Enterprise Clients", icon: <Users className="w-8 h-8" /> },
            ].map((item, i) => (
              <div
                key={i}
                id={`why-${i}`} 
                className={`bg-gradient-to-br from-red-500 to-pink-600 text-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition ${fadeInUp('why-' + i)}`}
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold">{item.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
