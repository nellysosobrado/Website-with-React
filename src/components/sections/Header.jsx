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

        <Link to="/" className="logotype">
          <img src={ darkMode ? '/images/logotype_dark.svg' : '/images/logotype_light.svg' } alt="Silicon Inc." />
        </Link>

        <nav>
          <NavLink to="/features" className="nav-link">Features</NavLink>
          <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
        </nav>
        
        <ToggleSwitch id="theme-switch" text="Dark Mode" currentState={darkMode} currentStateCallback={toggleDarkMode} />
        
        <LinkButton to="signin" text="sign in" color="purple" icon="bi bi-person" />

      </div>
    </header>
  )
}

export default Header