import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.5; // Parallax speed
      setParallaxOffset(parallax);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero hero-fullwidth" id="home">
      <div className="hero-media">
        <div 
          className="hero-photo" 
          style={{ 
            backgroundImage: 'url(/images/hero/image_hero.jpg)',
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${parallaxOffset}px)`
          }}
        ></div>
      </div>
      <div className="hero-content-overlay">
        <div className="hero-text-block">
          <h1 className="reveal in">Every Bride Deserves<br />Her Perfect Moment</h1>
          <p className="hero-subtitle reveal in">From timeless bridal dressing and flawless makeup to luxurious beauty care, Salon Udani is dedicated to creating unforgettable bridal transformations that celebrate your unique beauty and traditions.</p>
          
          <div className="hero-buttons">
            <a href="https://wa.me/94702933408" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp"></i> Book Consultation
            </a>
            <a href="tel:+94702933408" className="btn btn-outline">
              <i className="fa-solid fa-phone"></i> Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <div className="line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
