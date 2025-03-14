import React from 'react'

const StarRating = ({stars = 0}) => {
// this is the star rating component that will be used to show the rating of a product from 0 to 5
  return (
    <div className="star-rating">

    {
        [...Array(5)].map((_, i) => (
            <i key={i} className={ i < stars ? 'fa-solid fa-star' : 'fa-regular fa-star' }></i>
        ))
    }

    </div>
  )
}

export default StarRating