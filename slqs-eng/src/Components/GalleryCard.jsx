import React from 'react'
import img from '../Components/Assets/slider4.jpg'

const GalleryCard = () => {
  return (
    <div>
        
        <main className="main">
      <div className="grid image-grid">
        
          <div   className="col-12 col-md-6 col-lg-6 grid-block">
            <div className="tile">
              <a className="tile-link" data-fancybox="images" href={`./admin `}>
                <img className="tile-img" src={img} loading="lazy" alt="Image" />
              </a>
            </div>
          </div> 
      </div>
    </main>

    </div>
  )
}

export default GalleryCard