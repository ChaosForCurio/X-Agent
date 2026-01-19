'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader() {
    const [complete, setComplete] = useState(false);
    const pathRef = useRef<SVGPathElement>(null);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Lock scroll initially
        document.body.style.overflow = 'hidden';

        const tl = gsap.timeline({
            onComplete: () => {
                setComplete(true);
                document.body.style.overflow = ''; // Unlock scroll
                window.scrollTo(0, 0);
            }
        });

        const counter = { value: 0 };
        const path = pathRef.current;

        // 1. Counter Animation
        tl.to(counter, {
            value: 100,
            duration: 1.5,
            ease: "power2.inOut",
            onUpdate: () => {
                if (counterRef.current) {
                    counterRef.current.textContent = Math.round(counter.value).toString() + "%";
                }
            }
        })
            .to(counterRef.current, {
                opacity: 0,
                y: -50,
                duration: 0.4,
                ease: "power2.in"
            });

        // 2. Curtain Reveal Animation
        // Initial state is full coverage: M0 0 L100 0 L100 100 Q50 100 0 100 Z

        // Stage 1: Pull the bottom curve up slightly to create tension
        tl.to(path, {
            attr: { d: "M0 0 L100 0 L100 80 Q50 120 0 80 Z" },
            duration: 0.4,
            ease: "power2.in",
        }, "-=0.2") // Overlap with counter fade out

            // Stage 2: Rapidly shoot up to reveal content
            .to(path, {
                attr: { d: "M0 0 L100 0 L100 0 Q50 0 0 0 Z" },
                duration: 0.8,
                ease: "power4.out",
            });

    }, []);

    if (complete) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
            {/* Background SVG Overlay */}
            <div className="absolute inset-0 w-full h-full pointer-events-auto">
                <svg className="w-full h-[calc(100vh+100px)] -top-[50px] absolute fill-[#141414]" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path ref={pathRef} d="M0 0 L100 0 L100 100 Q50 100 0 100 Z" />
                </svg>
            </div>

            {/* Counter */}
            <div className="relative z-20 overflow-hidden mix-blend-difference">
                <h1 ref={counterRef} className="text-[12vw] font-bold tracking-tighter text-white tabular-nums opacity-100 font-sans">
                    0%
                </h1>
            </div>
        </div>
    );
}
