import React from 'react';

const Beyond = () => {
  const services = [
    { icon: 'fa-solid fa-scissors', title: 'Hair' },
    { icon: 'fa-solid fa-spa', title: 'Skin Care' },
    { icon: 'fa-solid fa-sparkles', title: 'Facials' },
    { icon: 'fa-solid fa-droplet', title: 'Hair Treatments' },
    { icon: 'fa-solid fa-gem', title: 'Beauty Care' },
    { icon: 'fa-solid fa-wand-magic-sparkles', title: 'Special Occasion Makeup' }
  ];

  return (
    <section className="beyond">
      <div className="container">
        <div className="section-head reveal-zoom">
          <div className="eyebrow">Beyond Weddings</div>
          <h2>Beauty For Every Special Occasion</h2>
          <p>Salon Udani offers complete beauty and wellness services beyond weddings, helping every client feel confident, beautiful, and refreshed.</p>
        </div>

        <div className="beyond-grid stagger">
          {services.map((service, index) => (
            <div key={index} className="beyond-card reveal-bounce" style={{ '--i': index }}>
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beyond;
