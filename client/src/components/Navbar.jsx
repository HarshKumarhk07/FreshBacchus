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
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
                <a href="#home" className="flex items-center gap-2">
                    <FaLeaf className="text-freshGreen text-3xl" />
                    <span className={`text-2xl font-bold font-sans ${scrolled ? 'text-freshGreen' : 'text-white drop-shadow-md'}`}>FreshBacchus</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className={`font-medium transition-colors hover:text-freshGreen ${scrolled ? 'text-gray-700' : 'text-white drop-shadow-sm'}`}>
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile menu toggle */}
                <button className="md:hidden text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <FaTimes className={scrolled ? 'text-gray-800' : 'text-white'} /> : <FaBars className={scrolled ? 'text-gray-800' : 'text-white'} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4"
                >
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-gray-800 font-medium text-lg hover:text-freshGreen">
                            {link.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
