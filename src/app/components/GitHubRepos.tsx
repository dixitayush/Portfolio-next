import React from 'react';
import { Github, Star, GitFork, ExternalLink, BookMarked, Code } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from './ui/SectionHeading';

const languageColors: Record<string, string> = {
    TypeScript: '#3178c6', JavaScript: '#f1e05a', Python: '#3572A5', HTML: '#e34c26',
    CSS: '#563d7c', Java: '#b07219', Shell: '#89e051', Go: '#00ADD8', Rust: '#dea584',
    Ruby: '#701516', PLpgSQL: '#336790', Mermaid: '#ff3670', Dockerfile: '#384d54',
    PowerShell: '#012456',
};

interface GitHubRepo {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    pushed_at: string;
    homepage: string | null;
    fork: boolean;
    archived: boolean;
    languages_url: string;
}

interface RepoWithLangs extends GitHubRepo {
    languages: Record<string, number>;
}

async function fetchRepos(): Promise<RepoWithLangs[]> {
    try {
        const res = await fetch(
            'https://api.github.com/users/dixitayush/repos?per_page=100&sort=pushed',
            { next: { revalidate: 3600 } }
        );
        if (!res.ok) return [];
        const repos: GitHubRepo[] = await res.json();
        const visible = repos
            .filter((r) => !r.fork && !r.archived)
            .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());

        const withLangs = await Promise.all(
            visible.map(async (r) => {
                try {
                    const lr = await fetch(r.languages_url, { next: { revalidate: 86400 } });
                    const languages = lr.ok ? await lr.json() : {};
                    return { ...r, languages } as RepoWithLangs;
                } catch {
                    return { ...r, languages: {} } as RepoWithLangs;
                }
            })
        );
        return withLangs;
    } catch {
        return [];
    }
}

function timeAgo(dateStr: string): string {
    const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
    const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'week', seconds: 604800 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
    ];
    for (const i of intervals) {
        const c = Math.floor(seconds / i.seconds);
        if (c >= 1) return `${c} ${i.label}${c > 1 ? 's' : ''} ago`;
    }
    return 'just now';
}

function MiniLangBar({ languages }: { languages: Record<string, number> }) {
    const entries = Object.entries(languages).sort((a, b) => b[1] - a[1]).slice(0, 4);
    const total = entries.reduce((s, [, v]) => s + v, 0) || 1;
    if (entries.length === 0) return null;
    return (
        <div className="flex h-1.5 w-full rounded-full overflow-hidden bg-slate-100 dark:bg-white/[0.04]">
            {entries.map(([lang, bytes]) => (
                <span key={lang} className="h-full" style={{ width: `${(bytes / total) * 100}%`, backgroundColor: languageColors[lang] || '#8b8b8b' }} title={lang} />
            ))}
        </div>
    );
}

export default async function GitHubRepos() {
    const repos = await fetchRepos();
    const totalStars = repos.reduce((s, r) => s + r.stargazers_count, 0);
    const langSet = new Set<string>();
    repos.forEach((r) => Object.keys(r.languages).forEach((l) => langSet.add(l)));

    const summary = [
        { icon: <BookMarked size={16} />, value: repos.length, label: 'Public repos' },
        { icon: <Star size={16} />, value: totalStars, label: 'Total stars' },
        { icon: <Code size={16} />, value: langSet.size, label: 'Languages' },
    ];

    return (
        <section id="github" className="py-28 relative overflow-hidden bg-white dark:bg-black">
            <div className="absolute inset-0 gradient-mesh opacity-20 -z-10" />
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading
                    eyebrow="Open Source"
                    title={<>Live from <span className="text-gradient">GitHub</span></>}
                    subtitle="Every public repository, fetched straight from the GitHub API — with language breakdowns and last-pushed times."
                />

                {repos.length === 0 ? (
                    <p className="text-center text-slate-500">Repositories are taking a moment — check back shortly or visit GitHub directly.</p>
                ) : (
                    <>
                        {/* Summary */}
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {summary.map((s) => (
                                <div key={s.label} className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                                    <span className="text-emerald-500">{s.icon}</span>
                                    <span className="font-bold text-slate-900 dark:text-white">{s.value}</span>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">{s.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
                            {repos.map((repo) => (
                                <Link
                                    key={repo.id}
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block"
                                >
                                    <div className="h-full rounded-2xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5 p-6 flex flex-col">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-2.5 min-w-0">
                                                <Github size={18} className="text-slate-400 flex-shrink-0" />
                                                <h3 className="font-bold text-slate-900 dark:text-white truncate group-hover:text-emerald-500 transition-colors">{repo.name}</h3>
                                            </div>
                                            <ExternalLink size={15} className="text-slate-300 dark:text-slate-600 group-hover:text-emerald-500 transition-colors flex-shrink-0 mt-1" />
                                        </div>

                                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2 flex-1">
                                            {repo.description || 'No description provided.'}
                                        </p>

                                        <MiniLangBar languages={repo.languages} />

                                        <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500 mt-3">
                                            {repo.language && (
                                                <span className="flex items-center gap-1.5">
                                                    <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: languageColors[repo.language] || '#8b8b8b' }} />
                                                    {repo.language}
                                                </span>
                                            )}
                                            {repo.stargazers_count > 0 && <span className="flex items-center gap-1"><Star size={13} /> {repo.stargazers_count}</span>}
                                            {repo.forks_count > 0 && <span className="flex items-center gap-1"><GitFork size={13} /> {repo.forks_count}</span>}
                                            <span className="ml-auto mono">{timeAgo(repo.pushed_at)}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </>
                )}

                <div className="text-center mt-12">
                    <Link
                        href="https://github.com/dixitayush"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 rounded-full text-sm font-semibold hover:border-emerald-500/30 transition-all hover:-translate-y-0.5 hover:bg-emerald-500/5"
                    >
                        <Github size={18} />
                        View full profile on GitHub
                    </Link>
                </div>
            </div>
        </section>
    );
}
