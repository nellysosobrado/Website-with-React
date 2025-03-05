import React, { useContext } from 'react';
import { TestimonialsContext } from '../../contexts/TestimonalsContext';

const Reviews = () => {
  const { testimonials } = useContext(TestimonialsContext);

  const renderTestimonial = (testimonial) => {
    const isDisplayedAuthor = testimonial.author === "Fannie Summers" || testimonial.author === "Albert Flores";
    
    if (!isDisplayedAuthor) return null;

    const authorQuote = {
      "Fannie Summers": "Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.",
      "Albert Flores": "Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc."
    };

    const authorTitles = {
      "Fannie Summers": "Designer",
      "Albert Flores": "Developer"
    };

    return (
      <div key={testimonial.id} className="info-box">
        <img src="/images/Reviews/quotes.svg" alt="Quote marks" className="quote-marks" />
        <img src="/images/Reviews/rating.svg" alt="5 star rating" className="rating" />
        <div className="quote-text">{authorQuote[testimonial.author]}</div>
        
        <div className="info-boxes-row">
          <div className="info-box-header">
            <div className="author-info">
              <img 
                src={`/images/Reviews/${testimonial.author.split(' ')[0]}.svg`}
                alt={`${testimonial.author} icon`}
                className="author-icon"
              />
              <div className="author-details">
                <span className="author-name">{testimonial.author}</span>
                <span className="author-title">{authorTitles[testimonial.author]}</span>
              </div>
            </div>
          </div>
          <div className="info-box-content">
            <p className="testimonial-text">{testimonial.content}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="reviews-layout">
          <div className="section-title-container">
            <h2 className="section-title">Clients are Loving Our App</h2>
          </div>
          
          <div className="info-boxes-container">
            {testimonials.map(renderTestimonial)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews; 