// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="text-center bg-black
//      text-gray-300 text-lg-start  text-muted">
//       {/* Section: Links */}
//       <section className="">
//         <div className="container text-center text-md-start  ">
//           {/* Grid row */}
//           <div className="row pt-5" data-aos="fade-up" data-aos-duration="1800">
//             {/* Grid column */}
//             <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" data-aos="zoom-in" data-aos-duration="1500">
//               {/* Content */}
//               <a className="footer-link" href="https://www.facebook.com/SLQSEngKuwait/" target="_blank">
//                 <i className="fas fa-home me-3 text-secondary"></i> Kuwait City, Kuwait
//               </a>
//             </div>
//             {/* Grid column */}

//             {/* Repeat the above structure for other columns */}

//           </div>
//           {/* Grid row */}
//         </div>
//       </section>
//       {/* Section: Links  */}

//       {/* Section: Social media */}
//       <section className="d-flex justify-content-center justify-content-center p-4 border-bottom">
//         {/* Right */}
//         <div data-aos="zoom-in" data-aos-duration="1500">
//           <ul className="social-media-list">
//             <li className="tw"><a href="https://www.facebook.com/SLQSEngKuwait/" target="_blank" className="contact-icon">
//               <i className="fa-brands fa-twitter"></i></a>
//             </li>
//             {/* Add other social media icons as required */}
//           </ul>
//         </div>
//       </section>
//       {/* Section: Social media end*/}

//       {/* Copyright section */}
//       <div id="copywrite" className="text-center p-4">
//         © 2023 Copyright:
//         <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Webi Inovation</a>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
 
import React from "react";  
import logo from "../Components/Assets/title.png"

import { MdCall, MdEmail ,MdLocationOn} from "react-icons/md";

import {
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

 
const Footer = () => {
    return (
        <footer 
         className="bg-black  text-gray-200 pt-8 mt-16 pb-3 relative  ">

        <svg 
          className="absolute top-0 w-full h-5 -mt-4  lg:-mt-8 lg:h-8   sm:-mt-6 sm:h-6 text-black  "
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path  
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>

 

      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className=" flex justify-between max-w-[1000px] mx-auto">
           
             
            <div className="md:flex justify-between items-center hidden ">
              <div>
                <img src={logo} className="rounded-md" alt="" width={50}/>
              </div>
              
              
               
            </div>


            <div className="">
              <div>
                <a href="tel:+96550480958" 
                  className='rounded-2xl group p-3 gap-2 w-96 flex items-center'>
                  <MdCall className='text-xl group-hover:animate-pulse' /> +965 504 80958
                </a>

                <a href="mailto:secretary@slqs-eng-kuwait.org" 
                  className='rounded-2xl group p-3 gap-2 w-96 flex items-center'>
                  <MdEmail className='text-xl group-hover:animate-pulse'/> secretary@slqs-eng-kuwait.org
                </a>
                <a href="https://www.google.com/maps?q=Kuwait+City,+Kuwait" target="_blank" rel="noopener noreferrer" 
                className='rounded-2xl group p-3 gap-2 w-96 flex items-center'>
                  <MdLocationOn className='text-2xl group-hover:animate-pulse'/> Kuwait City, Kuwait
                </a>

                <div className="flex items-center mt-4 text-xl space-x-4 sm:mt-0 p-3">

                {/* <div className="flex gap-4 pt-3 text-xl"> */}
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
            
          
        </div>
        <div className="flex flex-col justify-center pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2024 Slqs-eng. All rights reserved.
          </p>
          
        </div>
      </div>

            
        </footer>
    );
};

export default Footer;