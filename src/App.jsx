import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import AppStore from './pages/AppStore'
import GooglePlay from './pages/GooglePlay'
import Discover from './pages/Discover'
import Features from './pages/Features'
import Contacts from './pages/Contacts'
import NotFound from './pages/NotFound'
import UnderConstruction from './pages/UnderConstruction'

import Header from './components/sections/Header'
import Footer from './components/sections/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  
  // Initiera AOS i useEffect
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

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
              <Route path="/features" element={<UnderConstruction />} />
              <Route path="/contacts" element={<UnderConstruction />} />
              <Route path="/underconstruction" element={<UnderConstruction />} />
              {/* Notfound route displays when a page is not found */}
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
