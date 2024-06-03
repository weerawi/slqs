import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { SlqsContext } from '../Context/SlqsContext';
import PageTitle from '../Components/PageTitle'
import galleryimg from '../Components/Assets/sri_lanka.jpg'

const ImageGallery = () => {

    const { csrId,galleryId } = useParams();
    const {  csrallproducts,galallproducts } = useContext(SlqsContext);
    const csr = csrallproducts.find((e) => e.id === Number(csrId));
    const gallery = galallproducts.find((e) => e.id === Number(galleryId));

      
    if (csrId && !csr) {
        return <div>CSR item not found</div>;
    }
    if(galleryId && !gallery) {
        return <div>CSR item not found</div>;
    }

    return (
 
      <>

        <PageTitle  name="Images" iamge={galleryimg}/>

        <div className='flex items-center justify-center mx-auto '>

          {csr && 
          <div >
            <h1>{csr.title}</h1>
          <p>{csr.stitle}</p>
          <div className="album grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 w-full h-full ">
            {csr.album.map((image, index) => (
              <img key={index} width={500} height={500} src={image} alt={`Album image ${index + 1}`} />
            ))}
          </div>
          </div>
          
          }

        {gallery && 
          <div >
            <h1>{gallery.title}</h1> 
          <div className="album grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 w-full h-full  ">
            {gallery.album.map((image, index) => (
              <img key={index} width={500} height={500}  src={image} alt={`Album image ${index + 1}`} />
            ))}
          </div>
          </div>
          
          }


        </div>
      
      </>

      );
    }
    
    export default ImageGallery;