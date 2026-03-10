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
        <section id="home" className="relative h-screen w-full overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110 group-active:scale-100"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                {/* Multi-layered architectural depth overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: { staggerChildren: 0.2 }
                                        }
                                    }}
                                    className="max-w-4xl"
                                >
                                    <motion.h1
                                        variants={{
                                            hidden: { opacity: 0, y: 30 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                        }}
                                        className="text-4xl sm:text-5xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl leading-tight tracking-tight px-4"
                                    >
                                        <span className="block">{slide.headline.split(' ').slice(0, -1).join(' ')}</span>
                                        <span className="text-fresh-green-light">{slide.headline.split(' ').pop()}</span>
                                    </motion.h1>

                                    <motion.p
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                        }}
                                        className="text-lg sm:text-xl md:text-2xl text-stone-200 mb-12 drop-shadow-xl font-medium max-w-2xl mx-auto leading-relaxed"
                                    >
                                        {slide.subtitle}
                                    </motion.p>

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
