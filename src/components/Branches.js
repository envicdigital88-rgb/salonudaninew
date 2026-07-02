import React from 'react';

const Branches = () => {
  const branches = [
    {
      name: 'Salon Udani - Yakkala',
      address: 'No.2 Colombo Road, Yakkala 11870',
      phone: '+94 70 293 3408',
      whatsapp: '+94702933408',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0!2d80.0333894!3d7.0862106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4d94c2ae6292117%3A0x74f84d5c40bae726!2sSalon%20Udani%20Gampaha!5e0!3m2!1sen!2slk!4v1234567890',
      directionsUrl: 'https://www.google.com/maps/dir//Salon+Udani+Gampaha,+No.2+Colombo+Road,+Yakkala+11870/@6.8648649,79.8880466,14z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0xa4d94c2ae6292117:0x74f84d5c40bae726!2m2!1d80.0333894!2d7.0862106?entry=ttu'
    },
    {
      name: 'Salon Udani - Warakapola',
      address: 'A1, Ambepussa 11212',
      phone: '+94 70 293 3408',
      whatsapp: '+94702933408',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0!2d80.2!3d7.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTInMDAuMCJOIDgwwrAxMicwMC4wIkU!5e0!3m2!1sen!2slk!4v1234567890',
      directionsUrl: 'https://www.google.com/maps/dir/A1/Salon+Udani,+A1,+Ambepussa+11212/@7.2202959,80.1692409,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3ae25918f29ca3c3:0xb3a20749b4ed4ce5!2m2!1d80.1712976!2d7.2014959!1m5!1m1!1s0x3ae31b2b166f4265:0xeb0ba1ec3839755f!2m2!1d80.2082885!2d7.2390969?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

  return (
    <section className="branches" id="branches">
      <div className="container">
        <div className="section-head reveal-blur">
          <div className="eyebrow">Visit Us</div>
          <h2>Our Two Luxury Branches</h2>
          <p>Visit us at either of our conveniently located branches in Yakkala and Warakapola.</p>
        </div>

        <div className="branches-grid">
          {branches.map((branch, index) => (
            <div key={index} className="branch-card reveal-flip" style={{ '--i': index }}>
              <div className="branch-map-container">
                <iframe
                  src={branch.mapEmbedUrl}
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${branch.name} Map`}
                ></iframe>
              </div>
              <div className="branch-body">
                <h3>{branch.name}</h3>
                <p>{branch.address}</p>
                <div className="branch-actions">
                  <a href={`tel:${branch.phone}`}>
                    <i className="fa-solid fa-phone"></i> Call
                  </a>
                  <a href={`https://wa.me/${branch.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-whatsapp"></i> WhatsApp
                  </a>
                  <a href={branch.directionsUrl} target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-location-arrow"></i> Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
