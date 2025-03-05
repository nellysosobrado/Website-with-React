import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import HomePage from './pages/HomePage';
import "./index.css";
import { Routes, Route } from 'react-router-dom';
import Feature from './pages/Feature';
import MainNavigation from './components/elements/MainNavigation';
import Contacts from './pages/Contacts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaqProvider } from './contexts/FaqContext'

const App = () => {
  // Initiera AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <BrowserRouter>
      <AppProvider>
        <FaqProvider>
          <div className="app">
            <MainNavigation />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/feature" element={<Feature />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </div>
        </FaqProvider>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
