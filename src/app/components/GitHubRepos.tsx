import React from 'react';
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';
import Link from 'next/link';

// GitHub language → color mapping
const languageColors: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    Python: '#3572A5',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Java: '#b07219',
    Shell: '#89e051',
    Go: '#00ADD8',
    Rust: '#dea584',
    Ruby: '#701516',
};

interface GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    pushed_at: string;
    homepage: string | null;
    fork: boolean;
    archived: boolean;
}

async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
    try {
        const res = await fetch(
            'https://api.github.com/users/dixitayush/repos?per_page=100&sort=pushed',
            { next: { revalidate: 3600 } } // ISR: revalidate every hour
        );
        if (!res.ok) return [];
        const repos: GitHubRepo[] = await res.json();
        return repos
            .filter((r) => !r.fork && !r.archived)
            .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
    } catch {
        return [];
    }
}

function timeAgo(dateStr: string): string {
    const now = new Date();
    const date = new Date(dateStr);
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'week', seconds: 604800 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
    ];
    for (const interval of intervals) {
        const count = Math.floor(seconds / interval.seconds);
        if (count >= 1) return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
    }
    return 'just now';
}

export default async function GitHubRepos() {
    const repos = await fetchGitHubRepos();

    return (
        <section id="github" className="py-28 relative overflow-hidden bg-white dark:bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 gradient-mesh opacity-20 -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16 text-center">
                    <p className="text-emerald-500 font-medium text-sm tracking-widest uppercase mb-3">Open Source</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        GitHub <span className="text-gradient">Repositories</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        All my public repositories, fetched live from GitHub
                    </p>
                </div>

                {repos.length === 0 ? (
                    <p className="text-center text-slate-500">Unable to load repositories.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        {repos.map((repo) => (
                            <Link
                                key={repo.id}
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block"
                            >
                                <div className="h-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/5 p-6 flex flex-col">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-3 min-w-0">
                                            <Github size={20} className="text-slate-400 dark:text-slate-500 flex-shrink-0" />
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate group-hover:text-emerald-500 transition-colors">
                                                {repo.name}
                                            </h3>
                                        </div>
                                        <ExternalLink size={16} className="text-slate-300 dark:text-slate-600 group-hover:text-emerald-500 transition-colors flex-shrink-0 mt-1" />
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2 flex-1">
                                        {repo.description || 'No description provided.'}
                                    </p>

                                    {/* Footer meta */}
                                    <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500">
                                        {/* Language */}
                                        {repo.language && (
                                            <span className="flex items-center gap-1.5">
                                                <span
                                                    className="w-3 h-3 rounded-full inline-block"
                                                    style={{ backgroundColor: languageColors[repo.language] || '#8b8b8b' }}
                                                />
                                                {repo.language}
                                            </span>
                                        )}

                                        {/* Stars */}
                                        {repo.stargazers_count > 0 && (
                                            <span className="flex items-center gap-1">
                                                <Star size={13} />
                                                {repo.stargazers_count}
                                            </span>
                                        )}

                                        {/* Forks */}
                                        {repo.forks_count > 0 && (
                                            <span className="flex items-center gap-1">
                                                <GitFork size={13} />
                                                {repo.forks_count}
                                            </span>
                                        )}

                                        {/* Last updated */}
                                        <span className="ml-auto">
                                            Updated {timeAgo(repo.pushed_at)}
                                        </span>
                                    </div>

                                    {/* Homepage link */}
                                    {repo.homepage && (
                                        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/[0.06]">
                                            <span className="text-xs text-emerald-500 font-medium truncate block">
                                                🔗 {repo.homepage}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                {/* View All on GitHub */}
                <div className="text-center mt-12">
                    <Link
                        href="https://github.com/dixitayush"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 rounded-full text-sm font-semibold hover:border-emerald-500/30 transition-all hover:-translate-y-0.5 hover:bg-emerald-500/5"
                    >
                        <Github size={18} />
                        View Profile on GitHub
                    </Link>
                </div>
            </div>
        </section>
    );
}
