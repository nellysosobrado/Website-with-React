import React from 'react'
import { DarkModeProvider } from './DarkModeContext'
import { FaqProvider } from './FaqContext'
import { TestimonialsProvider } from './TestimonalsContext'

const Providers = ({children}) => {
  return (
    
    <DarkModeProvider>
        <FaqProvider>
            <TestimonialsProvider>
                
                {children}
            
            </TestimonialsProvider>
        </FaqProvider>
    </DarkModeProvider>

  )
}

export default Providers