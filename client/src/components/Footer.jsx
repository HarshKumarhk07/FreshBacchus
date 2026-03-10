import React from 'react';
import { FaLeaf, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-stone-900 text-stone-300 py-24 relative overflow-hidden">
            {/* Architectural accent */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-fresh-green/5 rounded-full blur-[120px] -z-0" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-20 border-b border-white/5 pb-20 mb-12">

                    <div className="col-span-1 md:col-span-2">
                        <a href="#home" className="flex items-center gap-3 mb-8 group transition-transform hover:scale-105 inline-flex">
                            <div className="p-2.5 bg-fresh-green rounded-xl shadow-lg shadow-fresh-green/20">
                                <FaLeaf className="text-white text-2xl transition-transform group-hover:rotate-12" />
                            </div>
                            <span className="text-2xl font-black font-sans text-white tracking-tighter">Harvest<span className="text-fresh-green-light italic">House</span></span>
                        </a>
                        <p className="text-stone-400 max-w-sm mb-10 leading-relaxed font-medium text-lg">
                            Serving Bacchus Marsh with nature's finest. Since 2014, we've remained committed to quality, community, and the farm-to-table spirit.
                        </p>
                        <div className="flex gap-4">
                            {[<FaFacebookF />, <FaInstagram />, <FaTwitter />].map((icon, idx) => (
                                <a key={idx} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-fresh-green text-white transition-all duration-300 hover:-translate-y-1 shadow-inner">
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-black text-white mb-8 uppercase tracking-[0.2em]">Explore</h4>
                        <ul className="space-y-4 font-bold text-stone-400">
                            {['Home', 'Products', 'About', 'Testimonials', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="hover:text-fresh-green transition-all flex items-center gap-2 group">
                                        <div className="w-0 group-hover:w-2 h-[2px] bg-fresh-green transition-all"></div>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black text-white mb-8 uppercase tracking-[0.2em]">Contact</h4>
                        <ul className="space-y-5 font-bold text-stone-400 text-sm tracking-tight">
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-fresh-green" />
                                <span>Shop 56, Bacchus Marsh VIC</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-harvest-gold" />
                                <span>+61.449891019</span>
                            </li>
                            <li className="flex items-center gap-3 overflow-hidden text-ellipsis">
                                <div className="w-1.5 h-1.5 rounded-full bg-fresh-green-light" />
                                <a href="mailto:singh.paramjit2007@gmail.com" className="hover:text-fresh-green transition-colors truncate">singh.paramjit2007@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-xs font-black uppercase tracking-[0.1em] text-stone-500">
                    <p>&copy; {new Date().getFullYear()} Harvest House. <span className="text-stone-400">Excellence in Freshness.</span></p>
                    <div className="flex gap-8 mt-6 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
