"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Download, ArrowDown, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    const [roleIdx, setRoleIdx] = useState(0);

    useEffect(() => {
        const t = setInterval(() => {
            setRoleIdx((i) => (i + 1) % portfolioData.roles.length);
        }, 2400);
        return () => clearInterval(t);
    }, []);

    return (
        <section id="about" className="relative min-h-screen flex items-center pt-28 pb-24 overflow-hidden">
            {/* Backgrounds */}
            <div className="absolute inset-0 bg-white dark:bg-black -z-20" />
            <div className="absolute inset-0 bg-grid -z-10" />
            <div className="absolute inset-0 gradient-mesh animate-mesh -z-10 opacity-50" />
            <div className="absolute top-[-12%] right-[-6%] w-[560px] h-[560px] rounded-full blur-3xl -z-10 bg-gradient-to-br from-emerald-500/12 via-cyan-500/10 to-blue-500/10 animate-aurora" />
            <div className="absolute bottom-[-18%] left-[-12%] w-[480px] h-[480px] rounded-full blur-3xl -z-10 bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-cyan-500/10 animate-aurora" style={{ animationDelay: '5s' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-12 lg:gap-8">
                    {/* Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        {/* Availability pill */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            Available for new opportunities
                        </motion.div>

                        {/* SEO-rich H1 */}
                        <motion.h1
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                            className="font-bold tracking-tight mb-5"
                        >
                            <span className="block text-base md:text-lg font-medium text-slate-400 dark:text-slate-500 mb-1">
                                Hi, I&apos;m
                            </span>
                            <span className="block text-5xl md:text-6xl xl:text-7xl text-slate-900 dark:text-white leading-[1.02]">
                                Ayush Dixit<span className="text-emerald-500">.</span>
                            </span>
                            <span className="block text-2xl md:text-3xl xl:text-[2.6rem] mt-3 leading-tight text-gradient-animated">
                                {portfolioData.headline}
                            </span>
                        </motion.h1>

                        {/* Role rotator (terminal style) */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.18 }}
                            className="h-7 mb-6 flex flex-nowrap items-center justify-center lg:justify-start gap-2 mono text-sm md:text-[15px] whitespace-nowrap"
                        >
                            <span className="text-emerald-500">$</span>
                            <span className="hidden sm:inline text-slate-400 dark:text-slate-500">whoami</span>
                            <span className="hidden sm:inline text-slate-300 dark:text-slate-600">—</span>
                            <span className="relative inline-block min-w-[15rem] sm:min-w-[16rem] text-left h-7 align-bottom">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={roleIdx}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute left-0 top-0.5 whitespace-nowrap text-slate-700 dark:text-slate-200 font-medium"
                                    >
                                        {portfolioData.roles[roleIdx]}
                                        <span className="inline-block w-2 h-4 -mb-0.5 ml-0.5 bg-emerald-500 animate-pulse" />
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.26 }}
                            className="text-base md:text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-xl leading-relaxed mx-auto lg:mx-0"
                        >
                            {portfolioData.summary}
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.34 }}
                            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-9"
                        >
                            <Link
                                href="#projects"
                                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 dark:from-emerald-500 dark:via-cyan-500 dark:to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-emerald-500/30 transition-all hover:-translate-y-0.5 btn-shine"
                            >
                                <span className="relative z-10">View My Work</span>
                                <ArrowRight size={17} className="relative z-10 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                            <Link
                                href={portfolioData.resume}
                                target="_blank"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all hover:-translate-y-0.5"
                            >
                                <Download size={18} />
                                Résumé
                            </Link>
                        </motion.div>

                        {/* Socials + location */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.42 }}
                            className="flex items-center gap-1 justify-center lg:justify-start flex-wrap"
                        >
                            {[
                                { icon: <Github size={19} />, href: portfolioData.github, label: "GitHub" },
                                { icon: <Linkedin size={19} />, href: portfolioData.linkedin, label: "LinkedIn" },
                                { icon: <Mail size={19} />, href: `mailto:${portfolioData.email}`, label: "Email" },
                            ].map((s) => (
                                <Link
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                                    className="p-2.5 rounded-full text-slate-500 dark:text-slate-400 hover:text-emerald-500 hover:bg-emerald-500/10 transition-all"
                                >
                                    {s.icon}
                                </Link>
                            ))}
                            <span className="mx-2 h-5 w-px bg-slate-200 dark:bg-white/10" />
                            <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                                <MapPin size={15} className="text-emerald-500" />
                                {portfolioData.location.split(',')[0]}, India
                            </span>
                        </motion.div>
                    </div>

                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative order-1 lg:order-2 flex justify-center"
                    >
                        <div className="relative w-[290px] sm:w-[350px] aspect-square group">
                            {/* Soft ambient glow */}
                            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-emerald-500/25 via-cyan-500/15 to-blue-500/25 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />

                            {/* Clean gradient ring + avatar */}
                            <div className="absolute inset-0 rounded-full p-[5px] bg-gradient-to-br from-emerald-400 via-cyan-500 to-blue-500 shadow-2xl">
                                <div className="relative w-full h-full rounded-full overflow-hidden bg-white dark:bg-black ring-1 ring-black/5 dark:ring-white/10">
                                    <Image
                                        src="/profile.png"
                                        alt="Ayush Dixit — Senior Software Engineer, Full Stack, MERN and Java Developer"
                                        fill
                                        className="object-cover"
                                        priority
                                        sizes="350px"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll cue */}
                <motion.div
                    className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-slate-400 dark:text-slate-600"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <span className="mono text-[10px] uppercase tracking-widest">Scroll</span>
                    <ArrowDown size={18} />
                </motion.div>
            </div>
        </section>
    );
}
