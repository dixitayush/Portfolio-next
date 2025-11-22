"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function Skills() {
    const categories = [
        { title: "Languages", skills: portfolioData.skills.languages },
        { title: "Frameworks & Tools", skills: portfolioData.skills.frameworks_tools },
        { title: "Other", skills: portfolioData.skills.other },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <section id="skills" className="py-20 bg-slate-50 dark:bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">{category.title}</h3>
                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-3 justify-center"
                            >
                                {category.skills.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        variants={item}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        className="px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium shadow-sm hover:border-indigo-300 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-md transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
