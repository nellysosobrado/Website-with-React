import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Providers from './contexts/Providers.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initiera AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
)
