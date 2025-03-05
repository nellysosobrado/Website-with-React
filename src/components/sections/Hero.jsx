import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section" id="hero-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-column">
            <div className="section-title">
              <h2>Manage All Your Money in One App</h2>
            </div>
            <div className="section-body">
              <p>
                We offer you a new generation of the mobile banking.
                Save, spend & manage money in your pocket.
              </p>
              <div className="info-box">
                <img src="/images/appstore.svg" alt="App Store" />
                <img src="/images/googleplay.svg" alt="Google Play" />
              </div>
              <a href="#how-does-it-work-section" className="discover-link">
                <img src="/images/discover-more-logo.svg" alt="Discover More" />
                <span>Discover more</span>
              </a>
            </div>
          </div>
          <div className="image-column">
            <img src="/images/Iphones.svg" alt="iPhones" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 