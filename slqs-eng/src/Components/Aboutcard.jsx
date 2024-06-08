import React from 'react'


const Aboutcard = (props) => {
  return (
    <div className='group'>
        
        <div  
        class="shadow-red-300 shadow-md hover:scale-[1.04] transition-all  w-max-[350px] h-max-[500px] lg:w-[300px] md:w-[350px] w-[280px] md:h-[400px] h-[380px]
            bg-red-900 duration-500  rounded-2xl antialiased text-gray-300">
        <div className='p-2'>
          <img src={props.image}
           alt=" random imgee" class="w-full h-48 object-cover object-center rounded-lg shadow-xl" />    
          <div class="relative px-4 -mt-16   ">
            <div
            style={{
              backdropFilter:'blur(10px)',
              background:'rgba(0,0,0,0.5)'
    
            }} class=" transition-all  duration-700 group-hover:text-white group-hover:font-medium   p-6 rounded-lg shadow-lg">
              {/* <div class="flex items-baseline">
                
                dfgdfgd
              </div> */}
              <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">{props.name}</h4>
              <div class=" mt-1 text-sm">
              {props.descripton}
                 
              </div>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutcard