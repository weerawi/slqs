import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import bg from '../Components/Assets/bgGray.jpg'

const Layout = (props) => {

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
        <Header/>
        <main 
        //  style={{backgroundColor:'rgba(0, 0, 0, 0.4)'}}
         >

        <style>
        {`
            ::selection {
            color: black;
            background-color: cyan;
            }
        `}
        </style>

      {/* We can give defualt style or changes all over the website throuhg here */}

        {/* <video  autoPlay muted loop style={videoStyle}>
          <source src={BGV} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
         {/* <img src={bg} style={imageStyle}  />             */}
        
        {props.children}
      </main>
        <Footer/>
    </Fragment>
  )
}

export default Layout