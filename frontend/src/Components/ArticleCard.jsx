import React from 'react'
import contactimg from '../Components/Assets/top_5.jpg'


const ArticleCard = ({ title, description, image }) => {
  return (
    <div  
     className='flex justify-center py-10'>
        <div
        style={{
          backdropFilter:'blur(10px)',
          background:'rgba(0,0,0,0.4)'

        }}
         className='w-[80%] h-fit flex flex-col md:flex-row shadow-xl   items-center justify-center
        rounded-br-[50px] sm:rounded-br-[80px] md:rounded-br-[100px] xl:rounded-br-[150px]
            rounded-tl-[50px] sm:rounded-tl-[80px] md:rounded-tl-[100px] xl:rounded-tl-[150px] p-5'>
          {/* <div className='w-full md:w-2/5 flex justify-center '>
              <img src={image} alt={title} className='rounded-tl-2xl rounded-bl-2xl  ' /> 
            
          </div>  */}

          <div className='order-1  max-w-[453px]  '
                >
            <img  src={image} alt='hero' className='border-4 border-gray-200 rounded-br-[50px] sm:rounded-br-[80px] md:rounded-br-[100px] xl:rounded-br-[150px]
            rounded-tl-[50px] sm:rounded-tl-[80px] md:rounded-tl-[100px] xl:rounded-tl-[150px]' />
          </div>
          <div className='text-white w-full md:w-3/5 px-5 text-justify flex  flex-col justify-center p-5 pl-10'>
              <h2 className='text-xl md:text-2xl font-extrabold mb-2 uppercase py-10'>{title}</h2>
              <p className='text-sm md:text-base font-semibold'>{description}</p>
          </div>
        </div>
 
    </div>
  )
}

export default ArticleCard