import { Route, Routes } from "react-router-dom"; 
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Contactus from "./Pages/Contactus"; 
import Commitee from "./Pages/Commitee"; 
import Layout from "./Layout/Layout";
import Index from "./Pages/Index";
import CSR from "./Pages/CSR";
import Article from "./Pages/Article";
import Gallery from "./Pages/Gallery";
import ImageGallery from "./Pages/ImageGallery";
import Admin from "./Pages/Admin";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

   //AOS initializing
   useEffect(() => {
    AOS.init();
    AOS.refresh();
  });


  return (
    < >  
    <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/aboutus" element={<Aboutus/>} /> 
          <Route path="/contactus" element={<Contactus/>} /> 
          <Route path="/commitee" element={<Commitee/>} /> 
          <Route path="/index" element={<Index/>} />
          <Route path="/article" element={<Article/>} /> 
          <Route path="/csr" element={<CSR />} /> 
          <Route path="/csr/:csrId" element={<ImageGallery/>} />
          <Route path="/gallery" element={<Gallery/>} />  
          <Route path="/gallery/:galleryId" element={<ImageGallery/>} />
        </Routes>
    </Layout>
       
    </>
  );
}

export default App;