import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BusinessDetails from './components/BusinessDetails';
import Products from './components/Products';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="font-sans antialiased bg-lightBg text-darkText">
            <Navbar />
            <Hero />
            <BusinessDetails />
            <Products />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
