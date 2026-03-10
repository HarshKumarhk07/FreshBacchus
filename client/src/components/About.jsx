import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import aboutImg from '../assets/about.jpg';

const features = ['Locally Sourced Produce', '100% Organic Options', 'Daily Fresh Deliveries', 'Community First'];

const About = () => {
    return (
        <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden" id="about"
            style={{ background: 'linear-gradient(180deg, #f8faf8 0%, #ffffff 100%)' }}
        >
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-14 lg:gap-20">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:w-1/2 relative w-full"
                    >
                        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-stone-200/60 border border-stone-100 group">
                            <img
                                src={aboutImg}
                                alt="Our Story"
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        {/* Accent badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="absolute -bottom-5 -right-3 sm:-bottom-8 sm:-right-6 bg-fresh-green text-white p-5 sm:p-7 rounded-2xl shadow-lg shadow-fresh-green/25"
                        >
                            <h4 className="text-3xl sm:text-4xl font-black mb-0.5" style={{ fontFamily: 'var(--font-serif)' }}>10+</h4>
                            <p className="font-semibold text-green-100 uppercase tracking-widest text-[9px] sm:text-[10px]">Years Fresh</p>
                        </motion.div>
                    </motion.div>

                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:w-1/2 w-full mt-6 lg:mt-0"
                    >
                        <span className="inline-block text-harvest-gold font-semibold tracking-[0.2em] uppercase text-[11px] sm:text-xs mb-3 px-4 py-1.5 rounded-full bg-harvest-gold/8 border border-harvest-gold/15">Our Legacy</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 mb-5 sm:mb-6 tracking-tight leading-tight"
                            style={{ fontFamily: 'var(--font-serif)' }}
                        >
                            Rooted in <br className="hidden sm:block" />Bacchus Marsh
                        </h2>
                        <p className="text-base sm:text-lg text-stone-500 mb-4 sm:mb-5 leading-relaxed">
                            Nestled in the heart of Victoria, we began as a humble family stall with a singular vision: <span className="text-fresh-green font-semibold">Nature's best, shared with neighbors.</span>
                        </p>
                        <p className="text-sm sm:text-base text-stone-400 mb-8 sm:mb-10 leading-relaxed">
                            Today, Harvest House stands as a beacon of quality, bridging the gap between regional farmers and your family table with daily-picked excellence.
                        </p>

                        {/* Feature list */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {features.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + idx * 0.08 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-fresh-green/5 transition-colors"
                                >
                                    <FaCheckCircle className="text-fresh-green text-sm shrink-0" />
                                    <span className="text-stone-700 font-medium text-sm">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
