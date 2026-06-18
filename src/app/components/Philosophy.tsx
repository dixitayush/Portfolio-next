"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Gauge, ShieldCheck, Sparkles, Wand2, GitMerge, type LucideIcon } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";

const iconMap: Record<string, LucideIcon> = {
    Layers, Gauge, ShieldCheck, Sparkles, Wand2, GitMerge,
};

export default function Philosophy() {
    return (
        <section id="philosophy" className="py-28 relative overflow-hidden bg-slate-50/50 dark:bg-[#050505]">
            <div className="absolute inset-0 gradient-mesh opacity-10 -z-10" />
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading
                    eyebrow="How I Think"
                    title={<>Engineering <span className="text-gradient">principles</span></>}
                    subtitle="The ideas that shape every system I build — from a clipboard manager to a multi-tenant SaaS."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                    {portfolioData.philosophy.map((p, i) => {
                        const Icon = iconMap[p.icon] ?? Sparkles;
                        return (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <SpotlightCard className="h-full rounded-2xl p-6 border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-colors duration-300">
                                    <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 text-emerald-500 ring-1 ring-emerald-500/15">
                                        <Icon size={22} />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{p.title}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{p.body}</p>
                                </SpotlightCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
