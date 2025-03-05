import React from 'react'
import { DarkModeProvider } from './DarkModeContext'
import { FaqProvider } from './FaqContext'
import { TestimonialsProvider } from './TestimonalsContext'
import { SubscribeProvider } from './SubscribeContext'

const Providers = ({children}) => {
  return (
    
    <DarkModeProvider>
        <FaqProvider>
            <TestimonialsProvider>
                <SubscribeProvider>
                    {children}
                </SubscribeProvider>
            </TestimonialsProvider>
        </FaqProvider>
    </DarkModeProvider>

  )
}

export default Providers