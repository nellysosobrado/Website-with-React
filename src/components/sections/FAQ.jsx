import React, { useState } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqItems = [
    {
      question: "Is any of my personal information stored in the App?",
      answer: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat."
    },
    {
      question: "What formats can I download my transaction history in?",
      answer: "Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum."
    },
    {
      question: "Can I schedule future transfers?",
      answer: "Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum."
    },
    {
      question: "When can I use Banking App services?",
      answer: "Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum."
    },
    {
      question: "Can I create my own password that is easy for me to remember?",
      answer: "Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum."
    },
    {
      question: "What happens if I forget or lose my password?",
      answer: "Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum."
    }
  ];

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
            <div className="faq-list">
              {faqItems.map((item, index) => (
                <div key={index} className="faq-item">
                  <div 
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <p>
                      {item.question}
                      <span className="faq-toggle-icons">
                        <img 
                          className={`arrow-down ${openFAQ === index ? 'hidden' : ''}`}
                          src="/images/arrow-down.svg" 
                          alt="Show"
                        />
                        <img 
                          className={`arrow-up ${openFAQ === index ? '' : 'hidden'}`}
                          src="/images/arrow-down.svg" 
                          alt="Hide"
                        />
                      </span>
                    </p>
                  </div>
                  <div className={`faq-answer ${openFAQ === index ? 'active' : ''}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 