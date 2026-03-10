import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="font-sans antialiased bg-white text-stone-800">
            <Navbar />
            <Hero />
            <Products />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
