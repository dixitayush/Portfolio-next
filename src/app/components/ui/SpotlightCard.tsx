"use client";

import React, { useRef } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    as?: "div";
}

export default function SpotlightCard({ children, className = "", ...rest }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    return (
        <div ref={ref} onMouseMove={onMove} className={`spotlight ${className}`} {...rest}>
            {children}
        </div>
    );
}
