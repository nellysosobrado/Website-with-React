import React, { useContext } from 'react'
import { TestimonialsContext } from '../../contexts/TestimonalsContext'
import Testimonial from '../elements/Testimonial'

// Testimonials section
const Testimonials = () => {
  const {testimonials} = useContext(TestimonialsContext)

  return (
    <section id="client-testimonials">
      <div className="container">
          <div className="headline">
              <h2>Clients are Loving Our App</h2>
          </div>
          <div className="testimonials">
            {/* Map through the testimonials and render a Testimonial component for each */}
          {
            testimonials.map(testimonial => (<Testimonial key={testimonial.id} item={testimonial} />))
          }      

          </div>
      </div>
    </section>
  )
}

export default Testimonials