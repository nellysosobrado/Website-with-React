import React from 'react'
import { Link } from 'react-router-dom'

const Logotype = ({darkMode}) => {

  return (
    <Link to="/" className="logotype">
        <img src={ darkMode ? '/images/logotype_dark.svg' : '/images/logotype_light.svg' } alt="Silicon Inc." />
    </Link>
  )
}

export default Logotype