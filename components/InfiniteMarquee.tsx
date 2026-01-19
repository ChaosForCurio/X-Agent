'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface InfiniteMarqueeProps {
    children: string;
    direction?: 'left' | 'right';
    speed?: number;
}

export default function InfiniteMarquee({ children, direction = 'left', speed = 50 }: InfiniteMarqueeProps) {
    const firstPartRef = useRef<HTMLDivElement>(null);
    const secondPartRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const firstPart = firstPartRef.current;
        const secondPart = secondPartRef.current;

        if (!container || !firstPart || !secondPart) return;

        // Calculate the width of one part
        const partWidth = firstPart.offsetWidth;

        // GSAP Seamless Loop
        // We move the container by the width of one part, then reset instantly
        const totalDistance = partWidth;
        const duration = totalDistance / speed;

        const tl = gsap.timeline({ repeat: -1 });

        tl.to([firstPart, secondPart], {
            xPercent: direction === 'left' ? -100 : 100,
            duration: duration,
            ease: "none",
            modifiers: {
                xPercent: (xPercent: string) => {
                    const val = parseFloat(xPercent);
                    // Use modulo to wrap around 100% seamlessly
                    return direction === 'left'
                        ? (val % 100).toString() + "%"
                        : ((val % 100 + 100) % 100 - 100).toString() + "%";
                }
            }
        });

        // Simpler approach that works better for most marquees:
        // Move from 0 to -100% (if left) then reset.
        const animation = gsap.to(container, {
            x: direction === 'left' ? -partWidth : 0,
            duration: duration,
            ease: "none",
            repeat: -1,
            onReverseComplete: () => {
                gsap.set(container, { x: 0 });
            }
        });

        return () => {
            animation.kill();
        };
    }, [direction, speed, children]);

    const content = (
        <div className="flex gap-8 items-center px-4">
            {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent stroke-text hover:text-white transition-colors duration-300 select-none whitespace-nowrap">
                    {children} &nbsp; • &nbsp;
                </span>
            ))}
        </div>
    );

    return (
        <div className="overflow-hidden w-full py-8 border-y border-white/10 bg-black/50 backdrop-blur-sm relative">
            <div ref={containerRef} className="flex w-max relative items-center">
                <div ref={firstPartRef} className="flex flex-nowrap">
                    {content}
                </div>
                <div ref={secondPartRef} className="flex flex-nowrap">
                    {content}
                </div>
            </div>
            <style jsx>{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
                }
            `}</style>
        </div>
    );
}
