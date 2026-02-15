"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData, skillIconMap } from '../data/portfolio';

export default function Skills() {
    // Flatten all skills into a single array
    const allSkills = [
        ...portfolioData.skills.languages,
        ...portfolioData.skills.frameworks_tools,
        ...portfolioData.skills.other,
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03
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
        <section id="skills" className="py-28 relative overflow-hidden bg-white dark:bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 gradient-mesh opacity-15 -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="mb-16 text-center"
                >
                    <p className="text-emerald-500 font-medium text-sm tracking-widest uppercase mb-3">Expertise</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Tech <span className="text-gradient">Stack</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-3 justify-center max-w-5xl mx-auto"
                >
                    {allSkills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            whileHover={{
                                scale: 1.08,
                                y: -4,
                            }}
                            className="group"
                        >
                            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium bg-slate-50 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06] hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-all duration-300 cursor-default hover:shadow-md hover:shadow-emerald-500/5">
                                {skillIconMap[skill] ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={skillIconMap[skill]}
                                        alt={skill}
                                        width={20}
                                        height={20}
                                        className="flex-shrink-0"
                                    />
                                ) : (
                                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex-shrink-0" />
                                )}
                                <span>{skill}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
