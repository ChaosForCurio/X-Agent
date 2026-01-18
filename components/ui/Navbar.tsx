"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useMotionValueEvent(scrollY, "change", (current) => {
        if (typeof current === "number") {
            if (current > lastScrollY && current > 50) {
                setVisible(false);
            } else {
                setVisible(true);
            }
            setLastScrollY(current);
        }
    });

    return (
        <motion.div
            initial={{
                y: -100,
                opacity: 0,
            }}
            animate={{
                y: visible ? 0 : -100,
                opacity: visible ? 1 : 0,
            }}
            transition={{
                duration: 0.2,
            }}
            className={cn(
                "fixed z-50 top-10 inset-x-0 mx-auto max-w-2xl px-6 py-3 rounded-full border border-neutral-200/50 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md shadow-lg flex items-center justify-between",
            )}
        >
            <Link href="/" className="font-bold text-xl tracking-tighter text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                <div className="w-8 h-8 bg-neutral-900 dark:bg-white rounded-lg flex items-center justify-center">
                    <span className="text-white dark:text-black text-sm">X</span>
                </div>
                X-Agent
            </Link>

            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-300">
                <Link href="#features" className="hover:text-black dark:hover:text-white transition-colors">Features</Link>
                <Link href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</Link>
                <Link href="#pricing" className="hover:text-black dark:hover:text-white transition-colors">Pricing</Link>
            </div>

            <div className="flex items-center gap-2">
                <button className="px-4 py-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-sm font-semibold hover:opacity-90 transition-opacity">
                    Get Started
                </button>
            </div>
        </motion.div>
    );
};
