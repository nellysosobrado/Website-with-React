import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import AppStore from './pages/AppStore'
import GooglePlay from './pages/GooglePlay'
import Discover from './pages/Discover'
import Features from './pages/Features'
import Contacts from './pages/Contacts'
import NotFound from './pages/NotFound'

import Header from './components/sections/Header'
import Footer from './components/sections/Footer'

function App() {
  
  return (
    <>
      <BrowserRouter>
        
        <div className="wrapper">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/appstore" element={<AppStore />} />
              <Route path="/googleplay" element={<GooglePlay />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/features" element={<Features />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>

      </BrowserRouter>
    </>
  )
}

export default App
