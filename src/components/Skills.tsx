'use client';

import React, { useEffect, useState } from 'react';
import SkillCard from './SkillCard';

interface Skill {
    name: string;
    percentage: number;
}

const Skills: React.FC = () => {
    const [githubSkills, setGithubSkills] = useState<Skill[]>([]);

    useEffect(() => {
        fetch('/api/github-languages')
            .then(res => res.json())
            .then((data) => {
                if (data.error) return;
                const skillsArray: Skill[] = Object.entries(data).map(([name, percentage]) => ({
                    name,
                    percentage: percentage as number,
                }));
                setGithubSkills(skillsArray);
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
                    <SkillCard
                        title="Frontend Development"
                        icon="fas fa-code"
                        skills={[
                            { name: 'React / Next.js', percentage: 95 },
                            { name: 'Vue.js / Nuxt', percentage: 90 },
                            { name: 'TypeScript', percentage: 92 },
                        ]}
                    />

                    <SkillCard title="GitHub Languages" icon="fas fa-code" skills={githubSkills} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
