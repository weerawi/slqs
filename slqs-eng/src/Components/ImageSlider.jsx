import React, { useContext, useEffect, useState } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import { SlqsContext } from '../Context/SlqsContext.jsx';

const ImageSlider = () => {
    const { allsliderimages } = useContext(SlqsContext);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [width, setWidth] = useState(getCustomWidth());
    const [currentTitle, setCurrentTitle] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        if (allsliderimages.length > 0) {
            setCurrentTitle(allsliderimages[currentIndex].title);
            setCurrentDate(allsliderimages[currentIndex].date);
            // Check if all images are loaded
            Promise.all(allsliderimages.map(image => loadImage(image.image)))
                .then(() => setImagesLoaded(true))
                .catch(err => console.error('Error loading images:', err));
        }
    }, [currentIndex, allsliderimages]);

    // Function to calculate custom width
    function getCustomWidth() {
        const windowWidth = window.innerWidth;
        if (windowWidth > 1400) {
            return 1000;
        } else if (windowWidth > 1000) {
            return 700;
        } else if (windowWidth > 600) {
            return 500;
        } else {
            return windowWidth * 0.8; // 80% of window width
        }
    }

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
    }, []);

    // Function to handle slide change
    const handleSlideChange = (index) => {
        setCurrentIndex(index - 1); // index starts from 1, adjust to 0-based index
    };

    // Function to load an image
    const loadImage = (src) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
        });
    };

    if (!imagesLoaded) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-2xl text-gray-600">Loading...</div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center px-5 py-10">
            <SimpleImageSlider
                width={width}
                height={window.innerWidth > 600 ? 600 : 300}
                images={allsliderimages.map((slide) => (
                    { url: slide.image, id: slide.id }
                ))}
                showBullets={true}
                autoPlay={true}
                autoPlayDelay={3}
                loop={true}
                onCompleteSlide={(index) => handleSlideChange(index)} // Update state on slide change
            />
            <div style={{ width: `${width}px` }} className="p-5 text-gray-100 bg-red-600 flex flex-col items-center">
                <div className="cursor-not-allowed text-xl sm:text-2xl capitalize">{currentTitle}</div>
                <div className="cursor-not-allowed text-xs sm:text-sm">{currentDate}</div>
            </div>
        </div>
    );
};

export default ImageSlider;

