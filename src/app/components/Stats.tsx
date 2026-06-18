"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData, skillIconMap } from "../data/portfolio";
import AnimatedCounter from "./ui/AnimatedCounter";

const marqueeTech = [
    "Java", "Spring Boot", "TypeScript", "Next.js", "React", "Rust", "Node.js",
    "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "GraphQL",
    "Python", "FastAPI", "Tauri", "Microservices",
];

export default function Stats() {
    return (
        <section id="stats" className="relative py-16 border-y border-slate-200/60 dark:border-white/[0.06] bg-slate-50/50 dark:bg-[#050505] overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Counters */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-14">
                    {portfolioData.stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-gradient mb-1 tracking-tight">
                                <AnimatedCounter value={s.value} suffix={s.suffix} />
                            </div>
                            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">{s.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Tech marquee */}
            <div className="marquee-pause fade-x relative w-full overflow-hidden">
                <div className="flex w-max animate-marquee gap-3" style={{ ["--marquee-duration" as string]: "45s" }}>
                    {[...marqueeTech, ...marqueeTech].map((tech, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-white/[0.04] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06] whitespace-nowrap"
                        >
                            {skillIconMap[tech] && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={skillIconMap[tech]} alt={tech} width={16} height={16} className="flex-shrink-0" />
                            )}
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
