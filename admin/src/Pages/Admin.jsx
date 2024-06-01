import { Route, Routes } from "react-router-dom"  
import CsrAddProduct from "../Components/CsrAddProduct"
import GalAddProduct from "../Components/GalAAddProduct"
import Sidebar from "../Components/Sidebar"

 

const Admin = () => {
  return (
    <div className="flex h-auto ">
        <Sidebar/>
        <Routes>
            <Route path="/csraddproduct" element={<CsrAddProduct/>}/>
            <Route path="/galaddproduct" element={<GalAddProduct/>}/> 
        </Routes>
    </div>
  )
}

export default Admin