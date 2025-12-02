import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text aos-init" data-aos="fade-up">
                    Get In Touch
                </h2>

                <div className="glass-effect rounded-2xl p-8 md:p-12 aos-init" data-aos="fade-up">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Subject</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                placeholder="Project Inquiry"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                rows={6}
                                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-lg font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="mt-12 pt-8 border-t border-gray-700">
                        <div className="flex justify-center gap-6">
                            <a
                                href="#"
                                className="w-12 h-12 flex items-center justify-center glass-effect rounded-full hover:bg-primary/20 transition-all duration-300 transform hover:scale-110"
                            >
                                <i className="fab fa-github text-xl"></i>
                            </a>
                            <a
                                href="#"
                                className="w-12 h-12 flex items-center justify-center glass-effect rounded-full hover:bg-primary/20 transition-all duration-300 transform hover:scale-110"
                            >
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a
                                href="#"
                                className="w-12 h-12 flex items-center justify-center glass-effect rounded-full hover:bg-primary/20 transition-all duration-300 transform hover:scale-110"
                            >
                                <i className="fab fa-twitter text-xl"></i>
                            </a>
                            <a
                                href="#"
                                className="w-12 h-12 flex items-center justify-center glass-effect rounded-full hover:bg-primary/20 transition-all duration-300 transform hover:scale-110"
                            >
                                <i className="fas fa-envelope text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
