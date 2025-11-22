"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-black">
            {/* Animated Background Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-400 to-violet-600 rounded-full blur-3xl opacity-20 dark:opacity-10"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -90, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-violet-400 to-fuchsia-600 rounded-full blur-3xl opacity-20 dark:opacity-10"
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-medium text-sm mb-6">
                            Available for new opportunities
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-6"
                    >
                        Hi, I'm{' '}
                        <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent animate-gradient">
                            {portfolioData.name}
                        </span>
                        <br />
                        <span className="text-slate-400 dark:text-slate-500">Software Engineer</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed"
                    >
                        {portfolioData.summary}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-4 items-center mb-12"
                    >
                        <Link
                            href={portfolioData.linkedin}
                            target="_blank"
                            className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-600 dark:hover:border-indigo-400 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                        >
                            <Linkedin size={24} />
                        </Link>
                        <Link
                            href={portfolioData.github}
                            target="_blank"
                            className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-600 dark:hover:border-indigo-400 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                        >
                            <Github size={24} />
                        </Link>
                        <Link
                            href={`mailto:${portfolioData.email}`}
                            className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-600 dark:hover:border-indigo-400 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                        >
                            <Mail size={24} />
                        </Link>

                        <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-300">
                            <MapPin size={18} className="text-indigo-500" />
                            <span className="text-sm font-medium">{portfolioData.location}</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex gap-4"
                    >
                        <Link
                            href="#projects"
                            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full font-bold hover:shadow-xl hover:shadow-indigo-500/50 transition-all transform hover:-translate-y-1 hover:scale-105"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="#"
                            className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-full font-bold hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-sm hover:shadow-md flex items-center gap-2 transform hover:-translate-y-1"
                        >
                            <Download size={20} />
                            Download CV
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
