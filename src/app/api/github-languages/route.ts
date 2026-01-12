import { NextResponse } from 'next/server';

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

if (!GITHUB_USERNAME || !GITHUB_TOKEN) {
    throw new Error('GITHUB_USERNAME or GITHUB_TOKEN not set in .env.local');
}

export async function GET() {
    try {
        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, {
            headers: { Authorization: `token ${GITHUB_TOKEN}` },
        });
        const repos = await reposRes.json();

        const languageTotals: Record<string, number> = {};

        for (const repo of repos) {
            const langRes = await fetch(
                `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/languages`,
                { headers: { Authorization: `token ${GITHUB_TOKEN}` } }
            );
            const languages = await langRes.json();
            for (const [lang, bytes] of Object.entries(languages)) {
                languageTotals[lang] = (languageTotals[lang] || 0) + (bytes as number);
            }
        }

        const totalBytes = Object.values(languageTotals).reduce((a, b) => a + b, 0);
        const percentages = Object.fromEntries(
            Object.entries(languageTotals).map(([lang, bytes]) => [lang, Math.round((bytes / totalBytes) * 100)])
        );

        const sortedLanguages = Object.entries(percentages)
            .sort(([, a], [, b]) => b - a) // sort descending by percentage
            .slice(0, 5); // take top 5

        const topLanguages = Object.fromEntries(sortedLanguages);

        return NextResponse.json(topLanguages);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch GitHub languages' }, { status: 500 });
    }
}
