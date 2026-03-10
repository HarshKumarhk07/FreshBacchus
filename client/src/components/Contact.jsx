import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const contactDetails = [
    { icon: <FaMapMarkerAlt />, title: 'Our Location', text: 'Shop 56, The Village Bacchus Marsh\n160-194 Main St, VIC 3340' },
    { icon: <FaClock />, title: 'Hours', text: 'Mon–Fri: 8AM – 7PM\nSat: 8AM – 5PM · Sun: 9AM – 4PM' },
    { icon: <FaPhoneAlt />, title: 'Phone', text: '+61.449891019' },
    { icon: <FaEnvelope />, title: 'Email', text: 'singh.paramjit2007@gmail.com' },
];

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', msg: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'loading', msg: 'Sending…' });
        try {
            const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
            const res = await axios.post(`${API_BASE_URL}/api/contact`, formData);
            if (res.data.success) {
                setStatus({ type: 'success', msg: 'Thank you! We\'ll get back to you shortly.' });
                setFormData({ name: '', email: '', message: '' });
            }
        } catch {
            setStatus({ type: 'success', msg: 'Thank you! We\'ll get back to you shortly.' });
            setFormData({ name: '', email: '', message: '' });
        }
        setTimeout(() => setStatus({ type: '', msg: '' }), 5000);
    };

    return (
        <section className="py-16 sm:py-24 md:py-32 bg-white" id="contact">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-14 md:mb-16"
                >
                    <span className="inline-block text-fresh-green font-semibold tracking-[0.2em] uppercase text-[11px] sm:text-xs mb-3 px-4 py-1.5 rounded-full bg-fresh-green/8 border border-fresh-green/15">Connect With Us</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 mb-3 sm:mb-4 tracking-tight"
                        style={{ fontFamily: 'var(--font-serif)' }}
                    >
                        Visit Our Store
                    </h2>
                    <p className="text-stone-500 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
                        Drop by our store or send us a message — we'd love to hear from you.
                    </p>
                </motion.div>

                {/* Info cards row */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
                    }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-12 sm:mb-16"
                >
                    {contactDetails.map((d, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                            className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-stone-100 text-center hover:border-fresh-green/20 hover:shadow-md transition-all duration-300 group bg-white"
                        >
                            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-fresh-green/8 text-fresh-green mb-3 sm:mb-4 group-hover:bg-fresh-green group-hover:text-white transition-all duration-300">
                                {React.cloneElement(d.icon, { className: 'text-base sm:text-lg' })}
                            </div>
                            <h4 className="font-bold text-stone-800 text-xs sm:text-sm mb-1">{d.title}</h4>
                            <p className="text-stone-500 text-[11px] sm:text-xs leading-relaxed whitespace-pre-line">{d.text}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact form */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <form onSubmit={handleSubmit} className="p-6 sm:p-8 md:p-10 rounded-2xl border border-stone-100 bg-stone-50/50">
                        <h3 className="text-lg sm:text-xl font-bold text-stone-800 mb-5 sm:mb-6 text-center"
                            style={{ fontFamily: 'var(--font-serif)' }}
                        >
                            Send Us a Message
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <div>
                                <label className="block text-[10px] sm:text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">Name</label>
                                <input
                                    type="text" name="name" value={formData.name} onChange={handleChange} required
                                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-fresh-green focus:ring-2 focus:ring-fresh-green/10 transition-all text-sm bg-white text-stone-800"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] sm:text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">Email</label>
                                <input
                                    type="email" name="email" value={formData.email} onChange={handleChange} required
                                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-fresh-green focus:ring-2 focus:ring-fresh-green/10 transition-all text-sm bg-white text-stone-800"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="mb-4 sm:mb-5">
                            <label className="block text-[10px] sm:text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">Message</label>
                            <textarea
                                name="message" value={formData.message} onChange={handleChange} required rows="4"
                                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-fresh-green focus:ring-2 focus:ring-fresh-green/10 transition-all text-sm resize-none bg-white text-stone-800"
                                placeholder="How can we help?"
                            ></textarea>
                        </div>

                        {status.msg && (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className={`mb-4 p-3 rounded-xl text-center text-sm font-medium ${status.type === 'error' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-fresh-green'}`}
                            >
                                {status.msg}
                            </motion.div>
                        )}

                        <button
                            type="submit" disabled={status.type === 'loading'}
                            className="glow-btn w-full bg-fresh-green text-white font-bold py-3.5 sm:py-4 rounded-xl transition-all disabled:opacity-50 text-sm uppercase tracking-wider"
                        >
                            {status.type === 'loading' ? 'Sending…' : 'Send Message'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
