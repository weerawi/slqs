import { useContext, useEffect } from "react";
import { useState } from "react";  
import { MdDelete } from "react-icons/md";
import { AdminContext } from "../Context/AdminContext";

const UsersList = () => {
    const {DIR} = useContext(AdminContext);
    const [userData, setUserData] = useState([]);

    const fetchInfo = async() => {
        await fetch(`${DIR}/allusers`)
        .then((res)=>res.json())
        .then((data)=>setUserData(data))
    }

    useEffect(() => {
        fetchInfo();
    },[])


    const removeProduct = async(id) => {
        await fetch(`${DIR}/removeuser`,{
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

        <h1 className="text-3xl font-bold p-5">All Users</h1>
        <div className=" font-semibold  items-center grid grid-cols-4 gap-1 md:gap-2 lg:gap-10 py-1 justify-around  w-[800px]">
            {/* <p className='flex justify-center'>Products</p>
            <p className='col-start-2 col-span-3 flex justify-center '>Title</p> */}
            <p className='flex justify-center' >Name</p> 
            <p className='flex justify-center '>Email</p> 
            <p className='flex justify-center '>Password</p> 
            <p className='flex justify-center'>Remove</p>
        </div>

        <div className="my-5 py-5  bg-gray-50 overflow-y-scroll h-2/3">

        


            {userData.map((product,i) => {
                
                return  <div key={i} className="  w-[800px]  items-center border-b-2  grid grid-cols-4 gap-1 md:gap-2 lg:gap-10 py-1 
                border-gray-400 ">
                            {/* <img src={product.image} width={80} height={80} alt={product.title}  className=" mx-auto" /> */}
                            {/* <p className='flex justify-center col-start-2 col-span-3 '></p> */}
                            <p className='flex justify-center '>{product.name}</p> 
                            <p className='flex justify-center'>{product.email}</p>
                            <p className='flex justify-center'>{product.password}</p>
                            

                            <div className="flex justify-around ">


                            <button onClick={() => { removeProduct(product.id) }} ><MdDelete className="text-2xl  "/></button>
                            </div>
                            
                        </div>
                
            })}
        </div>

        
 
    </div>
  )
}

export default UsersList
