import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import AppStore from './pages/AppStore'
import GooglePlay from './pages/GooglePlay'
import Discover from './pages/Discover'
import NotFound from './pages/NotFound'
import UnderConstruction from './pages/UnderConstruction'
import Auth from './components/pages/Auth'
import Welcome from './components/pages/Welcome'

import Header from './components/sections/Header'
import Footer from './components/sections/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { DarkModeProvider } from './contexts/DarkModeContext';

function App() {
  
  //UseEffect to init AOS library and animate the elements
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <AuthProvider> {/* this is the auth provider, a.k.a the context provider for sign in or sign up */}
      <DarkModeProvider> {/* mode to toggle darkmode or lightmode*/}
        <BrowserRouter> {/* browser router to navigate between pages */}
          <div className="wrapper"> {/* this is the wrapper for the app */}
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/appstore" element={<AppStore />} />
                <Route path="/googleplay" element={<GooglePlay />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/underconstruction" element={<UnderConstruction />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </DarkModeProvider>
    </AuthProvider>
  )
}

export default App
