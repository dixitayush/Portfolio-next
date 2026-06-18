"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
    Search, Home, Briefcase, FolderGit2, Code2, GraduationCap, Github,
    Linkedin, Mail, FileText, Sun, Moon, Brain, BarChart3, CornerDownLeft, Copy, ExternalLink,
} from "lucide-react";
import { portfolioData } from "../data/portfolio";

type Item = {
    id: string;
    label: string;
    hint?: string;
    group: string;
    icon: React.ReactNode;
    action: () => void;
    keywords?: string;
};

export default function CommandPalette() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [active, setActive] = useState(0);
    const [mounted, setMounted] = useState(false);
    const [copied, setCopied] = useState(false);
    const { theme, setTheme } = useTheme();
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time mount flag required for createPortal/hydration
        setMounted(true);
    }, []);

    const openPalette = useCallback(() => {
        setQuery("");
        setActive(0);
        setOpen(true);
    }, []);

    const closePalette = useCallback(() => setOpen(false), []);

    const go = useCallback((href: string) => {
        setOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }, []);

    const openExternal = useCallback((url: string) => {
        setOpen(false);
        window.open(url, "_blank", "noopener,noreferrer");
    }, []);

    const items: Item[] = useMemo(() => {
        const nav: Item[] = [
            { id: "home", label: "Home", group: "Navigate", icon: <Home size={16} />, action: () => go("#about") },
            { id: "stats", label: "Stats", group: "Navigate", icon: <BarChart3 size={16} />, action: () => go("#stats") },
            { id: "philosophy", label: "How I Think", group: "Navigate", icon: <Brain size={16} />, action: () => go("#philosophy") },
            { id: "experience", label: "Experience", group: "Navigate", icon: <Briefcase size={16} />, action: () => go("#experience") },
            { id: "projects", label: "Projects", group: "Navigate", icon: <FolderGit2 size={16} />, action: () => go("#projects") },
            { id: "github", label: "GitHub Repositories", group: "Navigate", icon: <Github size={16} />, action: () => go("#github") },
            { id: "skills", label: "Skills", group: "Navigate", icon: <Code2 size={16} />, action: () => go("#skills") },
            { id: "education", label: "Education", group: "Navigate", icon: <GraduationCap size={16} />, action: () => go("#education") },
        ];

        const projects: Item[] = portfolioData.projects.map((p) => ({
            id: `proj-${p.slug}`,
            label: p.name,
            hint: p.tagline,
            group: "Projects",
            icon: <FolderGit2 size={16} />,
            keywords: p.techStack.join(" "),
            action: () => (p.demo ? openExternal(p.demo) : p.github ? openExternal(p.github) : go("#projects")),
        }));

        const actions: Item[] = [
            {
                id: "theme",
                label: theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
                group: "Actions",
                icon: theme === "dark" ? <Sun size={16} /> : <Moon size={16} />,
                action: () => setTheme(theme === "dark" ? "light" : "dark"),
            },
            {
                id: "copy-email",
                label: "Copy email address",
                hint: portfolioData.email,
                group: "Actions",
                icon: <Copy size={16} />,
                action: () => {
                    navigator.clipboard?.writeText(portfolioData.email);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                },
            },
            { id: "email", label: "Send me an email", group: "Actions", icon: <Mail size={16} />, action: () => { setOpen(false); window.location.href = `mailto:${portfolioData.email}`; } },
            { id: "resume", label: "View résumé (PDF)", group: "Actions", icon: <FileText size={16} />, action: () => openExternal(portfolioData.resume) },
        ];

        const links: Item[] = [
            { id: "gh", label: "GitHub", hint: "@dixitayush", group: "Links", icon: <Github size={16} />, action: () => openExternal(portfolioData.github) },
            { id: "li", label: "LinkedIn", group: "Links", icon: <Linkedin size={16} />, action: () => openExternal(portfolioData.linkedin) },
        ];

        return [...nav, ...projects, ...actions, ...links];
    }, [theme, setTheme, go, openExternal]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return items;
        return items.filter((i) =>
            `${i.label} ${i.hint ?? ""} ${i.keywords ?? ""} ${i.group}`.toLowerCase().includes(q)
        );
    }, [items, query]);

    // grouped, but keep a flat index for keyboard nav
    const groups = useMemo(() => {
        const map = new Map<string, Item[]>();
        for (const it of filtered) {
            if (!map.has(it.group)) map.set(it.group, []);
            map.get(it.group)!.push(it);
        }
        return Array.from(map.entries());
    }, [filtered]);

    // global hotkeys + custom open event
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                if (open) closePalette();
                else openPalette();
            }
            if (e.key === "Escape") closePalette();
        };
        const onOpen = () => openPalette();
        window.addEventListener("keydown", onKey);
        window.addEventListener("open-cmdk", onOpen as EventListener);
        return () => {
            window.removeEventListener("keydown", onKey);
            window.removeEventListener("open-cmdk", onOpen as EventListener);
        };
    }, [open, openPalette, closePalette]);

    // lock scroll + focus input while open (external-system sync only)
    useEffect(() => {
        if (!open) return;
        const id = setTimeout(() => inputRef.current?.focus(), 40);
        document.body.style.overflow = "hidden";
        return () => {
            clearTimeout(id);
            document.body.style.overflow = "";
        };
    }, [open]);

    const onListKey = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActive((a) => Math.min(a + 1, filtered.length - 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActive((a) => Math.max(a - 1, 0));
        } else if (e.key === "Enter") {
            e.preventDefault();
            filtered[active]?.action();
        }
    };

    useEffect(() => {
        const el = listRef.current?.querySelector(`[data-idx="${active}"]`);
        el?.scrollIntoView({ block: "nearest" });
    }, [active]);

    if (!mounted) return null;

    let runningIndex = -1;

    return createPortal(
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[12vh]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    onMouseDown={() => setOpen(false)}
                >
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                    <motion.div
                        onMouseDown={(e) => e.stopPropagation()}
                        onKeyDown={onListKey}
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-xl glass-strong rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10"
                    >
                        {/* Search input */}
                        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-white/10">
                            <Search size={18} className="text-slate-400 flex-shrink-0" />
                            <input
                                ref={inputRef}
                                value={query}
                                onChange={(e) => { setQuery(e.target.value); setActive(0); }}
                                placeholder="Search projects, sections, actions…"
                                className="flex-1 bg-transparent outline-none text-slate-800 dark:text-slate-100 placeholder:text-slate-400 text-sm"
                            />
                            <kbd className="mono text-[10px] px-1.5 py-0.5 rounded border border-slate-300 dark:border-white/15 text-slate-400">ESC</kbd>
                        </div>

                        {/* Results */}
                        <div ref={listRef} className="max-h-[52vh] overflow-y-auto py-2">
                            {filtered.length === 0 && (
                                <p className="px-4 py-8 text-center text-sm text-slate-400">No results for “{query}”.</p>
                            )}
                            {groups.map(([group, groupItems]) => (
                                <div key={group} className="px-2">
                                    <p className="mono px-2 pt-2 pb-1 text-[10px] uppercase tracking-widest text-slate-400">{group}</p>
                                    {groupItems.map((it) => {
                                        runningIndex += 1;
                                        const idx = runningIndex;
                                        const isActive = idx === active;
                                        return (
                                            <button
                                                key={it.id}
                                                data-idx={idx}
                                                onMouseEnter={() => setActive(idx)}
                                                onClick={() => it.action()}
                                                className={`w-full flex items-center gap-3 px-2.5 py-2 rounded-lg text-left transition-colors ${
                                                    isActive
                                                        ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                                                        : "text-slate-700 dark:text-slate-300"
                                                }`}
                                            >
                                                <span className={isActive ? "text-emerald-500" : "text-slate-400"}>{it.icon}</span>
                                                <span className="flex-1 min-w-0">
                                                    <span className="block text-sm truncate">{it.label}</span>
                                                    {it.hint && <span className="block text-xs text-slate-400 truncate">{it.hint}</span>}
                                                </span>
                                                {it.id === "copy-email" && copied && (
                                                    <span className="text-xs text-emerald-500">Copied!</span>
                                                )}
                                                {it.group === "Links" || it.id === "resume" ? (
                                                    <ExternalLink size={13} className="text-slate-300 dark:text-slate-600" />
                                                ) : isActive ? (
                                                    <CornerDownLeft size={13} className="text-emerald-500" />
                                                ) : null}
                                            </button>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between px-4 py-2.5 border-t border-slate-200 dark:border-white/10 text-[11px] text-slate-400">
                            <span className="flex items-center gap-3">
                                <span className="flex items-center gap-1"><kbd className="mono px-1 rounded border border-slate-300 dark:border-white/15">↑↓</kbd> navigate</span>
                                <span className="flex items-center gap-1"><kbd className="mono px-1 rounded border border-slate-300 dark:border-white/15">↵</kbd> open</span>
                            </span>
                            <span className="mono">Ayush Dixit</span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
