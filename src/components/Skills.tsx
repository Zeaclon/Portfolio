'use client';

import React, { useEffect, useState } from 'react';
import SkillCard from './SkillCard';

interface Skill {
    name: string;
    percentage: number;
}

interface GithubSkillsResponse {
    frontend: Record<string, number>;
    backend: Record<string, number>;
    cloud: Record<string, number>;
}

interface GithubSkillsError {
    error: string;
}

type GithubSkillsApiResponse = GithubSkillsResponse | GithubSkillsError;

const Skills: React.FC = () => {
    const [frontendSkills, setFrontendSkills] = useState<Skill[]>([]);
    const [backendSkills, setBackendSkills] = useState<Skill[]>([]);
    const [cloudSkills, setCloudSkills] = useState<Skill[]>([]);

    useEffect(() => {
        fetch('/api/github-languages')
            .then(res => res.json())
            .then((data: GithubSkillsApiResponse) => {
                if ('error' in data) {
                    console.error(data.error);
                    return;
                }

                setFrontendSkills(Object.entries(data.frontend).map(([name, percentage]) => ({ name, percentage })));
                setBackendSkills(Object.entries(data.backend).map(([name, percentage]) => ({ name, percentage })));
                setCloudSkills(Object.entries(data.cloud).map(([name, percentage]) => ({ name, percentage })));
            })
            .catch(console.error);
    }, []);

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text">
                    Skills &amp; Expertise
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <SkillCard title="Frontend" icon="fas fa-code" skills={frontendSkills} />
                    <SkillCard title="Backend" icon="fas fa-server" skills={backendSkills} />
                    <SkillCard title="Cloud & DevOps" icon="fas fa-cloud" skills={cloudSkills} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
