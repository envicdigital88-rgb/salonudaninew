import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Journey from './components/Journey';
import WhyUs from './components/WhyUs';
import Collections from './components/Collections';
import Gallery from './components/Gallery';
import Beyond from './components/Beyond';
import Awards from './components/Awards';
import Testimonials from './components/Testimonials';
import Instagram from './components/Instagram';
import Branches from './components/Branches';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Scroll progress
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    // Reveal on scroll
    const revealElements = () => {
      const reveals = document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right, .reveal-fade, .reveal-zoom, .reveal-rotate, .reveal-flip, .reveal-bounce, .reveal-slide-scale, .reveal-blur');
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 120;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', revealElements);
    revealElements();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', revealElements);
    };
  }, []);

  return (
    <div className="App">
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Journey />
      <WhyUs />
      <Collections />
      <Gallery />
      <Beyond />
      <Awards />
      <Testimonials />
      <Instagram />
      <Branches />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
