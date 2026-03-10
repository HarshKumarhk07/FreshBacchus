import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import testimonialsBg from '../assets/testimonials-bg.jpg';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
                const res = await axios.get(`${API_BASE_URL}/api/testimonials`);
                if (res.data.success) {
                    setTestimonials(res.data.data);
                }
            } catch (error) {
                console.error('Error fetching testimonials:', error);
                setTestimonials([
                    { _id: '1', name: 'John D.', review: 'Harvest House consistently delivers the best local produce in Bacchus Marsh. The quality is unmatched!', rating: 5 },
                    { _id: '2', name: 'Alice S.', review: 'A wonderful community-focused store with a premium selection of organic options. Highly recommended.', rating: 5 }
                ]);
            } finally {
                setLoading(false);
            }
        };
        fetchTestimonials();
    }, []);

    return (
        <section
            className="py-32 relative overflow-hidden bg-stone-900"
            id="testimonials"
        >
            {/* Background Texture with overlay */}
            <div
                className="absolute inset-0 grayscale opacity-20 scale-110"
                style={{
                    backgroundImage: `url(${testimonialsBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-900/80 to-stone-900" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-fresh-green font-black tracking-[0.3em] uppercase text-xs mb-4 block">Kind Words</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Client Experiences</h2>
                    <div className="w-24 h-2 bg-fresh-green mx-auto rounded-full"></div>
                </motion.div>

                {loading ? (
                    <div className="text-center text-stone-400 font-bold tracking-widest uppercase">Harvesting Reviews...</div>
                ) : (
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        breakpoints={{
                            1024: { slidesPerView: 2 }
                        }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        className="pb-24 swiper-premium"
                    >
                        {testimonials.map((test) => (
                            <SwiperSlide key={test._id}>
                                <motion.div
                                    className="glass-panel p-12 rounded-[3.5rem] h-full flex flex-col premium-card border-white/5 relative overflow-hidden group"
                                >
                                    <div className="absolute -top-10 -right-10 text-[12rem] text-white/5 font-black group-hover:text-fresh-green/10 transition-colors">"</div>
                                    <FaQuoteLeft className="text-5xl text-fresh-green mb-10" />
                                    <p className="text-stone-800 font-medium italic mb-12 flex-grow text-xl leading-relaxed">"{test.review}"</p>
                                    <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/5">
                                        <h4 className="font-black text-stone-900 text-lg tracking-tight uppercase">{test.name}</h4>
                                        <div className="flex text-amber-400 gap-1 text-sm bg-white/5 p-3 rounded-2xl">
                                            {[...Array(test.rating || 5)].map((_, i) => (
                                                <FaStar key={i} className="drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    );
};

export default Testimonials;
