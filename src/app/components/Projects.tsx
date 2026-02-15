"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { portfolioData, skillIconMap } from '../data/portfolio';
import Link from 'next/link';

export default function Projects() {
    return (
        <section id="projects" className="py-28 relative overflow-hidden bg-white dark:bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 gradient-mesh opacity-20 -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="mb-16 text-center"
                >
                    <p className="text-emerald-500 font-medium text-sm tracking-widest uppercase mb-3">Portfolio</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        A showcase of my recent work and side projects
                    </p>
                </motion.div>

                <div className="space-y-12 max-w-6xl mx-auto">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.15,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="group"
                        >
                            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/5">
                                <div className="flex flex-col lg:flex-row">
                                    {/* Content Side */}
                                    <div className="flex-1 p-8 lg:p-10">
                                        {/* Project Type Badge */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <motion.span
                                                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'Open Source'
                                                    ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                                                    : project.status === 'In Progress'
                                                        ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                                                        : 'bg-slate-500/10 text-slate-500 dark:bg-cyan-500/10 dark:text-cyan-500 border border-slate-500/20 dark:border-cyan-500/20'
                                                    }`}
                                            >
                                                {project.status}
                                            </motion.span>
                                        </div>

                                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-gradient transition-all duration-300">
                                            {project.name}
                                        </h3>

                                        <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed text-base">
                                            {project.description}
                                        </p>

                                        {/* Key Features */}
                                        <div className="space-y-2.5 mb-8">
                                            {project.details.slice(0, 4).map((detail, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    className="flex items-start gap-3"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.1 + idx * 0.05 }}
                                                >
                                                    <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-slate-600 dark:text-slate-400">{detail}</span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Tech Stack Pills */}
                                        {project.techStack && (
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.techStack.map((tech, idx) => (
                                                    <span key={idx} className="tech-pill text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.04]">
                                                        {skillIconMap[tech] && (
                                                            // eslint-disable-next-line @next/next/no-img-element
                                                            <img
                                                                src={skillIconMap[tech]}
                                                                alt={tech}
                                                                width={18}
                                                                height={18}
                                                                className="flex-shrink-0"
                                                            />
                                                        )}
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Action Buttons */}
                                        <div className="flex flex-wrap gap-3">
                                            {project.demo && (
                                                <Link
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-500 dark:to-cyan-500 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all hover:-translate-y-0.5"
                                                >
                                                    <ExternalLink size={16} />
                                                    Preview Live
                                                </Link>
                                            )}
                                            {project.github && (
                                                <Link
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 rounded-full text-sm font-semibold hover:border-emerald-500/30 transition-all hover:-translate-y-0.5 hover:bg-emerald-500/5"
                                                >
                                                    <Github size={16} />
                                                    GitHub Repo
                                                </Link>
                                            )}
                                        </div>
                                    </div>

                                    {/* Visual Side */}
                                    <div className="flex-1 min-h-[300px] lg:min-h-0 relative bg-slate-50 dark:bg-black/40 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-white/[0.06]">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="relative">
                                                {/* Decorative gradient orbs */}
                                                <motion.div
                                                    className="w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 dark:to-cyan-500/20 rounded-full blur-2xl"
                                                    animate={{
                                                        scale: [1, 1.2, 1],
                                                        opacity: [0.3, 0.5, 0.3],
                                                    }}
                                                    transition={{
                                                        duration: 4,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                    }}
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="text-6xl font-bold text-gradient opacity-30">
                                                        {String(index + 1).padStart(2, '0')}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Floating tech icons in the visual area */}
                                        {project.techStack && project.techStack.slice(0, 4).map((tech, idx) => (
                                            <motion.div
                                                key={idx}
                                                className="absolute"
                                                style={{
                                                    top: `${20 + (idx * 20)}%`,
                                                    left: `${15 + (idx % 2 === 0 ? 60 : 20)}%`,
                                                }}
                                                animate={{
                                                    y: [0, -8, 0],
                                                    rotate: [0, 5, -5, 0],
                                                }}
                                                transition={{
                                                    duration: 3 + idx,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: idx * 0.5,
                                                }}
                                            >
                                                <div className="p-3 rounded-xl bg-white/80 dark:bg-white/[0.06] backdrop-blur-sm border border-slate-200/50 dark:border-white/[0.08] shadow-lg dark:shadow-black/30">
                                                    {skillIconMap[tech] && (
                                                        // eslint-disable-next-line @next/next/no-img-element
                                                        <img
                                                            src={skillIconMap[tech]}
                                                            alt={tech}
                                                            width={28}
                                                            height={28}
                                                        />
                                                    )}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
