'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    tags?: string[];
    index: number;
}

export default function ProjectCard({ title, description, link, tags, index }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const imageContainerRef = useRef<HTMLDivElement>(null);

    // Placeholder images for demo purposes - in a real app these would be props
    const imageUrl = `https://picsum.photos/seed/${index + 1}/600/400`;

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!imageContainerRef.current || !isHovered) return;

            const { clientX, clientY } = e;
            // Move the image container near the mouse
            // We can use gsap.to for smooth follow
            gsap.to(imageContainerRef.current, {
                x: clientX,
                y: clientY,
                duration: 0.8,
                ease: "power3.out"
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isHovered]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative w-full border-t border-white/20 py-12 transition-colors duration-500 cursor-none" // cursor-none because of custom cursor
        >
            {/* Floating Image Reveal */}
            <div
                ref={imageContainerRef}
                className="fixed top-0 left-0 w-[400px] h-[250px] z-50 pointer-events-none rounded-lg overflow-hidden hidden md:block mix-blend-difference"
                style={{
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.4s ease",
                    transform: "translate(-50%, -50%) rotate(-5deg)"
                }}
            >
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                />
            </div>

            <Link href={link} target="_blank" className='block space-y-4 px-4 md:px-0 relative z-10'>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <h3 className="text-4xl md:text-6xl font-light tracking-tighter text-white group-hover:text-gray-400 transition-colors duration-500">
                        {title}
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                        {tags?.map((tag, i) => (
                            <span key={i} className="px-3 py-1 text-xs border border-white/20 rounded-full text-white/60 uppercase tracking-widest bg-black/50 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors duration-500">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between items-end">
                    <p className="text-white/60 max-w-xl text-lg font-light leading-relaxed group-hover:text-white transition-colors duration-500">
                        {description}
                    </p>
                    <div className="hidden md:block overflow-hidden">
                        <span className="text-xl inline-block -translate-x-[150%] group-hover:translate-x-0 transition-transform duration-500 italic font-serif">
                            View Case Study
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
