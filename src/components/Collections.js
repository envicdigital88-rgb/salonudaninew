import React from 'react';

const Collections = () => {
  const collections = [
    {
      title: 'Kandyan Bridal',
      link: '#gallery',
      image: '/images/collections/image3.jpg'
    },
    {
      title: 'Western Bridal',
      link: '#gallery',
      image: '/images/collections/image4.jpg'
    },
    {
      title: 'Indian Bridal',
      link: '#gallery',
      image: '/images/collections/image5.jpg'
    },
    {
      title: 'Engagement Looks',
      link: '#gallery',
      image: '/images/collections/image6.jpg'
    },
    {
      title: 'Homecoming Looks',
      link: '#gallery',
      image: '/images/branches/image13.jpg'
    },
    {
      title: 'Party Makeup',
      link: '#gallery',
      image: '/images/branches/image2.jpg'
    }
  ];

  return (
    <section className="collections" id="collections">
      <div className="container">
        <div className="section-head reveal-bounce">
          <div className="eyebrow">Bridal Collections</div>
          <h2>Our Signature Bridal Styles</h2>
          <p>Beautiful category cards showcasing our diverse bridal collections.</p>
        </div>

        <div className="collections-grid stagger">
          {collections.map((collection, index) => (
            <div key={index} className="collection-card reveal-rotate" style={{ '--i': index }}>
              <img src={collection.image} alt={collection.title} />
              <div className="collection-overlay">
                <h3>{collection.title}</h3>
                <a href={collection.link} className="view-link">
                  View Collection <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
