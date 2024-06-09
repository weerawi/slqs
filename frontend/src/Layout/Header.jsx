import React, { useContext } from 'react'
 
import Contactbar from './Contactbar';
import Navbar from './Navbar';
import { SlqsContext } from '../Context/SlqsContext';




const Header = () => {

  const {isFixed,isScrolled} = useContext(SlqsContext);


  return (
    <div   
    style={{
      // backdropFilter: isFixed ? 'blur(10px)':'',
      // backgroundColor: !isScrolled || !isFixed ? 'transparent' : 'rgba(128, 0, 0, 0.7)',

      // borderBottom: !isScrolled || !isFixed ? '' : '1px solid rgba(255,255,255, 0.55) ',
      
      transition: "background 0.5s ease-in-out",
      position:  'fixed' ,
      top: 0 , 
      // height: '4.5rem',
      zIndex: isFixed ? 100 : 1,
      width: '100%', 
    }}
  
  >
      
      <div className="px-5 py-3 w-full lg:w-[80%] max-w-[1300px] mx-auto">

   

        <div 
        style={{
            height: !isScrolled ? '40px' : '0',    
            transition: "height 0.5s ease-in-out",
              
    
          
        }}>
            {!isScrolled&& <Contactbar/>}
        </div>

        <div 
        style={{  
            backdropFilter:isScrolled ?'blur(10px)':'',
            background:isScrolled ?'rgba(0,0,0,0.6)':'' , 
            transition: "background 0.5s ease-in-out",
             
              boxShadow: isFixed? " rgba(255,255,255, 0.55) 0px -4px 10px 0px inset":'',
          
      }}
       className={isFixed? 'my-2 py-5 rounded-full px-5' : 'py-3'}
       >
            <Navbar/>
        </div>
        
        
    </div>


    </div>
  )
}

export default Header