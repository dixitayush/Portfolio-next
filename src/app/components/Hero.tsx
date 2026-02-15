"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Download, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    const badges = ["Java Full Stack Developer", "Spring Boot", "Microservices", "React & Next.js"];

    return (
        <section id="about" className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
            {/* Pure dark background */}
            <div className="absolute inset-0 bg-white dark:bg-black -z-10" />

            {/* Dot grid pattern */}
            <div className="absolute inset-0 dot-grid -z-10" />

            {/* Gradient mesh */}
            <div className="absolute inset-0 gradient-mesh animate-mesh -z-10 opacity-40" />

            {/* Ambient glow blobs */}
            <motion.div
                className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/8 via-emerald-400/5 to-teal-500/8 dark:from-emerald-500/15 dark:via-cyan-500/10 dark:to-blue-500/15 rounded-full blur-3xl animate-blob"
                style={{ filter: 'blur(100px)' }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-500/5 via-teal-500/5 to-emerald-400/5 dark:from-emerald-500/10 dark:via-cyan-500/10 dark:to-blue-500/10 rounded-full blur-3xl animate-blob"
                style={{ filter: 'blur(100px)', animationDelay: '2s' }}
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
                        <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 dark:from-emerald-500 dark:via-cyan-500 dark:to-blue-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

                        {/* Rotating Gradient Border */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 dark:from-emerald-500 dark:via-cyan-500 dark:to-blue-500 rounded-full animate-border-flow opacity-60"
                            style={{ backgroundSize: '200% 200%' }}
                        />

                        {/* Glass Frame */}
                        <div className="relative aspect-square rounded-full overflow-hidden glass-strong shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-emerald-400/10 dark:from-emerald-500/10 dark:via-cyan-500/10 dark:to-blue-500/10" />
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
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        {/* Floating badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start"
                        >
                            {badges.map((badge, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10"
                                >
                                    {badge}
                                </motion.span>
                            ))}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-4"
                        >
                            Building Modern
                            <br />
                            <span className="text-gradient">
                                Web Experiences
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.4,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0"
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
                            className="flex flex-wrap gap-4 items-center justify-center lg:justify-start mb-10"
                        >
                            <Link
                                href={portfolioData.linkedin}
                                target="_blank"
                                className="p-3 rounded-full text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all hover:bg-emerald-500/10"
                            >
                                <Linkedin size={22} />
                            </Link>
                            <Link
                                href={portfolioData.github}
                                target="_blank"
                                className="p-3 rounded-full text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all hover:bg-emerald-500/10"
                            >
                                <Github size={22} />
                            </Link>
                            <Link
                                href={`mailto:${portfolioData.email}`}
                                className="p-3 rounded-full text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all hover:bg-emerald-500/10"
                            >
                                <Mail size={22} />
                            </Link>

                            <div className="flex items-center gap-2 px-3 py-2 rounded-full text-slate-500 dark:text-slate-400 text-sm">
                                <MapPin size={16} className="text-emerald-500" />
                                <span className="font-medium">{portfolioData.location}</span>
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
                                className="group px-8 py-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 dark:from-emerald-500 dark:via-cyan-500 dark:to-blue-500 text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto text-center btn-shine"
                            >
                                <span className="relative z-10">View Projects</span>
                            </Link>
                            <Link
                                href={portfolioData.resume}
                                target="_blank"
                                className="px-8 py-4 bg-white/5 border border-white/10 dark:border-white/10 text-slate-700 dark:text-slate-300 rounded-full font-bold hover:scale-105 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-1 w-full sm:w-auto btn-shine hover:bg-white/10"
                            >
                                <Download size={20} />
                                View Resume
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown size={24} className="text-slate-400 dark:text-slate-600" />
                </motion.div>
            </div>
        </section>
    );
}
