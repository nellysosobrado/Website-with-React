import React, { useContext } from 'react'
import Logotype from '../elements/Logotype'
import MainNavigation from '../elements/MainNavigation'
import ToggleSwitch from '../elements/ToggleSwitch'
import { DarkModeContext } from '../../contexts/DarkModeContext'
import LinkButton from '../elements/LinkButton'

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  return (
    <header>
      <div className="container">

        <Logotype darkMode={darkMode} />
        <MainNavigation />
        <ToggleSwitch id="theme-switch" text="Dark Mode" currentState={darkMode} currentStateCallback={toggleDarkMode} />
        <LinkButton to="signin" text="sign in" color="purple" icon="bi bi-person" />

      </div>
    </header>
  )
}

export default Header