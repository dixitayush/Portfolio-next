"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
    return (
        <section id="experience" className="py-28 relative overflow-hidden bg-slate-50/50 dark:bg-[#050505]">
            {/* Background Effects */}
            <div className="absolute inset-0 gradient-mesh opacity-10 -z-10" />

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
                    <p className="text-emerald-500 font-medium text-sm tracking-widest uppercase mb-3">Career</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        My professional journey and key achievements
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {portfolioData.experience.map((exp, index) => (
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
                            className="group"
                        >
                            <div className="relative rounded-2xl p-8 border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/5">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 flex-shrink-0 mt-1">
                                            <Briefcase size={22} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-gradient transition-all duration-300">
                                                {exp.title}
                                            </h3>
                                            <p className="text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                                                {exp.company}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 md:flex-shrink-0">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/[0.04] text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/[0.06]">
                                            <Calendar size={12} />
                                            {exp.start_date} - {exp.end_date}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/[0.04] text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/[0.06]">
                                            <MapPin size={12} />
                                            {exp.location}
                                        </span>
                                    </div>
                                </div>

                                {/* Responsibilities */}
                                <ul className="space-y-2.5 ml-1">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <motion.li
                                            key={idx}
                                            className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.03 }}
                                        >
                                            <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                                            <span>{resp}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
