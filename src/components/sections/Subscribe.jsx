import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = (event) => {
    event.preventDefault();
    // Här kan du implementera prenumerationslogiken
    setMessage('Tack för din prenumeration!');
    setEmail('');
  };

  return (
    <section id="Subscribe-section">
      <div className="container">
        <div className="column">
          <div className="subscribe-header">
            <img src="/images/bell-logo.svg" alt="notification bell" />
            <h2>Subscribe to our newsletter to stay informed about latest updates</h2>
          </div>
        </div>
        <div className="column">
          <form id="subscribe-form" onSubmit={handleSubscribe}>
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                placeholder="✉ Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit" className="btn">
                Subscribe <i className="bi bi-arrow-right"></i>
              </button>
            </div>
            {message && <div id="subscribe-message">{message}</div>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe; 