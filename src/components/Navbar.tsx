'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBars } from '@fortawesome/free-solid-svg-icons';

const THEME_KEY = 'theme';

const getInitialTheme = (): boolean => {
    if (typeof window === 'undefined') return false; // SSR fallback
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'dark') return true;
    if (stored === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [mounted, setMounted] = useState(false); // <<< crucial

    useEffect(() => {
        setIsDarkMode(getInitialTheme());
        setMounted(true); // only render icons after mounted
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const html = document.documentElement;
        if (isDarkMode) {
            html.classList.add('dark');
            html.classList.remove('light');
            localStorage.setItem(THEME_KEY, 'dark');
        } else {
            html.classList.remove('dark');
            html.classList.add('light');
            localStorage.setItem(THEME_KEY, 'light');
        }
    }, [isDarkMode, mounted]);

    const toggleTheme = () => setIsDarkMode(prev => !prev);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <span className="text-2xl font-bold gradient-text">
                        Bryce Marrett | Software Developer
                    </span>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="hover:text-primary transition-colors">Home</a>
                        <a href="#about" className="hover:text-primary transition-colors">About</a>
                        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                        <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
                        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>

                        {/* Render icon only after mounted to prevent SSR mismatch */}
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg glass-effect hover:bg-primary/20 transition-all"
                                aria-label="Toggle theme"
                            >
                                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                            </button>
                        )}
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(prev => !prev)}
                        className="md:hidden p-2 rounded-lg glass-effect"
                    >
                        <FontAwesomeIcon icon={faBars} className="text-xl" />
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden glass-effect">
                    <div className="px-4 py-4 space-y-3">
                        <a href="#home" className="block hover:text-primary">Home</a>
                        <a href="#about" className="block hover:text-primary">About</a>
                        <a href="#projects" className="block hover:text-primary">Projects</a>
                        <a href="#experience" className="block hover:text-primary">Experience</a>
                        <a href="#contact" className="block hover:text-primary">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;