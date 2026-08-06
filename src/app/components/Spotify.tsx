"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
    Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Repeat1,
    Volume2, VolumeX, ExternalLink, Disc3, ListMusic, Music4,
} from "lucide-react";
import { portfolioData, type Playlist } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import Equalizer from "./ui/Equalizer";

const { playlists, profile: spotifyProfile, clipSeconds: CLIP_SECONDS } = portfolioData.spotify;

/** Artwork resolved from the iTunes Search API at runtime */
interface TrackMeta {
    artwork: string;
    seconds: number | null;
}

type RepeatMode = "off" | "all" | "one";

/* Minimal YouTube IFrame API surface we actually use */
interface YTPlayer {
    destroy: () => void;
    loadVideoById: (opts: { videoId: string; startSeconds?: number }) => void;
    playVideo: () => void;
    pauseVideo: () => void;
    seekTo: (seconds: number, allowSeekAhead: boolean) => void;
    getCurrentTime: () => number;
    getDuration: () => number;
    getPlayerState: () => number;
    setVolume: (n: number) => void;
    mute: () => void;
    unMute: () => void;
    isMuted: () => boolean;
}

interface YTNamespace {
    Player: new (
        el: HTMLElement | string,
        opts: {
            height?: string | number;
            width?: string | number;
            videoId?: string;
            playerVars?: Record<string, number | string>;
            events?: {
                onReady?: (e: { target: YTPlayer }) => void;
                onStateChange?: (e: { data: number; target: YTPlayer }) => void;
                onError?: () => void;
            };
        }
    ) => YTPlayer;
    PlayerState: { ENDED: number; PLAYING: number; PAUSED: number; BUFFERING: number; CUED: number };
}

declare global {
    interface Window {
        YT?: YTNamespace;
        onYouTubeIframeAPIReady?: () => void;
    }
}

const uniqueQueries = Array.from(
    new Set(playlists.flatMap((p) => p.tracks.map((t) => t.query)))
);

const toSeconds = (mmss: string) => {
    const [m, s] = mmss.split(":").map(Number);
    return (m || 0) * 60 + (s || 0);
};

const fmtTime = (total: number) => {
    if (!Number.isFinite(total) || total < 0) return "0:00";
    return `${Math.floor(total / 60)}:${String(Math.floor(total % 60)).padStart(2, "0")}`;
};

const playlistMinutes = (p: Playlist) =>
    `${Math.round(p.tracks.reduce((sum, t) => sum + toSeconds(t.duration), 0) / 60)} min`;

const searchUrl = (q: string) => `https://open.spotify.com/search/${encodeURIComponent(q)}`;

const playlistUrl = (p: Playlist) => p.url ?? `${searchUrl(p.name)}/playlists`;

const youtubeWatch = (id: string) => `https://www.youtube.com/watch?v=${id}`;

let ytApiPromise: Promise<YTNamespace> | null = null;

function loadYouTubeApi(): Promise<YTNamespace> {
    if (typeof window === "undefined") return Promise.reject(new Error("ssr"));
    if (window.YT?.Player) return Promise.resolve(window.YT);
    if (ytApiPromise) return ytApiPromise;

    ytApiPromise = new Promise((resolve) => {
        const prev = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
            prev?.();
            if (window.YT) resolve(window.YT);
        };
        if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            document.head.appendChild(tag);
        }
        // Already mid-load from a previous mount
        const poll = setInterval(() => {
            if (window.YT?.Player) {
                clearInterval(poll);
                resolve(window.YT);
            }
        }, 50);
    });

    return ytApiPromise;
}

