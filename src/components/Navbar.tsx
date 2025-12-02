'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        const html = document.documentElement;
        if (isDarkMode) {
            html.classList.remove('dark');
        } else {
            html.classList.add('dark');
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold gradient-text">DevPortfolio</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="hover:text-primary transition-colors duration-300">Home</a>
                        <a href="#about" className="hover:text-primary transition-colors duration-300">About</a>
                        <a href="#projects" className="hover:text-primary transition-colors duration-300">Projects</a>
                        <a href="#experience" className="hover:text-primary transition-colors duration-300">Experience</a>
                        <a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a>
                        <button className="p-2 rounded-lg glass-effect hover:bg-primary/20 transition-all duration-300" onClick={toggleTheme} >
                            {/* FontAwesomeIcon Component */}
                            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} id="theme-icon" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMobileMenu} className="md:hidden p-2 rounded-lg glass-effect">
                        <FontAwesomeIcon icon={faBars} className="text-xl text-white" />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden glass-effect">
                    <div className="px-4 py-4 space-y-3">
                        <a href="#home" className="block text-white hover:text-primary transition-colors duration-300">Home</a>
                        <a href="#about" className="block text-white hover:text-primary transition-colors duration-300">About</a>
                        <a href="#projects" className="block text-white hover:text-primary transition-colors duration-300">Projects</a>
                        <a href="#experience" className="block text-white hover:text-primary transition-colors duration-300">Experience</a>
                        <a href="#contact" className="block text-white hover:text-primary transition-colors duration-300">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;