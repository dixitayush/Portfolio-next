"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden bg-white dark:bg-black border-t border-slate-200 dark:border-white/[0.06]">
            {/* CTA Section */}
            <div className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            Let&apos;s Build Something
                            <br />
                            <span className="text-gradient">Great Together</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                            I&apos;m always open to new opportunities and exciting projects. Let&apos;s connect and create something amazing.
                        </p>
                        <Link
                            href={`mailto:${portfolioData.email}`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 dark:from-emerald-500 dark:via-cyan-500 dark:to-blue-500 text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-1 hover:scale-105 btn-shine"
                        >
                            <span className="relative z-10">Contact Me</span>
                            <ArrowRight size={20} className="relative z-10" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-slate-200 dark:border-white/[0.06] py-8">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Copyright */}
                        <p className="text-slate-500 dark:text-slate-500 text-sm flex items-center gap-1.5">
                            © {currentYear} Ayush Dixit
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <Link
                                href={portfolioData.linkedin}
                                target="_blank"
                                className="p-2.5 rounded-full text-slate-400 hover:text-emerald-500 transition-all hover:bg-emerald-500/10"
                            >
                                <Linkedin size={20} />
                            </Link>
                            <Link
                                href={portfolioData.github}
                                target="_blank"
                                className="p-2.5 rounded-full text-slate-400 hover:text-emerald-500 transition-all hover:bg-emerald-500/10"
                            >
                                <Github size={20} />
                            </Link>
                            <Link
                                href={`mailto:${portfolioData.email}`}
                                className="p-2.5 rounded-full text-slate-400 hover:text-emerald-500 transition-all hover:bg-emerald-500/10"
                            >
                                <Mail size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
