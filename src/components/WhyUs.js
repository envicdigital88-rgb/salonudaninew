import React from 'react';

const WhyUs = () => {
  const reasons = [
    {
      icon: 'fa-solid fa-award',
      title: 'Bridal Specialists',
      description: 'Experienced bridal professionals.'
    },
    {
      icon: 'fa-solid fa-heart',
      title: 'Personalized Experience',
      description: 'Every bride receives individual attention.'
    },
    {
      icon: 'fa-solid fa-gem',
      title: 'Premium Products',
      description: 'Only professional beauty products.'
    },
    {
      icon: 'fa-solid fa-shield-heart',
      title: 'Hygienic Environment',
      description: 'Clean, modern salon facilities.'
    },
    {
      icon: 'fa-solid fa-star',
      title: 'Trusted By Brides',
      description: 'Creating beautiful memories for years.'
    },
    {
      icon: 'fa-solid fa-users',
      title: 'Professional Team',
      description: 'Friendly and experienced beauty experts.'
    }
  ];

  return (
    <section className="why">
      <div className="container">
        <div className="section-head reveal-blur">
          <div className="eyebrow">Why Choose Us</div>
          <h2>Why Brides Choose Salon Udani</h2>
          <p>Luxury icon cards highlighting our commitment to excellence.</p>
        </div>

        <div className="why-grid stagger">
          {reasons.map((reason, index) => (
            <div key={index} className="why-card reveal-slide-scale" style={{ '--i': index }}>
              <div className="why-icon">
                <i className={reason.icon}></i>
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
