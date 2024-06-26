import { useContext, useState } from "react"; 
import { useEffect } from "react";

import { MdDelete } from "react-icons/md";
import { AdminContext } from "../Context/AdminContext";
 

const ContactDetails = () => {
    
    const {DIR} = useContext(AdminContext);

    const [contactUs, setContactUs] = useState([]);

    const fetchInfo = async() => {
        await fetch(`${DIR}/allcontacts`)
        .then((res)=>res.json())
        .then((data)=>setContactUs(data))
    }

    useEffect(() => {
        fetchInfo();
    },[])


    const removeProduct = async(id) => {
        await fetch(`${DIR}/removecontact`,{
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
    <div className="flex flex-col items-center   mx-auto"> 

        <h1 className="text-3xl font-bold p-5">Contact response</h1>
        <div className=" font-semibold  items-center grid grid-cols-5 gap-1 md:gap-2 lg:gap-10 py-1 justify-around  w-[1000px]">
            {/* <p className='flex justify-center'>Products</p>
            <p className='col-start-2 col-span-3 flex justify-center '>Title</p> */}
            <p className='flex justify-center' >Name</p> 
            <p className='flex justify-center '>Email</p> 
            <p className='flex justify-center '>Subject</p>  
            <p className='flex justify-center '>Message</p>  
            <p className='flex justify-center'>Remove</p>
        </div>

        <div className="my-5 py-5  bg-gray-50 overflow-y-scroll h-2/3">

        


            {contactUs.map((product,i) => {
                
                return  <div key={i} className="  w-[1000px]  items-center border-b-2  grid grid-cols-5 gap-1 md:gap-2 lg:gap-10 py-1 
                border-gray-400 ">
                            {/* <img src={product.image} width={80} height={80} alt={product.title}  className=" mx-auto" /> */}
                            {/* <p className='flex justify-center col-start-2 col-span-3 '></p> */}
                            <p className='flex justify-center '>{product.name}</p> 
                            <p className='flex justify-center'>{product.email}</p>
                            <p className='flex justify-center'>{product.subject}</p>
                            <p className='flex justify-center'>{product.message}</p>
                            

                            <div className="flex justify-around ">
                            <button onClick={() => { removeProduct(product.id) }} ><MdDelete className="text-2xl  "/></button>
                            </div>
                        </div>
                
            })}
        </div>

        
 
    </div>
  )
}
export default ContactDetails