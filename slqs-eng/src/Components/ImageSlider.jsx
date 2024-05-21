import React, { useEffect, useState }  from 'react';
import slide_data from './Assets/slide_data.js';
import SimpleImageSlider from "react-simple-image-slider";
 

 

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [width, setWidth] = useState(getCustomWidth());

    // Function to calculate custom width
    function getCustomWidth() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        if(windowWidth > 1400){
            return 1000;
        }else if(windowWidth > 1000){
            return 600;
        }else if(windowWidth > 600){
            return 400;
        }else{
            return windowWidth * 0.8; // 80% of window width
        }
        
    }
    
    // Function to handle slide change
    const handleSlideChange = (index) => {
        setCurrentIndex(index);
    };
    
    // Update width when window size changes
    useEffect(() => {
        const handleResize = () => {
            setWidth(getCustomWidth());
        };
    
        window.addEventListener('resize', handleResize);
    
        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    
    return (
        <div className="flex flex-col items-center px-5 py-10">
            <SimpleImageSlider
                width={width}
                height={window.innerWidth>600 ? 600 : 300}
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


 
