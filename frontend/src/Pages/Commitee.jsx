import React from 'react'; 
import {
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import { LiaAngleDoubleUpSolid } from "react-icons/lia";
import profile from '../Components/Assets/profile.png'
import PageTitle from '../Components/PageTitle';
import committeeimg from '../Components/Assets/top_1.jpg'


function Committee() {
  return (
    <> 

    <PageTitle name='commitee' image={committeeimg}/>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-20"> 

      {teamMembers.map((member, index) => (<div key={index}
      className="container mx-auto  flex justify-center my-10  relative"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >


     <div style={{
      backgroundImage:`url(${profile})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
     }} className='w-[250px] h-[250px]'> 

     <div className=''>

        <div>
        {member.name}

        </div>
        <div>
        {member.position}
        </div>
        
     </div>

     </div>
      {/* <div
        className="  transform transition-transform duration-500   cursor-pointer shadow-gray-600 shadow-lg rounded-full overflow-hidden 
        w-[250px] h-[250px] "
      >
         
        <img className='bg-gray-200' src={profile} alt='account'   />          
        <div
          className={`  absolute text-gray-600 bg-white bg-opacity-60 backdrop-blur-md h-64 hover:h-72 pt-[5%] px-5 flex flex-col items-center  
        w-full transition-all duration-1000  bottom-[-155px] hover:bottom-[-35px] shadow-inner border-t border-white border-opacity-60   `}
        >
          <div className="text-xl pt-1">
            <LiaAngleDoubleUpSolid />
          </div>
          <div className="flex  ">
            <h4
              className=" tracking-wider text-center font-semibold transition-transform duration-600 opacity-100 transform translate-y-0 delay-200 pt-2 
            text-sm md:text-LG   "
            >
              {member.name}
            </h4>
          </div>
          <div className="flex pt-6 ">
            <h4
              className=" tracking-wider text-center transition-transform duration-600 font-medium  opacity-100 transform translate-y-0 delay-200 pt-2 
            text-xs md:text-LG   "
            >
              {member.position}
            </h4>
          </div>

          <div className="flex gap-4 pt-3 text-xl">
            <a href="https://www.facebook.com/yourpage">
              <TiSocialFacebook />
            </a>
            <a href="https://twitter.com/yourpage">
              <TiSocialLinkedin />
            </a>
            <a href="https://twitter.com/yourpage">
              <TiSocialTwitter />
            </a>
            <a href="https://www.instagram.com/yourpage">
              <TiSocialInstagram />
            </a>
          </div>
        </div>
      </div> */}
    </div>
  ))}

 </div>
    
</>
  );
}

const teamMembers = [
  { name: 'SURANGA ALAHAKOON', position: 'President' },
  { name: 'Hiran shanuka', position: 'General Secretary' },
  { name: 'p. prasanna', position: 'Treasurer' },
  { name: 'kavinda wijesinghe', position: 'Deputy President' },
  { name: 'duminda wijesiri', position: 'Deputy Secretary' },
  { name: 'mohammed akram', position: 'Deputy Treasurer' }
];

export default Committee;