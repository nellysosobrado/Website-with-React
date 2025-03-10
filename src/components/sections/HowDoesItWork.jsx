import React, { useState } from 'react'

const HowDoesItWork = () => {
    const [images, setImages] = useState([
        { id: 1, src: '/images/image-sliders/phone-1.svg', alt: 'slide 1'},
        { id: 2, src: '/images/image-sliders/phone-2.svg', alt: 'slide 2'},
        { id: 3, src: '/images/image-sliders/phone-3.svg', alt: 'slide 3'}
    ])

    return (
        <section id="how-does-it-work">
            <div class="container">
                <div class="section-title">
                    <h2>How Does It Work?</h2>
                </div>
                
                <div class="image-slider">
                    {
                        images.map(image => (
                            <div key={image.id} class="image-slide">
                                <img src={image.src} alt={image.alt} />
                            </div>
                        ))
                    }
                </div>

                <div class="section-body">
                    <h3>Latest transaction history</h3>
                    <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</p>
                </div>

            </div>
        </section>
    )
}

export default HowDoesItWork