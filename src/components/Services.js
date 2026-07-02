import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fa-solid fa-crown',
      title: 'Bridal Dressing',
      description: 'Complete bridal styling for your wedding day.'
    },
    {
      icon: 'fa-solid fa-wand-magic-sparkles',
      title: 'Bridal Makeup',
      description: 'Professional long-lasting makeup using premium products.'
    },
    {
      icon: 'fa-solid fa-scissors',
      title: 'Hair Styling',
      description: 'Elegant hairstyles designed for every bride.'
    },
    {
      icon: 'fa-solid fa-calendar-check',
      title: 'Bridal Trial Sessions',
      description: 'Experience your bridal look before your wedding day.'
    },
    {
      icon: 'fa-solid fa-droplet',
      title: 'Hair Treatments',
      description: 'Professional hair care for healthy beautiful hair.'
    },
    {
      icon: 'fa-solid fa-spa',
      title: 'Facial Treatments',
      description: 'Healthy glowing skin preparation.'
    },
    {
      icon: 'fa-solid fa-sparkles',
      title: 'Party Makeup',
      description: 'Perfect for engagements and special occasions.'
    },
    {
      icon: 'fa-solid fa-hand-sparkles',
      title: 'Nail Care',
      description: 'Luxury manicure and pedicure services.'
    },
    {
      icon: 'fa-solid fa-user-check',
      title: 'Waxing & Threading',
      description: 'Professional grooming services.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head reveal-zoom">
          <div className="eyebrow">Our Services</div>
          <h2>Premium Bridal & Beauty Services</h2>
          <p>Elegant premium cards displaying our comprehensive beauty services.</p>
        </div>

        <div className="services-grid stagger">
          {services.map((service, index) => (
            <div key={index} className="service-card reveal-flip" style={{ '--i': index }}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
