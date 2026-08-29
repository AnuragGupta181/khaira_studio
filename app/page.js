"use client"

import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Star, Award, Users, Zap, CheckCircle, ArrowRight, Globe, Mic, Video, PenTool, Palette, Monitor, Search, TrendingUp, Mail, Phone, MapPin, Code, Cpu, Layers, Smartphone, Database, Bot, Cloud, Server, Terminal, Settings, Workflow, Brain } from 'lucide-react';
import Link from 'next/link'
import Image from 'next/image';

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BoxReveal } from '@/components/magicui/box-reveal';
import { cn } from '@/lib/utils';
import { SparklesText } from '@/components/magicui/sparkles-text';
import CrowdCanvas from '@/app/components/CrowdCanvas';
import ProjectCarouselCard from '@/app/components/ProjectCarouselCard';
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

const ProfessionalWebsite = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generateDots = () =>
      Array.from({ length: 20 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 2}s`,
      }));

    setDots(generateDots());
  }, []);
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

const ourServices = [
  {
    name: "Model Fine-Tuning",
    src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1280&auto=format&fit=crop",
    icon: <Bot className="w-8 h-8" />,
    description: "LLM fine-tuning, RAG pipelines, & AI agents",
    className: "absolute top-10 left-[18%] rotate-[-5deg]",
  },
  {
    name: "Workflow Automation",
    src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1280&auto=format&fit=crop",
    icon: <Workflow className="w-8 h-8" />,
    description: "Automated pipelines, webhooks, & API integrations",
    className: "absolute top-16 left-[24%] rotate-[6deg]",
  },
  {
    name: "Enterprise Solutions",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1280&auto=format&fit=crop",
    icon: <Layers className="w-8 h-8" />,
    description: "Custom ERP, CRM, & internal operations tools",
    className: "absolute top-56 left-[28%] rotate-[3deg]",
  },
  {
    name: "Frontend Engineering",
    src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1280&auto=format&fit=crop",
    icon: <Monitor className="w-8 h-8" />,
    description: "High-performance Next.js & React interfaces",
    className: "absolute top-40 left-[34%] rotate-[-7deg]",
  },
  {
    name: "Backend Architecture",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1280&auto=format&fit=crop",
    icon: <Server className="w-8 h-8" />,
    description: "Scalable microservices, REST/GraphQL APIs",
    className: "absolute top-5 left-[40%] rotate-[8deg]",
  },
  {
    name: "Concept to Code (C-to-C)",
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1280&auto=format&fit=crop",
    icon: <Terminal className="w-8 h-8" />,
    description: "Rapid prototyping & turning ideas into production code",
    className: "absolute top-48 left-[44%] rotate-[-6deg]",
  },
  {
    name: "Web Scraping Engines",
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1280&auto=format&fit=crop",
    icon: <Search className="w-8 h-8" />,
    description: "High-volume data extraction & proxy automation",
    className: "absolute top-24 left-[48%] rotate-[-7deg]",
  },
  {
    name: "Embedded Systems",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1280&auto=format&fit=crop",
    icon: <Cpu className="w-8 h-8" />,
    description: "Hardware-software IoT integration & firmware",
    className: "absolute top-60 left-[54%] rotate-[-3deg]",
  },
  {
    name: "Fullstack Product",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1280&auto=format&fit=crop",
    icon: <Code className="w-8 h-8" />,
    description: "End-to-end web & SaaS application engineering",
    className: "absolute top-32 left-[58%] rotate-[10deg]",
  },
  {
    name: "Machine Learning & AI",
    src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1280&auto=format&fit=crop",
    icon: <Brain className="w-8 h-8" />,
    description: "Custom ML pipelines & predictive intelligence",
    className: "absolute top-36 left-[64%] rotate-[-9deg]",
  },
  {
    name: "Cloud & DevOps",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1280&auto=format&fit=crop",
    icon: <Cloud className="w-8 h-8" />,
    description: "AWS/GCP infrastructure, Kubernetes, CI/CD",
    className: "absolute top-28 left-[70%] rotate-[4deg]",
  },
  {
    name: "Mobile App Development",
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1280&auto=format&fit=crop",
    icon: <Smartphone className="w-8 h-8" />,
    description: "Cross-platform iOS & Android mobile apps",
    className: "absolute top-20 left-[76%] rotate-[2deg]",
  },
];

  const services = [
    {
      title: "Fullstack Product Development",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1280&auto=format&fit=crop",
      icon: <Code className="w-6 h-6" />,
      description: "End-to-end web & SaaS applications built with modern frameworks"
    },
    {
      title: "LLM Model Fine-Tuning & AI Agents",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1280&auto=format&fit=crop",
      icon: <Bot className="w-6 h-6" />,
      description: "Domain-specific AI model tuning, RAG systems, and autonomous agents"
    },
    {
      title: "Web Scraping & Data Engineering",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1280&auto=format&fit=crop",
      icon: <Search className="w-6 h-6" />,
      description: "High-scale web crawling, proxy networks, and structured ETL pipelines"
    },
    {
      title: "Cloud Infrastructure & DevOps",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1280&auto=format&fit=crop",
      icon: <Cloud className="w-6 h-6" />,
      description: "Automated CI/CD pipelines, Kubernetes clusters, and cloud architecture"
    },
    {
      title: "Embedded & Hardware Integration",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1280&auto=format&fit=crop",
      icon: <Cpu className="w-6 h-6" />,
      description: "IoT firmware, microcontrollers, and seamless hardware-software communication"
    }
  ];

  const testimonials = [
    {
      quote: "Khaira Digital Solutions engineered our Next.js & Node.js microservices platform with high scalability. Their engineering precision and prompt delivery exceeded our expectations!",
      name: "Aarav Sharma",
      title: "CTO, TechScale India (Bengaluru)",
      rating: 5,
    },
    {
      quote: "Our EduLearn interactive platform was developed seamlessly by Khaira Digital. From real-time WebSocket canvas to student analytics, their fullstack execution was top-notch!",
      name: "Priya Malhotra",
      title: "VP of Product, EduLearn Tech (Noida)",
      rating: 5,
    },
    {
      quote: "Working with Khaira Digital on the CityWeaver smart city portal was an exceptional experience. Their GIS spatial data processing and AWS deployment standards are world-class.",
      name: "Rajesh Varma",
      title: "Chief Officer, UrbanGov Systems (Delhi NCR)",
      rating: 5,
    },
    {
      quote: "The LLM fine-tuning and RAG vector search pipeline built by Khaira Digital automated 75% of our client support queries with high precision.",
      name: "Kavita Reddy",
      title: "Co-Founder, AI Insights Labs (Hyderabad)",
      rating: 5,
    },
    {
      quote: "Khaira Digital engineered our high-scale web scraping cluster processing over 2M requests daily. Flawless proxy rotation and zero downtime!",
      name: "Vikramaditya Singh",
      title: "Managing Director, LogiTech Solutions (Gurgaon)",
      rating: 5,
    },
    {
      quote: "Their Concept-to-Code (C-to-C) rapid MVP sprint delivered our HealthPulse mobile app in under 3 weeks. Outstanding technical capability!",
      name: "Ananya Gupta",
      title: "Head of Engineering, HealthPulse (Mumbai)",
      rating: 5,
    },
  ];

  const stats = [
    { number: "500", label: "Projects Completed", icon: <Award className="w-8 h-8" /> },
    { number: "100", label: "APIs & Services", icon: <Server className="w-8 h-8" /> },
    { number: "200", label: "Happy Enterprise Clients", icon: <Users className="w-8 h-8" /> },
    { number: "12", label: "Years Engineering Experience", icon: <Star className="w-8 h-8" /> }
  ];



  
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = (id) => 
    `transform transition-all duration-1000 ease-out ${
      isVisible[id] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`;

  const staggeredFadeIn = (id, delay) => 
    `transform transition-all duration-1000 ease-out ${
      isVisible[id] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`;


  useEffect(() => {
    if (testimonials.length > 0) {
      // kuch kaam
    }
  }, [testimonials.length]); // ✅ Ab warning nahi aayegi

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900 font-sans overflow-hidden">
      {/* Navigation */}

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-pink-500/10 to-purple-500/10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
      {dots.map((style, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full animate-pulse"
          style={style}
        />
      ))}
    </div>

        {/* CrowdCanvas walking figures */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <CrowdCanvas />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center -translate-y-12 sm:-translate-y-16 md:-translate-y-24">
          <div className="flex flex-col items-center justify-center text-center">
            <BoxReveal boxColor={"#db2777"} duration={0.5} width="100%">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-pulse text-center">
              Fullstack Software & AI Engineering
            </h1>
            </BoxReveal>
            <BoxReveal boxColor={"#db2777"} duration={0.5} width="100%">
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto text-center leading-relaxed">
              From concept to code — fullstack web & mobile apps, LLM fine-tuning, web scraping, cloud deployment, and embedded hardware integration.
              <span className="text-red-600 font-semibold"> Scalable software built for production.</span>
            </p>
            </BoxReveal>
            <BoxReveal boxColor={"#db2777"} duration={0.5} width="100%">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={'/contact'}>
              <button className="group bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </Link>
            </div>
            </BoxReveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-red-500" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white w-full overflow-hidden">
        <div className="w-full px-0 sm:px-0 lg:px-0">
          <div className={`text-center mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${fadeInUp('services')}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text ">
              <SparklesText>Our Developer & AI Services</SparklesText>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end fullstack engineering, AI model fine-tuning, cloud infrastructure, and hardware-software integration solutions
            </p>
          </div>


<DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
  <p className="absolute top-1/2 mx-auto max-w-lg -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
    Concept to Code — Engineering for Enterprise Scale.
  </p>

  {ourServices.map((item, index) => (
    <DraggableCardBody key={index} className={item.className}>
      <img
        src={item.src}
        alt={item.name}
        className="pointer-events-none relative z-10 h-80 w-80 object-cover"
      />
      <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
        {item.name}
      </h3>
      <p className="mt-1 text-center text-sm text-neutral-500 dark:text-neutral-400 max-w-xs px-2">
        {item.description}
      </p>
    </DraggableCardBody>
  ))}
</DraggableCardContainer>


        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${fadeInUp('portfolio')}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Featured <span className="text-red-600">Engineering</span> Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing production software systems, fine-tuned AI models, and scalable cloud architectures
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[
              {
                title: "CityWeaver Platform",
                link: "https://cityweaver.in/",
                category: "Smart City & Urban Governance",
                description: "Enterprise smart city portal and GIS infrastructure platform delivering real-time spatial data visualization, urban planning analytics, and municipal workflow automation.",
                techStack: ["Next.js", "GeoJSON / GIS", "Node.js", "PostgreSQL"],
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
                techStack: ["React", "WebSockets", "TailwindCSS", "Node.js"],
                images: [
                  "/teaching/1.jpeg",
                  "/teaching/2.jpeg",
                  "/teaching/3.jpeg",
                ]
              }
            ].map((project, index) => (
              <div key={index} className={staggeredFadeIn('portfolio', index * 100)}>
                <ProjectCarouselCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>







      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
          <div className={`text-center mb-6 ${fadeInUp('testimonials')}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Our <span className="text-red-600">Clients Say</span>
            </h2>
          </div>

          <div className="h-10rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="left"
              speed="normal"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProfessionalWebsite;