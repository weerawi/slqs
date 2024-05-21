import React from 'react' 
import { Link } from 'react-router-dom'

const GalleryCard = (props) => {
  return (
    <div>
        
        
              <Link to={`/gallery/${props.id}`} className=" "   >
                <img className="w-60 h-100" src={props.image}  alt="Image" />
              </Link>
           

    </div>
  )
}

export default GalleryCard