'use client';

import React, { useEffect, useState } from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    primaryLanguage: string;
    githubLink: string;
    liveDemoLink?: string | null;
    stars: number;
}

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('/api/github-projects')
            .then(res => res.json())
            .then(setProjects)
            .catch(console.error);
    }, []);

    return (
        <section
            id="projects"
            className="py-20 px-4 sm:px-6 lg:px-8"
            style={{
                background: `linear-gradient(to bottom, var(--gradient-start), var(--gradient-end))`,
            }}
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <div
                            key={project.id}
                            className="glass-effect rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/30 transition-all"
                        >
                            <h3 className="text-2xl font-bold mb-2">
                                {project.title}
                            </h3>

                            <p className="mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.primaryLanguage && (
                                    <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                                        {project.primaryLanguage}
                                    </span>
                                )}

                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-primary/20 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 text-sm">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    className="flex items-center gap-2 text-primary hover:text-primary-dark"
                                >
                                    <i className="fab fa-github" />
                                    Code
                                </a>

                                {project.liveDemoLink && (
                                    <a
                                        href={project.liveDemoLink}
                                        target="_blank"
                                        className="flex items-center gap-2 text-primary hover:text-primary-dark"
                                    >
                                        <i className="fas fa-external-link-alt" />
                                        Live
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;