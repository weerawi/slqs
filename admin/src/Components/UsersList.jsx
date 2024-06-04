import { useEffect } from "react";
import { useState } from "react"; 
import remove_icon from '../assets/cross_icon.png';
 

const UsersList = () => {

    
     

    const [userData, setUserData] = useState([]);

    const fetchInfo = async() => {
        await fetch('http://localhost:4000/allusers')
        .then((res)=>res.json())
        .then((data)=>setUserData(data))
    }

    useEffect(() => {
        fetchInfo();
    },[])


    const remove_product = async(id) => {
        await fetch(`http://localhost:4000/removeuser`,{
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

        <h1 className="text-3xl font-bold p-5">All Users</h1>
        <div className=" font-semibold  items-center grid grid-cols-4 gap-1 md:gap-2 lg:gap-10 py-1 justify-around ">
            {/* <p className='flex justify-center'>Products</p>
            <p className='col-start-2 col-span-3 flex justify-center '>Title</p> */}
            <p className='flex justify-center' >Name</p> 
            <p className='flex justify-center '>Email</p> 
            <p className='flex justify-center '>Password</p> 
            <p className='flex justify-center'>Remove</p>
        </div>

        <div className="my-5 py-5  bg-gray-50 overflow-y-scroll h-2/3">

        


            {userData.map((product,i) => {
                
                return  <div key={i} className="   items-center border-b-2  grid grid-cols-4 gap-1 md:gap-2 lg:gap-10 py-1 
                border-gray-400 ">
                            {/* <img src={product.image} width={80} height={80} alt={product.title}  className=" mx-auto" /> */}
                            {/* <p className='flex justify-center col-start-2 col-span-3 '></p> */}
                            <p className='flex justify-center '>{product.name}</p> 
                            <p className='flex justify -center'>{product.email}</p>
                            <p className='flex justify -center'>{product.password}</p>
                            

                            <img className="cursor-pointer  mx-auto " width={10} height={10} src={remove_icon} alt="" onClick={() => {remove_product(product.id)}} />
                        </div>
                
            })}
        </div>

        
 
    </div>
  )
}

export default UsersList
