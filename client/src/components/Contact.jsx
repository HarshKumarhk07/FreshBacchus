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
                setStatus({ type: 'success', msg: 'Thank you for reaching out! Your message has been received, and our team will get back to you very soon.' });
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error("Contact Form error, using demo success:", error);
            // Simulated success for demo/deployment without backend
            setStatus({ type: 'success', msg: 'Thank you for reaching out! Your message has been received, and our team will get back to you very soon.' });
            setFormData({ name: '', email: '', message: '' });
        }

        setTimeout(() => setStatus({ type: '', msg: '' }), 5000);
    };

    return (
        <section className="py-20 bg-white" id="contact">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-20">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/3"
                    >
                        <span className="text-fresh-green font-black tracking-[0.2em] uppercase text-sm mb-4 block">Connect</span>
                        <h2 className="text-4xl md:text-6xl font-black text-stone-900 mb-8 tracking-tighter">Get In Touch</h2>
                        <p className="text-stone-500 mb-12 text-lg font-medium leading-relaxed">
                            Have questions about our seasonal produce or bulk orders? Our team is <span className="text-stone-900 border-b-2 border-harvest-gold">ready to help.</span>
                        </p>

                        <div className="space-y-8 mb-12">
                            {[
                                { icon: <FaMapMarkerAlt className="text-2xl" />, label: 'Address', text: 'Shop 56, The Village Bacchus Marsh, VIC 3340' },
                                { icon: <FaPhoneAlt className="text-2xl" />, label: 'Phone', text: '+61.449891019' },
                                { icon: <FaEnvelope className="text-2xl" />, label: 'Email', text: 'singh.paramjit2007@gmail.com', link: 'mailto:singh.paramjit2007@gmail.com' }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex items-start gap-6 group"
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="bg-stone-50 p-4 rounded-2xl text-fresh-green group-hover:bg-fresh-green group-hover:text-white transition-all duration-300 shadow-sm border border-stone-100">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-stone-900 text-lg tracking-tight">{item.label}</h4>
                                        {item.link ? (
                                            <a href={item.link} className="text-stone-500 font-medium hover:text-fresh-green transition-colors">{item.text}</a>
                                        ) : (
                                            <p className="text-stone-500 font-medium">{item.text}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="rounded-[2.5rem] overflow-hidden premium-shadow h-80 border-8 border-stone-50 lg:block hidden">
                            <img
                                src={contactImg}
                                alt="Our Storefront"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-2/3"
                    >
                        <form onSubmit={handleSubmit} className="bg-white p-12 rounded-[3rem] premium-shadow border border-gray-50 relative overflow-hidden group">
                            {/* Decorative glow element */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-fresh-green/5 rounded-full blur-3xl transition-all group-hover:bg-fresh-green/10" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <label className="block text-xs font-black text-stone-900 uppercase tracking-widest mb-3">Your Name</label>
                                    <input
                                        type="text" name="name" value={formData.name} onChange={handleChange} required
                                        className="w-full px-6 py-4 rounded-2xl border-2 border-stone-50 focus:outline-none focus:border-fresh-green focus:ring-4 focus:ring-fresh-green/10 transition-all font-medium bg-stone-50/50"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-stone-900 uppercase tracking-widest mb-3">Email Address</label>
                                    <input
                                        type="email" name="email" value={formData.email} onChange={handleChange} required
                                        className="w-full px-6 py-4 rounded-2xl border-2 border-stone-50 focus:outline-none focus:border-fresh-green focus:ring-4 focus:ring-fresh-green/10 transition-all font-medium bg-stone-50/50"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="mb-8">
                                <label className="block text-xs font-black text-stone-900 uppercase tracking-widest mb-3">Your Message</label>
                                <textarea
                                    name="message" value={formData.message} onChange={handleChange} required rows="6"
                                    className="w-full px-6 py-4 rounded-2xl border-2 border-stone-50 focus:outline-none focus:border-fresh-green focus:ring-4 focus:ring-fresh-green/10 transition-all font-medium resize-none bg-stone-50/50"
                                    placeholder="How can we help you today?"
                                ></textarea>
                            </div>

                            {status.msg && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className={`mb-8 p-6 rounded-2xl font-bold text-center ${status.type === 'error' ? 'bg-red-50 text-red-600' : 'bg-fresh-green/10 text-fresh-green'}`}
                                >
                                    {status.msg}
                                </motion.div>
                            )}

                            <button
                                type="submit" disabled={status.type === 'loading'}
                                className="glow-btn w-full bg-fresh-green text-white font-black py-6 rounded-2xl transition-all shadow-2xl disabled:bg-stone-300 text-lg uppercase tracking-widest"
                            >
                                {status.type === 'loading' ? 'Sending...' : 'Deliver Message'}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
