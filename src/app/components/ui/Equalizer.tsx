"use client";

import React from "react";

interface Props {
    playing: boolean;
    bars?: number;
    className?: string;
}

export default function Equalizer({ playing, bars = 4, className = "" }: Props) {
    return (
        <span
            className={`flex items-end gap-[2px] h-3.5 ${className}`}
            aria-hidden="true"
        >
            {Array.from({ length: bars }).map((_, i) => (
                <span
                    key={i}
                    className={`w-[3px] rounded-full bg-current ${playing ? "animate-eq" : "h-1"}`}
                    style={
                        playing
                            ? {
                                animationDelay: `${i * 0.13}s`,
                                animationDuration: `${0.75 + (i % 3) * 0.22}s`,
                            }
                            : undefined
                    }
                />
            ))}
        </span>
    );
}
