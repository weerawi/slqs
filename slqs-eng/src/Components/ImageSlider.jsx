import React, { useState }  from 'react';
import slide_data from './Assets/slide_data.js';
import SimpleImageSlider from "react-simple-image-slider";
 

 

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

    // Function to handle slide change
    const handleSlideChange = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="flex flex-col items-center my-10">
            <SimpleImageSlider
                width={896}
                height={504}
                images={slide_data.map((slide) => (
                    slide ? { url: slide.image, id: slide.id } : null
                ))}
                showBullets={true} 
                autoPlay={true}
                autoPlayDelay={3}
                loop={true}
                onChange={(index) => handleSlideChange(index)} // Add onChange event handler
            />
            <div>
                <div>{slide_data[currentIndex].title}</div>
            </div>
        </div>
    );
};

export default ImageSlider;


 
