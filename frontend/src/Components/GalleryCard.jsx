import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GalleryCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
    data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"
     className='hover:scale-105 transition-all duration-500 pb-10 '>
      <div 
        className={`w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 hover:scale-105 transition-all duration-500 rounded-xl   ${isHovered ? 'shadow-lg' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          boxShadow: isHovered 
            ? 'rgba(130, 0, 0, 0.4) 5px 5px, rgba(130, 0, 0, 0.3) 10px 10px, rgba(130, 0, 0, 0.2) 15px 15px, rgba(130, 0, 0, 0.1) 20px 20px, rgba(130, 0, 0, 0.05) 25px 25px' 
            : 'rgba(130, 0, 0, 0.8) 5px 5px 10px'
        }}
      >
        <Link to={`/gallery/${props.id}`}>
          <img className="  rounded-xl w-full h-full object-cover" src={props.image} alt="Image" />
          
          
          
        </Link>
      </div>
    </div>
  );
}

export default GalleryCard;
