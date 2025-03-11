import React, { useState, useEffect } from 'react'
import ImageSliderItem from './ImageSliderItem'

const ImageSlider = ({images}) => {
  const [displayedImages, setDisplayedImages] = useState(images);

  // Function to update images based on screen size
  const updateDisplayedImages = () => {
    if (window.matchMedia('(max-width: 390px)').matches) {
      // Mobile mode: Hide all images
      setDisplayedImages([]);
    } else if (window.matchMedia('(max-width: 768px)').matches) {
      // Tablet mode: Show only first 4 images
      const tabletImages = images.slice(0, 4);
      setDisplayedImages(tabletImages);
    } else {
      // Desktop mode: Show all images
      setDisplayedImages(images);
    }
  };

  // Listen for window resize changes
  useEffect(() => {
    updateDisplayedImages(); // Initial check
    window.addEventListener('resize', updateDisplayedImages);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateDisplayedImages);
  }, [images]);

  return (
    <div className="imageslider">
      {
        displayedImages.map(image => (
          <ImageSliderItem key={image.id} item={image} />
        ))
      }
    </div>
  )
}

export default ImageSlider

