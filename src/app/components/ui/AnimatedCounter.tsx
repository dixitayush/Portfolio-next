"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
    value: number;
    suffix?: string;
    duration?: number;
}

export default function AnimatedCounter({ value, suffix = "", duration = 1400 }: Props) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let raf = 0;
        const start = performance.now();
        const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(Math.round(eased * value));
            if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, value, duration]);

    return (
        <span ref={ref}>
            {display}
            {suffix}
        </span>
    );
}
