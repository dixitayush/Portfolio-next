"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Download, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="about" className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
            {/* Animated Mesh Gradient Background */}
            <div className="absolute inset-0 bg-white dark:bg-black -z-10" />
            <div className="absolute inset-0 gradient-mesh animate-mesh -z-10" />

            {/* Floating Particles */}
            <motion.div
                className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full blur-sm opacity-60"
                animate={{
                    y: [0, -30, 0],
                    x: [0, 15, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-40 right-20 w-3 h-3 bg-sky-400 rounded-full blur-sm opacity-60"
                animate={{
                    y: [0, 40, 0],
                    x: [0, -20, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-40 left-1/4 w-2 h-2 bg-cyan-400 rounded-full blur-sm opacity-60"
                animate={{
                    y: [0, -25, 0],
                    x: [0, 10, 0],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Liquid Blobs */}
            <motion.div
                className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 via-sky-400/20 to-cyan-400/20 rounded-full blur-3xl animate-blob"
                style={{ filter: 'blur(80px)' }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/20 via-sky-400/20 to-cyan-400/20 rounded-full blur-3xl animate-blob"
                style={{ filter: 'blur(80px)', animationDelay: '2s' }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="flex-1 relative max-w-sm lg:max-w-md w-full group"
                    >
                        {/* Outer Glow Ring */}
                        <div className="absolute -inset-8 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

                        {/* Rotating Gradient Border */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-full animate-border-flow opacity-75"
                            style={{ backgroundSize: '200% 200%' }}
                        />

                        {/* Glass Frame */}
                        <div className="relative aspect-square rounded-full overflow-hidden glass-strong shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-sky-500/10 to-cyan-500/10" />
                            <Image
                                src="/profile.png"
                                alt={portfolioData.name}
                                fill
                                className="object-cover relative z-10"
                                priority
                            />
                            {/* Shimmer Effect on Hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                        </div>

                        {/* Floating Sparkles */}
                        <motion.div
                            className="absolute -top-4 -right-4 text-yellow-400"
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <Sparkles size={24} className="drop-shadow-lg" />
                        </motion.div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full glass text-blue-700 dark:text-blue-300 font-medium text-sm mb-6 shadow-lg">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                Available for new opportunities
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-6"
                        >
                            Hi, I'm{' '}
                            <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent animate-gradient">
                                {portfolioData.name}
                            </span>
                            <br />
                            <span className="text-3xl md:text-5xl text-slate-500 dark:text-slate-400">Software Engineer</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.4,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0"
                        >
                            {portfolioData.summary}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.5,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="flex flex-wrap gap-4 items-center justify-center lg:justify-start mb-12"
                        >
                            <Link
                                href={portfolioData.linkedin}
                                target="_blank"
                                className="p-4 glass-card rounded-2xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-110"
                            >
                                <Linkedin size={24} />
                            </Link>
                            <Link
                                href={portfolioData.github}
                                target="_blank"
                                className="p-4 glass-card rounded-2xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-110"
                            >
                                <Github size={24} />
                            </Link>
                            <Link
                                href={`mailto:${portfolioData.email}`}
                                className="p-4 glass-card rounded-2xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-110"
                            >
                                <Mail size={24} />
                            </Link>

                            <div className="flex items-center gap-2 px-4 py-3 glass-card rounded-2xl text-slate-600 dark:text-slate-300 shadow-lg">
                                <MapPin size={18} className="text-blue-500" />
                                <span className="text-sm font-medium">{portfolioData.location}</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.6,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Link
                                href="#projects"
                                className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto text-center relative overflow-hidden"
                            >
                                <span className="relative z-10">View Projects</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </Link>
                            <Link
                                href={portfolioData.resume}
                                target="_blank"
                                className="px-8 py-4 glass-strong text-slate-700 dark:text-slate-300 rounded-2xl font-bold hover:scale-105 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-1 w-full sm:w-auto"
                            >
                                <Download size={20} />
                                Download CV
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
