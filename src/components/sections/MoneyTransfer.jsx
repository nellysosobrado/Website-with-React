import React from 'react';

const MoneyTransfer = () => {
  return (
    <section id="money-transfer-section">
      <div className="container">
        <div className="column">
          <div className="section-title">
            <h2>Make your money transfer simple and safe</h2>
          </div>
          <div className="section-body">
            <ul className="feature-list">
              <li className="feature-list-item">
                <img 
                  className="feature-icon" 
                  src="/images/bx-check-circle.svg" 
                  alt="Check"
                /> 
                <span className="feature-text">
                  Banking transactions are free for you
                </span>
              </li>
              <li className="feature-list-item">
                <img 
                  className="feature-icon" 
                  src="/images/bx-check-circle.svg" 
                  alt="Check"
                /> 
                <span className="feature-text">
                  No monthly cash commission
                </span>
              </li>
              <li className="feature-list-item">
                <img 
                  className="feature-icon" 
                  src="/images/bx-check-circle.svg" 
                  alt="Check"
                /> 
                <span className="feature-text">
                  Manage payments and transactions online
                </span>
              </li>
            </ul>
            <a href="#" className="btn">
              learn more <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="column">
          <img 
            src="/images/transfer-statistic.svg" 
            alt="statistic"
          />
        </div>
      </div>
    </section>
  );
};

export default MoneyTransfer; 