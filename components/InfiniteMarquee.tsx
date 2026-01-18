'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface InfiniteMarqueeProps {
    children: string;
    direction?: 'left' | 'right';
    speed?: number;
}

export default function InfiniteMarquee({ children, direction = 'left', speed = 0.5 }: InfiniteMarqueeProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Clone child to ensure seamless loop if it's not wide enough
        // Ideally we would duplicate content multiple times based on viewport width

        let xPercent = 0;
        const animate = () => {
            if (xPercent <= -100) {
                xPercent = 0;
            }
            if (xPercent > 0) {
                xPercent = -100;
            }

            gsap.set(container, { xPercent: xPercent });
            xPercent += direction === 'left' ? -speed : speed;
            requestAnimationFrame(animate);
        };

        const animation = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animation);
    }, [direction, speed]);

    return (
        <div className="overflow-hidden w-full whitespace-nowrap overflow-x-hidden py-4 border-y border-white/10 bg-black/50 backdrop-blur-sm">
            <div ref={containerRef} className="flex gap-8 relative items-center">
                {/* Repeat content enough times to fill screen + overflow for loop */}
                {Array.from({ length: 10 }).map((_, i) => (
                    <span key={i} className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent stroke-text hover:text-white transition-colors duration-300 select-none">
                        {children} &nbsp; • &nbsp;
                    </span>
                ))}
            </div>
            <style jsx>{`
        .stroke-text {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
        }
      `}</style>
        </div>
    );
}
