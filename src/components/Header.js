import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header id="site-header" className={scrolled ? 'scrolled' : ''}>
      <nav className="container">
        <a href="#home" className="logo logo-image">
          <img 
            src="/images/logo/Logo.jpg" 
            alt="Salon Udani" 
          />
        </a>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="nav-links">
          <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
          <li><a href="#services" className="nav-link" onClick={closeMenu}>Services</a></li>
          <li><a href="#gallery" className="nav-link" onClick={closeMenu}>Gallery</a></li>
          <li><a href="#collections" className="nav-link" onClick={closeMenu}>Bridal Collections</a></li>
          <li><a href="#branches" className="nav-link" onClick={closeMenu}>Branches</a></li>
          <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
        </ul>
        <button className="menu-toggle" id="menu-toggle" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
