import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

import fruitsImage from '../assets/fruits.jpg';
import veggiesImage from '../assets/vegetables.jpg';
import groceriesImage from '../assets/groceries.jpg';


const slides = [
    {
        id: 1,
        image: fruitsImage,
        tag: 'Daily Harvest',
        headline: ['Farm Fresh', 'Fruits'],
        accent: 'Fruits',
        subtitle: 'Harvested daily to bring the best nature has to offer right to your table.',
        stat: { value: '100%', label: 'Organic' },
    },
    {
        id: 2,
        image: veggiesImage,
        tag: 'Zero Pesticides',
        headline: ['Organic', 'Vegetables'],
        accent: 'Vegetables',
        subtitle: 'Crisp, nutritious, and absolutely pesticide-free. Eat healthy, live better.',
        stat: { value: '50+', label: 'Varieties' },
    },
    {
        id: 3,
        image: groceriesImage,
        tag: 'Family Essentials',
        headline: ['Premium', 'Groceries'],
        accent: 'Groceries',
        subtitle: 'A complete selection of everyday grocery essentials for your family.',
        stat: { value: '24h', label: 'Fresh Delivery' },
    },
];


const Particle = ({ delay, size, left, top, duration }) => (
    <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
            width: size,
            height: size,
            left: `${left}%`,
            top: `${top}%`,
            background: 'radial-gradient(circle, rgba(134,239,172,0.6) 0%, rgba(134,239,172,0) 70%)',
        }}
        animate={{
            y: [-20, -60, -20],
            opacity: [0, 0.7, 0],
            scale: [0.5, 1.2, 0.5],
        }}
        transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
        }}
    />
);

const particles = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    delay: i * 0.6,
    size: Math.random() * 10 + 4,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 4 + 4,
}));

/* ─────────────────────────────────────────────
   Page-load curtain reveal
───────────────────────────────────────────── */
const CurtainReveal = ({ onDone }) => {
    return (
        <motion.div
            className="fixed inset-0 z-[100] flex"
            initial="closed"
            animate="open"
            onAnimationComplete={onDone}
        >
            {/* Left panel */}
            <motion.div
                className="flex-1 bg-[#0a1a0a]"
                variants={{ closed: { scaleX: 1 }, open: { scaleX: 0 } }}
                transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
                style={{ originX: 0 }}
            />
            {/* Right panel */}
            <motion.div
                className="flex-1 bg-[#0a1a0a]"
                variants={{ closed: { scaleX: 1 }, open: { scaleX: 0 } }}
                transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
                style={{ originX: 1 }}
            />
        </motion.div>
    );
};

/* ─────────────────────────────────────────────
   Animated counter
───────────────────────────────────────────── */
const StatBadge = ({ value, label }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0, ease: 'backOut' }}
        className="absolute bottom-32 sm:bottom-28 right-4 sm:right-8 md:right-16 lg:right-24 text-right"
    >
        <div
            className="backdrop-blur-md rounded-2xl px-4 py-3 sm:px-6 sm:py-4 border"
            style={{
                background: 'rgba(255,255,255,0.06)',
                borderColor: 'rgba(134,239,172,0.25)',
                boxShadow: '0 0 40px rgba(134,239,172,0.08)',
            }}
        >
            <p className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-none">{value}</p>
            <p
                className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] mt-1"
                style={{ color: '#86ef9a' }}
            >
                {label}
            </p>
        </div>
    </motion.div>
);

