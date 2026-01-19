'use client';

import SmoothScroll from '@/components/SmoothScroll';
import Hero3D from '@/components/Hero3D';
import ProjectCard from '@/components/ProjectCard';
import MagneticButton from '@/components/MagneticButton';
import CustomCursor from '@/components/CustomCursor';
import TextReveal from '@/components/TextReveal';
import Preloader from '@/components/Preloader';
import InfiniteMarquee from '@/components/InfiniteMarquee';
import GrainOverlay from '@/components/GrainOverlay';
import ScrollTextReveal from '@/components/ScrollTextReveal';
import AboutSection from '@/components/AboutSection';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: 'E-Commerce Reimagined',
    description: 'A futuristic shopping experience built with Next.js, WebGL, and Stripe integration.',
    tags: ['Next.js', 'WebGL', 'Stripe'],
    link: 'https://github.com/visheshnagar7878',
    image: '/image/ac.png',
  },
  {
    title: 'AI Dashboard',
    description: 'Real-time analytics platform powered by machine learning and socket.io.',
    tags: ['React', 'Python', 'Socket.io'],
    link: 'https://github.com/visheshnagar7878',
    image: '/image/mc.jpg',
  },
  {
    title: 'Portfolio 2025',
    description: 'Award-winning personal portfolio showcasing creative development skills.',
    tags: ['Three.js', 'GSAP', 'Tailwind'],
    link: 'https://github.com/visheshnagar7878',
    image: '/image/bc.jpg',
  },
  {
    title: 'Social Connect',
    description: 'Decentralized social media application focused on privacy and ownership.',
    tags: ['Web3', 'Solidity', 'Next.js'],
    link: 'https://github.com/visheshnagar7878',
    image: '/image/og.png',
  },
];

export default function Home() {
  const containerRef = useRef(null);

  return (
    <SmoothScroll>
      <Preloader />
      <CustomCursor />
      <GrainOverlay />

      <main ref={containerRef} className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-hidden cursor-none font-sans">

        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference">
          <MagneticButton>
            <div className="text-xl font-display font-bold tracking-tighter cursor-pointer hover:scale-110 transition-transform">VN.</div>
          </MagneticButton>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest opacity-80 font-display">
            {['Work', 'About', 'Contact'].map((item) => (
              <MagneticButton key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:opacity-100 transition-opacity block px-4 py-2">{item}</a>
              </MagneticButton>
            ))}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <Hero3D /> {/* Background 3D Scene */}

          <div className="relative z-10 text-center px-4 pointer-events-none select-none">
            <div className="overflow-hidden flex flex-col items-center">
              <TextReveal className="text-[12vw] leading-[0.85] font-display font-bold tracking-tighter uppercase mix-blend-overlay opacity-90">
                Creative
              </TextReveal>
              <TextReveal className="text-[12vw] leading-[0.85] font-display font-bold tracking-tighter uppercase mix-blend-overlay opacity-90" delay={0.3}>
                Developer
              </TextReveal>
            </div>
            <div className="mt-8 text-xl md:text-2xl font-light tracking-wide text-white/50 max-w-2xl mx-auto backdrop-blur-sm">
              <TextReveal delay={0.6}>
                Creating digital experiences that merge art, code, and interaction.
              </TextReveal>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.2em] text-white/40 animate-pulse font-display">
            Scroll to Explore
          </div>
        </section>

        {/* Infinite Marquee Strip */}
        <section className="py-20 bg-black relative z-10 rotate-[-2deg] scale-110">
          <InfiniteMarquee speed={0.8}>
            LATEST TRENDS  •  CREATIVE CODING  •  INTERACTIVE DESIGN  •  NEXT.JS POWER
          </InfiniteMarquee>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Selected Works Section */}
        <section id="work" className="relative z-10 px-6 py-32 md:px-20 bg-black">
          <div className="mb-20 border-b border-white/20 pb-8 flex justify-between items-end">
            <h2 className="text-6xl md:text-8xl font-display font-light tracking-tighter overflow-hidden">
              <TextReveal delay={0.2}>Selected Works</TextReveal>
            </h2>
            <span className="text-xl md:text-2xl text-white/40 block pb-2 font-display">(04)</span>
          </div>

          <div className="flex flex-col">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} index={index} {...project} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <section id="contact" className="relative z-10 py-32 bg-zinc-950 text-center">
          <div className="overflow-hidden">
            <TextReveal className="text-[10vw] font-display font-bold tracking-tighter leading-none text-zinc-900 pointer-events-none select-none">
              LET'S TALK
            </TextReveal>
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <MagneticButton strength={0.3}>
              <a href="mailto:hello@example.com" className="text-2xl md:text-4xl font-display hover:underline underline-offset-8 decoration-1 inline-block px-8 py-4 bg-white text-black rounded-full hover:scale-105 transition-transform">
                Get in touch
              </a>
            </MagneticButton>
          </div>
          <div className="absolute bottom-8 w-full flex justify-between px-8 text-zinc-600 text-sm uppercase font-display">
            <span>&copy; 2026 Vishesh Nagar</span>
            <span>FROM HEAVEN TO HORIZON</span>
          </div>
        </section>

      </main>
    </SmoothScroll>
  );
}
