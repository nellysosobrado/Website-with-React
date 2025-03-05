import React from 'react';

const Reviews = () => {
  return (
    <section id="reviews">
      <div className="container">
        <div className="text-column">
          <div className="section-title">
            <h2>Clients are loving Our App</h2>
          </div>
          <div className="section-body">
            <div className="review-images">
              <img 
                src="/images/review1.svg" 
                alt="review1" 
                className="review-img"
              />
              <img 
                src="/images/albert-review.svg" 
                alt="review2" 
                className="review-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews; 