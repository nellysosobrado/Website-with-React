import React, { useContext} from 'react'
import ImageSlider from '../elements/ImageSlider'
import { BrandsContext } from '../../contexts/BrandsContext'

// Brands section displays the brands of the app
const Brands = () => {
  // Get the brands from the BrandsContext
  const {brands} = useContext(BrandsContext)

  return (
    <section id="brands">
        <div className="container">
          <ImageSlider images={brands} />
        </div>
    </section>

  )
}

export default Brands