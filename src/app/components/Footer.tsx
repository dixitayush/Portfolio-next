"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ArrowRight, ArrowUpRight, Copy, Check } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import Link from "next/link";

export default function Footer() {
    const [copied, setCopied] = React.useState(false);

    const copyEmail = () => {
        navigator.clipboard?.writeText(portfolioData.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
    };

    return (
        <footer id="contact" className="relative overflow-hidden bg-slate-50/50 dark:bg-[#050505] border-t border-slate-200 dark:border-white/[0.06]">
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-3xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 -z-10" />

            {/* CTA */}
            <div className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center max-w-2xl mx-auto"
                    >
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            Open to opportunities
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-5 leading-[1.05] tracking-tight">
                            Let&apos;s build something
                            <br />
                            <span className="text-gradient-animated">great together</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg mb-10">
                            Have a role, a project, or just want to talk systems and architecture? My inbox is always open.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                            <Link
                                href={`mailto:${portfolioData.email}`}
                                className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 dark:from-emerald-500 dark:via-cyan-500 dark:to-blue-500 text-white rounded-full font-semibold shadow-xl hover:shadow-emerald-500/30 transition-all hover:-translate-y-1 btn-shine"
                            >
                                <Mail size={18} className="relative z-10" />
                                <span className="relative z-10">{portfolioData.email}</span>
                                <ArrowRight size={18} className="relative z-10" />
                            </Link>
                            <button
                                onClick={copyEmail}
                                className="inline-flex items-center gap-2 px-5 py-4 rounded-full font-medium border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all"
                            >
                                {copied ? <Check size={17} className="text-emerald-500" /> : <Copy size={17} />}
                                {copied ? "Copied!" : "Copy"}
                            </button>
                        </div>

                        {/* contact meta */}
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10 text-sm text-slate-500 dark:text-slate-400">
                            <span className="inline-flex items-center gap-2"><MapPin size={15} className="text-emerald-500" /> {portfolioData.location}</span>
                            <Link href={portfolioData.linkedin} target="_blank" className="inline-flex items-center gap-2 hover:text-emerald-500 transition-colors"><Linkedin size={15} className="text-emerald-500" /> LinkedIn <ArrowUpRight size={12} /></Link>
                            <Link href={portfolioData.github} target="_blank" className="inline-flex items-center gap-2 hover:text-emerald-500 transition-colors"><Github size={15} className="text-emerald-500" /> @{portfolioData.githubUser} <ArrowUpRight size={12} /></Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-200 dark:border-white/[0.06] py-8">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                        <div className="text-center md:text-left">
                            <p className="font-bold text-slate-900 dark:text-white mono">&lt;Ayush Dixit /&gt;</p>
                        </div>
                        <div className="flex gap-2">
                            {[
                                { icon: <Linkedin size={18} />, href: portfolioData.linkedin },
                                { icon: <Github size={18} />, href: portfolioData.github },
                                { icon: <Mail size={18} />, href: `mailto:${portfolioData.email}` },
                            ].map((s, i) => (
                                <Link
                                    key={i}
                                    href={s.href}
                                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                                    className="p-2.5 rounded-full text-slate-400 hover:text-emerald-500 transition-all hover:bg-emerald-500/10"
                                >
                                    {s.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
