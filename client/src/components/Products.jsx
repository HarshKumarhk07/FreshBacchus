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
        <section className="py-20 bg-lightBg" id="products">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h2>
                    <div className="w-24 h-1 bg-freshGreen mx-auto rounded"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group bg-white rounded-3xl overflow-hidden premium-shadow hover-premium-shadow flex flex-col h-full"
                        >
                            <div className="overflow-hidden h-64 relative">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow text-center relative pt-10">
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-freshGreen text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                                    {category.tag}
                                </span>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">{category.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{category.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
