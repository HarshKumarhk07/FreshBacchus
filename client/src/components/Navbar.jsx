import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-panel py-3 border-b border-fresh-green/10 shadow-xl' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
                <a href="#home" className="flex items-center gap-3 group transition-transform hover:scale-105 active:scale-95">
                    <div className="p-2 rounded-xl transition-colors duration-500 bg-fresh-green text-white">
                        <FaLeaf className="text-xl md:text-2xl" />
                    </div>
                    <span className={`text-xl md:text-2xl font-black font-sans tracking-tighter transition-colors duration-500 ${scrolled ? 'text-stone-900' : 'text-white drop-shadow-lg'}`}>
                        Harvest<span className="text-fresh-green italic">House</span>
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-10">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className={`font-bold text-sm uppercase tracking-widest transition-all hover:text-fresh-green hover:-translate-y-0.5 ${scrolled ? 'text-stone-600' : 'text-white drop-shadow-md'}`}>
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile menu toggle */}
                <button
                    className={`md:hidden p-3 rounded-xl transition-colors ${scrolled ? 'bg-stone-100 text-stone-900' : 'bg-white/10 text-white backdrop-blur-md'}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden absolute top-full left-0 w-full glass-panel border-t border-stone-100 shadow-2xl py-8 px-8 flex flex-col space-y-6"
                >
                    {navLinks.map((link, idx) => (
                        <motion.a
                            key={link.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-stone-900 font-black text-2xl tracking-tighter hover:text-fresh-green active:scale-95 transition-all"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
