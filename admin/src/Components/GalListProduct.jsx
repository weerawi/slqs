import  { useEffect, useState } from 'react'
import remove_icon from '../assets/cross_icon.png';

const GalListProduct = () => {
 

    const [galAllProducts, setGalAllProducts] = useState([]);

    const fetchInfo = async() => {
        await fetch('http://localhost:4000/galallproducts')
        .then((res)=>res.json())
        .then((data)=>setGalAllProducts(data))
    }

    useEffect(() => {
        fetchInfo();
    },[])


    const remove_product = async(id) => {
        await fetch(`http://localhost:4000/removegalproduct`,{
            method:'POST',
            headers:{
                Accept:'application/json',
                'content-Type':'application/json'
            },
            body:JSON.stringify({id:id}),
        })
        await fetchInfo();
        
    }

  return (
    <div className="flex flex-col items-center w-[80%] mx-auto"> 

        <h1 className="text-3xl font-bold p-5">All gal Album List</h1>
        <div className=" font-semibold  items-center grid grid-cols-5 gap-1 md:gap-2 lg:gap-10 py-1 justify-around ">
            {/* <p className='flex justify-center'>Products</p>
            <p className='col-start-2 col-span-3 flex justify-center '>Title</p> */}
            <p className='flex justify-center' >Image</p> 
            <p className='flex justify-center' >Title</p> 
            <p className='flex justify-center '>Date</p> 
            <p className='flex justify-center'>Remove</p>
        </div>

        <div className="my-5 py-5  bg-gray-50 overflow-y-scroll h-2/3">

        


            {galAllProducts.map((product,i) => {
                
                return  <div key={i} className="   items-center border-b-2  grid grid-cols-5 gap-1 md:gap-2 lg:gap-10 py-1 
                border-gray-400 ">
                            {/* <img src={product.image} width={80} height={80} alt={product.title}  className=" mx-auto" /> */}
                            {/* <p className='flex justify-center col-start-2 col-span-3 '></p> */}
                            <img src={product.image} width={80} height={80} alt={product.title}  className=" mx-auto" />
                            <p className='flex justify-center '>{product.title}</p> 
                            <p className='flex justify -center'>{product.date}</p>
                            

                            <img className="cursor-pointer  mx-auto " width={10} height={10} src={remove_icon} alt="" onClick={() => {remove_product(product.id)}} />
                        </div>
                
            })}
        </div>

        
 
    </div>
  )
}
export default GalListProduct