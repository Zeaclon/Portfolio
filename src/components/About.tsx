const About = () => {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text">About Me</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="aos-init" data-aos="fade-right">
                        <div className="glass-effect rounded-2xl p-8 glow-animation">
                            <img src="profile-picture.jpg" alt="Profile" className="rounded-2xl w-full h-96 object-cover" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold mb-6">Full-Stack Developer Focused on Building Practical, Scalable Software</h3>
                        <p className="text-gray-300 mb-6">
                            I build scalable web applications with an emphasis on clean architecture, maintainable code,
                            and intuitive user experiences. I also develop and publish personal projects under the handle
                            <span className="font-semibold text-white"> Zeaclon</span>, where I experiment with new ideas and technologies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;