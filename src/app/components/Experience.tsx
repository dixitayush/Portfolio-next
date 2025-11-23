"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
    return (
        <section id="experience" className="py-12 bg-slate-50 dark:bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800" />

                    <div className="space-y-12">
                        {portfolioData.experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    } gap-8`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full border-4 border-white dark:border-black shadow-md z-10 mt-1.5" />

                                {/* Content */}
                                <div className="ml-8 md:ml-0 md:w-1/2">
                                    <div className={`bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                                        }`}>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.title}</h3>
                                        <h4 className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">{exp.company}</h4>

                                        <div className={`flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'
                                            }`}>
                                            <div className="flex items-center gap-1">
                                                <Calendar size={16} />
                                                <span>{exp.start_date} - {exp.end_date}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin size={16} />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>

                                        <ul className={`space-y-2 text-slate-600 dark:text-slate-300 text-sm list-disc list-inside ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'
                                            }`}>
                                            {exp.responsibilities.map((resp, idx) => (
                                                <li key={idx} className="leading-relaxed">
                                                    {resp}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

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
