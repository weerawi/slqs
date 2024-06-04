import { Route, Routes } from "react-router-dom"  
import CsrAddProduct from "../Components/CsrAddProduct"  
import GalAddProduct from "../Components/GalAddProduct"
import Sidebar from "../Components/Sidebar"
import CsrListProduct from "../Components/CsrListProduct"
import GalListProduct from "../Components/GalListProduct"
import ArticleAddData from "../Components/ArticleAddData"
import ArticleListData from "../Components/ArticleListData"
import UsersAdd from "../Components/UsersAdd"
import UsersList from "../Components/UsersList"
import ContactDetails from "../Components/ContactDetails"
import SliderImagesAdd from "../Components/SliderImagesAdd"
import SliderImageList from "../Components/SliderImageList"

 

const Admin = () => {
  return (
    <div className="flex h-auto ">
        <Sidebar/>
        <Routes>
            <Route path="/csraddproduct" element={<CsrAddProduct/>}/>
            <Route path="/galaddproduct" element={<GalAddProduct/>}/> 
            <Route path="/articleaddproduct" element={<ArticleAddData/>}/> 
            <Route path="/usersadd" element={<UsersAdd/>}/> 
            <Route path="/slideradd" element={<SliderImagesAdd/>}/> 

            <Route path="/csrlistproduct" element={<CsrListProduct/>}/> 
            <Route path="/gallistproduct" element={<GalListProduct/>}/> 
            <Route path="/articlelistproduct" element={<ArticleListData/>}/> 
            <Route path="/userslist" element={< UsersList/>}/> 
            <Route path="/contactlist" element={< ContactDetails/>}/> 
            <Route path="/sliderlist" element={< SliderImageList/>}/> 
        </Routes>
    </div>
  )
}

export default Admin