import React from 'react'
import { Link } from 'react-router-dom'
// 
const LinkChevronButton = ({to, text}) => {
    // Function that handles click on the link
    const handleClick = (e) => {
        // Does not navigate to a new page 
        e.preventDefault();
        
        // Finds an element on the page with ID 'App-features-section'
        const element = document.getElementById('App-features-section');
        
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  
    return (
        <Link to={to} className={`btn btn-chevron`} onClick={handleClick}>
            <i className="fa-regular fa-chevron-down"></i>
            {text}
        </Link>
    )
}

export default LinkChevronButton