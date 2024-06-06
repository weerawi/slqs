import {Link} from 'react-router-dom';
import add_product_icon from '../assets/Product_Cart.svg';
import list_product_icon from '../assets/Product_list_icon.svg';
import { IoIosAlbums } from "react-icons/io";
import { GrGallery } from "react-icons/gr";
import { FaListAlt,FaList,FaThList  } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";
import { IoIosImage } from "react-icons/io";
import { RiImageAddFill } from "react-icons/ri";
import { RiUserAddFill } from "react-icons/ri";
import { PiUserListFill } from "react-icons/pi";
import { BiSolidContact } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="fle flex-col pt-7   w-[100%] max-w-[250px] min-h-screen h-auto bg-red-900">
        <Link to={'/csraddproduct'} >
            <div className="sidebar-item flex items-center   my-5 mx-5 py-2 px-3 gap-3 rounded-3xl bg-gray-50 cursor-pointer">
                <IoIosAlbums className='text-2xl'/>
                <p>Add CSR Album</p>
            </div>
        </Link>

        <Link to={'/csrlistproduct'} >
            <div className="sidebar-item flex items-center   my-5 mx-5 py-2 px-3 gap-3 rounded-3xl bg-gray-50 cursor-pointer">
            <FaListAlt className='text-2xl'/>
                <p>CSR List </p>
            </div>
        </Link>

        <Link to={'/galaddproduct'} >
            <div className="sidebar-item flex items-center   my-5 mx-5 py-2 px-3 gap-3 rounded-3xl bg-gray-50 cursor-pointer">
                <GrGallery className='text-2xl' />
                <p>Add Gallery Album</p>
            </div>
        </Link>


        <Link to={'/gallistproduct'} >
            <div className="sidebar-item flex items-center   my-5 mx-5 py-2 px-3 gap-3 rounded-3xl bg-gray-50 cursor-pointer">
                <FaList  className='text-2xl'/>
                <p>Gallery List </p>
            </div>
        </Link>


        <Link to={'/articleaddproduct'} >
            <div className="sidebar-item flex items-center   my-5 mx-5 py-2 px-3 gap-3 rounded-3xl bg-gray-50 cursor-pointer">
                <RiArticleFill className='text-2xl' />
                <p>Add Article </p>
            </div>
        </Link>

        <Link to={'/articlelistproduct'} >
            <div className="sidebar-item flex items-center   my-5 mx-5 py-2 px-3 gap-3 rounded-3xl bg-gray-50 cursor-pointer">
                <FaThList  className='text-2xl'/>
                <p>Article List </p>
            </div>
        </Link>
        <Link to={'/slideradd'} >
            <div className="sidebar-item flex items-center   my-5 mx-5 py-2 px-3 gap-3 rounded-3xl bg-gray-50 cursor-pointer">
                
                <RiImageAddFill className='text-2xl' />
                <p>Slider Image Add</p>
            </div>
        </Link>

        <Link to={'/sliderlist'} >
            <div className="sidebar-item flex items-center   my-5 mx-5 py-2 px-3 gap-3 rounded-3xl bg-gray-50 cursor-pointer">
                <IoIosImage className='text-2xl'/>
                <p>Slider Images List</p>
            </div>
        </Link>

        <Link to={'/usersadd'} >
            <div className="sidebar-item flex items-center   my-5 mx-5 py-2 px-3 gap-3 rounded-3xl bg-gray-50 cursor-pointer">
                <RiUserAddFill  className='text-2xl'/>
                <p>User Add</p>
            </div>
        </Link>

        <Link to={'/userslist'} >
            <div className="sidebar-item flex items-center   my-5 mx-5 py-2 px-3 gap-3 rounded-3xl bg-gray-50 cursor-pointer">
                <PiUserListFill className='text-2xl'/>
                <p>User List</p>
            </div>
        </Link>


        <Link to={'/contactlist'} >
            <div className="sidebar-item flex items-center   my-5 mx-5 py-2 px-3 gap-3 rounded-3xl bg-gray-50 cursor-pointer">
                <BiSolidContact className='text-2xl'/>
                <p>Contact Response</p>
            </div>
        </Link>

        


    </div>
  )
}

export default Sidebar