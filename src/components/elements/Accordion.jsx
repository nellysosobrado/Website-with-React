import React, { useContext } from 'react'
import AccordionItem from './AccordionItem'
import { FaqContext } from '../../contexts/FaqContext'

// Accordion component that renders a list of items with a title and content
const Accordion = () => {
    const { faqs } = useContext(FaqContext)

    return (
        <div className="accordion" id="faq-accordion">

            {
                faqs.map(faq => (<AccordionItem key={faq.id} parent="faq-accordion" item={faq} /> ))
            }     

        </div>
    )
}

export default Accordion