import { Route, Routes } from "react-router-dom"; 
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Contactus from "./Pages/Contactus";
import BlogMedia from "./Pages/BlogMedia"; 
import Commitee from "./Pages/Commitee"; 
import Layout from "./Layout/Layout";
import Index from "./Pages/Index";
import CSR from "./Pages/CSR";
import Article from "./Pages/Article";
import Gallery from "./Pages/Gallery";

function App() {
  return (
    < >  
    <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutus" element={<Aboutus/>} /> 
          <Route path="/contactus" element={<Contactus/>} /> 
          <Route path="/commitee" element={<Commitee/>} /> 
          <Route path="/index" element={<Index/>} />
          <Route path="/article" element={<Article/>} /> 
          <Route path="/csr" element={<CSR />} /> 
          <Route path="/gallery" element={<Gallery/>} />  
        </Routes>
    </Layout>
       
    </>
  );
}

export default App;
