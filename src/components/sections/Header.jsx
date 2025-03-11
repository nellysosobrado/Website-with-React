import React, { useContext } from 'react'
import ToggleSwitch from '../elements/ToggleSwitch'
import LinkButton from '../elements/LinkButton'
import { Link, NavLink } from 'react-router-dom'
import { DarkModeContext } from '../../contexts/DarkModeContext'

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  return (
    <header id="header">
      <div className="container">

        <Link to="/" className="logotype hide-mobile">
          <img src={ darkMode ? '/images/logotype_dark.svg' : '/images/logotype_light.svg' } alt="Silicon Inc." />
        </Link>

        <nav className="hide-mobile">
          <NavLink to="/features" className="nav-link">Features</NavLink>
          <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
        </nav>
        
        <div className="theme-switch-wrapper">
          <ToggleSwitch id="theme-switch" text={<span className="hide-darkmode-text">Dark Mode</span>} currentState={darkMode} currentStateCallback={toggleDarkMode} />
        </div>
        
        <div className="hide-mobile">
          <LinkButton to="signin" text="Sign in/up" color="purple" icon="bi bi-person" />
        </div>
        
        <button className="btn-mobilemenu show-mobile">
          <i className="bi bi-list"></i>
        </button>

      </div>
    </header>
  )
}

export default Header