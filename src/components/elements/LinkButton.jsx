import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({to, text, color, icon, iconAfter}) => {
  
    if (iconAfter) {
        return (
            <Link to={to} className={`btn btn-${color}`}>
                {text}
                <i className={icon}></i>
            </Link>
        )
    } else {
        return (
            <Link to={to} className={`btn btn-${color}`}>
                <i className={icon}></i>
                {text}
            </Link>
        )
    }
}

export default LinkButton