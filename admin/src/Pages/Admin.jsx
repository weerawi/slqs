import { Route, Routes } from "react-router-dom"  
import CsrAddProduct from "../Components/CsrAddProduct"  
import GalAddProduct from "../Components/GalAddProduct"
import Sidebar from "../Components/Sidebar"
import CsrListProduct from "../Components/CsrListProduct"
import GalListProduct from "../Components/GalListProduct"

 

const Admin = () => {
  return (
    <div className="flex h-auto ">
        <Sidebar/>
        <Routes>
            <Route path="/csraddproduct" element={<CsrAddProduct/>}/>
            <Route path="/galaddproduct" element={<GalAddProduct/>}/> 
            <Route path="/csrlistproduct" element={<CsrListProduct/>}/> 
            <Route path="/gallistproduct" element={<GalListProduct/>}/> 
        </Routes>
    </div>
  )
}

export default Admin