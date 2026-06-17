import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 300); }, []);

  return (
    <div className={`app ${loaded ? 'app--loaded' : ''}`}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Gallery />
      <Testimonials />
      <Partners />
      <Enquiry />
      <Footer />
    </div>
  );
}

export default App;
