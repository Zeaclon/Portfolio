import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faPython, faAws,} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import {AzureIcon} from "../../public/icons/Azure";
import {DotNetProps} from "../../public/icons/DotNet";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl float-animation"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-dark/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center aos-init aos-animate" data-aos="fade-up">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                        Hi, I&#39;m <span className="gradient-text">Bryce Marrett</span>
                    </h1>
                    <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8">Full-Stack Developer &amp; UI/UX Enthusiast</p>
                    <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">Crafting exceptional digital experiences with modern technologies and innovative solutions</p>

                    {/* Tech Stack Showcase */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                        <div className="tech-badge glass-effect px-8 py-4 rounded-full flex items-center gap-3">
                            <FontAwesomeIcon icon={faReact} className="text-3xl text-primary" />
                            <span className="text-xl font-semibold">React</span>
                        </div>

                        <div className="tech-badge glass-effect px-8 py-4 rounded-full flex items-center gap-3">
                            <FontAwesomeIcon icon={faNodeJs} className="text-3xl text-primary" />
                            <span className="text-xl font-semibold">Node.js</span>
                        </div>

                        <div className="tech-badge glass-effect px-8 py-4 rounded-full flex items-center gap-3">
                            <FontAwesomeIcon icon={faPython} className="text-3xl text-primary" />
                            <span className="text-xl font-semibold">Python</span>
                        </div>

                        <div className="tech-badge glass-effect px-8 py-4 rounded-full flex items-center gap-3">
                            <DotNetProps width={24} height={24} />
                            <span className="text-xl font-semibold">.Net</span>
                        </div>

                        {/* AWS */}
                        <div className="tech-badge glass-effect px-8 py-4 rounded-full flex items-center gap-3">
                            <FontAwesomeIcon icon={faAws} className="text-3xl text-primary" />
                            <span className="text-xl font-semibold">AWS</span>
                        </div>

                        {/* Azure */}
                        <div className="tech-badge glass-effect px-8 py-4 rounded-full flex items-center gap-3">
                            <AzureIcon width={24} height={24} />
                            <span className="text-xl font-semibold">Azure</span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center aos-animate" data-aos="face-up" data-aos-delay="400">
                        <a className="px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                            href="#projects"
                            style={{
                                background: 'linear-gradient(to right, var(--color-accent), var(--color-primary))',
                                color: 'white',
                            }}>
                            View My Work
                        </a>
                        <a className="px-8 py-4 glass-effect rounded-lg font-semibold hover:bg-primary/20 transition-all duration-300 transform hover:scale-105"
                           href="#contact">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
