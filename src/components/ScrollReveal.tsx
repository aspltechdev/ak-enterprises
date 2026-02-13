"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
}

export const ScrollReveal = ({ children, width = "100%", delay = 0.2 }: ScrollRevealProps) => {
    return (
        <div style={{ position: "relative", width, overflow: "visible" }}>
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                        duration: 0.8,
                        delay: delay,
                        ease: [0.21, 0.47, 0.32, 0.98] // Out quint for that "lazy lag" smooth feel
                    }
                }}
                viewport={{ once: true, margin: "-100px" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
