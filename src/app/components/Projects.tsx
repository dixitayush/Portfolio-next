"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Github, ExternalLink, CheckCircle2, GitCommit, Lightbulb, Network,
    Boxes, ListChecks, ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { portfolioData, skillIconMap, type Project } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";
import LanguageBar from "./ui/LanguageBar";
import ArchitectureDiagram from "./ui/ArchitectureDiagram";

const statusStyle: Record<string, string> = {
    Live: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    "Open Source": "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    "In Progress": "bg-amber-500/10 text-amber-500 border-amber-500/20",
};

const tabs = [
    { id: "overview", label: "Overview", icon: ListChecks },
    { id: "thinking", label: "The Thinking", icon: Lightbulb },
    { id: "design", label: "System Design", icon: Network },
    { id: "tech", label: "Tech & Stats", icon: Boxes },
] as const;

type TabId = (typeof tabs)[number]["id"];

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const [tab, setTab] = useState<TabId>("overview");

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            <SpotlightCard className="rounded-3xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-colors duration-500 overflow-hidden">
                <div className="p-6 md:p-9">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <div className="min-w-0">
                            <div className="flex items-center gap-3 mb-2 flex-wrap">
                                <span className="mono text-3xl font-bold text-slate-200 dark:text-white/10 leading-none">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold border ${statusStyle[project.status]}`}>
                                    {project.status}
                                </span>
                                <span className="mono text-xs text-slate-400">{project.year}</span>
                                <span className="mono text-xs text-slate-400">· {project.role}</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                                {project.name}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 mt-1">{project.tagline}</p>
                        </div>

                        {/* Links */}
                        <div className="flex gap-2 flex-shrink-0">
                            {project.github && (
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all"
                                >
                                    <Github size={15} /> Code
                                </Link>
                            )}
                            {project.demo && (
                                <Link
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-500 dark:to-cyan-500 text-white hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
                                >
                                    <ExternalLink size={15} /> Live
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-1 p-1 rounded-full bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.06] mb-6 overflow-x-auto fade-x">
                        {tabs.map((t) => {
                            const Icon = t.icon;
                            const isActive = tab === t.id;
                            return (
                                <button
                                    key={t.id}
                                    onClick={() => setTab(t.id)}
                                    className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                                        isActive ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId={`tab-${project.slug}`}
                                            className="absolute inset-0 rounded-full bg-white dark:bg-white/10 shadow-sm"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <Icon size={13} className="relative z-10" />
                                    <span className="relative z-10">{t.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Tab content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={tab}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.22 }}
                        >
                            {tab === "overview" && (
                                <div>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{project.description}</p>
                                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                                        {project.highlights.map((h, i) => (
                                            <div key={i} className="flex items-start gap-2.5">
                                                <CheckCircle2 size={17} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-sm text-slate-600 dark:text-slate-400">{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {tab === "thinking" && (
                                <div className="space-y-6">
                                    <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.05] p-4">
                                        <p className="mono text-[11px] uppercase tracking-wider font-semibold text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-1.5">
                                            <Lightbulb size={13} /> The problem
                                        </p>
                                        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{project.problem}</p>
                                    </div>
                                    <div>
                                        <p className="mono text-[11px] uppercase tracking-wider font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                                            How I approached it
                                        </p>
                                        <ol className="space-y-3">
                                            {project.approach.map((a, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="mono flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold flex items-center justify-center mt-0.5">
                                                        {i + 1}
                                                    </span>
                                                    <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{a}</span>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            )}

                            {tab === "design" && (
                                <ArchitectureDiagram layers={project.architecture.layers} flow={project.architecture.flow} />
                            )}

                            {tab === "tech" && (
                                <div className="space-y-7">
                                    <div>
                                        <p className="mono text-[11px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-3">Tech stack</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech) => (
                                                <span key={tech} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-50 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06]">
                                                    {skillIconMap[tech] && (
                                                        // eslint-disable-next-line @next/next/no-img-element
                                                        <img src={skillIconMap[tech]} alt={tech} width={16} height={16} />
                                                    )}
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mono text-[11px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-3">Language breakdown</p>
                                        <LanguageBar languages={project.languages} />
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs mono bg-slate-50 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/[0.06]">
                                            <GitCommit size={13} className="text-emerald-500" /> {project.commits} commits
                                        </span>
                                        {project.github && (
                                            <Link href={project.github} target="_blank" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs mono bg-slate-50 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/[0.06] hover:text-emerald-500 hover:border-emerald-500/30 transition-colors">
                                                <ArrowUpRight size={13} /> View repository
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </SpotlightCard>
        </motion.div>
    );
}

export default function Projects() {
    const featured = portfolioData.projects.filter((p) => p.featured);

    return (
        <section id="projects" className="py-28 relative overflow-hidden bg-white dark:bg-black">
            <div className="absolute inset-0 gradient-mesh opacity-20 -z-10" />
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading
                    eyebrow="Selected Work"
                    title={<>Projects with <span className="text-gradient">depth</span></>}
                    subtitle="Not just screenshots — the problem each one solves, how I reasoned about it, the system design, and the real tech stack pulled from GitHub."
                />

                <div className="space-y-8 max-w-5xl mx-auto">
                    {featured.map((project, index) => (
                        <ProjectCard key={project.slug} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
