import React from 'react'
import Navbar from "./Navbar/Navbar";   
 
  
const Header = () => {
  return (
    <header  >
      <section
      className="   bg-transparent   bg-cover bg-no-repeat 
      font-[Poppins] md:bg-top bg-center"
    >
      <Navbar /> 
    </section>
    </header>
  )
}

export default Header