import React, { useState, useEffect } from 'react'

// HowDoesItWork section
const HowDoesItWork = () => {
    // Images for the slider
    const [images, setImages] = useState([
        { id: 1, src: '/images/image-sliders/phone-1.svg', alt: 'slide 1'},
        { id: 2, src: '/images/image-sliders/phone-2.svg', alt: 'slide 2'},
        { id: 3, src: '/images/image-sliders/phone-3.svg', alt: 'slide 3'}
    ])

    // Displayed images
    const [displayedImages, setDisplayedImages] = useState(images);

    // Update displayed images based on screen size
    const updateDisplayedImages = () => {
        if (window.matchMedia('(max-width: 390px)').matches) {
            // Mobile mode (390x499): show only phone-3.svg
            const mobileImage = images.filter(image => image.src.includes('phone-3'));
            setDisplayedImages(mobileImage);
        } else {
            // Desktop (1920x876) and Tablet (768x618): show all images
            setDisplayedImages(images);
        }
    };

    // Update displayed images based on screen size
    useEffect(() => {
        updateDisplayedImages(); // Initial check
        window.addEventListener('resize', updateDisplayedImages);
        // Cleans the event listener when the component unmounts
        return () => window.removeEventListener('resize', updateDisplayedImages);
    }, []);

    return (
        <section id="how-does-it-work">
            <div className="container">
                <div className="section-title" data-aos="fade-down">
                    <h2>How Does It Work?</h2>
                </div>
                {/*Image slider, only visible on desktop*/}
                <div className="image-slider" data-aos="fade-up" data-aos-delay="200">
                    {displayedImages.map((image, index) => (
                        <div 
                            key={image.id} 
                            className="image-slide"
                            data-aos="zoom-in"
                            data-aos-delay={300 + (index * 200)}
                        >
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
                {/* Latest transaction history, only visible on desktop */}
                <div className="container">
                    <div className="section-body desktop-only" data-aos="fade-up" data-aos-delay="400">
                        <h3>Latest transaction history</h3>
                        <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. 
                           Arcu sociis tristique quisque hac in consectetur condimentum.</p>
                    </div>
                </div>
            </div>
            {/* Transfers to people from your contact list, only visible on mobile */}
            <div className="container">
                <div className="section-body mobile-only" data-aos="fade-up" data-aos-delay="400">
                    <h2>Transfers to people from your contact list</h2>
                    <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
                        Pellentesque volutpat ligula est. Mattis fermentum, at nec
                        lacus.
                    </p>
                </div>
            </div>
            {/* Step 3. Transfers to people from your contact list, only visible on tablet */}
            <div className="container">
                <div className="section-body tablet-only" data-aos="fade-up" data-aos-delay="400">
                    <h2>Step 3. Transfers to people from your contact list</h2>
                    <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
                        Pellentesque volutpat ligula est. Mattis fermentum, at nec
                        lacus.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HowDoesItWork