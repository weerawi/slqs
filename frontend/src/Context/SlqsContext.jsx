import React, { createContext, useEffect, useState } from 'react'
// import csr_data from '../Components/Assets/csr_data'
// import gallery_data from '../Components/Assets/gallery_data'
import article_data from '../Components/Assets/article_data'

export const SlqsContext = createContext(null);

const SlqsContextProvider = (props) => {

  const [galallproducts,setGalAllProducts] = useState([]);
  const [csrallproducts,setCsrAllProducts] = useState([]);
  const [articlealldata,setArticleAllData] = useState([]);
  const [allsliderimages,setAllSliderImages] = useState([]);

  const [isFixed, setIsFixed] = useState(false); 
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(()=>{
    fetch('http://localhost:4000/csrallproducts')
    .then((res)=>res.json())
    .then((data)=>setCsrAllProducts(data))
 
  },[])


  useEffect(()=>{
    fetch('http://localhost:4000/galallproducts')
    .then((res)=>res.json())
    .then((data)=>setGalAllProducts(data))
 
  },[])

  useEffect(()=>{
    fetch('http://localhost:4000/articlealldata')
    .then((res)=>res.json())
    .then((data)=>setArticleAllData(data))
 
  },[]) 


  useEffect(()=>{
    fetch('http://localhost:4000/allsliderimages')
    .then((res)=>res.json())
    .then((data)=>setAllSliderImages(data))
 
  },[]) 


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        setIsFixed(true);
      } else {
        setIsScrolled(false);
        setIsFixed(false);
      }
    
       
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const contextValue = {
    
    article_data,
    articlealldata,
    galallproducts,
    csrallproducts,
    allsliderimages,
    isFixed,
    isScrolled
  }

  return (
    <SlqsContext.Provider value={contextValue}>
      {props.children}
    </SlqsContext.Provider>
  )
}

export default SlqsContextProvider