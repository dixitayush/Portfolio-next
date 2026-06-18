"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
    eyebrow: string;
    title: React.ReactNode;
    subtitle?: string;
    align?: "center" | "left";
}

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`mb-14 ${align === "center" ? "text-center mx-auto" : "text-left"} max-w-2xl`}
        >
            <p className="mono inline-flex items-center gap-2 text-emerald-500 font-medium text-xs tracking-widest uppercase mb-4">
                <span className="w-6 h-px bg-emerald-500/60" />
                {eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">{subtitle}</p>
            )}
        </motion.div>
    );
}
