"use client";

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-900 dark:bg-black text-white py-12 border-t border-slate-800 dark:border-slate-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Ayush Kumar</h2>
                        <p className="text-slate-400">Senior Software Engineer</p>
                    </div>

                    <div className="flex gap-6 mb-6 md:mb-0">
                        <Link
                            href={portfolioData.linkedin}
                            target="_blank"
                            className="text-slate-400 hover:text-indigo-400 transition-all transform hover:scale-125 hover:-translate-y-1"
                        >
                            <Linkedin size={24} />
                        </Link>
                        <Link
                            href={portfolioData.github}
                            target="_blank"
                            className="text-slate-400 hover:text-indigo-400 transition-all transform hover:scale-125 hover:-translate-y-1"
                        >
                            <Github size={24} />
                        </Link>
                        <Link
                            href={`mailto:${portfolioData.email}`}
                            className="text-slate-400 hover:text-indigo-400 transition-all transform hover:scale-125 hover:-translate-y-1"
                        >
                            <Mail size={24} />
                        </Link>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} Ayush Kumar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
