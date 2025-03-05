import React, { useState, useEffect } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch('https://kyhn24.azurewebsites.net/api/faq');
        console.log('API Response:', response);
        console.log('Response headers:', response.headers);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const rawText = await response.text();
        console.log('Raw response:', rawText);
        
        try {
          const data = JSON.parse(rawText);
          console.log('Parsed data:', data);
          setFaqs(data);
          setIsLoading(false);
        } catch (parseError) {
          throw new Error(`JSON parsing error: ${parseError.message}. Raw response: ${rawText.substring(0, 100)}...`);
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="FAQS">
      <div className="container">
        <div className="content-wrapper">
          <div className="left-column">
            <div className="section-title">
              <h2>
                Any questions? 
                <br />
                Check out the FAQS
              </h2>
            </div>
            <p className="intro-text">Still have unanswered questions and need to get in touch?</p>
            <div className="info-boxes">
              <div className="info-box">
                <img src="/images/phone-logo.svg" alt="Phone Icon" />
                <p className="size">Still have questions?</p>
                <a href="#" className="link">
                  Contact us<i className="bi bi-arrow-right"></i>
                </a>
              </div>
              <div className="info-box">
                <img src="/images/whatsapp-logo.svg" alt="WhatsApp Icon" />
                <p className="size">Dont like phone calls?</p>
                <a href="#" className="link green-link">
                  Contact us <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="right-column">
            {isLoading ? (
              <div className="loading">
                <img src="/images/loading-spinner.svg" alt="Loading..." />
                <p>Laddar FAQ...</p>
              </div>
            ) : error ? (
              <div className="error">
                <p>Ett fel uppstod: {error}</p>
                <button 
                  onClick={() => {
                    setError(null);
                    setIsLoading(true);
                    fetchFAQs();
                  }}
                  className="retry-button"
                >
                  Försök igen
                </button>
              </div>
            ) : faqs.length === 0 ? (
              <div className="no-faqs">
                <p>Inga vanliga frågor tillgängliga för tillfället.</p>
              </div>
            ) : (
              <div className="faq-list">
                {faqs.map((item, index) => (
                  <div key={index} className="faq-item">
                    <div 
                      className={`faq-question ${openFAQ === index ? 'active' : ''}`}
                      onClick={() => toggleFAQ(index)}
                    >
                      <p>
                        {item.title}
                        <span className="faq-toggle-icons">
                          <img 
                            className={`arrow-down ${openFAQ === index ? 'hidden' : ''}`}
                            src="/images/arrow-down.svg" 
                            alt="Show"
                          />
                          <img 
                            className={`arrow-up ${openFAQ === index ? '' : 'hidden'}`}
                            src="/images/arrowup.svg" 
                            alt="Hide"
                          />
                        </span>
                      </p>
                    </div>
                    <div 
                      className={`faq-answer ${openFAQ === index ? 'active' : ''}`}
                      style={{
                        maxHeight: openFAQ === index ? '1000px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease-in-out'
                      }}
                    >
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 