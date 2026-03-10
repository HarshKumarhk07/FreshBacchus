import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const details = [
    {
        icon: <FaMapMarkerAlt />,
        title: 'Our Location',
        content: 'Shop 56, The Village Bacchus Marsh\n160-194 Main St, Bacchus Marsh\nVIC 3340, Australia',
    },
    {
        icon: <FaClock />,
        title: 'Operating Hours',
        content: 'Monday - Friday: 8:00 AM - 7:00 PM\nSaturday: 8:00 AM - 5:00 PM\nSunday: 9:00 AM - 4:00 PM',
    },
    {
        icon: <FaPhoneAlt />,
        title: 'Contact Us',
        content: '+61.449891019\nCall us for fresh orders',
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        content: 'singh.paramjit2007@gmail.com\nWe respond within 24 hours',
    }
];

const BusinessDetails = () => {
    return (
        <section className="py-20 bg-white" id="details">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Visit Our Store</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Your premium destination for the freshest fruits, vegetables, and daily grocery essentials right in the heart of Bacchus Marsh.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {details.map((detail, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="glass-panel p-10 rounded-[2.5rem] flex flex-col items-center text-center premium-card border border-white/40 group active:scale-95 transition-all"
                        >
                            <div className="bg-fresh-green/10 p-5 rounded-3xl mb-8 group-hover:scale-110 group-hover:bg-fresh-green text-fresh-green group-hover:text-white transition-all duration-500 shadow-inner">
                                {React.cloneElement(detail.icon, { className: "text-4xl transition-colors duration-500" })}
                            </div>
                            <h3 className="text-xl font-black text-stone-900 mb-4 tracking-tight">{detail.title}</h3>
                            <p className="text-stone-500 whitespace-pre-line leading-relaxed font-medium text-sm">
                                {detail.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BusinessDetails;
