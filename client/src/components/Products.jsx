import React from 'react';
import { motion } from 'framer-motion';

import fruitsImg from '../assets/fruits.jpg';
import veggiesImg from '../assets/vegetables.jpg';
import groceriesImg from '../assets/groceries.jpg';

const categories = [
    {
        title: 'Fresh Fruits',
        image: fruitsImg,
        description: 'Juicy, sweet, and handpicked daily for your table.',
        tag: 'Premium'
    },
    {
        title: 'Farm Vegetables',
        image: veggiesImg,
        description: 'Crisp and organic leafy greens and root vegetables.',
        tag: 'Organic'
    },
    {
        title: 'Daily Groceries',
        image: groceriesImg,
        description: 'Pantry essentials, dairy, and household items.',
        tag: 'Essential'
    }
];

const Products = () => {
    return (
        <section className="py-32 relative overflow-hidden" id="products">
            {/* Subtle background decorative element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-fresh-green/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-fresh-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Handpicked Quality</span>
                    <h2 className="text-4xl md:text-6xl font-black text-stone-900 mb-6 tracking-tight">The Harvest Collection</h2>
                    <div className="w-24 h-2 bg-linear-to-r from-fresh-green to-fresh-green-light mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                            }}
                            className="group premium-card overflow-hidden flex flex-col h-full border border-stone-100"
                        >
                            <div className="overflow-hidden h-72 relative">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="absolute top-6 left-6">
                                    <span className="bg-white/90 backdrop-blur-md text-stone-900 text-xs font-black px-4 py-2 rounded-full uppercase tracking-tighter shadow-xl">
                                        {category.tag}
                                    </span>
                                </div>
                            </div>

                            <div className="p-10 flex flex-col flex-grow text-center relative">
                                <h3 className="text-2xl font-black text-stone-900 mb-4 group-hover:text-fresh-green transition-colors">{category.title}</h3>
                                <p className="text-stone-500 leading-relaxed font-medium">{category.description}</p>

                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Products;
