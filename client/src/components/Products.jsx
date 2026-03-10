import React from 'react';
import { motion } from 'framer-motion';

import fruitsImg from '../assets/fruits.jpg';
import veggiesImg from '../assets/vegetables.jpg';
import groceriesImg from '../assets/groceries.jpg';

const categories = [
    {
        title: 'Fresh Fruits',
        image: fruitsImg,
        description: 'Juicy, sweet, and handpicked daily from local orchards straight to your table.',
        tag: 'Premium',
        color: '#f97316',
    },
    {
        title: 'Farm Vegetables',
        image: veggiesImg,
        description: 'Crisp and organic leafy greens and root vegetables — 100% pesticide free.',
        tag: 'Organic',
        color: '#22c55e',
    },
    {
        title: 'Daily Groceries',
        image: groceriesImg,
        description: 'Pantry essentials, dairy, and household items for the whole family.',
        tag: 'Essential',
        color: '#3b82f6',
    }
];

const Products = () => {
    return (
        <section className="py-16 sm:py-24 md:py-32 bg-white relative" id="products">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >
                    <span className="inline-block text-fresh-green font-semibold tracking-[0.2em] uppercase text-[11px] sm:text-xs mb-3 sm:mb-4 px-4 py-1.5 rounded-full bg-fresh-green/8 border border-fresh-green/15">Handpicked Quality</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 mb-4 sm:mb-5 tracking-tight"
                        style={{ fontFamily: 'var(--font-serif)' }}
                    >
                        The Harvest Collection
                    </h2>
                    <p className="text-stone-500 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
                        We source only the finest produce from trusted local farms, delivering freshness you can taste and see.
                    </p>
                </motion.div>

                {/* Cards grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
                >
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 32 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
                            }}
                            className="group rounded-2xl overflow-hidden border border-stone-100 hover:border-stone-200 transition-all duration-500 bg-white hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden h-44 sm:h-52 md:h-60">
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                <span className="absolute top-3 sm:top-4 left-3 sm:left-4 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full text-white uppercase tracking-wider"
                                    style={{ background: cat.color }}
                                >
                                    {cat.tag}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-5 sm:p-6 md:p-7">
                                <h3 className="text-lg sm:text-xl font-bold text-stone-800 mb-2 group-hover:text-fresh-green transition-colors"
                                    style={{ fontFamily: 'var(--font-serif)' }}
                                >
                                    {cat.title}
                                </h3>
                                <p className="text-stone-500 text-sm leading-relaxed">{cat.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Products;
