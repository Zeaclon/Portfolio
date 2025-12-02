import React from 'react';

const projects = [
    {
        title: "E-Commerce Platform",
        description: "Full-stack marketplace with real-time inventory management and payment processing",
        technologies: ["React", "Node.js", "MongoDB"],
        image: "../../../Downloads/Full-Stack%20Developer%20Portfolio_files/photo-1460925895917-afdab827c52f.jpg",
        githubLink: "#",
        liveDemoLink: "#",
    },
    {
        title: "Analytics Dashboard",
        description: "Real-time data visualization platform with advanced filtering and export capabilities",
        technologies: ["Vue.js", "Python", "PostgreSQL"],
        image: "../../../Downloads/Full-Stack%20Developer%20Portfolio_files/photo-1551288049-bebda4e38f71.jpg",
        githubLink: "#",
        liveDemoLink: "#",
    },
    {
        title: "AI Chat Application",
        description: "Intelligent chatbot with natural language processing and context awareness",
        technologies: ["React", "FastAPI", "OpenAI"],
        image: "../../../Downloads/Full-Stack%20Developer%20Portfolio_files/photo-1555421689-d68471e189f2.jpg",
        githubLink: "#",
        liveDemoLink: "#",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-primary-dark/10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text aos-init" data-aos="fade-up">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="glass-effect rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 aos-init" data-aos="fade-up">
                            <div className="relative overflow-hidden h-48">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                      {tech}
                    </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.githubLink} className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors">
                                        <i className="fab fa-github"></i>
                                        <span>Code</span>
                                    </a>
                                    <a href={project.liveDemoLink} className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors">
                                        <i className="fas fa-external-link-alt"></i>
                                        <span>Live Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;