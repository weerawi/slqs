import React from 'react'
import './gallery.css'
import PageTitle from '../Components/PageTitle'
import GalleryCard from '../Components/GalleryCard'
import galleryimg from '../Components/Assets/top_6.jpg'

const Gallery = () => {
  return (
    < >
        <PageTitle name="gallery" image={galleryimg}/>



        <div className='flex  '>

          <div className='   '>

            <GalleryCard/>
            <GalleryCard/>
            <GalleryCard/>
            <GalleryCard/>
            <GalleryCard/>
            <GalleryCard/>
            <GalleryCard/> 

          </div>

        </div> 

    </>
  )
}

export default Gallery