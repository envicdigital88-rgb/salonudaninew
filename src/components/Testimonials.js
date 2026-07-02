import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Amaya P.',
      role: 'Bride 2024',
      rating: 5,
      text: "Salon Udani made my wedding day truly magical. The traditional bridal dressing was absolutely stunning, and the team's attention to detail was impeccable. I felt like a princess!"
    },
    {
      name: 'Tharushi S.',
      role: 'Bride 2024',
      rating: 5,
      text: 'I cannot thank the team enough for their professionalism and artistry. My makeup lasted the entire day and looked flawless in every photo. Highly recommended!'
    },
    {
      name: 'Nethmi R.',
      role: 'Bride 2023',
      rating: 5,
      text: 'From the trial session to the wedding day, everything was perfect. The team understood exactly what I wanted and brought my bridal vision to life beautifully.'
    },
    {
      name: 'Kavindi M.',
      role: 'Bride 2024',
      rating: 5,
      text: 'The best bridal experience! The staff was friendly, professional, and made me feel so comfortable. My traditional kandyan bridal look was breathtaking.'
    },
    {
      name: 'Sanduni W.',
      role: 'Bride 2023',
      rating: 5,
      text: 'Salon Udani exceeded all my expectations. The pre-wedding facial treatments gave me glowing skin, and the bridal makeup was absolutely flawless. Thank you!'
    },
    {
      name: 'Dilini A.',
      role: 'Bride 2024',
      rating: 5,
      text: 'Professional, talented, and so caring! They made sure every detail was perfect and I looked stunning on my big day. I would recommend them to every bride!'
    }
  ];

  const itemsPerView = window.innerWidth > 900 ? 3 : window.innerWidth > 600 ? 2 : 1;
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  // Auto-scroll effect
  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= maxIndex) {
          return 0; // Reset to start
        }
        return prev + 1;
      });
    }, 4000); // Change every 4 seconds

    return () => clearInterval(autoScroll);
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const getStars = (rating) => {
    return '★'.repeat(rating);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-head reveal-bounce">
          <div className="eyebrow">Testimonials</div>
          <h2>What Our Brides Say</h2>
          <p>Real stories from real brides who trusted us with their special day.</p>
        </div>

        <div className="t-track-wrap">
          <div 
            className="t-track" 
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="t-card">
                <div className="t-stars">{getStars(testimonial.rating)}</div>
                <p>"{testimonial.text}"</p>
                <div className="t-person">
                  <div className="t-avatar">{testimonial.name.charAt(0)}</div>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="t-controls">
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button onClick={handleNext} disabled={currentIndex >= maxIndex}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
