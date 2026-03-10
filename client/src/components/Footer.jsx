import React from 'react';
import { FaLeaf, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-stone-900 text-stone-400 py-12 sm:py-16 md:py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-16 pb-10 sm:pb-14 mb-8 sm:mb-10 border-b border-white/[0.06]">
                    {/* Brand */}
                    <div className="col-span-1 sm:col-span-2">
                        <a href="#home" className="flex items-center gap-2 mb-4 sm:mb-5 group inline-flex">
                            <div className="p-1.5 sm:p-2 rounded-lg bg-fresh-green shadow-md shadow-fresh-green/20">
                                <FaLeaf className="text-white text-lg sm:text-xl transition-transform group-hover:rotate-12" />
                            </div>
                            <span className="text-lg sm:text-xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                                Harvest<span className="text-fresh-green-light italic">House</span>
                            </span>
                        </a>
                        <p className="text-stone-400 max-w-xs mb-5 sm:mb-6 leading-relaxed text-sm">
                            Serving Bacchus Marsh with nature's finest since 2014. Quality, community, and the farm-to-table spirit.
                        </p>
                        <div className="flex gap-2.5">
                            {[<FaFacebookF />, <FaInstagram />, <FaTwitter />].map((icon, idx) => (
                                <a key={idx} href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-fresh-green text-stone-400 hover:text-white transition-all duration-300 text-sm">
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-xs font-bold text-white mb-4 sm:mb-5 uppercase tracking-[0.15em]">Explore</h4>
                        <ul className="space-y-2.5 text-sm">
                            {['Home', 'Products', 'About', 'Testimonials', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="hover:text-fresh-green transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-bold text-white mb-4 sm:mb-5 uppercase tracking-[0.15em]">Contact</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li>Shop 56, Bacchus Marsh VIC</li>
                            <li>+61.449891019</li>
                            <li className="truncate">
                                <a href="mailto:singh.paramjit2007@gmail.com" className="hover:text-fresh-green transition-colors">singh.paramjit2007@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-stone-500 gap-2">
                    <p>&copy; {new Date().getFullYear()} Harvest House. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-stone-300 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-stone-300 transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
