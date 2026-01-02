"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Skills() {
    const categories = [
        { title: "Languages", skills: portfolioData.skills.languages, icon: "💻" },
        { title: "Frameworks & Tools", skills: portfolioData.skills.frameworks_tools, icon: "🛠️" },
        { title: "Other", skills: portfolioData.skills.other, icon: "✨" },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8, y: 10 },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 20,
                stiffness: 300
            }
        }
    };

    return (
        <section id="skills" className="py-32 relative overflow-hidden bg-white dark:bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 gradient-mesh opacity-20 -z-10" />
            <motion.div
                className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-sky-400/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="mb-20 text-center"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 mb-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Code2 className="text-blue-500" size={24} />
                        <h2 className="text-5xl font-bold text-gradient">Technical Skills</h2>
                        <Sparkles className="text-cyan-500" size={24} />
                    </motion.div>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 mx-auto rounded-full shadow-lg" />
                    <p className="mt-6 text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Technologies and tools I work with
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <div className="group relative h-full">
                                {/* Hover Glow */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                                {/* Card */}
                                <div className="relative glass-card rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-white/30 dark:border-white/10 h-full flex flex-col">
                                    {/* Icon and Title */}
                                    <div className="text-center mb-8">
                                        <motion.div
                                            className="text-6xl mb-4"
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: [0, -10, 10, -10, 0]
                                            }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {category.icon}
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-gradient">
                                            {category.title}
                                        </h3>
                                    </div>

                                    {/* Skills */}
                                    <motion.div
                                        variants={container}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                        className="flex flex-wrap gap-2 justify-center flex-1 content-start"
                                    >
                                        {category.skills.map((skill, idx) => (
                                            <motion.span
                                                key={idx}
                                                variants={item}
                                                whileHover={{
                                                    scale: 1.15,
                                                    y: -4,
                                                    rotate: [0, -5, 5, 0]
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                                className="px-4 py-2 glass-strong rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all cursor-default relative overflow-hidden group/skill border border-white/20 dark:border-white/10"
                                            >
                                                <span className="relative z-10 bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent group-hover/skill:from-blue-600 group-hover/skill:to-sky-600 transition-all">
                                                    {skill}
                                                </span>
                                                {/* Hover gradient background */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-sky-500/10 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                                            </motion.span>
                                        ))}
                                    </motion.div>

                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
