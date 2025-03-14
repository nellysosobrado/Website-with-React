import React from 'react'
import { Link } from 'react-router-dom'
// Link chevron button component it will be used to link to a page and show a chevron icon
const LinkChevronButton = ({to, text}) => {
    // Function that handles click on the link
    const handleClick = (e) => {
        // Makes it so it does not navigate to a new page 
        e.preventDefault();
        
        // Finds an element on the page with ID 'App-features-section'
        const element = document.getElementById('App-features-section');
        
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
//   this is the button that will be used to link to a page and show a chevron icon
    return (
        <Link to={to} className={`btn btn-chevron`} onClick={handleClick}>
            <i className="fa-regular fa-chevron-down"></i>
            {text}
        </Link>
    )
}

export default LinkChevronButton