import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
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
        <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-stone-900" id="testimonials">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
            />

            <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-14 md:mb-20"
                >
                    <span className="inline-block text-fresh-green font-semibold tracking-[0.2em] uppercase text-[11px] sm:text-xs mb-3 sm:mb-4 px-4 py-1.5 rounded-full bg-fresh-green/10 border border-fresh-green/20">Kind Words</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4"
                        style={{ fontFamily: 'var(--font-serif)' }}
                    >
                        What Our Customers Say
                    </h2>
                    <p className="text-stone-400 max-w-md mx-auto text-sm sm:text-base">
                        Real stories from the Bacchus Marsh community
                    </p>
                </motion.div>

                {loading ? (
                    <div className="text-center text-stone-400 font-medium tracking-wide text-sm py-12">Loading reviews...</div>
                ) : (
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={16}
                        slidesPerView={1}
                        breakpoints={{
                            640: { spaceBetween: 24 },
                            1024: { slidesPerView: 2, spaceBetween: 32 }
                        }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        className="pb-14 sm:pb-16 md:pb-20"
                    >
                        {testimonials.map((test) => (
                            <SwiperSlide key={test._id}>
                                <div className="p-6 sm:p-8 md:p-10 rounded-2xl h-full flex flex-col bg-white/[0.04] border border-white/[0.06] backdrop-blur-sm">
                                    <FaQuoteLeft className="text-2xl sm:text-3xl text-fresh-green/60 mb-5 sm:mb-6" />
                                    <p className="text-white/80 font-normal italic mb-6 sm:mb-8 flex-grow text-sm sm:text-base md:text-lg leading-relaxed">
                                        "{test.review}"
                                    </p>
                                    <div className="flex items-center justify-between pt-5 sm:pt-6 border-t border-white/[0.06]">
                                        <span className="font-bold text-white text-sm sm:text-base">{test.name}</span>
                                        <div className="flex text-amber-400 gap-0.5 text-xs">
                                            {[...Array(test.rating || 5)].map((_, i) => (
                                                <FaStar key={i} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    );
};

export default Testimonials;
