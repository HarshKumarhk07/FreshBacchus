import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLeaf, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Products', href: '#products' },
        { name: 'About', href: '#about' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled
            ? 'py-2 sm:py-3 shadow-lg shadow-black/5'
            : 'bg-transparent py-4 sm:py-6'
            }`}
            style={scrolled ? {
                background: 'rgba(255,255,255,0.92)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(0,0,0,0.06)',
            } : {}}
        >
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex justify-between items-center">
                <a href="#home" className="flex items-center gap-2 sm:gap-3 group transition-transform hover:scale-105 active:scale-95">
                    <div className="p-1.5 sm:p-2 rounded-xl bg-fresh-green text-white shadow-md shadow-fresh-green/20">
                        <FaLeaf className="text-lg sm:text-xl" />
                    </div>
                    <span className={`text-lg sm:text-xl font-extrabold tracking-tight transition-colors duration-500 ${scrolled ? 'text-stone-800' : 'text-white drop-shadow-lg'}`}
                        style={{ fontFamily: 'var(--font-serif)' }}
                    >
                        Harvest<span className="text-fresh-green italic">House</span>
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 lg:gap-10">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href}
                            className={`font-semibold text-[13px] uppercase tracking-[0.12em] transition-all hover:text-fresh-green ${scrolled ? 'text-stone-600' : 'text-white/90 drop-shadow-md'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile menu toggle */}
                <button
                    className={`md:hidden p-3 rounded-xl transition-all active:scale-90 ${scrolled ? 'bg-stone-100 text-stone-700' : 'bg-white/15 text-white backdrop-blur-md'}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden absolute top-full left-0 w-full shadow-xl py-4 px-5 flex flex-col overflow-hidden"
                        style={{
                            background: 'rgba(255,255,255,0.97)',
                            backdropFilter: 'blur(20px)',
                            borderBottom: '1px solid rgba(0,0,0,0.06)',
                        }}
                    >
                        {navLinks.map((link, idx) => (
                            <motion.a
                                key={link.name}
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.06 }}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-stone-700 font-semibold text-[15px] tracking-wide py-3 border-b border-stone-100 last:border-0 hover:text-fresh-green transition-colors"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