/* ─────────────────────────────────────────────
   Slide text block — re-mounts on slide change
───────────────────────────────────────────── */
const SlideContent = ({ slide, isReady }) => {
    const wordVariants = {
        hidden: { y: '110%', opacity: 0 },
        visible: (i) => ({
            y: '0%',
            opacity: 1,
            transition: { duration: 0.5, delay: isReady ? 0.3 + i * 0.08 : 9999, ease: [0.22, 1, 0.36, 1] },
        }),
    };

    return (
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 pointer-events-none">
            {/* Tag pill */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: isReady ? 1 : 0, x: isReady ? 0 : -30 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mb-3 sm:mb-5 flex items-center gap-3"
            >
                <span
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full"
                    style={{
                        background: 'rgba(134,239,172,0.12)',
                        color: '#86ef9a',
                        border: '1px solid rgba(134,239,172,0.3)',
                    }}
                >
                    <span
                        className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"
                    />
                    {slide.tag}
                </span>
            </motion.div>

            {/* Headline — word by word reveal */}
            <div className="overflow-hidden mb-2">
                <div className="flex flex-wrap gap-x-2 sm:gap-x-4">
                    {slide.headline.map((word, i) => (
                        <div key={i} className="overflow-hidden">
                            <motion.span
                                custom={i}
                                variants={wordVariants}
                                initial="hidden"
                                animate="visible"
                                className={`block text-[clamp(2.2rem,10vw,8rem)] font-black leading-[0.92] tracking-tight ${word === slide.accent
                                    ? 'text-transparent bg-clip-text'
                                    : 'text-white'
                                    }`}
                                style={
                                    word === slide.accent
                                        ? {
                                            backgroundImage:
                                                'linear-gradient(135deg, #86ef9a 0%, #4ade80 50%, #16a34a 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }
                                        : {}
                                }
                            >
                                {word}
                            </motion.span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Animated rule */}
            <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: isReady ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-20 sm:w-32 h-[2px] mb-4 sm:mb-6 rounded-full"
                style={{ background: 'linear-gradient(90deg, #4ade80, transparent)' }}
            />

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 18 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-sm sm:text-base md:text-lg text-stone-300 max-w-[85%] sm:max-w-md leading-relaxed font-light mb-6 sm:mb-10"
            >
                {slide.subtitle}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 22 }}
                transition={{ duration: 0.5, delay: 0.85 }}
                className="flex flex-wrap gap-3 sm:gap-4 pointer-events-auto relative"
                style={{ zIndex: 50 }}
            >
                <a
                    href="#products"
                    className="group relative px-5 py-3 sm:px-7 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 no-underline inline-block"
                    style={{ background: 'linear-gradient(135deg, #4ade80, #16a34a)', color: '#000' }}
                >
                    <span className="relative z-10">Shop Now</span>
                    <motion.span
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: 'linear-gradient(135deg, #86ef9a, #4ade80)' }}
                    />
                </a>
                <a
                    href="#products"
                    className="px-5 py-3 sm:px-7 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white/10 no-underline inline-block"
                    style={{ border: '1px solid rgba(255,255,255,0.25)' }}
                >
                    Explore Menu
                </a>
            </motion.div>
        </div>
    );
};

