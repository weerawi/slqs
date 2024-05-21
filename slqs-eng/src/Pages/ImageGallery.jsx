import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { SlqsContext } from '../Context/SlqsContext';

const ImageGallery = () => {

    const { csrId,galleryId } = useParams();
    const { csr_data,gallery_data } = useContext(SlqsContext);
    const csr = csr_data.find((e) => e.id === Number(csrId));
    const gallery = gallery_data.find((e) => e.id === Number(galleryId));

      
    if (csrId && !csr) {
        return <div>CSR item not found</div>;
    }
    if(galleryId && !gallery) {
        return <div>CSR item not found</div>;
    }

    return (
        <div>

          {csr && 
          <div>
            <h1>{csr.title}</h1>
          <p>{csr.stitle}</p>
          <div className="album">
            {csr.album.map((image, index) => (
              <img key={index} width={500} src={image} alt={`Album image ${index + 1}`} />
            ))}
          </div>
          </div>
          
          }

        {gallery && 
          <div>
            <h1>{gallery.title}</h1> 
          <div className="album">
            {gallery.album.map((image, index) => (
              <img key={index} width={500} src={image} alt={`Album image ${index + 1}`} />
            ))}
          </div>
          </div>
          
          }


        </div>
      );
    }
    
    export default ImageGallery;