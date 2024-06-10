import React, { useEffect, useState } from 'react'
import Logo from "../Components/Assets/title.png"; 
import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowDropdown } from "react-icons/io";
import MobileMenu from './MobileMenu';
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { makeStyles } from '@material-ui/core/styles'; // Import makeStyles
import Drawer from '@material-ui/core/Drawer'; // Import Drawer

// nav data
export const navData = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/aboutus' },
    { 
        name: 'Members', 
        // path: '/m', 
        submenu: true,
        sublinks: [
            { name: "Commitee", link: "/commitee" },
            { name: "Index", link: "/index" },
            { name: "Admin", link: "/admin" },
        ]
    },
    { 
        name: 'Media', 
        // path: '/b',
        submenu: true,
        sublinks: [
            { name: "Article", link: "/article" },
            { name: "CSR", link: "/csr" },
            { name: "Gallery", link: "/gallery" },
        ]
    }, 
    { name: 'contact', path: '/contactus' },
  ];

  const useStyles = makeStyles((theme) => ({
    drawer: {
      width: 250,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 250,
      background: "rgb(0,0,0 )",
    },
  }));

const Navbar = () => {

    const router = useLocation();
    const pathname = router.pathname;
    const [showSubMenu, setShowSubMenu] = useState(null); 
    const [mobileMenu, setMobileMenu] = useState(false);
    const classes = useStyles();

    const handleSubMenuToggle = (index) => {
        setShowSubMenu(showSubMenu === index ? null : index);
    };

    const handleMenuClick = (e, index) => {
        e.stopPropagation();
        handleSubMenuToggle(index);
    };

    useEffect(() => {
        const closeSubMenu = () => {
            if (showSubMenu !== null) {
                setShowSubMenu(null);
            }
        };

        window.addEventListener('click', closeSubMenu);

        return () => {
            window.removeEventListener('click', closeSubMenu);
        };
    }, [showSubMenu]);


  return (
    <div className='flex items-center justify-between text-gray-100 font-bold font-custom-poppin  '>
        <Drawer
        anchor="left" // Set the anchor to the left side
        open={mobileMenu}
        onClose={() => setMobileMenu(false)}
        classes={{
          paper: classes.drawerPaper, // Use the defined styles for the paper
        }}
        //  style={{backgroundColor: 'cyan'}}
      >
        <MobileMenu mobileclick={setMobileMenu} />
      </Drawer>
        
        {/* logo icon */}
        <div className='w-full'>
            <Link to="/" className="flex gap-4 text-sm md:text-base   items-center font-bold" >
                <img src={Logo} alt="logo" className="md:cursor-pointer  h-10 md:h-12 rounded-full " />
                <div className='w-full'>SLQS & ENG-KUWAIT</div>
                
            </Link>
        </div>
       

       {/* main navigation */}
        <div className='flex w-full justify-end md:gap-3 lg:gap-8 '>
        {navData.map((link, index) => (
            <Link

              key={index}
              className={` ${
                link.path === pathname ? 'text-red-400    ' : ''
              } uppercase group relative flex items-center   ${link.sublinks?''  :'hover:text-red-800 hover:font-semibold '}    `}
              to={link.path}
              onClick={(e) => link.sublinks && handleMenuClick(e, index)}
            >
              <div className='  hidden md:flex   '>
                <div className='relative flex items-center   px-1 '>
                  
                    <div className='relative flex items-center   px-1 '>
                      
                      <div    
                      className={`${link.path === pathname ? 'w-full text-neutral-200 font-extrabold after:w-[100%] after:transition-all after:duration-500  ' : ''}
                      text-sm group relative flex  after:absolute after:border-b-2 after:left-0  border-red-400 transition-all duration-500   gap-1  md:text-base lg:tracking-widest  
                        ${link.sublinks?'items-center'  :'items-end'}     
                        `}>
                            {link.name}
                            <div  >
                                {link.sublinks?<IoIosArrowDropdown className=' text-lg'/>:''}
                            </div> 
                            {showSubMenu === index && (
                                <div className=' absolute top-full left-0 mt-1 py-2 bg-white rounded-lg shadow-lg z-10'>
                                    {link.sublinks.map((sublink, subindex) => (
                                        <Link
                                            key={subindex}
                                            to={sublink.link}
                                            className='hover:text-red-800 hover:font-semibold block px-4 py-2 text-gray-800 hover:bg-gray-200'
                                        >
                                            {sublink.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
               
                        </div> 

                    </div> 
                  
                </div>
              </div>

               
            </Link>
          ))}
        </div>

        {/* Mobile navigatio icon start */}
        <div
            className="w-20   h-10  rounded-full flex md:hidden justify-center 
                   transition-all duration-300 items-center text-red-800 bg-gray-300 hover:bg-red-900 hover:text-gray-200 cursor-pointer hover:shadow-gray-200  shadow-red-900 shadow-md "
            onClick={() => setMobileMenu(!mobileMenu)}
        >
            {mobileMenu ? (
            <VscChromeClose className="text-xl" />
            ) : (
            <BiMenuAltRight
                className="text-xl z"
                // onClick={() => setMobileMenu(true)}
            />
            )}
        </div>
            {/* Mobile icon end */}

    </div>
  )
}

export default Navbar