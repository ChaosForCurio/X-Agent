'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

export default function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const words = children.split(" ");

    return (
        <div ref={ref} className={className}>
            <span className="sr-only">{children}</span>
            <motion.div aria-hidden="true" initial="hidden" animate={isInView ? "visible" : "hidden"}>
                {words.map((word, i) => (
                    <span key={i} className="inline-block whitespace-nowrap mr-[0.25em] overflow-hidden align-top">
                        <motion.span
                            className="inline-block"
                            variants={{
                                hidden: { y: "100%" },
                                visible: { y: 0 }
                            }}
                            transition={{
                                duration: 0.75,
                                delay: delay + i * 0.05,
                                ease: [0.33, 1, 0.68, 1] // Custom quint-like easing
                            }}
                        >
                            {word}
                        </motion.span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
