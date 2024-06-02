import {Link} from 'react-router-dom';
import add_product_icon from '../assets/Product_Cart.svg';
import list_product_icon from '../assets/Product_list_icon.svg';

const Sidebar = () => {
  return (
    <div className="fle flex-col pt-7   w-[100%] max-w-[250px] min-h-screen h-auto bg-red-900">
        <Link to={'/csraddproduct'} >
            <div className="sidebar-item flex items-center justify-center my-5 mx-5 py-2 px-3 gap-3 rounded-3xl bg-gray-50 cursor-pointer">
                <img src={add_product_icon} alt="" />
                <p>Add csr Product</p>
            </div>
        </Link>

        <Link to={'/galaddproduct'} >
            <div className="sidebar-item flex items-center justify-center my-5 mx-5 py-2 px-3 gap-3 rounded-3xl bg-gray-50 cursor-pointer">
                <img src={add_product_icon} alt="" />
                <p>Add gal Product</p>
            </div>
        </Link>

        <Link to={'/csrlistproduct'} >
            <div className="sidebar-item flex items-center justify-center my-5 mx-5 py-2 px-3 gap-3 rounded-3xl bg-gray-50 cursor-pointer">
                <img src={list_product_icon} alt="" />
                <p>Csr List Product</p>
            </div>
        </Link>

        <Link to={'/gallistproduct'} >
            <div className="sidebar-item flex items-center justify-center my-5 mx-5 py-2 px-3 gap-3 rounded-3xl bg-gray-50 cursor-pointer">
                <img src={list_product_icon} alt="" />
                <p>Gal List Product</p>
            </div>
        </Link>


    </div>
  )
}

export default Sidebar