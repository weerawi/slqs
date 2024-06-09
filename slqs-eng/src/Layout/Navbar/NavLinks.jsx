import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";

const NavLinks = (props) => {
    const {isMobile} = props;
    const [openedItem, setOpenedItem] = useState("");
    const dropdownRef = useRef(null);

    const toggleDropdown = (itemName) => {
        setOpenedItem(itemName === openedItem ? "" : itemName);
    };

    const closeDropdown = () => {
        setOpenedItem("");
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            {links.map((link) => (
                <div key={link.name}>
                    <div
                        className={`px-3 text-left cursor-pointer group ${isMobile ? "w-40" : ""}`}
                        onClick={() => toggleDropdown(link.name)}
                    >
                        <h1 className="py-5 flex justify-between items-center md:pr-0 pr-3 group">
                            {link.name}
                        </h1>
                        {link.submenu && (
                            <div
                                ref={dropdownRef}
                                className={` ${isMobile ? "relative left-10 w-auto" : "absolute top-24"} transition-all duration-700
                                ${openedItem === link.name ? "h-auto opacity-100" : "h-0 opacity-0 pointer-events-none"}`}
                            >
                                <div style={{
                                    backdropFilter: 'blur(10px)',
                                    background:   'rgba(130, 3, 0, 0.8)',
                                    transition: "background 0.5s ease-in-out",
                                    boxShadow: 'inset 0px 3px 10px 0px rgba(255,255,255,0.5)'
                                }} className="bg-red-900 p-5 grid grid-cols-1 gap-2">
                                    {link.sublinks.map((sublink) => (
                                        <div key={sublink.name}>
                                            <li className="text-sm text-gray-400 hover:text-gray-200 my-1">
                                                <Link to={sublink.link} className="hover:text-primary" onClick={closeDropdown}>
                                                    {sublink.name}
                                                </Link>
                                            </li>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default NavLinks;

