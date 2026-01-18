"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Marquee = ({
    items,
    direction = "left",
    speed = 50,
    className
}: {
    items: string[];
    direction?: "left" | "right";
    speed?: number;
    className?: string;
}) => {
    return (
        <div className={cn("overflow-hidden flex w-full", className)}>
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: direction === "left" ? "-100%" : "100%" }}
                transition={{ ease: "linear", duration: speed, repeat: Infinity }}
                className="flex flex-shrink-0"
            >
                {items.map((item, idx) => (
                    <div key={idx} className="px-8 text-neutral-500 font-medium text-xl whitespace-nowrap">
                        {item}
                    </div>
                ))}
            </motion.div>
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: direction === "left" ? "-100%" : "100%" }}
                transition={{ ease: "linear", duration: speed, repeat: Infinity }}
                className="flex flex-shrink-0"
            >
                {items.map((item, idx) => (
                    <div key={`dup-${idx}`} className="px-8 text-neutral-500 font-medium text-xl whitespace-nowrap">
                        {item}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
