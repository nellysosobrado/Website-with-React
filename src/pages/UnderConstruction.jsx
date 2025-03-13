import React from 'react'
import { Link } from 'react-router-dom'
// UnderConstruction page displays when a page is under construction
function UnderConstruction() {
    return (
        <div className="container under-construction">
            <div className="content">
                
                <h1>Under Construction</h1>
                <p>We're working hard to improve this page. Please check back soon!</p>
                <div className="estimated-time">
                    <p>Expected completion: Coming Soon</p>
                </div>
                <Link to="/" className="back-link">
                    <i className="bi bi-arrow-left"></i> Back to Home
                </Link>
            </div>
        </div>
    )
}

export default UnderConstruction 