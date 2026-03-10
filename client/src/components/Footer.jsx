import React from 'react';
import { FaLeaf, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10 mb-8">

                    <div className="col-span-1 md:col-span-2">
                        <a href="#home" className="flex items-center gap-2 mb-6">
                            <FaLeaf className="text-freshGreen text-3xl" />
                            <span className="text-2xl font-bold font-sans text-white">FreshBacchus</span>
                        </a>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Providing Bacchus Marsh with the highest quality fresh fruits, vegetables, and everyday grocery items since 2014.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-freshGreen text-white transition-colors">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-freshGreen text-white transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-freshGreen text-white transition-colors">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3 font-medium">
                            <li><a href="#home" className="hover:text-freshGreen transition-colors">Home</a></li>
                            <li><a href="#products" className="hover:text-freshGreen transition-colors">Our Products</a></li>
                            <li><a href="#about" className="hover:text-freshGreen transition-colors">About Us</a></li>
                            <li><a href="#testimonials" className="hover:text-freshGreen transition-colors">Testimonials</a></li>
                            <li><a href="#contact" className="hover:text-freshGreen transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
                        <ul className="space-y-3 font-medium text-gray-400">
                            <li>Shop 56, The Village</li>
                            <li>160-194 Main St, Bacchus Marsh</li>
                            <li>VIC 3340, Australia</li>
                            <li className="pt-2 text-white">+61.449891019</li>
                            <li className="text-freshGreen"><a href="mailto:singh.paramjit2007@gmail.com">singh.paramjit2007@gmail.com</a></li>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} FreshBacchus. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
