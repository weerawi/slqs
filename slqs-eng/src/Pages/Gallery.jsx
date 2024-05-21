import React, { useContext } from 'react'
// import './gallery.css'
import PageTitle from '../Components/PageTitle'
import GalleryCard from '../Components/GalleryCard'
import galleryimg from '../Components/Assets/top_6.jpg'
import { SlqsContext } from '../Context/SlqsContext'

const Gallery = () => {

  const {gallery_data} = useContext(SlqsContext);

  return (
    < >
        <PageTitle name="gallery" image={galleryimg}/>


        <div className='flex items-center justify-center max-w-[1500px] mx-auto'>
          <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10  '>

                {gallery_data.map((item,i)=>{
                  return <GalleryCard key={i} id={item.id} title={item.title}  image={item.image} date={item.date} />
                })} 
                

                </div> 
        </div>

        

    </>
  )
}

export default Gallery