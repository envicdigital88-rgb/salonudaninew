import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`preloader ${!isLoading ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="preloader-logo">
          <img src="/images/logo/Logo.jpg" alt="Salon Udani" />
        </div>
        <div className="preloader-spinner">
          <div className="spinner-ring"></div>
        </div>
        <p className="preloader-text">Creating Beauty</p>
      </div>
    </div>
  );
};

export default Preloader;
