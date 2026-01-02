"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden bg-slate-900 dark:bg-black text-white py-16 border-t border-slate-800/50 dark:border-slate-900">
            {/* Background Effects */}
            <div className="absolute inset-0 gradient-mesh opacity-10 -z-10" />
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <motion.h2
                            className="text-3xl font-bold mb-3 text-gradient"
                            whileHover={{ scale: 1.05 }}
                        >
                            Ayush Kumar
                        </motion.h2>
                        <p className="text-slate-400 text-lg mb-2">Senior Software Engineer</p>
                        <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                            <span>Building digital experiences</span>
                            <Sparkles size={14} className="text-blue-400" />
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex gap-6 mb-12"
                    >
                        <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                            <Link
                                href={portfolioData.linkedin}
                                target="_blank"
                                className="group relative p-3 rounded-full text-slate-400 hover:text-blue-400 transition-all hover:bg-white/5 dark:hover:bg-white/10"
                            >
                                <Linkedin size={24} className="relative z-10" />
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                            <Link
                                href={portfolioData.github}
                                target="_blank"
                                className="group relative p-3 rounded-full text-slate-400 hover:text-blue-400 transition-all hover:bg-white/5 dark:hover:bg-white/10"
                            >
                                <Github size={24} className="relative z-10" />
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                            <Link
                                href={`mailto:${portfolioData.email}`}
                                className="group relative p-3 rounded-full text-slate-400 hover:text-blue-400 transition-all hover:bg-white/5 dark:hover:bg-white/10"
                            >
                                <Mail size={24} className="relative z-10" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Divider */}
                    <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center text-slate-500 text-sm space-y-2"
                    >
                        <p className="flex items-center justify-center gap-2 flex-wrap">
                            <span>© {currentYear} Ayush Kumar.</span>
                            <span className="hidden sm:inline">•</span>
                            <span className="flex items-center gap-1.5">
                                Crafted with
                                <motion.span
                                    animate={{
                                        scale: [1, 1.3, 1],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <Heart size={14} className="text-red-500 fill-red-500" />
                                </motion.span>
                                and
                                <motion.span
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                >
                                    <Sparkles size={14} className="text-blue-400" />
                                </motion.span>
                            </span>
                        </p>
                        <p className="text-xs">
                            Designed with Apple-inspired liquid flow aesthetics
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 opacity-50" />
        </footer>
    );
}
