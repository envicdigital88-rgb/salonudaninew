import React from 'react';

const About = () => {
  return (
    <section className="about about-modern" id="about">
      <div className="container-wide">
        
        {/* Main Content Row */}
        <div className="about-hero-row">
          {/* Left Side - Large Featured Image */}
          <div className="about-featured-img reveal-left">
            <img src="/images/about/image1.jpg" alt="Salon Udani Bridal Work" />
            <div className="featured-badge">
              <span className="badge-icon">✦</span>
              <span className="badge-text">Award Winning</span>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="about-content reveal-right">
            <div className="about-label">About Salon Udani</div>
            <h2>Creating Beautiful Brides With Passion & Excellence</h2>
            <div className="decorative-line">
              <span></span>
              <span className="diamond">✦</span>
              <span></span>
            </div>
            <p className="about-intro">
              At Salon Udani, beauty is more than makeup—it's about confidence, elegance, and creating memories that last forever.
            </p>
            <p className="about-desc">
              With years of experience in bridal dressing, professional makeup, hair styling, and beauty care, our talented team creates personalized looks that reflect each bride's unique personality and wedding style.
            </p>
            
            {/* Stats */}
            <div className="about-stats">
              <div className="stat-item reveal-fade" style={{ transitionDelay: '0.2s' }}>
                <div className="stat-number">500+</div>
                <div className="stat-label">Happy Brides</div>
              </div>
              <div className="stat-item reveal-fade" style={{ transitionDelay: '0.3s' }}>
                <div className="stat-number">10+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item reveal-fade" style={{ transitionDelay: '0.4s' }}>
                <div className="stat-number">2</div>
                <div className="stat-label">Luxury Branches</div>
              </div>
            </div>

            <a href="#services" className="btn-about">
              Explore Our Services
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Bottom Gallery Strip */}
        <div className="about-gallery-strip">
          <div className="strip-item reveal-left" style={{ transitionDelay: '0.2s' }}>
            <img src="/images/about/image11.jpg" alt="Bridal Makeup" />
            <div className="strip-overlay">
              <h4>Bridal Makeup</h4>
            </div>
          </div>
          <div className="strip-item reveal-fade" style={{ transitionDelay: '0.4s' }}>
            <img src="/images/about/image16.jpg" alt="Hair Styling" />
            <div className="strip-overlay">
              <h4>Hair Styling</h4>
            </div>
          </div>
          <div className="strip-item reveal-right" style={{ transitionDelay: '0.6s' }}>
            <img src="/images/collections/image14.jpg" alt="Bridal Dressing" />
            <div className="strip-overlay">
              <h4>Bridal Dressing</h4>
            </div>
          </div>
          <div className="strip-item reveal-right" style={{ transitionDelay: '0.8s' }}>
            <img src="/images/collections/image15.jpg" alt="Traditional Looks" />
            <div className="strip-overlay">
              <h4>Traditional Looks</h4>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
