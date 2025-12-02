const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl float-animation"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-dark/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                        Hi, I&#39;m <span className="gradient-text">Bryce Marrett</span>
                    </h1>
                    <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8">Full-Stack Developer &amp; UI/UX Enthusiast</p>
                    <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">Crafting exceptional digital experiences with modern technologies and innovative solutions</p>

                    {/* Tech Stack Showcase */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <div className="tech-badge glass-effect px-6 py-3 rounded-full">
                            <i className="fab fa-react text-2xl text-primary mr-2"></i>
                            <span>React</span>
                        </div>
                        <div className="tech-badge glass-effect px-6 py-3 rounded-full">
                            <i className="fab fa-node-js text-2xl text-primary mr-2"></i>
                            <span>Node.js</span>
                        </div>
                        {/* More tech badges */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;