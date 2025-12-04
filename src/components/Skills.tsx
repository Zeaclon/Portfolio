import React from 'react';

interface Skill {
    name: string;
    percentage: number;
}

interface SkillsSectionProps {
    title: string;
    icon: string;
    skills: Skill[];
}

const SkillCard: React.FC<SkillsSectionProps> = ({ title, icon, skills }) => {
    return (
        <div className="glass-effect rounded-2xl p-8 aos-init" data-aos="fade-up">
            <div className="text-4xl mb-4" style={{ color: 'var(--color-primary)' }}>
                <i className={icon}></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <div className="space-y-3">
                {skills.map((skill, index) => (
                    <div key={index}>
                        <div className="flex justify-between mb-1">
                            <span>{skill.name}</span>
                            <span style={{ color: 'var(--color-accent)' }}>{skill.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                            <div
                                className="h-2 rounded-full"
                                style={{
                                    width: `${skill.percentage}%`,
                                    background: 'linear-gradient(to right, var(--color-accent), var(--color-primary))',
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Skills: React.FC = () => {
    const frontendSkills: Skill[] = [
        { name: 'React / Next.js', percentage: 95 },
        { name: 'Vue.js / Nuxt', percentage: 90 },
        { name: 'TypeScript', percentage: 92 },
    ];

    const backendSkills: Skill[] = [
        { name: 'Node.js / Express', percentage: 93 },
        { name: 'Python / Django', percentage: 88 },
        { name: 'GraphQL / REST APIs', percentage: 91 },
    ];

    const devOpsSkills: Skill[] = [
        { name: 'AWS / Azure', percentage: 87 },
        { name: 'Docker / Kubernetes', percentage: 85 },
        { name: 'CI/CD Pipelines', percentage: 89 },
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2
                    className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text aos-init"
                    data-aos="fade-up"
                >
                    Skills &amp; Expertise
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <SkillCard title="Frontend Development" icon="fas fa-code" skills={frontendSkills} />
                    <SkillCard title="Backend Development" icon="fas fa-server" skills={backendSkills} />
                    <SkillCard title="DevOps &amp; Cloud" icon="fas fa-cloud" skills={devOpsSkills} />
                </div>
            </div>
        </section>
    );
};

export default Skills;