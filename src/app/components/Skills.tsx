"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Layout, Database, Cloud, Sparkles, type LucideIcon } from "lucide-react";
import { portfolioData, skillIconMap } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";

const iconMap: Record<string, LucideIcon> = {
    Code2, Server, Layout, Database, Cloud, Sparkles,
};

export default function Skills() {
    return (
        <section id="skills" className="py-28 relative overflow-hidden bg-slate-50/50 dark:bg-[#050505]">
            <div className="absolute inset-0 gradient-mesh opacity-15 -z-10" />
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading
                    eyebrow="Toolbox"
                    title={<>Skills & <span className="text-gradient">tech stack</span></>}
                    subtitle="The languages, frameworks, and tools I reach for — grouped by where they live in the stack."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                    {portfolioData.skillGroups.map((group, gi) => {
                        const Icon = iconMap[group.icon] ?? Code2;
                        return (
                            <motion.div
                                key={group.label}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.5, delay: gi * 0.08 }}
                            >
                                <SpotlightCard className="h-full rounded-2xl p-6 border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-colors duration-300">
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="inline-flex p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                                            <Icon size={18} />
                                        </span>
                                        <h3 className="font-bold text-slate-900 dark:text-white">{group.label}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-slate-50 dark:bg-white/[0.03] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06] hover:border-emerald-500/30 hover:-translate-y-0.5 transition-all duration-200"
                                            >
                                                {skillIconMap[skill] ? (
                                                    // eslint-disable-next-line @next/next/no-img-element
                                                    <img src={skillIconMap[skill]} alt={skill} width={15} height={15} className="flex-shrink-0" />
                                                ) : (
                                                    <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex-shrink-0" />
                                                )}
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
