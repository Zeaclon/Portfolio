import React from 'react';

interface Experience {
    title: string;
    company: string;
    dateRange: string;
    description: string;
}

interface ExperienceCardProps {
    experience: Experience;
    delay?: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, delay }) => {
    return (
        <div className="glass-effect rounded-2xl p-8 aos-init" data-aos="fade-up" data-aos-delay={delay}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                    <h3 className="text-2xl font-bold">{experience.title}</h3>
                    <p className="text-primary text-lg">{experience.company}</p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0">
                    <i className="far fa-calendar-alt mr-2"></i>
                    {experience.dateRange}
                </div>
            </div>
            <p className="text-gray-300 leading-relaxed">{experience.description}</p>
        </div>
    );
};

const ExperienceSection: React.FC = () => {
    const experiences: Experience[] = [
        {
            title: 'Senior Full-Stack Developer',
            company: 'TechCorp Solutions',
            dateRange: '2021 - Present',
            description:
                'Led development of enterprise-level web applications serving 100K+ users. Architected microservices infrastructure, implemented CI/CD pipelines, and mentored junior developers. Reduced deployment time by 60% and improved application performance by 40%.',
        },
        {
            title: 'Full-Stack Developer',
            company: 'StartupHub Inc.',
            dateRange: '2019 - 2021',
            description:
                'Developed and maintained multiple client projects using React, Node.js, and MongoDB. Collaborated with design teams to create responsive, user-friendly interfaces. Implemented real-time features using WebSockets and optimized database queries for better performance.',
        },
        {
            title: 'Junior Developer',
            company: 'Digital Agency Pro',
            dateRange: '2018 - 2019',
            description:
                'Built responsive websites and web applications for various clients. Worked with HTML, CSS, JavaScript, and WordPress. Gained experience in version control, agile methodologies, and client communication.',
        },
    ];

    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-primary-dark/10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text aos-init" data-aos="fade-up">
                    Work Experience
                </h2>

                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            experience={experience}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;