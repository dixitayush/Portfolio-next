"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Education() {
    return (
        <section id="education" className="py-32 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/50">
            {/* Background Effects */}
            <div className="absolute inset-0 gradient-mesh opacity-20 -z-10" />
            <motion.div
                className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-sky-400/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
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
                        <GraduationCap className="text-blue-500" size={24} />
                        <h2 className="text-5xl font-bold text-gradient">Education</h2>
                    </motion.div>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 mx-auto rounded-full shadow-lg" />
                    <p className="mt-6 text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        My academic background and certifications
                    </p>
                </motion.div>

                {/* Education Cards */}
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
                        >
                            <motion.div
                                className="group relative"
                                whileHover={{ scale: 1.02, y: -8 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Hover Glow */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                                {/* Card */}
                                <div className="relative glass-card rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-white/30 dark:border-white/10 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                                    {/* Icon */}
                                    <motion.div
                                        className="p-5 glass-strong rounded-2xl text-blue-600 dark:text-blue-400 flex-shrink-0 shadow-lg"
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <GraduationCap size={40} />
                                    </motion.div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-gradient transition-all">
                                            {edu.institution}
                                        </h3>
                                        <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent mb-4">
                                            {edu.degree}
                                        </p>
                                        <div className="flex flex-col md:flex-row gap-3 text-slate-500 dark:text-slate-400 text-sm justify-center md:justify-start flex-wrap">
                                            <div className="flex items-center gap-2 px-3 py-1.5 glass-card rounded-full shadow">
                                                <Calendar size={14} />
                                                <span>{edu.start_date} - {edu.end_date}</span>
                                            </div>
                                            <div className="px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-bold shadow-lg shadow-emerald-500/30">
                                                CGPA: {edu.cgpa}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    </div>
                                </div>
                            </motion.div>
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
                        delay: 0.3,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <motion.div
                            className="inline-flex items-center gap-2 mb-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Award className="text-blue-500" size={22} />
                            <h3 className="text-3xl font-bold text-gradient">Certifications</h3>
                            <Sparkles className="text-cyan-500" size={22} />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {portfolioData.certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.05, x: 8 }}
                            >
                                <div className="group relative">
                                    {/* Mini glow */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-sky-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

                                    {/* Card */}
                                    <div className="relative glass-card p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3 border border-white/20 dark:border-white/10">
                                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full flex-shrink-0 shadow-lg shadow-blue-500/50 group-hover:scale-125 transition-transform" />
                                        <span className="text-slate-700 dark:text-slate-300 font-semibold flex-1">
                                            {cert}
                                        </span>
                                        <Award size={18} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section >
    );
}
