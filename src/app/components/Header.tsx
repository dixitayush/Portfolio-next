"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 shadow-md shadow-blue-500/5 dark:shadow-black/20 py-3'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link
                        href="#"
                        className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
                    >
                        Ayush.dev
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all rounded-full hover:glass-card group"
                            >
                                <span className="relative z-10">{link.name}</span>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>
                        ))}

                        {/* Theme Toggle */}
                        {mounted && (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="relative ml-2 p-3 glass-card rounded-full text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-lg hover:shadow-xl overflow-hidden group"
                                aria-label="Toggle theme"
                            >
                                <div className="relative z-10">
                                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.button>
                        )}

                        <Link
                            href="mailto:dixitayush284@gmail.com"
                            className="ml-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 text-white rounded-full font-bold shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:-translate-y-0.5 hover:scale-105 relative overflow-hidden group"
                        >
                            <span className="relative z-10">Contact Me</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        {mounted && (
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="p-2 glass-card rounded-full text-slate-600 dark:text-slate-300 shadow-lg"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </motion.button>
                        )}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="p-2 glass-card rounded-full text-slate-700 dark:text-slate-300 shadow-lg"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden mt-4 mx-6"
                    >
                        <div className="glass-strong rounded-2xl p-6 shadow-2xl space-y-3 border border-blue-200/30 dark:border-blue-500/20">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="block px-4 py-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-xl hover:glass-card transition-all"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                            >
                                <Link
                                    href="mailto:dixitayush284@gmail.com"
                                    className="block px-6 py-3 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 text-white rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all text-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Contact Me
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
