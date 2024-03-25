import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/title.png"; 
import NavLinks from "./NavLinks";  
import { RiCloseFill, RiMenuFill } from "react-icons/ri";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => {
      setOpen(false);
    };

    // Add event listener to handle clicks outside the menu
    document.addEventListener("click", closeMenu);

    return () => {
      // Clean up event listener
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  const toggleMenu = (e) => {
    // Prevent propagation to parent elements to avoid closing the menu
    e.stopPropagation();
    setOpen(!open);
  };

  const closeMenuOnClick = () => {
    setOpen(false);
  };

  return (
    <nav className="bg-red-500 backdrop-blur-3xl text-white z-10 relative">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            <Link to="/"  >
               <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
            </Link>
           
            <div className="text-3xl md:hidden" onClick={toggleMenu}>
            {open ? <RiCloseFill /> : <RiMenuFill />}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]  ">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="py-7 px-3 inline-block">
              About US
            </Link>
          </li>
          <NavLinks   onClick={closeMenuOnClick}/>
          <li>
            <Link to="/contactus" className="py-7 px-3 inline-block">
              Contact US
            </Link>
          </li>
        </ul> 
        {/* Mobile nav */}
        <ul
          className={` h-[100vh] overflow-y-hidden  
        md:hidden bg-black fixed w-full top-0   bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-5 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="py-5 px-3 inline-block">
              About US
            </Link>
          </li> 
          <NavLinks  onClick={closeMenuOnClick}  isMobile={open} />
          <li>
            <Link to="/contactus" className="py-5 px-3 inline-block">
              Contact US
            </Link>
          </li> 
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;