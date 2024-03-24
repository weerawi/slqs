import React from 'react';
import homebg from './Assets/homebg.mp4'; // Importing the video file directly

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
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">Your Heading</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">Your Subheading</p>
        {/* Add any additional content (buttons, links, etc.) here */}
      </div>
    </div>
  );
};

export default Hero;

