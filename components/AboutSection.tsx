'use client';

import { motion } from 'framer-motion';
import ScrollTextReveal from './ScrollTextReveal';

export default function AboutSection() {
    return (
        <section id="about" className="relative z-10 bg-black min-h-screen p-8 md:p-20 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
                {/* Left Side: Sticky Heading */}
                <div className="lg:w-1/3">
                    <div className="sticky top-40">
                        <div className="overflow-hidden mb-6">
                            <motion.span
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                                viewport={{ once: true }}
                                className="block text-aramco-teal text-[10px] uppercase tracking-[0.5em] font-display font-bold"
                            >
                                IDENTITY
                            </motion.span>
                        </div>
                        <h2 className="text-7xl md:text-[8vw] font-display font-bold tracking-tighter leading-[0.85] uppercase">
                            ABOUT <br />
                            <span className="text-transparent border-t-0 bg-clip-text bg-gradient-to-b from-white to-zinc-800">ME</span>
                        </h2>

                        <div className="mt-20 hidden lg:block">
                            <div className="w-px h-60 bg-gradient-to-b from-white/20 to-transparent" />
                        </div>
                    </div>
                </div>

                {/* Right Side: Narrative */}
                <div className="lg:w-2/3">
                    <ScrollTextReveal
                        className="!py-0 !px-0 !max-w-none"
                        text="BASED IN THE DIGITAL FRONTIER, I SPECIALIZE IN CRAFTING IMMERSIVE EXPERIENCES WHERE ART MEETS CODE. AS A BCA STUDENT AND TECH ENTHUSIAST, I AM CONSTANTLY EXPLORING THE BOUNDARIES OF WEB DEVELOPMENT, PYTHON, AND NODE.JS. MY PHILOSOPHY IS SIMPLE: EVERY PIXEL SHOULD SERVE A PURPOSE, AND EVERY INTERACTION SHOULD TELL A STORY. FROM HEAVEN TO HORIZON, I BUILD THE FUTURE, ONE BRACKET AT A TIME."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-40">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-white/40 uppercase tracking-widest text-xs mb-6 font-display">Specialties</h4>
                            <ul className="space-y-4 text-2xl font-display font-light">
                                <li>Frontend Mastery</li>
                                <li>Creative Direction</li>
                                <li>System Architecture</li>
                                <li>Motion Design</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-white/40 uppercase tracking-widest text-xs mb-6 font-display">Stack</h4>
                            <ul className="space-y-4 text-2xl font-display font-light">
                                <li>Next.js / TypeScript</li>
                                <li>Framer Motion / GSAP</li>
                                <li>Python / Node.js</li>
                                <li>Tailwind / CSS-in-JS</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
