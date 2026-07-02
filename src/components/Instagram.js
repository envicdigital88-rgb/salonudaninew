import React from 'react';

const Instagram = () => {
  const instaItems = [
    { id: 1, image: '/images/instagram/inst1.jpg', alt: 'Instagram post 1' },
    { id: 2, image: '/images/instagram/inst2.jpg', alt: 'Instagram post 2' },
    { id: 3, image: '/images/instagram/inst3.jpg', alt: 'Instagram post 3' },
    { id: 4, image: '/images/instagram/inst4.jpg', alt: 'Instagram post 4' },
    { id: 5, image: '/images/instagram/inst5.jpg', alt: 'Instagram post 5' },
    { id: 6, image: '/images/instagram/inst6.jpg', alt: 'Instagram post 6' },
    { id: 7, image: '/images/instagram/inst7.jpg', alt: 'Instagram post 7' },
    { id: 8, image: '/images/instagram/inst8.jpg', alt: 'Instagram post 8' },
    { id: 9, image: '/images/instagram/inst9.jpg', alt: 'Instagram post 9' },
    { id: 10, image: '/images/instagram/inst10.jpg', alt: 'Instagram post 10' },
    { id: 11, image: '/images/instagram/inst11.jpg', alt: 'Instagram post 11' },
    { id: 12, image: '/images/instagram/inst12.jpg', alt: 'Instagram post 12' }
  ];

  return (
    <section className="insta">
      <div className="container">
        <div className="section-head reveal-rotate">
          <div className="eyebrow">Follow Us</div>
          <h2>@SalonUdani on Instagram</h2>
          <p>Get daily inspiration and see our latest bridal transformations.</p>
        </div>

        <div className="insta-grid">
          {instaItems.map(item => (
            <a 
              key={item.id} 
              href="https://www.instagram.com/salonudani" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="insta-item reveal"
            >
              <img src={item.image} alt={item.alt} />
            </a>
          ))}
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <a 
            href="https://www.instagram.com/salonudani" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-dark-outline"
          >
            <i className="fa-brands fa-instagram"></i> Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
