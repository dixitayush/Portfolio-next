"use client";

import React from "react";
import { motion } from "framer-motion";

export const languageColors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Java: "#b07219",
    Rust: "#dea584",
    Shell: "#89e051",
    Go: "#00ADD8",
    Ruby: "#701516",
    PLpgSQL: "#336790",
    Mermaid: "#ff3670",
    Dockerfile: "#384d54",
    PowerShell: "#012456",
    Vue: "#41b883",
    Kotlin: "#A97BFF",
};

export default function LanguageBar({ languages }: { languages: Record<string, number> }) {
    const entries = Object.entries(languages).sort((a, b) => b[1] - a[1]);
    const total = entries.reduce((sum, [, v]) => sum + v, 0) || 1;

    return (
        <div>
            <div className="flex h-2.5 w-full rounded-full overflow-hidden bg-slate-100 dark:bg-white/[0.04]">
                {entries.map(([lang, bytes], i) => (
                    <motion.span
                        key={lang}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(bytes / total) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full"
                        style={{ backgroundColor: languageColors[lang] || "#8b8b8b" }}
                        title={`${lang} ${((bytes / total) * 100).toFixed(1)}%`}
                    />
                ))}
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3">
                {entries.map(([lang, bytes]) => (
                    <span key={lang} className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: languageColors[lang] || "#8b8b8b" }} />
                        {lang}
                        <span className="text-slate-400 dark:text-slate-500">{((bytes / total) * 100).toFixed(1)}%</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
