import React, { useContext, useState } from 'react'
import ToggleSwitch from '../elements/ToggleSwitch'
import LinkButton from '../elements/LinkButton'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { DarkModeContext } from '../../contexts/DarkModeContext'
import { useAuth } from '../../contexts/AuthContext'

// Header section 
const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const { isLoggedIn, logout } = useAuth()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    try {
      logout()
      navigate('/', { replace: true })
      console.log('User logged out successfully')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const handleMenuClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    console.log('Menu clicked, isOpen:', !isOpen); // Debug log
  };

  console.log('Header rendering, isLoggedIn:', isLoggedIn) // Debug log

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

        {/* Auth button */}
        <div className="hide-mobile">
          {isLoggedIn ? (
            <button 
              className="btn btn-danger"
              onClick={handleLogout}
            >
              <i className="bi bi-box-arrow-right me-2"></i>
              Sign out
            </button>
          ) : (
            <LinkButton 
              to="/auth" 
              text="Sign in/up" 
              color="purple" 
              icon="bi bi-person" 
            />
          )}
        </div>

        {/* Mobile menu button with dropdown */}
        <div className="hide-desktop position-relative">
            <button 
                className="btn btn-mobilemenu"
                onClick={handleMenuClick}
            >
                <i className="bi bi-list"></i>
            </button>
            
            {isOpen && (
                <div className="dropdown-menu show position-absolute end-0 mt-2">
                    <NavLink 
                        to="/features" 
                        className={({ isActive }) => 
                            `dropdown-item ${isActive ? 'active' : ''}`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        Features
                    </NavLink>
                    <NavLink 
                        to="/contacts" 
                        className={({ isActive }) => 
                            `dropdown-item ${isActive ? 'active' : ''}`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        Contacts
                    </NavLink>
                    {isLoggedIn ? (
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                `dropdown-item text-danger ${isActive ? 'active' : ''}`
                            }
                            onClick={() => {
                                logout();
                                navigate('/');
                                setIsOpen(false);
                            }}
                        >
                            Sign out
                        </NavLink>
                    ) : (
                        <NavLink 
                            to="/auth" 
                            className={({ isActive }) => 
                                `dropdown-item ${isActive ? 'active' : ''}`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Sign in/up
                        </NavLink>
                    )}
                </div>
            )}
        </div>

      </div>
    </header>
  )
}

export default Header