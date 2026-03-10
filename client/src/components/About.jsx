import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import aboutImg from '../assets/about.jpg';

const About = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-white" id="about">
            {/* Architectural Background element */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-harvest-gold/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row items-center gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 relative"
                >
                    <div className="rounded-[3rem] overflow-hidden premium-shadow border-8 border-white group">
                        <img
                            src={aboutImg}
                            alt="Our Story"
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="absolute -bottom-10 -right-10 bg-fresh-green text-white p-10 rounded-[2rem] shadow-2xl hidden md:block"
                    >
                        <h4 className="text-5xl font-black mb-1">10+</h4>
                        <p className="font-bold text-green-100 uppercase tracking-widest text-xs">Years of Freshness</p>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2"
                >
                    <span className="text-harvest-gold font-black tracking-[0.3em] uppercase text-xs mb-4 block">Our Legacy</span>
                    <h2 className="text-4xl md:text-6xl font-black text-stone-900 mb-8 tracking-tighter">Rooted in Bacchus Marsh</h2>
                    <p className="text-xl text-stone-500 mb-8 leading-relaxed font-medium">
                        Nestled in the heart of Victoria, we began as a humble family stall with a singular vision: <span className="text-fresh-green font-bold">Nature's best, shared with neighbors.</span>
                    </p>
                    <p className="text-lg text-stone-400 mb-10 leading-relaxed">
                        Today, Harvest House stands as a beacon of quality, bridging the gap between regional farmers and your family table with daily-picked excellence.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {['Locally Sourced Produce', '100% Organic Options', 'Daily Fresh Deliveries', 'Community First'].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + (idx * 0.1) }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 bg-stone-50 p-4 rounded-2xl border border-stone-100 hover:border-fresh-green/30 transition-colors"
                            >
                                <div className="bg-fresh-green/10 p-2 rounded-lg">
                                    <FaCheckCircle className="text-fresh-green text-xl" />
                                </div>
                                <span className="text-stone-800 font-bold text-sm tracking-tight">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
