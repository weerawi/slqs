import React, { useContext,  } from 'react'
import Navbar from "./Navbar/Navbar";    
import { SlqsContext } from '../Context/SlqsContext';
 
  
const Header = () => {

  const {isFixed,isScrolled} = useContext(SlqsContext);

   
  return (
    <header  

    style={{
        backdropFilter: isFixed ? 'blur(10px)':'',
        backgroundColor: !isScrolled || !isFixed ? 'transparent' : 'rgba(128, 0, 0, 0.7)',

        borderBottom: !isScrolled || !isFixed ? '' : '1px solid rgba(255,255,255, 0.55) ',
        
        transition: "background 0.5s ease-in-out",
        position:  'fixed' ,
        top: 0 , 
        // height: '4.5rem',
        zIndex: isFixed ? 100 : 1,
        width: '100%', 
      }}
    
    >
     
      <Navbar />  
    </header>
  )
}

export default Header



