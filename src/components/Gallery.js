import React, { useState } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    { id: 1, category: 'bridal', src: '/images/gallery/image7.jpg', alt: 'Bridal Makeup', title: 'Elegant Bridal Look' },
    { id: 2, category: 'hair', src: '/images/gallery/image8.jpg', alt: 'Hair Styling', title: 'Luxury Hair Design' },
    { id: 3, category: 'wedding', src: '/images/gallery/image9.jpg', alt: 'Wedding Moment', title: 'Perfect Wedding Day' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="gallery gallery-modern" id="gallery">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-head-modern reveal-fade">
          <div className="eyebrow">Our Portfolio</div>
          <h2>Bridal Gallery</h2>
          <p>Discover our beautiful transformations and the artistry behind every bride's perfect look</p>
        </div>

        {/* Featured Large Grid */}
        <div className="gallery-featured-grid">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`gallery-featured-item reveal-${index === 0 ? 'left' : index === 1 ? 'fade' : 'right'}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="gallery-img-wrap">
                <img src={item.src} alt={item.alt} />
              </div>
              <div className="gallery-item-overlay">
                <div className="gallery-overlay-content">
                  <h3>{item.title}</h3>
                  <div className="gallery-category">{item.category}</div>
                  <button className="gallery-view-btn">
                    <i className="fa-solid fa-expand"></i>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Images Row */}
        <div className="gallery-bottom-row">
          <div className="gallery-small-item reveal-left" style={{ transitionDelay: '0.2s' }}>
            <img src="/images/collections/image3.jpg" alt="Gallery Item" />
            <div className="small-overlay">
              <i className="fa-solid fa-heart"></i>
            </div>
          </div>
          <div className="gallery-small-item reveal-fade" style={{ transitionDelay: '0.3s' }}>
            <img src="/images/collections/image4.jpg" alt="Gallery Item" />
            <div className="small-overlay">
              <i className="fa-solid fa-heart"></i>
            </div>
          </div>
          <div className="gallery-small-item reveal-fade" style={{ transitionDelay: '0.4s' }}>
            <img src="/images/collections/image5.jpg" alt="Gallery Item" />
            <div className="small-overlay">
              <i className="fa-solid fa-heart"></i>
            </div>
          </div>
          <div className="gallery-small-item reveal-right" style={{ transitionDelay: '0.5s' }}>
            <img src="/images/collections/image6.jpg" alt="Gallery Item" />
            <div className="small-overlay">
              <i className="fa-solid fa-heart"></i>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="gallery-cta reveal-fade" style={{ transitionDelay: '0.6s' }}>
          <a href="#contact" className="btn-gallery">
            View Full Portfolio
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
