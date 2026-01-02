"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
    return (
        <section id="experience" className="py-32 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/50">
            {/* Background Effects */}
            <div className="absolute inset-0 gradient-mesh opacity-20 -z-10" />
            <motion.div
                className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-sky-400/20 rounded-full blur-3xl"
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
                        <Briefcase className="text-blue-500" size={24} />
                        <h2 className="text-5xl font-bold text-gradient">Work Experience</h2>
                    </motion.div>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 mx-auto rounded-full shadow-lg" />
                    <p className="mt-6 text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        My professional journey and key achievements
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto relative">
                    {/* Animated Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 overflow-hidden rounded-full">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-sky-500 to-cyan-500 opacity-30" />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-blue-500 via-sky-500 to-cyan-500"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            style={{ transformOrigin: 'top' }}
                        />
                    </div>

                    <div className="space-y-16">
                        {portfolioData.experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    } gap-8 md:gap-12`}
                            >
                                {/* Timeline Dot with Pulse */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 z-20">
                                    <motion.div
                                        className="relative"
                                        whileInView={{ scale: [0, 1.2, 1] }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.15 }}
                                    >
                                        {/* Outer pulse ring */}
                                        <span className="absolute inset-0 w-6 h-6 -translate-x-1 -translate-y-1">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        </span>
                                        {/* Dot */}
                                        <div className="relative w-4 h-4 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full border-4 border-white dark:border-slate-950 shadow-lg shadow-blue-500/50" />
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <motion.div
                                    className="ml-8 md:ml-0 md:w-1/2"
                                    whileHover={{ scale: 1.02, y: -8 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="group relative">
                                        {/* Hover Glow */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                                        {/* Card */}
                                        <div className={`relative glass-card rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-white/30 dark:border-white/10 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                                            }`}>
                                            {/* Icon Badge */}
                                            <motion.div
                                                className={`inline-flex p-4 glass-strong rounded-2xl text-blue-600 dark:text-blue-400 shadow-lg mb-4 ${index % 2 === 0 ? '' : 'md:float-right'
                                                    }`}
                                                whileHover={{ rotate: 360, scale: 1.1 }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                <Briefcase size={24} />
                                            </motion.div>

                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-gradient transition-all">
                                                {exp.title}
                                            </h3>
                                            <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent mb-4">
                                                {exp.company}
                                            </h4>

                                            <div className={`flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400 mb-6 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'
                                                }`}>
                                                <div className="flex items-center gap-2 px-3 py-1.5 glass-card rounded-full shadow">
                                                    <Calendar size={14} />
                                                    <span>{exp.start_date} - {exp.end_date}</span>
                                                </div>
                                                <div className="flex items-center gap-2 px-3 py-1.5 glass-card rounded-full shadow">
                                                    <MapPin size={14} />
                                                    <span>{exp.location}</span>
                                                </div>
                                            </div>

                                            <ul className={`space-y-3 text-slate-600 dark:text-slate-300 ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'
                                                }`}>
                                                {exp.responsibilities.map((resp, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        className="leading-relaxed flex items-start gap-3 group/item"
                                                        initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: idx * 0.05 }}
                                                    >
                                                        <span className={`mt-1.5 w-2 h-2 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform shadow-lg ${index % 2 === 0 ? '' : 'md:order-last'
                                                            }`} />
                                                        <span className="flex-1">{resp}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>

                                            {/* Shimmer Effect */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
