"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Hero = () => {
    return (
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            {/* Spotlight Effect */}
            <div className="absolute h-full w-full flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neutral-950 to-neutral-500 opacity-20 blur-3xl transform -translate-y-1/2" />
            </div>

            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
                >
                    Master the Art of <br /> Agentic Coding.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto"
                >
                    X-Agent allows you to build sophisticated AI agents with ease.
                    Experience the future of coding with our state-of-the-art platform.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    className="mt-8 flex justify-center gap-4"
                >
                    <button className="bg-neutral-200 dark:bg-neutral-50 text-neutral-900 rounded-full px-8 py-3 font-semibold hover:bg-white transition-colors">
                        Get Started
                    </button>
                    <button className="bg-transparent border border-neutral-700 text-neutral-300 rounded-full px-8 py-3 font-semibold hover:bg-neutral-900 transition-colors">
                        Learn More
                    </button>
                </motion.div>
            </div>
        </div>
    );
};
