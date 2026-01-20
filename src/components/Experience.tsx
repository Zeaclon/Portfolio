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
        <div
            className="glass-effect rounded-2xl p-8 aos-init"
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                    <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                        {experience.title}
                    </h3>
                    <p className="text-lg" style={{ color: 'var(--color-primary)' }}>
                        {experience.company}
                    </p>
                </div>
                <div className="mt-2 md:mt-0" style={{ color: 'var(--text-secondary)' }}>
                    <i className="far fa-calendar-alt mr-2"></i>
                    {experience.dateRange}
                </div>
            </div>
            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {experience.description}
            </p>
        </div>
    );
};

const ExperienceSection: React.FC = () => {
    const experiences: Experience[] = [
        {
            title: 'Junior Software Developer ',
            company: 'Zone RV',
            dateRange: 'Jan 2025 - Dec 2025',
            description:
                'Developed and maintained C#/.NET applications for internal engineering, manufacturing, and operational workflows. Built automation scripts and API integrations using Python and JavaScript to streamline HubSpot and Trello processes. Designed and deployed internal tools and dashboards for warranty claims, reporting, and operational efficiency. Wrote unit and integration tests to ensure system reliability. Conducted vulnerability checks and reviewed retention policies, contributing to secure handling of company data. Collaborated with cross-functional teams to analyze and resolve system and data issues. Documented processes and created reusable automation tools to support knowledge sharing across teams.',
        },
        {
            title: 'Missionary',
            company: 'Church of Jesus Christ of Latter-Day Saints',
            dateRange: 'Dec 2021 - Dec 2023',
            description:
                'Worked full-time in a highly structured, goal-driven environment requiring self-discipline, accountability, and adaptability. Developed strong interpersonal communication skills through daily engagement with individuals from diverse cultural, social, and economic backgrounds. Led and coordinated small teams across a large geographic area, providing mentoring, performance feedback, and logistical support. Planned and conducted training sessions and meetings focused on personal development, communication effectiveness, and teamwork. Managed schedules, reporting, and performance tracking while meeting weekly and monthly objectives. Resolved interpersonal and operational challenges under pressure, often with limited resources and supervision. Demonstrated resilience, emotional intelligence, and professionalism in demanding and unfamiliar environments.',
        },
        {
            title: 'Delivery Driver',
            company: "Work'n'Learn",
            dateRange: 'Nov 2020 - Feb 2021',
            description:
                'Ensured timely and accurate delivery of goods in a fast-paced, time-sensitive environment. Managed daily routes efficiently, balancing speed, safety, and reliability. Maintained accountability for company property and customer orders. Communicated professionally with customers and internal staff to resolve delivery issues. Demonstrated strong time management, punctuality, and consistency under operational pressure.',
        },
    ];

    return (
        <section
            id="experience"
            className="py-20 px-4 sm:px-6 lg:px-8"
            style={{ background: `linear-gradient(to bottom, var(--gradient-start), var(--gradient-end))` }}
        >
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