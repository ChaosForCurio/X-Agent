'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader() {
    const [complete, setComplete] = useState(false);
    // removed unused svgRef
    const pathRef = useRef<SVGPathElement>(null);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Lock scroll
        document.body.style.overflow = 'hidden';

        // Timeline
        const tl = gsap.timeline({
            onComplete: () => {
                setComplete(true);
                document.body.style.overflow = ''; // Unlock scroll
                window.scrollTo(0, 0);
            }
        });

        const counter = { value: 0 };

        // 1. Counter Animation
        tl.to(counter, {
            value: 100,
            duration: 2,
            ease: "power2.inOut",
            onUpdate: () => {
                if (counterRef.current) {
                    counterRef.current.textContent = Math.round(counter.value).toString() + "%";
                }
            }
        })
            .to(counterRef.current, {
                opacity: 0,
                duration: 0.2,
                delay: 0.1
            });

        // 2. Curved Path Animation
        // We use a relative path logic or specific coordinates.
        // Initial Path: Full screen rectangle
        // M0 0 L100 0 L100 100 Q50 100 0 100 Z (using 0-100 coordinate space for simplicity via viewBox)

        // "Smile" Reveal: Sides go up faster than center.
        // Target 1: M0 0 L100 0 L100 50 Q50 150 0 50 Z (Deep curve)
        // Target 2: M0 0 L100 0 L100 0 Q50 0 0 0 Z (Flat top)

        tl.to(pathRef.current, {
            attr: { d: "M0 0 L100 0 L100 50 Q50 120 0 50 Z" }, // Drag down effect
            duration: 0.8,
            ease: "power3.in", // Accelerate into the pull
        })
            .to(pathRef.current, {
                attr: { d: "M0 0 L100 0 L100 0 Q50 0 0 0 Z" }, // Snap up flat
                duration: 0.4,
                ease: "power3.out", // Decelerate to stop
            });

    }, []);

    if (complete) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
            {/* Background SVG Overlay */}
            <div className="absolute inset-0 w-full h-full pointer-events-auto">
                <svg className="w-full h-[calc(100vh+100px)] fill-[#141414]" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Initial path: cover everything */}
                    <path ref={pathRef} d="M0 0 L100 0 L100 100 Q50 100 0 100 Z" />
                </svg>
            </div>

            {/* Counter */}
            <div className="relative z-20 overflow-hidden mix-blend-difference">
                <h1 ref={counterRef} className="text-[12vw] font-display font-bold tracking-tighter text-white tabular-nums">
                    0%
                </h1>
            </div>
        </div>
    );
}
