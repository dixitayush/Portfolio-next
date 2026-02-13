"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import Link from 'next/link';

export default function Projects() {
    return (
        <section id="projects" className="py-32 relative overflow-hidden bg-white dark:bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 gradient-mesh opacity-30 -z-10" />
            <motion.div
                className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-sky-400/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="mb-20 text-center"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 mb-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Sparkles className="text-blue-500" size={24} />
                        <h2 className="text-5xl font-bold text-gradient">Featured Projects</h2>
                        <Sparkles className="text-cyan-500" size={24} />
                    </motion.div>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 mx-auto rounded-full shadow-lg" />
                    <p className="mt-6 text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Explore my latest work and side projects
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            whileHover={{
                                y: -12,
                                scale: 1.02,
                            }}
                            className="group relative flex flex-col"
                        >
                            {/* Hover Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                            {/* Card */}
                            <div className="relative glass-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full border-2 border-white/20 dark:border-white/10">
                                {/* Gradient Border Animation */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-3xl animate-border-flow"
                                        style={{ padding: '2px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}
                                    />
                                </div>

                                <div className="relative p-8 flex-1 flex flex-col">
                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-6">
                                        <motion.div
                                            className="p-4 glass-strong rounded-2xl text-blue-600 dark:text-blue-400 shadow-lg"
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <FolderGit2 size={28} />
                                        </motion.div>
                                        <div className="flex gap-3">
                                            {project.github && (
                                                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                                                    <Link
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2.5 rounded-full text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:bg-blue-500/10 dark:hover:bg-blue-400/10"
                                                    >
                                                        <Github size={20} />
                                                    </Link>
                                                </motion.div>
                                            )}
                                            {project.demo && (
                                                <motion.div whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                                                    <Link
                                                        href={project.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2.5 rounded-full text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:bg-blue-500/10 dark:hover:bg-blue-400/10"
                                                    >
                                                        <ExternalLink size={20} />
                                                    </Link>
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-gradient transition-all">
                                        {project.name}
                                    </h3>

                                    <motion.span
                                        className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 border border-white/20 ${project.status === 'Open Source'
                                            ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/40'
                                            : 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg shadow-yellow-500/40'
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {project.status}
                                    </motion.span>

                                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Key Features */}
                                    <div className="space-y-3 mt-auto">
                                        <h4 className="text-sm font-bold text-gradient uppercase tracking-wider flex items-center gap-2">
                                            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full" />
                                            Key Features
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.details.slice(0, 4).map((detail, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-3 group/item"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.05 }}
                                                >
                                                    <span className="mt-1.5 w-2 h-2 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform shadow-lg" />
                                                    <span>{detail}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
