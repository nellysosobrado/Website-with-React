import React, { useContext } from 'react'
import ToggleSwitch from '../elements/ToggleSwitch'
import LinkButton from '../elements/LinkButton'
import { Link, NavLink } from 'react-router-dom'
import { DarkModeContext } from '../../contexts/DarkModeContext'

// Header section 
const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  return (
    <header id="header">
      <div className="container">

        <Link to="/" className="logotype hide-mobile">
          <img src={ darkMode ? '/images/logotype_dark.svg' : '/images/logotype_light.svg' } alt="Silicon Inc." />
        </Link>

        <nav className="hide-mobile">
          <NavLink to="/underconstruction" className="nav-link">Features</NavLink>
          <NavLink to="/underconstruction" className="nav-link">Contacts</NavLink>
        </nav>
        
        <div className="theme-switch-wrapper">
          <ToggleSwitch id="theme-switch" text={<span className="hide-darkmode-text">Dark Mode</span>} currentState={darkMode} currentStateCallback={toggleDarkMode} />
        </div>

        {/* Sign in/up button */}
        <div className="hide-mobile">
          <LinkButton to="/underconstruction" text="Sign in/up" color="purple" icon="bi bi-person" />
        </div>
        {/* Mobile menu button, only visible on mobile */}
        <div className="hide-desktop">
            <LinkButton 
                to="/underconstruction" 
                className="btn-mobilemenu" 
                icon="bi bi-list"
                minimal={true}
                text=""
            />
        </div>

      </div>
    </header>
  )
}

export default Header