import React from 'react'
import {
    TiSocialLinkedin,
    TiSocialFacebook, 
    TiSocialInstagram,
  } from "react-icons/ti";
  import { MdCall, MdEmail } from "react-icons/md";

const Contactbar = () => {
  return (

    <div className="   ">

        <div className='flex justify-between w-full md:w-[80%] max-w-[1300px] mx-auto'>

            <div className='flex justify-around'>
                <a href="tel:+96550480958" 
                    className='  group p-3 gap-2   flex items-center'>
                    <MdCall className='text-xl group-hover:animate-pulse' />
                    <div className='hidden md:flex'> +965 504 80958</div>
                </a>

                <a href="mailto:secretary@slqs-eng-kuwait.org" 
                    className=' group p-3 gap-2   flex items-center'>
                    <MdEmail className='text-xl group-hover:animate-pulse'/>
                    <div className='hidden md:flex'>secretary@slqs-eng-kuwait.org</div>
                     
                </a>
            </div>

            <div className='flex items-center gap-2  justify-around'> 
                <a href="https://www.facebook.com/yourpage">
                <TiSocialFacebook className="text-2xl hover:text-blue-600" />
                </a>
                <a href="https://twitter.com/yourpage">
                <TiSocialLinkedin className="text-2xl hover:text-sky-600" />
                </a> 
                <a href="https://www.instagram.com/yourpage">
                <TiSocialInstagram className="text-2xl hover:text-pink-500" />
                </a> 
            </div>

        </div>
        
    </div>

  )
}

export default Contactbar