/* ─────────────────────────────────────────────
   MAIN HERO
───────────────────────────────────────────── */
const Hero = () => {
    const [curtainDone, setCurtainDone] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideKey, setSlideKey] = useState(0);
    const swiperRef = useRef(null);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
        setSlideKey((k) => k + 1);
    };

    return (
        <>
            {/* ── Curtain (unmounts once animation is done) ── */}
            {!curtainDone && <CurtainReveal onDone={() => setCurtainDone(true)} />}

            <section
                id="home"
                className="relative h-screen w-full overflow-hidden"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                {/* ── Swiper ── */}
                <Swiper
                    onSwiper={(s) => (swiperRef.current = s)}
                    modules={[Autoplay, EffectFade, Pagination]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    speed={800}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true, el: '.custom-pagination' }}
                    allowTouchMove={false}
                    loop
                    onSlideChange={handleSlideChange}
                    className="w-full h-full"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id} className="overflow-hidden">
                            {/* Ken Burns background */}
                            <motion.div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${slide.image})`, scale: 1.12 }}
                                animate={{ scale: [1.12, 1.0] }}
                                transition={{ duration: 5.5, ease: 'easeOut' }}
                            />

                            {/* Cinematic vignette layers */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        'linear-gradient(105deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.15) 100%)',
                                }}
                            />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        'radial-gradient(ellipse at bottom, rgba(0,0,0,0.6) 0%, transparent 70%)',
                                }}
                            />
                            {/* Green atmospheric bloom */}
                            <div
                                className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20 blur-[120px] pointer-events-none"
                                style={{ background: '#4ade80' }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* ── Floating particles ── */}
                <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                    {curtainDone &&
                        particles.map((p) => (
                            <Particle key={p.id} {...p} />
                        ))}
                </div>

                {/* ── Animated slide content (re-mounts per slide) ── */}
                <div className="absolute inset-0 z-20">
                    <AnimatePresence mode="wait">
                        <SlideContent
                            key={slideKey}
                            slide={slides[activeIndex]}
                            isReady={curtainDone}
                        />
                    </AnimatePresence>
                </div>

                {/* ── Stat badge ── */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                    <AnimatePresence mode="wait">
                        <StatBadge
                            key={`stat-${slideKey}`}
                            value={slides[activeIndex].stat.value}
                            label={slides[activeIndex].stat.label}
                        />
                    </AnimatePresence>
                </div>

                {/* ── Progress bar ── */}
                <motion.div
                    key={`bar-${slideKey}`}
                    className="absolute bottom-0 left-0 h-[3px] z-30 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #4ade80, #86ef9a)' }}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 5, ease: 'linear' }}
                />

                {/* ── Slide counter (bottom-right to avoid navbar collision) ── */}
                <div className="absolute bottom-14 sm:bottom-20 right-4 sm:right-8 md:right-16 z-30 flex items-center gap-1.5 sm:gap-2">
                    <span className="text-2xl sm:text-4xl font-black text-white leading-none tabular-nums">
                        0{activeIndex + 1}
                    </span>
                    <div className="flex flex-col gap-1 mt-1">
                        <div className="w-px h-3 sm:h-4 bg-white/20 mx-auto" />
                        <span className="text-[10px] sm:text-xs text-white/40 font-medium">
                            0{slides.length}
                        </span>
                    </div>
                </div>

                {/* ── Prev / Next arrow buttons ── */}
                <motion.button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute left-1.5 sm:left-3 md:left-8 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-8 sm:h-8 md:w-11 md:h-11 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 sm:hover:scale-110 sm:hover:bg-white/15 group"
                    style={{
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255,255,255,0.15)',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: curtainDone ? 0.7 : 0 }}
                    whileHover={{ opacity: 1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    aria-label="Previous slide"
                >
                    <svg width="12" height="12" className="sm:w-[14px] sm:h-[14px] md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </motion.button>

                <motion.button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute right-1.5 sm:right-3 md:right-8 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-8 sm:h-8 md:w-11 md:h-11 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 sm:hover:scale-110 sm:hover:bg-white/15 group"
                    style={{
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255,255,255,0.15)',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: curtainDone ? 0.7 : 0 }}
                    whileHover={{ opacity: 1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    aria-label="Next slide"
                >
                    <svg width="12" height="12" className="sm:w-[14px] sm:h-[14px] md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </motion.button>

                {/* ── Custom swiper pagination dots ── */}
                <div className="custom-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2" />

                {/* ── Scroll indicator (hidden on very small screens) ── */}
                <motion.div
                    className="absolute bottom-8 left-4 sm:left-8 md:left-16 z-30 hidden sm:flex items-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: curtainDone ? 1 : 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                >
                    <div
                        className="w-6 h-10 rounded-full border border-white/30 flex items-start justify-center pt-2"
                    >
                        <motion.div
                            className="w-1 h-2 rounded-full bg-green-400"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                        Scroll
                    </span>
                </motion.div>

                {/* ── Decorative diagonal line (hidden on small screens) ── */}
                <svg
                    className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 opacity-5 pointer-events-none z-10 hidden sm:block"
                    viewBox="0 0 256 256"
                    fill="none"
                >
                    {Array.from({ length: 8 }, (_, i) => (
                        <line
                            key={i}
                            x1={256 - i * 32}
                            y1="0"
                            x2="256"
                            y2={i * 32}
                            stroke="#4ade80"
                            strokeWidth="1"
                        />
                    ))}
                </svg>
            </section>

            {/* ── Global styles injected ── */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');

        .custom-pagination {
          display: flex !important;
          align-items: center;
          gap: 8px;
        }
        .custom-pagination .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: rgba(255,255,255,0.35);
          border-radius: 50%;
          opacity: 1;
          transition: all 0.4s ease;
          cursor: pointer;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 3px;
          background: #4ade80;
          box-shadow: 0 0 12px rgba(74,222,128,0.6);
        }
      `}</style>
        </>
    );
};

export default Hero;
