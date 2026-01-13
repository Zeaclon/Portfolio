import { NextResponse } from 'next/server';

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

if (!GITHUB_USERNAME || !GITHUB_TOKEN) {
    throw new Error('GITHUB_USERNAME or GITHUB_TOKEN not set');
}

interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    fork: boolean;
    archived: boolean;
    topics: string[];
    language: string | null;
    html_url: string;
    homepage: string | null;
    stargazers_count: number;
}

export async function GET() {
    try {
        const res = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                    Accept: 'application/vnd.github+json',
                },
                cache: 'no-store',
            }
        );

        const repos: GitHubRepo[] = await res.json();

        const projects = repos
            .filter(
                (repo) =>
                    !repo.fork &&
                    !repo.archived &&
                    repo.description
            )
            .map((repo) => ({
                id: repo.id,
                title: repo.name.replace(/-/g, ' '),
                description: repo.description!,
                technologies: repo.topics ?? [],
                primaryLanguage: repo.language,
                githubLink: repo.html_url,
                liveDemoLink: repo.homepage,
                stars: repo.stargazers_count,
            }));

        return NextResponse.json(projects);
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: 'Failed to fetch GitHub projects' },
            { status: 500 }
        );
    }
}