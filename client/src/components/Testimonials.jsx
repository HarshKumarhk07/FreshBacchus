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
                // Fallback UI data
                setTestimonials([
                    { _id: '1', name: 'John D.', review: 'Always the freshest produce! Love it.', rating: 5 },
                    { _id: '2', name: 'Alice S.', review: 'Great grocery options.', rating: 4 }
                ]);
            } finally {
                setLoading(false);
            }
        };
        fetchTestimonials();
    }, []);

    return (
        <section
            className="py-24 relative overflow-hidden"
            id="testimonials"
            style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${testimonialsBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
                    <div className="w-24 h-1 bg-freshGreen mx-auto rounded"></div>
                </motion.div>

                {loading ? (
                    <div className="text-center text-gray-500">Loading reviews...</div>
                ) : (
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 }
                        }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        className="pb-16"
                    >
                        {testimonials.map((test) => (
                            <SwiperSlide key={test._id}>
                                <div className="bg-white p-8 rounded-2xl h-full flex flex-col premium-shadow m-4">
                                    <FaQuoteLeft className="text-4xl text-green-100 mb-6" />
                                    <p className="text-gray-600 italic mb-8 flex-grow text-lg">"{test.review}"</p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <h4 className="font-bold text-gray-800">{test.name}</h4>
                                        <div className="flex text-yellow-400">
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
