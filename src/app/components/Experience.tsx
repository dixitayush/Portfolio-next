"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { portfolioData, skillIconMap } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";

const MONTHS: Record<string, number> = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

function parseDate(d: string): Date {
    if (d === "Present") return new Date();
    const [m, y] = d.split(" ");
    return new Date(Number(y), MONTHS[m] ?? 0, 1);
}

function duration(start: string, end: string): string {
    const s = parseDate(start);
    const e = parseDate(end);
    let months = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
    months = Math.max(months, 1);
    const yrs = Math.floor(months / 12);
    const rem = months % 12;
    const parts: string[] = [];
    if (yrs) parts.push(`${yrs} yr${yrs > 1 ? "s" : ""}`);
    if (rem) parts.push(`${rem} mo${rem > 1 ? "s" : ""}`);
    return parts.join(" ");
}

// per-company accent + initials
const company: Record<string, { accent: string; ring: string; text: string; initials: string }> = {
    "HCL Software": { accent: "from-blue-500 to-cyan-500", ring: "ring-blue-500/20", text: "text-blue-500", initials: "HCL" },
    Accenture: { accent: "from-fuchsia-500 to-purple-500", ring: "ring-fuchsia-500/20", text: "text-fuchsia-500", initials: "AC" },
    Amdocs: { accent: "from-emerald-500 to-teal-500", ring: "ring-emerald-500/20", text: "text-emerald-500", initials: "AM" },
};

export default function Experience() {
    return (
        <section id="experience" className="py-28 relative overflow-hidden bg-slate-50/50 dark:bg-[#050505]">
            <div className="absolute inset-0 gradient-mesh opacity-10 -z-10" />
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading
                    eyebrow="Career"
                    title={<>Work <span className="text-gradient">experience</span></>}
                    subtitle="~5 years across telecom, banking, and enterprise commerce — designing and shipping production systems as a software engineer and full-stack developer."
                />

                <div className="max-w-3xl mx-auto relative">
                    {/* Timeline rail */}
                    <div className="absolute left-7 md:left-8 top-3 bottom-3 w-px bg-gradient-to-b from-emerald-500/50 via-slate-200 dark:via-white/10 to-transparent" />

                    <div className="space-y-6">
                        {portfolioData.experience.map((exp, index) => {
                            const c = company[exp.company] ?? { accent: "from-emerald-500 to-cyan-500", ring: "ring-emerald-500/20", text: "text-emerald-500", initials: exp.company.slice(0, 2).toUpperCase() };
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative pl-[4.5rem] md:pl-24"
                                >
                                    {/* Company avatar node */}
                                    <div className={`absolute left-0 top-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${c.accent} flex items-center justify-center text-white font-bold mono text-sm shadow-lg ring-4 ring-white dark:ring-[#050505]`}>
                                        {c.initials}
                                    </div>

                                    <div className="rounded-2xl p-6 md:p-7 border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-colors duration-300">
                                        {/* Header */}
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                                            <div>
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                                                    {exp.current && (
                                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mono uppercase tracking-wide">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Current
                                                        </span>
                                                    )}
                                                </div>
                                                <p className={`font-semibold mt-0.5 ${c.text}`}>{exp.company}</p>
                                            </div>
                                            <div className="flex flex-col gap-1.5 sm:items-end text-xs text-slate-500 dark:text-slate-400 flex-shrink-0">
                                                <span className="inline-flex items-center gap-1.5 mono whitespace-nowrap">
                                                    <Calendar size={12} className="text-emerald-500" /> {exp.start_date} — {exp.end_date}
                                                </span>
                                                <div className="flex items-center gap-2">
                                                    <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.05] mono">{duration(exp.start_date, exp.end_date)}</span>
                                                    <span className="inline-flex items-center gap-1"><MapPin size={11} className="text-emerald-500" /> {exp.location.split(",")[0]}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Responsibilities */}
                                        <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-2 mb-5">
                                            {exp.responsibilities.map((resp, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                                    <ArrowUpRight size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Stack */}
                                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                                            {exp.stack.map((tech) => (
                                                <span key={tech} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/[0.06]">
                                                    {skillIconMap[tech] && (
                                                        // eslint-disable-next-line @next/next/no-img-element
                                                        <img src={skillIconMap[tech]} alt={tech} width={13} height={13} />
                                                    )}
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
