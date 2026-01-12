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

export default SkillCard;