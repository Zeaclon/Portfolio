import { NextResponse } from 'next/server';

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

if (!GITHUB_USERNAME || !GITHUB_TOKEN) {
    throw new Error('GITHUB_USERNAME or GITHUB_TOKEN not set in .env.local');
}

// Expanded language categories
const FRONTEND_LANGUAGES = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Vue', 'React', 'Svelte'];
const BACKEND_LANGUAGES = ['Python', 'Node.js', 'C#', 'Java', 'PHP', 'Go', 'Ruby', 'Kotlin', 'C++'];
const CLOUD_LANGUAGES = ['Dockerfile', 'YAML', 'Terraform', 'Shell', 'Docker', 'Kubernetes'];

export async function GET() {
    try {
        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, {
            headers: { Authorization: `token ${GITHUB_TOKEN}` },
        });
        const repos = await reposRes.json();

        const categories: Record<string, Record<string, number>> = {
            frontend: {},
            backend: {},
            cloud: {},
        };

        for (const repo of repos) {
            const langRes = await fetch(
                `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/languages`,
                { headers: { Authorization: `token ${GITHUB_TOKEN}` } }
            );
            const languages = await langRes.json();

            for (const [lang, bytes] of Object.entries(languages)) {
                const nBytes = bytes as number;

                if (FRONTEND_LANGUAGES.includes(lang)) {
                    categories.frontend[lang] = (categories.frontend[lang] || 0) + nBytes;
                } else if (BACKEND_LANGUAGES.includes(lang)) {
                    categories.backend[lang] = (categories.backend[lang] || 0) + nBytes;
                } else if (CLOUD_LANGUAGES.includes(lang)) {
                    categories.cloud[lang] = (categories.cloud[lang] || 0) + nBytes;
                } else {
                    // If it doesn't match any category, assign it to backend by default
                    categories.backend[lang] = (categories.backend[lang] || 0) + nBytes;
                }
            }
        }

        // Convert bytes to percentages and take top 5 per category
        const percentages: Record<string, Record<string, number>> = {};
        for (const [category, langs] of Object.entries(categories)) {
            const total = Object.values(langs).reduce((a, b) => a + b, 0);
            percentages[category] = Object.fromEntries(
                Object.entries(langs)
                    .sort(([, a], [, b]) => b - a)
                    .slice(0, 5)
                    .map(([lang, bytes]) => [lang, Math.round((bytes / total) * 100)])
            );
        }

        return NextResponse.json(percentages);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch GitHub languages' }, { status: 500 });
    }
}