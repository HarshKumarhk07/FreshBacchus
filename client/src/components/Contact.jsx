import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import contactImg from '../assets/contact-img.jpg';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', msg: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'loading', msg: 'Sending message...' });
        try {
            const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
            const res = await axios.post(`${API_BASE_URL}/api/contact`, formData);
            if (res.data.success) {
                setStatus({ type: 'success', msg: 'Message sent successfully!' });
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error(error);
            setStatus({ type: 'error', msg: 'Failed to send message. Please try again.' });
        }

        setTimeout(() => setStatus({ type: '', msg: '' }), 5000);
    };

    return (
        <section className="py-20 bg-white" id="contact">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3"
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Get In Touch</h2>
                        <p className="text-gray-600 mb-10 text-lg">
                            Have questions about our produce or want to place a bulk order? We'd love to hear from you.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="bg-lightBg p-4 rounded-full text-freshGreen">
                                    <FaMapMarkerAlt className="text-2xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-lg">Address</h4>
                                    <p className="text-gray-600 mt-1">Shop 56, The Village Bacchus Marsh<br />160-194 Main St, Bacchus Marsh, VIC 3340</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-lightBg p-4 rounded-full text-freshGreen">
                                    <FaPhoneAlt className="text-2xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-lg">Phone</h4>
                                    <p className="text-gray-600 mt-1">+61.449891019</p>
                                </div>
                            </div>

                            <a href="mailto:singh.paramjit2007@gmail.com" className="flex items-start gap-4 group cursor-pointer">
                                <div className="bg-lightBg group-hover:bg-freshGreen p-4 rounded-full text-freshGreen group-hover:text-white transition-colors">
                                    <FaEnvelope className="text-2xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-lg group-hover:text-freshGreen transition-colors">Email</h4>
                                    <p className="text-gray-600 mt-1">singh.paramjit2007@gmail.com</p>
                                </div>
                            </a>
                        </div>

                        <div className="rounded-3xl overflow-hidden premium-shadow h-64 lg:h-80">
                            <img
                                src={contactImg}
                                alt="Our Storefront"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3"
                    >
                        <form onSubmit={handleSubmit} className="bg-lightBg p-8 md:p-10 rounded-3xl premium-shadow">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                                    <input
                                        type="text" name="name" value={formData.name} onChange={handleChange} required
                                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-freshGreen focus:ring-1 focus:ring-freshGreen transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email" name="email" value={formData.email} onChange={handleChange} required
                                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-freshGreen focus:ring-1 focus:ring-freshGreen transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                                <textarea
                                    name="message" value={formData.message} onChange={handleChange} required rows="5"
                                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-freshGreen focus:ring-1 focus:ring-freshGreen transition-colors resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            {status.msg && (
                                <div className={`mb-6 p-4 rounded-xl font-medium ${status.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                                    {status.msg}
                                </div>
                            )}

                            <button
                                type="submit" disabled={status.type === 'loading'}
                                className="w-full bg-freshGreen hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-colors shadow-md disabled:bg-green-300"
                            >
                                {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
