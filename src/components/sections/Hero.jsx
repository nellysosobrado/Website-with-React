import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section" id="hero-section" data-aos="fade-up">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-column" data-aos="fade-right" data-aos-delay="200">
            <div className="section-title" data-aos="fade-up" data-aos-delay="400">
              <h2>
                <span className="title-row">Manage All Your</span>
                <span className="title-row">Money in One App</span>
              </h2>
            </div>
            <div className="section-body" data-aos="fade-up" data-aos-delay="600">
              <p>
                <span className="body-row">We offer you a new generation of the mobile banking.</span>
                <span className="body-row">Save, spend & manage money in your pocket.</span>
              </p>
              <div className="info-box" data-aos="fade-up" data-aos-delay="800">
                <img src="/images/appstore.svg" alt="App Store" />
                <img src="/images/googleplay.svg" alt="Google Play" />
              </div>
              <a href="#how-does-it-work-section" className="discover-link" data-aos="fade-up" data-aos-delay="1000">
                <img src="/images/discover-more-logo.svg" alt="Discover More" />
                <span>Discover more</span>
              </a>
            </div>
          </div>
          <div className="image-column" data-aos="fade-left" data-aos-delay="200">
            <img src="/images/Iphones.svg" alt="iPhones" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 