"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import Link from 'next/link';

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-white dark:bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 border border-slate-100 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500 flex flex-col group"
                        >
                            <div className="p-8 flex-1">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                                        <FolderGit2 size={24} />
                                    </div>
                                    <div className="flex gap-3">
                                        <Link href="https://github.com/dixitayush/mAI-school" className="text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors transform hover:scale-125">
                                            <Github size={20} />
                                        </Link>
                                        <Link href="#" className="text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors transform hover:scale-125">
                                            <ExternalLink size={20} />
                                        </Link>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{project.name}</h3>
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${project.status === 'In Progress'
                                    ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                                    : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
                                    }`}>
                                    {project.status}
                                </span>

                                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Key Features</h4>
                                    <ul className="space-y-2">
                                        {project.details.slice(0, 4).map((detail, idx) => (
                                            <li key={idx} className="text-sm text-slate-500 dark:text-slate-400 flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full flex-shrink-0" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
