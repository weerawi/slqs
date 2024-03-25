import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header"; 
import Home from "./Pages/Home";
import Aboutus from "./Components/Aboutus";


function App() {
  return (
    <div className="App"> 
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<Aboutus/>} /> 
        
      </Routes> 
      <Footer/>
    </div>
  );
}

export default App;
