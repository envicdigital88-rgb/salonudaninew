import React from 'react';

const FinalCTA = () => {
  return (
    <section className="final-cta" id="contact">
      <div className="cta-photo">
        <img src="/images/journey/journeyimage.jpg" alt="Salon Udani Bridal Journey" />
      </div>
      <div className="container final-cta-content">
        <div className="eyebrow" style={{ justifyContent: 'center' }}>Start Your Journey</div>
        <h2 className="reveal-scale in">Ready To Begin Your Bridal Journey?</h2>
        <p className="reveal-blur in">
          Book your consultation today and let Salon Udani create a bridal look you'll cherish forever.
        </p>
        <div className="cta-buttons reveal-zoom in">
          <a href="https://wa.me/94702933408" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp"></i> Book Consultation
          </a>
          <a href="https://wa.me/94702933408" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
          <a href="tel:+94702933408" className="btn btn-outline">
            <i className="fa-solid fa-phone"></i> Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