export default function Spotify() {
    const sectionRef = useRef<HTMLElement>(null);
    const ytHostRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<YTPlayer | null>(null);
    const tickRef = useRef<number | null>(null);
    const clipLimitRef = useRef(CLIP_SECONDS);
    const advanceRef = useRef<(dir: 1 | -1, auto?: boolean) => void>(() => undefined);
    const repeatRef = useRef<RepeatMode>("all");

    const inView = useInView(sectionRef, { once: true, margin: "300px" });

    const [meta, setMeta] = useState<Record<string, TrackMeta>>({});
    const [ytReady, setYtReady] = useState(false);
    const [tab, setTab] = useState(playlists[0].id);
    const [cursor, setCursor] = useState({ playlistId: playlists[0].id, index: 0 });
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [clipLength, setClipLength] = useState(CLIP_SECONDS);
    const [volume, setVolume] = useState(0.8);
    const [muted, setMuted] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [repeat, setRepeat] = useState<RepeatMode>("all");

    repeatRef.current = repeat;

    const visible = useMemo(
        () => playlists.find((p) => p.id === tab) ?? playlists[0],
        [tab]
    );
    const queue = useMemo(
        () => playlists.find((p) => p.id === cursor.playlistId) ?? playlists[0],
        [cursor.playlistId]
    );
    const current = queue.tracks[cursor.index];
    const currentMeta = meta[current.query];

    // Resolve artwork once the section is close to the viewport
    useEffect(() => {
        if (!inView) return;
        let cancelled = false;

        const resolve = async (query: string): Promise<[string, TrackMeta] | null> => {
            try {
                const res = await fetch(
                    `https://itunes.apple.com/search?entity=song&limit=1&term=${encodeURIComponent(query)}`
                );
                if (!res.ok) return null;
                const hit = (await res.json())?.results?.[0];
                if (!hit) return null;
                return [
                    query,
                    {
                        artwork: String(hit.artworkUrl100 ?? "").replace("100x100bb", "600x600bb"),
                        seconds: hit.trackTimeMillis ? Math.round(hit.trackTimeMillis / 1000) : null,
                    },
                ];
            } catch {
                return null;
            }
        };

        Promise.all(uniqueQueries.map(resolve)).then((entries) => {
            if (cancelled) return;
            setMeta(Object.fromEntries(entries.filter((e): e is [string, TrackMeta] => e !== null)));
        });

        return () => {
            cancelled = true;
        };
    }, [inView]);

    const stopTick = useCallback(() => {
        if (tickRef.current !== null) {
            window.clearInterval(tickRef.current);
            tickRef.current = null;
        }
    }, []);

    const startTick = useCallback(() => {
        stopTick();
        tickRef.current = window.setInterval(() => {
            const player = playerRef.current;
            if (!player) return;
            const t = player.getCurrentTime() || 0;
            const limit = clipLimitRef.current;
            setProgress(Math.min(t, limit));
            if (t >= limit - 0.15) {
                stopTick();
                player.pauseVideo();
                advanceRef.current(1, true);
            }
        }, 250);
    }, [stopTick]);

    // Boot the YouTube player once
    useEffect(() => {
        let cancelled = false;

        loadYouTubeApi().then((YT) => {
            if (cancelled || !ytHostRef.current || playerRef.current) return;

            playerRef.current = new YT.Player(ytHostRef.current, {
                height: 1,
                width: 1,
                videoId: playlists[0].tracks[0].youtubeId,
                playerVars: {
                    autoplay: 0,
                    controls: 0,
                    disablekb: 1,
                    fs: 0,
                    modestbranding: 1,
                    rel: 0,
                    playsinline: 1,
                },
                events: {
                    onReady: (e) => {
                        e.target.setVolume(Math.round(volume * 100));
                        if (muted) e.target.mute();
                        setYtReady(true);
                    },
                    onStateChange: (e) => {
                        const YTStates = window.YT?.PlayerState;
                        if (!YTStates) return;
                        if (e.data === YTStates.PLAYING) {
                            setPlaying(true);
                            const duration = e.target.getDuration() || CLIP_SECONDS;
                            const limit = Math.min(CLIP_SECONDS, duration);
                            clipLimitRef.current = limit;
                            setClipLength(limit);
                            startTick();
                        } else if (e.data === YTStates.PAUSED) {
                            setPlaying(false);
                            stopTick();
                        } else if (e.data === YTStates.ENDED) {
                            setPlaying(false);
                            stopTick();
                            advanceRef.current(1, true);
                        }
                    },
                    onError: () => {
                        setPlaying(false);
                        stopTick();
                    },
                },
            });
        });

        return () => {
            cancelled = true;
            stopTick();
            try {
                playerRef.current?.destroy();
            } catch {
                /* player may already be gone */
            }
            playerRef.current = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps -- boot once
    }, []);

    // Keep volume / mute in sync
    useEffect(() => {
        const player = playerRef.current;
        if (!player || !ytReady) return;
        player.setVolume(Math.round(volume * 100));
        if (muted) player.mute();
        else player.unMute();
    }, [volume, muted, ytReady]);

    const advance = useCallback(
        (dir: 1 | -1, auto = false) => {
            if (auto && repeatRef.current === "one") {
                const player = playerRef.current;
                player?.seekTo(0, true);
                player?.playVideo();
                setProgress(0);
                setPlaying(true);
                return;
            }

            const total = queue.tracks.length;
            let next: number;

            if (shuffle && total > 1) {
                do {
                    next = Math.floor(Math.random() * total);
                } while (next === cursor.index);
            } else {
                next = cursor.index + dir;
                if (next >= total) {
                    if (auto && repeatRef.current === "off") {
                        setPlaying(false);
                        setProgress(0);
                        return;
                    }
                    next = 0;
                } else if (next < 0) {
                    next = total - 1;
                }
            }

            setCursor({ playlistId: queue.id, index: next });
            setProgress(0);
            setPlaying(true);
        },
        [queue, cursor.index, shuffle]
    );

    advanceRef.current = advance;

    // Cue the new video whenever the track changes
    useEffect(() => {
        const player = playerRef.current;
        if (!player || !ytReady) return;
        try {
            player.loadVideoById({ videoId: current.youtubeId, startSeconds: 0 });
            setProgress(0);
            if (playing) player.playVideo();
            else player.pauseVideo();
        } catch {
            /* player not ready for commands yet */
        }
        // intentionally omit `playing` — play/pause is handled below
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current.youtubeId, ytReady]);

    // Play / pause without reloading the video
    useEffect(() => {
        const player = playerRef.current;
        if (!player || !ytReady) return;
        try {
            if (playing) player.playVideo();
            else player.pauseVideo();
        } catch {
            /* ignore */
        }
    }, [playing, ytReady]);

    const selectTrack = (playlistId: string, index: number) => {
        if (cursor.playlistId === playlistId && cursor.index === index) {
            setPlaying((p) => !p);
            return;
        }
        setCursor({ playlistId, index });
        setProgress(0);
        setPlaying(true);
    };

    const onPlayToggle = () => {
        if (playing) {
            setPlaying(false);
            return;
        }
        if (progress >= clipLength - 0.3) {
            playerRef.current?.seekTo(0, true);
            setProgress(0);
        }
        setPlaying(true);
    };

    const seek = (value: number) => {
        const player = playerRef.current;
        setProgress(value);
        player?.seekTo(value, true);
    };

    const fill = (pct: number) =>
        `linear-gradient(to right, #10b981 ${pct}%, transparent ${pct}%)`;

    const RepeatIcon = repeat === "one" ? Repeat1 : Repeat;
    const progressPct = clipLength ? (progress / clipLength) * 100 : 0;
    const canPlay = ytReady && Boolean(current.youtubeId);

    return (
        <section
            ref={sectionRef}
            id="music"
            className="py-28 relative overflow-hidden bg-slate-50/50 dark:bg-[#050505]"
        >
            <div className="absolute inset-0 dot-grid opacity-40 dark:opacity-20 -z-10" />
            <div className="absolute -top-32 left-1/4 w-[36rem] h-[36rem] rounded-full bg-emerald-500/10 blur-[130px] animate-aurora -z-10" />
            <div className="absolute -bottom-32 right-1/4 w-[30rem] h-[30rem] rounded-full bg-violet-500/10 blur-[130px] animate-aurora -z-10" />

            {/* Off-screen YouTube host — streams audio for the custom UI */}
            <div className="fixed left-[-9999px] top-0 w-px h-px overflow-hidden opacity-0 pointer-events-none" aria-hidden="true">
                <div ref={ytHostRef} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading
                    eyebrow="Off the Clock"
                    title={<>What I <span className="text-gradient">code to</span></>}
                    subtitle="Three playlists on permanent rotation. Hit play for a 2-minute clip from the official video, or open any track in Spotify for the whole thing."
                />

                {/* Playlist selector */}
                <div className="grid sm:grid-cols-3 gap-4 max-w-6xl mx-auto mb-6">
                    {playlists.map((p, i) => {
                        const isActive = p.id === tab;
                        const isSourcePlaying = cursor.playlistId === p.id && playing;
                        return (
                            <motion.button
                                key={p.id}
                                onClick={() => setTab(p.id)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                aria-pressed={isActive}
                                className={`group relative text-left rounded-2xl p-4 border transition-all duration-300 ${isActive
                                    ? "border-emerald-500/50 bg-white dark:bg-white/[0.05] shadow-lg shadow-emerald-500/10"
                                    : "border-slate-200 dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.02] hover:border-emerald-500/30 hover:-translate-y-0.5"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md bg-gradient-to-br ${p.gradient}`}>
                                        <div className="absolute inset-0 grid grid-cols-2">
                                            {p.tracks.slice(0, 4).map((t) => {
                                                const art = meta[t.query]?.artwork;
                                                return art ? (
                                                    // eslint-disable-next-line @next/next/no-img-element
                                                    <img key={t.query} src={art} alt="" className="w-full h-full object-cover" />
                                                ) : (
                                                    <span key={t.query} className="w-full h-full" />
                                                );
                                            })}
                                        </div>
                                        <span className="absolute inset-0 grid place-items-center bg-black/35 text-white">
                                            {isSourcePlaying ? (
                                                <Equalizer playing bars={3} />
                                            ) : (
                                                <ListMusic size={18} />
                                            )}
                                        </span>
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className={`font-bold truncate transition-colors ${isActive ? "text-emerald-600 dark:text-emerald-400" : "text-slate-900 dark:text-white"}`}>
                                            {p.name}
                                        </h3>
                                        <p className="mono text-[11px] text-slate-400 mt-0.5">
                                            {p.tracks.length} tracks · {playlistMinutes(p)}
                                        </p>
                                        <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                                            {p.mood}
                                        </p>
                                    </div>
                                </div>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Player + track list */}
                <div className="grid lg:grid-cols-[340px_minmax(0,1fr)] gap-6 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="relative rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] p-6 overflow-hidden"
                    >
                        {currentMeta?.artwork && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={currentMeta.artwork}
                                alt=""
                                aria-hidden="true"
                                className="absolute -inset-10 w-[130%] h-[130%] object-cover blur-3xl opacity-20 dark:opacity-25 pointer-events-none"
                            />
                        )}

                        <div className="relative">
                            <div className="relative w-full max-w-[240px] aspect-square mx-auto mb-6">
                                <div
                                    className={`vinyl absolute right-0 top-1/2 -translate-y-1/2 h-[78%] aspect-square rounded-full ring-1 ring-black/30 shadow-xl ${playing ? "animate-spin-slow" : ""}`}
                                >
                                    <span className="absolute inset-[44%] rounded-full bg-emerald-500" />
                                </div>
                                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${queue.gradient}`}>
                                    <AnimatePresence mode="wait">
                                        {currentMeta?.artwork ? (
                                            <motion.img
                                                key={currentMeta.artwork}
                                                src={currentMeta.artwork}
                                                alt={`${current.album} cover art`}
                                                initial={{ opacity: 0, scale: 1.04 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.4 }}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <motion.span
                                                key="placeholder"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="absolute inset-0 grid place-items-center text-white/80"
                                            >
                                                <Disc3 size={44} className={playing ? "animate-spin-slow" : ""} />
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="text-center mb-5">
                                <p className="mono inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-emerald-500 mb-2">
                                    <Equalizer playing={playing} bars={3} />
                                    {playing ? "Now playing" : "Paused"}
                                </p>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white truncate">
                                    {current.title}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
                                    {current.artist}
                                </p>
                                <p className="mono text-[11px] text-slate-400 mt-1 truncate">
                                    {current.album} · {current.year}
                                </p>
                            </div>

                            <div className="mb-4">
                                <input
                                    type="range"
                                    min={0}
                                    max={clipLength}
                                    step={0.1}
                                    value={progress}
                                    onChange={(e) => seek(Number(e.target.value))}
                                    disabled={!canPlay}
                                    aria-label="Seek within clip"
                                    className="range-slim disabled:opacity-50"
                                    style={{ backgroundImage: fill(progressPct) }}
                                />
                                <div className="flex justify-between mono text-[10px] text-slate-400 mt-2">
                                    <span>{fmtTime(progress)}</span>
                                    <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500">
                                        2 min clip
                                    </span>
                                    <span>{fmtTime(clipLength)}</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-center gap-2 mb-5">
                                <button
                                    onClick={() => setShuffle((s) => !s)}
                                    aria-label="Shuffle"
                                    aria-pressed={shuffle}
                                    className={`p-2 rounded-full transition-colors ${shuffle ? "text-emerald-500 bg-emerald-500/10" : "text-slate-400 hover:text-slate-700 dark:hover:text-white"}`}
                                >
                                    <Shuffle size={16} />
                                </button>
                                <button
                                    onClick={() => (progress > 3 ? seek(0) : advance(-1))}
                                    aria-label="Previous track"
                                    className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                                >
                                    <SkipBack size={18} />
                                </button>
                                <motion.button
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.94 }}
                                    onClick={onPlayToggle}
                                    disabled={!canPlay}
                                    aria-label={playing ? "Pause" : "Play"}
                                    className="grid place-items-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 disabled:opacity-40 disabled:shadow-none"
                                >
                                    {playing ? <Pause size={22} /> : <Play size={22} className="ml-0.5" />}
                                </motion.button>
                                <button
                                    onClick={() => advance(1)}
                                    aria-label="Next track"
                                    className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                                >
                                    <SkipForward size={18} />
                                </button>
                                <button
                                    onClick={() =>
                                        setRepeat((r) => (r === "off" ? "all" : r === "all" ? "one" : "off"))
                                    }
                                    aria-label={`Repeat: ${repeat}`}
                                    className={`p-2 rounded-full transition-colors ${repeat !== "off" ? "text-emerald-500 bg-emerald-500/10" : "text-slate-400 hover:text-slate-700 dark:hover:text-white"}`}
                                >
                                    <RepeatIcon size={16} />
                                </button>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setMuted((m) => !m)}
                                    aria-label={muted ? "Unmute" : "Mute"}
                                    className="text-slate-400 hover:text-emerald-500 transition-colors"
                                >
                                    {muted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
                                </button>
                                <input
                                    type="range"
                                    min={0}
                                    max={1}
                                    step={0.01}
                                    value={muted ? 0 : volume}
                                    onChange={(e) => {
                                        setVolume(Number(e.target.value));
                                        setMuted(false);
                                    }}
                                    aria-label="Volume"
                                    className="range-slim flex-1"
                                    style={{ backgroundImage: fill((muted ? 0 : volume) * 100) }}
                                />
                                <a
                                    href={searchUrl(`${current.title} ${current.artist}`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-black hover:opacity-90 transition-opacity"
                                >
                                    Spotify
                                    <ExternalLink size={12} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] p-5 sm:p-6"
                    >
                        <div className="flex items-start justify-between gap-4 mb-5">
                            <div className="min-w-0">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    <Music4 size={17} className="text-emerald-500 flex-shrink-0" />
                                    {visible.name}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-1.5">
                                    {visible.description}
                                </p>
                            </div>
                            <a
                                href={playlistUrl(visible)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:inline-flex flex-shrink-0 items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                            >
                                Open playlist
                                <ExternalLink size={12} />
                            </a>
                        </div>

                        <ul className="divide-y divide-slate-100 dark:divide-white/[0.05] max-h-[28rem] overflow-y-auto pr-1">
                            {visible.tracks.map((track, i) => {
                                const isCurrent =
                                    cursor.playlistId === visible.id && cursor.index === i;
                                const trackMeta = meta[track.query];
                                const length = trackMeta?.seconds
                                    ? fmtTime(trackMeta.seconds)
                                    : track.duration;

                                return (
                                    <motion.li
                                        key={`${visible.id}-${track.query}`}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: Math.min(i, 8) * 0.04 }}
                                        className={`group flex items-center gap-3 rounded-xl px-2 sm:px-3 py-2.5 transition-colors ${isCurrent
                                            ? "bg-emerald-500/[0.07]"
                                            : "hover:bg-slate-50 dark:hover:bg-white/[0.03]"
                                            }`}
                                    >
                                        <button
                                            onClick={() => selectTrack(visible.id, i)}
                                            disabled={!ytReady}
                                            className="flex flex-1 min-w-0 items-center gap-3 sm:gap-4 text-left disabled:cursor-not-allowed"
                                            aria-label={
                                                isCurrent && playing
                                                    ? `Pause ${track.title}`
                                                    : `Play clip of ${track.title}`
                                            }
                                        >
                                            <span className="relative w-5 flex-shrink-0 grid place-items-center text-emerald-500">
                                                {isCurrent && playing ? (
                                                    <Equalizer playing bars={3} />
                                                ) : (
                                                    <>
                                                        <span className="mono text-xs text-slate-400 group-hover:opacity-0 transition-opacity">
                                                            {String(i + 1).padStart(2, "0")}
                                                        </span>
                                                        <Play
                                                            size={13}
                                                            className="absolute opacity-0 group-hover:opacity-100 transition-opacity"
                                                        />
                                                    </>
                                                )}
                                            </span>

                                            <span className={`relative w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br ${visible.gradient}`}>
                                                {trackMeta?.artwork && (
                                                    // eslint-disable-next-line @next/next/no-img-element
                                                    <img
                                                        src={trackMeta.artwork}
                                                        alt=""
                                                        className="w-full h-full object-cover"
                                                    />
                                                )}
                                            </span>

                                            <span className="min-w-0 flex-1">
                                                <span className={`block text-sm font-semibold truncate ${isCurrent ? "text-emerald-600 dark:text-emerald-400" : "text-slate-900 dark:text-white"}`}>
                                                    {track.title}
                                                </span>
                                                <span className="block text-xs text-slate-500 dark:text-slate-400 truncate">
                                                    {track.artist}
                                                </span>
                                            </span>

                                            <span className="hidden md:block flex-1 min-w-0 mono text-[11px] text-slate-400 truncate">
                                                {track.album} · {track.year}
                                            </span>

                                            <span className="mono text-[11px] text-slate-400 flex-shrink-0">
                                                {length}
                                            </span>
                                        </button>

                                        <a
                                            href={youtubeWatch(track.youtubeId)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Watch ${track.title} on YouTube`}
                                            className="p-1.5 rounded-full text-slate-300 dark:text-slate-600 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                                        >
                                            <ExternalLink size={13} />
                                        </a>
                                    </motion.li>
                                );
                            })}
                        </ul>

                        <div className="flex flex-wrap items-center justify-between gap-3 mt-5 pt-4 border-t border-slate-100 dark:border-white/[0.05]">
                            <p className="mono text-[10px] text-slate-400">
                                2-min clips via YouTube · full tracks on Spotify
                            </p>
                            {spotifyProfile && (
                                <a
                                    href={spotifyProfile}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                                >
                                    Follow me on Spotify
                                    <ExternalLink size={12} />
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
