import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowDropdown } from "react-icons/io";

import Logo from "../Components/Assets/title.png"; 

const navData = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/aboutus' },
    { 
        name: 'Members', 
        submenu: true,
        sublinks: [
            { name: "Commitee", link: "/commitee" },
            { name: "Index", link: "/index" },
            { name: "Admin", link: "/admin" },
        ]
    },
    { 
        name: 'Media', 
        submenu: true,
        sublinks: [
            { name: "Article", link: "/article" },
            { name: "CSR", link: "/csr" },
            { name: "Gallery", link: "/gallery" },
        ]
    }, 
    { name: 'contact', path: '/contactus' },
];

const MobileMenu = ({ mobileclick }) => {
    const router = useLocation();
    const pathname = router.pathname;
    const [showSubMenu, setShowSubMenu] = useState(null);
    const [submenuHeights, setSubmenuHeights] = useState({});
    const submenuRefs = useRef([]);

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

    useEffect(() => {
        const heights = {};
        submenuRefs.current.forEach((ref, index) => {
            if (ref) {
                heights[index] = ref.scrollHeight;
            }
        });
        setSubmenuHeights(heights);
    }, [submenuRefs.current]);

    const submenuStyles = (index) => ({
        overflow: 'hidden',
        maxHeight: showSubMenu === index ? `${submenuHeights[index]}px` : '0',
        transition: 'max-height 0.5s ease-in-out',
    });

    return (
        <div className='text-white pt-5'>

            {/* logo icon */}
        <div className='w-full py-8'>
            <Link to="/" className="flex gap-4 text-sm md:text-base   items-center font-bold" >
                <img src={Logo} alt="logo" className="md:cursor-pointer  h-10 md:h-12 rounded-full " />
                <div className='w-full'>SLQS & ENG-KUWAIT</div>
                
            </Link>
        </div>

            <div className='space-y-9 flex flex-col w-full justify-end'>
                {navData.map((link, index) => (
                    <div key={index}>
                        <Link
                            className={` ${link.path === pathname ? 'text-red-400' : ''} uppercase group relative flex items-center ${link.sublinks ? '' : 'hover:text-red-800 hover:font-semibold'}`}
                            to={link.path}
                            onClick={(e) => {
                                if (link.sublinks) {
                                    handleMenuClick(e, index);
                                } else {
                                    mobileclick(false);
                                }
                            }}
                        >
                            <div className='flex'>
                                <div className='relative flex items-center px-1'>
                                    <div className='relative flex items-center px-1'>
                                        <div className={`${link.path === pathname ? ' w-full text-neutral-200 font-extrabold after:w-[100%] after:transition-all after:duration-500' : ''} text-sm group relative flex after:absolute after:border-b-2 after:left-0 border-red-400 transition-all duration-500 gap-1 tracking-widest ${link.sublinks ? 'items-center' : 'items-end'}`}>
                                            {link.name}
                                            <div>
                                                {link.sublinks ? <IoIosArrowDropdown className='text-lg' /> : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        {link.sublinks && (
                            <div className='divide-y-2 font-custom-robot' ref={(el) => (submenuRefs.current[index] = el)} style={submenuStyles(index)}>
                                {link.sublinks.map((sublink, subindex) => (
                                    <Link
                                        key={subindex}
                                        to={sublink.link}
                                        className='  text-gray-200 hover:text-red-800 hover:font-semibold block px-4 py-2  hover:bg-gray-200'
                                        onClick={() => mobileclick(false)}
                                    >
                                        {sublink.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileMenu;


