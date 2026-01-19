'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    image?: string;
    tags?: string[];
    index: number;
}

export default function ProjectCard({ title, description, link, image, tags, index }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    const imageUrl = image || `https://picsum.photos/seed/${index + 10}/800/500`;

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!imageContainerRef.current || !isHovered) return;

            const { clientX, clientY } = e;

            // Smoother magnetic follow with rotation
            gsap.to(imageContainerRef.current, {
                x: clientX,
                y: clientY,
                rotate: (clientX - window.innerWidth / 2) * 0.01,
                duration: 1,
                ease: "expo.out"
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isHovered]);

    // Split title into characters
    const characters = title.split("");

    return (
        <motion.div
            initial={{ opacity: 0, borderTopColor: "rgba(255,255,255,0.1)" }}
            whileInView={{ opacity: 1, borderTopColor: "rgba(255,255,255,0.2)" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative w-full border-t py-16 md:py-24 transition-colors duration-700 cursor-none"
        >
            {/* Premium Floating Image Reveal */}
            <div
                ref={imageContainerRef}
                className="fixed top-0 left-0 w-[30vmax] aspect-video z-50 pointer-events-none rounded-xl overflow-hidden hidden md:block"
                style={{
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
            >
                <div className="relative w-full h-full overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover scale-125 group-hover:scale-100 transition-transform duration-[1.5s] ease-out"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                </div>
            </div>

            <Link href={link} target="_blank" className="block relative z-10 px-4 md:px-0">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
                    <h3 ref={titleRef} className="text-[8vw] md:text-[6.5vw] font-display font-medium tracking-tighter leading-none flex flex-wrap">
                        {characters.map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: (index * 0.1) + (i * 0.02),
                                    ease: [0.33, 1, 0.68, 1]
                                }}
                                viewport={{ once: true }}
                                className="inline-block"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </h3>

                    <div className="flex gap-3 flex-wrap md:mb-4">
                        {tags?.map((tag, i) => (
                            <span key={i} className="px-5 py-2 text-[10px] border border-white/10 rounded-full text-white/40 uppercase tracking-[0.2em] font-display hover:bg-white hover:text-black hover:border-white transition-all duration-500">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 overflow-hidden">
                    <p className="text-white/30 max-w-2xl text-xl md:text-2xl font-light leading-snug group-hover:text-white/80 transition-colors duration-700">
                        {description}
                    </p>
                    <div className="overflow-hidden">
                        <motion.span
                            className="text-2xl inline-block translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.33,1,0.68,1] italic font-display border-b border-white"
                        >
                            EXPLORE PROJECT
                        </motion.span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
