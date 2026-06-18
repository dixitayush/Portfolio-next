"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Workflow } from "lucide-react";
import type { ArchLayer } from "../../data/portfolio";

const tone: Record<string, { ring: string; chip: string; dot: string; label: string }> = {
    frontend: {
        ring: "border-emerald-500/30 bg-emerald-500/[0.04]",
        chip: "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
        dot: "bg-emerald-500",
        label: "text-emerald-600 dark:text-emerald-400",
    },
    backend: {
        ring: "border-cyan-500/30 bg-cyan-500/[0.04]",
        chip: "border-cyan-500/20 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
        dot: "bg-cyan-500",
        label: "text-cyan-600 dark:text-cyan-400",
    },
    data: {
        ring: "border-amber-500/30 bg-amber-500/[0.04]",
        chip: "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-300",
        dot: "bg-amber-500",
        label: "text-amber-600 dark:text-amber-400",
    },
    external: {
        ring: "border-slate-400/30 bg-slate-500/[0.04]",
        chip: "border-slate-400/20 bg-slate-500/10 text-slate-700 dark:text-slate-300",
        dot: "bg-slate-400",
        label: "text-slate-500 dark:text-slate-400",
    },
    ai: {
        ring: "border-fuchsia-500/30 bg-fuchsia-500/[0.04]",
        chip: "border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300",
        dot: "bg-fuchsia-500",
        label: "text-fuchsia-600 dark:text-fuchsia-400",
    },
};

export default function ArchitectureDiagram({
    layers,
    flow,
}: {
    layers: ArchLayer[];
    flow: string;
}) {
    return (
        <div>
            <div className="space-y-2">
                {layers.map((layer, li) => {
                    const t = tone[layer.tone ?? "backend"];
                    return (
                        <React.Fragment key={li}>
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: li * 0.08 }}
                                className={`rounded-xl border ${t.ring} p-4`}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <span className={`w-1.5 h-1.5 rounded-full ${t.dot}`} />
                                    <span className={`mono text-[11px] uppercase tracking-wider font-semibold ${t.label}`}>
                                        {layer.title}
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {layer.nodes.map((node, ni) => (
                                        <div
                                            key={ni}
                                            className={`rounded-lg border px-3 py-2 ${t.chip}`}
                                        >
                                            <span className="block text-xs font-semibold leading-tight">{node.label}</span>
                                            {node.sub && (
                                                <span className="block mono text-[10px] opacity-70 mt-0.5">{node.sub}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            {li < layers.length - 1 && (
                                <div className="flex justify-center text-slate-300 dark:text-slate-700">
                                    <ChevronDown size={16} />
                                </div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

            {/* Data flow */}
            <div className="mt-5 rounded-xl border border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-white/[0.02] p-4">
                <div className="flex items-center gap-2 mb-2">
                    <Workflow size={14} className="text-emerald-500" />
                    <span className="mono text-[11px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                        Data flow
                    </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{flow}</p>
            </div>
        </div>
    );
}
