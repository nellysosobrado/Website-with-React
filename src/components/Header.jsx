import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import logo from '/images/siliconlogo.svg';

const Header = () => {
  const context = useApp();

  useEffect(() => {
    if (context.darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [context.darkMode]);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img id="logo-image" src={logo} alt="Silicon Inc." />
          <span>Silicon</span>
        </div>

        <nav className="main-nav">
          <a href="#">Features</a>
          <a href="#">Contact</a>
        </nav>

        <div className="darkmode">
          <div className="toggle-switch">
            <label className="switch-label" htmlFor="darkmode-switch">
              Dark mode
            </label>
            <label className="switch">
              <input
                id="darkmode-switch"
                type="checkbox"
                onChange={() => context.setDarkMode(!context.darkMode)}
                checked={context.darkMode}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        <a 
          href="#" 
          className="btn account-link" 
          onClick={(e) => {
            e.preventDefault();
            context.setIsRegistrationModalOpen(true);
          }}
        >
          <i className="bi bi-person"></i>
          <span>Sign in/up</span>
        </a>

        <button className="hamburger-button">
          <i className="bi bi-list"></i>
        </button>
      </div>
    </header>
  );
};

export default Header; 