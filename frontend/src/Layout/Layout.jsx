import React, { Fragment, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import bg from '../Components/Assets/bgGray.jpg'
import { useLocation } from 'react-router-dom'

const Layout = (props) => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Dependency on pathname to trigger the scroll on route change

  


    const imageStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%', 
        objectFit: 'cover',
        opacity: 0.85,
        zIndex: -1
      };

  return (
    <Fragment> 
        
        <main className='font-custom-poppin'
        //  style={{backgroundColor:'rgba(0, 0, 0, 0.4)'}}
         >
        <Header/>
        <style>
        {`
            ::selection {
            color: white;
            background-color: maroon;
            }
        `}
        </style>

      {/* We can give defualt style or changes all over the website throuhg here */}

        {/* <video  autoPlay muted loop style={videoStyle}>
          <source src={BGV} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
         <img src={bg} style={imageStyle}  alt='bg'/>           
        
        {props.children} 
      </main>
        <Footer/>
    </Fragment>
  )
}

export default Layout