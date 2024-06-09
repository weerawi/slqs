import React from 'react';
import homebg from './Assets/homebg.mp4'; // Importing the video file directly 
import Logo from "../Components/Assets/title.png";  


const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src={homebg} type="video/mp4" />
        {/* Add additional source tags for different video formats if necessary */}
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* Content */}
      <div className=" absolute inset-0 flex flex-col justify-center items-center text-white">
        <img src={Logo} alt="logo" className="rounded-md md:cursor-pointer h-16 my-5" />
        <div className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6  animate-pulse flex flex-col text-center">Sri Lankan Quantity Surveyors</div>
        <div className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6  animate-pulse flex flex-col text-center"> &</div>
        <div className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6  animate-pulse flex flex-col text-center"> 
          Engineers In Kuwait
        </div>
        {/* Add any additional content (buttons, links, etc.) here */}
      </div>
    </div>
  );
};

export default Hero;

