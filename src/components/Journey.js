import React, { useEffect, useState } from 'react';

const Journey = () => {
  const [fillHeight, setFillHeight] = useState(0);

  const steps = [
    {
      number: 1,
      title: 'Consultation',
      description: 'Understanding your dream bridal look.'
    },
    {
      number: 2,
      title: 'Bridal Trial',
      description: 'Creating your perfect hairstyle and makeup.'
    },
    {
      number: 3,
      title: 'Beauty Preparation',
      description: 'Professional skincare and treatments.'
    },
    {
      number: 4,
      title: 'Wedding Day Styling',
      description: 'Complete bridal transformation.'
    },
    {
      number: 5,
      title: 'Your Perfect Moment',
      description: 'Walk down the aisle with confidence.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const journeySection = document.querySelector('.journey');
      if (!journeySection) return;

      const sectionTop = journeySection.offsetTop;
      const sectionHeight = journeySection.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight;
      
      if (scrollPosition > sectionTop && window.scrollY < sectionTop + sectionHeight) {
        const progress = ((scrollPosition - sectionTop) / sectionHeight) * 100;
        setFillHeight(Math.min(Math.max(progress, 0), 100));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="journey journey-modern">
      <div className="container-wide">
        
        {/* Section Header */}
        <div className="section-head-modern reveal-fade">
          <div className="eyebrow">Your Bridal Journey</div>
          <h2>From Consultation to Your Perfect Day</h2>
          <p>A luxury timeline of your bridal transformation journey.</p>
        </div>

        {/* Journey Grid Layout */}
        <div className="journey-grid-layout">
          
          {/* Left Side - Image */}
          <div className="journey-image-side reveal-left">
            <div className="journey-featured-img">
              <img src="/images/branches/image12.jpg" alt="Bridal Journey" />
              <div className="journey-img-badge">
                <span className="badge-number">5</span>
                <span className="badge-text">Steps to Perfection</span>
              </div>
            </div>
          </div>

          {/* Right Side - Timeline */}
          <div className="journey-timeline-side reveal-right">
            <div className="journey-track-modern">
              <div className="journey-line-modern">
                <div className="journey-line-fill-modern" style={{ height: `${fillHeight}%` }}></div>
              </div>
              
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="journey-step-modern reveal-fade" 
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className="journey-dot-modern">{step.number}</div>
                  <div className="journey-step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Journey;
