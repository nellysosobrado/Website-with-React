import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-does-it-work-section">
      <div className="container">
        <div className="section-title">
          <h2>How does it work?</h2>
        </div>

        <div className="image-slider">
          <div className="image-slide">
            <img src="/images/image-sliders/Phone1.svg" alt="Phone1" />
          </div>
          <div className="image-slide">
            <img src="/images/image-sliders/Phone2.svg" alt="Phone2" />
          </div>
          <div className="image-slide">
            <img src="/images/image-sliders/Phone3.svg" alt="Phone3" />
          </div>
        </div>
        
        <div className="section-body">
          <h3>Latest transaction history</h3>
          <p>
            Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. 
            Arcu sociis tristique quisque hac in consectetur condimentum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 