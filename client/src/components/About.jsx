import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import aboutImg from '../assets/about.jpg';

const About = () => {
    return (
        <section className="py-20 bg-white" id="about">
            <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row items-center gap-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/2 relative"
                >
                    <div className="rounded-3xl overflow-hidden premium-shadow">
                        <img
                            src={aboutImg}
                            alt="Our Story"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-8 -right-8 bg-freshGreen text-white p-8 rounded-2xl premium-shadow hidden md:block">
                        <h4 className="text-4xl font-bold mb-1">10+</h4>
                        <p className="font-medium text-green-100">Years of Freshness</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:w-1/2"
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Nestled in the beautiful region of Bacchus Marsh, we started as a small family stall with a simple mission: to provide our community with the freshest, highest-quality produce available.
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Today, we've grown into a comprehensive local market, working directly with regional farmers to bring farm-to-table freshness right to your neighborhood.
                    </p>

                    <div className="space-y-4">
                        {['Locally Sourced Produce', '100% Organic Options', 'Daily Fresh Deliveries', 'Community First Approach'].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <FaCheckCircle className="text-freshGreen text-xl" />
                                <span className="text-gray-700 font-medium text-lg">{item}</span>
                            </div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;
