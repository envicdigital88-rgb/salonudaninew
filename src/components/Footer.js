import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo logo-image">
              <img src="/images/logo/Logo.jpg" alt="Salon Udani" style={{ height: '60px', width: 'auto' }} />
            </a>
            <p>Creating unforgettable bridal transformations with authentic traditions and contemporary elegance.</p>
            <div className="footer-social">
              <a href="https://facebook.com/salonudani" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com/salonudani" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://tiktok.com/@salonudani" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="https://youtube.com/@salonudani" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#collections">Bridal Collections</a></li>
              <li><a href="#branches">Branches</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Bridal Dressing</a></li>
              <li><a href="#services">Bridal Makeup</a></li>
              <li><a href="#services">Hair Styling</a></li>
              <li><a href="#services">Facial Treatments</a></li>
              <li><a href="#services">Party Makeup</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <div>Yakkala, Sri Lanka</div>
                  <div>Warakapola, Sri Lanka</div>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <div>+94 70 293 3408</div>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <div>inquiries.salonudani@gmail.com</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Salon Udani. All Rights Reserved.</p>
          <p>Designed with <i className="fa-solid fa-heart" style={{ color: 'var(--gold)' }}></i> for Sri Lankan Brides</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
