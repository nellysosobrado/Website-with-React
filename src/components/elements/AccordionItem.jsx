import React from 'react'

// Accordion item component
const AccordionItem = ({parent, item}) => {
  return (
    <div className="accordion-item">
        <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#faq-${item.id}`} aria-expanded="false" aria-controls={`faq-${item.id}`}>
                {item.title}
            </button>
        </h2>
        <div id={`faq-${item.id}`} className="accordion-collapse collapse" data-bs-parent={`#${parent}`}>
            <div className="accordion-body">
                {item.content}
            </div>
        </div>
    </div>
  )
}

export default AccordionItem