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
        <section className="py-16 sm:py-20 md:py-28" id="details"
            style={{ background: 'var(--color-dark-surface)' }}
        >
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight">Visit Our Store</h2>
                    <p className="text-sm sm:text-base md:text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed">
                        Your premium destination for the freshest fruits, vegetables, and daily grocery essentials right in the heart of Bacchus Marsh.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    {details.map((detail, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl flex flex-col items-center text-center border border-white/5 group active:scale-95 transition-all duration-500 hover:border-fresh-green/20"
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                boxShadow: '0 20px 50px -15px rgba(0,0,0,0.3)',
                            }}
                        >
                            <div className="bg-fresh-green/10 p-4 sm:p-5 rounded-2xl sm:rounded-3xl mb-5 sm:mb-8 group-hover:scale-110 group-hover:bg-fresh-green text-fresh-green group-hover:text-white transition-all duration-500">
                                {React.cloneElement(detail.icon, { className: "text-2xl sm:text-3xl md:text-4xl transition-colors duration-500" })}
                            </div>
                            <h3 className="text-base sm:text-lg md:text-xl font-black text-white mb-2 sm:mb-4 tracking-tight">{detail.title}</h3>
                            <p className="text-stone-400 whitespace-pre-line leading-relaxed font-medium text-xs sm:text-sm">
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
