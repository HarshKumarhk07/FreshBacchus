import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

import heroImage from '../assets/hero.jpg';
import fruitsImage from '../assets/fruits.jpg';
import veggiesImage from '../assets/vegetables.jpg';

const slides = [
    {
        id: 1,
        image: heroImage,
        headline: 'Farm Fresh Fruits',
        subtitle: 'Harvested daily to bring the best nature has to offer right to your table.',
    },
    {
        id: 2,
        image: fruitsImage,
        headline: 'Organic Vegetables',
        subtitle: 'Crisp, nutritious, and absolutely pesticide-free. Eat healthy, live better.',
    },
    {
        id: 3,
        image: veggiesImage,
        headline: 'Premium Groceries',
        subtitle: 'A complete selection of everyday grocery essentials for your family.',
    }
];

const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                <div className="absolute inset-0 bg-black/50" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="max-w-3xl"
                                >
                                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                                        {slide.headline}
                                    </h1>
                                    <p className="text-xl md:text-2xl text-gray-200 mb-10 drop-shadow-md">
                                        {slide.subtitle}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <a href="#products" className="bg-freshGreen hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-transform hover:scale-105 shadow-lg">
                                            Explore Products
                                        </a>
                                        <a href="#contact" className="bg-lightBrown hover:bg-[#b08d6a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-transform hover:scale-105 shadow-lg">
                                            Contact Us
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;
