import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const details = [
    {
        icon: <FaMapMarkerAlt className="text-3xl text-freshGreen" />,
        title: 'Our Location',
        content: 'Shop 56, The Village Bacchus Marsh\\n160-194 Main St, Bacchus Marsh\\nVIC 3340, Australia',
    },
    {
        icon: <FaClock className="text-3xl text-freshGreen" />,
        title: 'Operating Hours',
        content: 'Monday - Friday: 8:00 AM - 7:00 PM\\nSaturday: 8:00 AM - 5:00 PM\\nSunday: 9:00 AM - 4:00 PM',
    },
    {
        icon: <FaPhoneAlt className="text-3xl text-freshGreen" />,
        title: 'Contact Us',
        content: '+61 3 5367 0000\\nCall us for fresh orders',
    },
    {
        icon: <FaEnvelope className="text-3xl text-freshGreen" />,
        title: 'Email',
        content: 'business@email.com\\nWe respond within 24 hours',
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {details.map((detail, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-lightBg p-8 rounded-2xl flex flex-col items-center text-center premium-shadow hover-premium-shadow border border-gray-100"
                        >
                            <div className="bg-white p-4 rounded-full shadow-sm mb-6">
                                {detail.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{detail.title}</h3>
                            <p className="text-gray-600 whitespace-pre-line leading-relaxed">
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
