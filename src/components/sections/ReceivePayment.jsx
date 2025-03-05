import React from 'react';

const ReceivePayment = () => {
  return (
    <section id="Recieve-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="image-column">
            <img src="/images/recieve-stats.svg" alt="statistic" />
          </div>
          <div className="text-column">
            <div className="section-title">
              <h2>Receive payment from international bank details</h2>
            </div>
            <div className="section-body">
              <div className="recieve-info-boxes">
                <div className="recieve-info-box">
                  <p>
                    <img 
                      src="/images/Recieve-section/credit-card.svg" 
                      alt="Credit Card Icon"
                    /> 
                    Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. 
                    Arcu sociis tristique quisque hac in consectetur condimentum.
                  </p>
                </div>
                <div className="recieve-info-box">
                  <p>
                    <img 
                      src="/images/Recieve-section/wallet.svg" 
                      alt="Wallet Icon"
                    /> 
                    Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. 
                    Arcu sociis tristique quisque hac in consectetur condimentum.
                  </p>
                </div>
              </div>
              <a href="#" className="btn">
                learn more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReceivePayment; 