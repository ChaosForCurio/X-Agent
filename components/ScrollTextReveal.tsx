'use client';

import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface ScrollTextRevealProps {
    text: string;
    className?: string;
}

export default function ScrollTextReveal({ text, className = "" }: ScrollTextRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "end 0.2"]
    });

    const words = text.split(" ");

    return (
        <div ref={containerRef} className={`relative z-10 py-40 px-6 md:px-20 max-w-7xl mx-auto ${className}`}>
            <p className="text-4xl md:text-7xl font-display font-bold leading-[1.1] tracking-tighter flex flex-wrap gap-x-4 gap-y-2">
                {words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + (1 / words.length);
                    return (
                        <Word key={i} progress={scrollYProgress} range={[start, end]}>
                            {word}
                        </Word>
                    );
                })}
            </p>
        </div>
    );
}

interface WordProps {
    children: string;
    progress: any;
    range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
    const opacity = useTransform(progress, range, [0.15, 1]);

    // Character splitting for more granular effect if needed, but word-based is cleaner for paragraphs
    return (
        <motion.span
            style={{ opacity }}
            className="text-white relative"
        >
            {children}
        </motion.span>
    );
}
