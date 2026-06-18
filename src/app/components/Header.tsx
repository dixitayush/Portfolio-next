"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowRight, Search } from 'lucide-react';
import { useTheme } from 'next-themes';

const navLinks = [
    { name: 'Home', href: '#about', id: 'about' },
    { name: 'Approach', href: '#philosophy', id: 'philosophy' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'GitHub', href: '#github', id: 'github' },
    { name: 'Skills', href: '#skills', id: 'skills' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [active, setActive] = useState('about');
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time mount flag to avoid theme hydration mismatch
        setMounted(true);
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll spy
    useEffect(() => {
        const ids = ['about', 'stats', 'philosophy', 'experience', 'projects', 'github', 'skills', 'education'];
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                if (visible[0]) setActive(visible[0].target.id);
            },
            { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
        );
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const openPalette = () => window.dispatchEvent(new Event('open-cmdk'));

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'backdrop-blur-xl bg-white/70 dark:bg-black/60 shadow-sm shadow-black/5 dark:shadow-black/30 py-3 border-b border-slate-200/60 dark:border-white/[0.06]'
                : 'bg-transparent py-5 border-b border-transparent'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link
                        href="#"
                        className="text-lg font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors mono"
                    >
                        <span className="text-emerald-500">&lt;</span>Ayush<span className="text-emerald-500">/&gt;</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1 rounded-full px-1.5 py-1.5 bg-slate-100/60 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.06]">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative px-3.5 py-1.5 rounded-full font-medium transition-colors text-sm ${
                                    active === link.id
                                        ? 'text-slate-900 dark:text-white'
                                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                            >
                                {active === link.id && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        className="absolute inset-0 rounded-full bg-white dark:bg-white/10 shadow-sm"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        {/* Command palette trigger */}
                        <button
                            onClick={openPalette}
                            className="hidden sm:inline-flex items-center gap-2 pl-3 pr-1.5 py-1.5 rounded-full text-sm text-slate-500 dark:text-slate-400 bg-slate-100/70 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                            aria-label="Open command palette (Control or Command + K)"
                        >
                            <Search size={14} />
                            <span className="hidden md:inline">Search</span>
                            <kbd className="mono text-[10px] leading-none px-1.5 py-1 rounded-md bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-400">
                                ⌘K
                            </kbd>
                        </button>

                        {/* Theme Toggle */}
                        {mounted && (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="p-2.5 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all hover:bg-slate-100 dark:hover:bg-white/5"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                            </motion.button>
                        )}

                        <Link
                            href="#contact"
                            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                        >
                            Let&apos;s Talk
                            <ArrowRight size={16} />
                        </Link>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="lg:hidden p-2 rounded-full text-slate-700 dark:text-slate-300"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Menu"
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
                        className="lg:hidden mt-4 mx-6 overflow-hidden"
                    >
                        <div className="glass-strong rounded-2xl p-4 shadow-2xl space-y-1">
                            {[...navLinks, { name: 'Education', href: '#education', id: 'education' }].map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.04 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="block px-4 py-3 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium rounded-xl transition-all"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <Link
                                href="#contact"
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl font-bold shadow-lg transition-all text-center mt-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Let&apos;s Talk
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
