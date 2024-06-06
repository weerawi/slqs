import React from 'react'
import contactimg from '../Components/Assets/top_5.jpg'


const ArticleCard = ({ title, description, image }) => {
  return (
    <div 
    data-aos="zoom-in-right"
    data-aos-duration="1000"
     className='flex justify-center py-10'>
        <div className='w-[80%] h-fit flex flex-col md:flex-row shadow-xl rounded-2xl bg-red-300 '>
          <div className='w-full md:w-2/5 flex justify-center '>
              <img src={image} alt={title} className='rounded-tl-2xl rounded-bl-2xl  ' /> 
            
          </div> 
          <div className='w-full md:w-3/5 px-5 text-justify p-5 pl-10'>
              <h2 className='text-xl font-bold mb-2 capitalize'>{title}</h2>
              <p>{description}</p>
          </div>
        </div>
 
    </div>
  )
}

export default ArticleCard