"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Education() {
    return (
        <section id="education" className="py-28 relative overflow-hidden bg-slate-50/50 dark:bg-[#050505]">
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
                    <p className="text-emerald-500 font-medium text-sm tracking-widest uppercase mb-3">Background</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Education & <span className="text-gradient">Certifications</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        My academic background and professional certifications
                    </p>
                </motion.div>

                {/* Education Card */}
                <div className="max-w-4xl mx-auto space-y-6 mb-16">
                    {portfolioData.education.map((edu, index) => (
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
                            <div className="relative rounded-2xl p-8 border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/5 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                                {/* Icon */}
                                <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-500 flex-shrink-0">
                                    <GraduationCap size={32} />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-gradient transition-all duration-300">
                                        {edu.institution}
                                    </h3>
                                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-4">
                                        {edu.degree}
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-3 text-sm justify-center md:justify-start flex-wrap">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/[0.06]">
                                            <Calendar size={12} />
                                            {edu.start_date} - {edu.end_date}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                                            CGPA: {edu.cgpa}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {portfolioData.certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.02, x: 4 }}
                                className="group"
                            >
                                <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-all duration-300">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform" />
                                    <span className="text-slate-700 dark:text-slate-300 text-sm font-medium flex-1">
                                        {cert}
                                    </span>
                                    <Award size={16} className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
