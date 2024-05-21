import React from 'react'
import Hero from '../Components/Hero'
import ImageSlider from '../Components/ImageSlider'
import bgimage from '../Components/Assets/img_6.jpg'
import Typewriter from 'typewriter-effect';


const Home = () => {
  return (
    <div >
      
      <Hero/>

      
      <div className='h-[50vh] flex items-center justify-center m-0 p-0'
      style={{
        backgroundImage:`url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundAttachment:'fixed',
        
      }}
      >

      <div className='w-full h-full  flex items-center justify-center'  
        style={{
          background:'rgba(0,0,0,0.5)'
        }}
      >

<div className='flex flex-col items-center font-semibold 
        
        '> 
            <div className='py-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl  text-white   '>
              <Typewriter
                options={{
                  strings: ['WELCOME TO SLQS & ENG-KUWAIT', ],
                  autoStart: true,
                  pauseFor: 2000,
                  loop: true,
                }}
              />
            </div>
            <div className='text-white text-xs sm:text-sm  md:text-lg lg:text-xl'>EACH DAY ON THIS ISLAND PROMISES NEW EXPERIENCES</div>
            
        
        </div>
      </div>
        
      </div>
      <ImageSlider/>

    </div>
  )
}

export default Home