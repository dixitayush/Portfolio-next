"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Education() {
    return (
        <section id="education" className="py-20 bg-white dark:bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {portfolioData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left"
                        >
                            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                                <GraduationCap size={32} />
                            </div>

                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{edu.institution}</h3>
                                <p className="text-lg text-indigo-600 dark:text-indigo-400 font-medium mb-2">{edu.degree}</p>
                                <div className="flex flex-col md:flex-row gap-4 text-slate-500 dark:text-slate-400 text-sm justify-center md:justify-start">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        <span>{edu.start_date} - {edu.end_date}</span>
                                    </div>
                                    <div className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full font-medium">
                                        CGPA: {edu.cgpa}
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
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-3xl mx-auto mt-12"
                >
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Certifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {portfolioData.certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, x: 5 }}
                                className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-500 transition-all flex items-center gap-3"
                            >
                                <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                                <span className="text-slate-700 dark:text-slate-300 font-medium">{cert}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
