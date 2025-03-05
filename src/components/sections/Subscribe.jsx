import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubscribe = async (event) => {
    event.preventDefault();
    setIsError(false);
    setMessage('');

    try {
      const response = await fetch('https://kyhn24.azurewebsites.net/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Något gick fel vid prenumerationen');
      }

      setMessage('Tack för din prenumeration! Du är nu registrerad.');
      setEmail('');
    } catch (error) {
      setIsError(true);
      setMessage('Ett fel uppstod. Vänligen försök igen senare.');
      console.error('Subscription error:', error);
    }
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
            {message && (
              <div id="subscribe-message" className={isError ? 'error' : 'success'}>
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe; 