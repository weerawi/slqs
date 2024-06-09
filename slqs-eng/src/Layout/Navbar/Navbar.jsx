 
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Components/Assets/title.png"; 
import NavLinks from "./NavLinks";  
import { RiCloseFill, RiMenuFill } from "react-icons/ri";
import Contactbar from "./Contactbar";
import { SlqsContext } from "../../Context/SlqsContext";

const Navbar = () => {
    const {isFixed,isScrolled} = useContext(SlqsContext);
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
        <nav className="z-10 text-gray-100 relative transition-all w-auto"
            style={{ 
                boxShadow: isFixed? " rgba(255,255,255, 0.55) 0px -4px 10px 0px inset":'',
            }}
        >

            <div style={{
                height: !isScrolled ? '40px' : '0',    
                transition: "height 0.5s ease-in-out",
            }}>
                {!isScrolled&& <Contactbar/>}
            </div>

            <div className="flex items-center font-medium justify-around">

                <div className="z-50 p-5 md:w-auto w-full flex justify-between">
                    <Link to="/" className="flex gap-4 md:text-sm lg:text-base items-center font-bold" >
                        <img src={Logo} alt="logo" className="md:cursor-pointer h-9 rounded-md" />
                        SLQS & ENG-KUWAIT
                    </Link>

                    <div className="text-3xl md:hidden" onClick={toggleMenu}>
                        {open ? <RiCloseFill /> : <RiMenuFill />}
                    </div>
                </div>
                <ul className="md:flex md:text-sm lg:text-base hidden uppercase items-center gap-8 font-custom-poppin ">
                    <li>
                        <Link to="/" className="py-7 px-3 inline-block hover:font-bold  ">
                            Home 
                        </Link>
                    </li>
                    <li>
                        <Link to="/aboutus" className="py-7 px-3 inline-block hover:font-bold">
                            About US
                        </Link>
                    </li>
                    <NavLinks   onClick={closeMenuOnClick}/>
                    <li>
                        <Link to="/contactus" className="py-7 px-3 inline-block hover:font-bold">
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
