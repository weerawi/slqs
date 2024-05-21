import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar/Navbar";   
 
  
const Header = () => {

    const [isFixed, setIsFixed] = useState(false); 
    const [isScrolled, setIsScrolled] = useState(false);
  

   

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        setIsFixed(true);
      } else {
        setIsScrolled(false);
        setIsFixed(false);
      }
    
       
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

//   const colorStyle = {
//     color:!isScrolled || !isFixed ? ' ' : '  rgba(255, 255, 255, 0.55) ',// Set the color based on isScrolled and isFixed states
//   };
  return (
    <header  

    style={{
        backdropFilter: 'blur(10px)',

        borderBottom: !isScrolled || !isFixed ? '1px solid rgba(255, 255, 255, 0.45)' : '1px solid rgba(255, 255, 255, 0.25) ',
        
        transition: "background 0.5s ease-in-out",
        position: isFixed ? 'fixed' : 'relative',
        // top: isFixed ? '0' : 'auto', 
        // height: '4.5rem',
        zIndex:100,
        width: '100%', 
      }}
    
    >
       
      <Navbar />  
    </header>
  )
}

export default Header



