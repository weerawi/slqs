import React from 'react'
import contactimg from '../Components/Assets/top_5.jpg'

const ArticleCard = ({ title, description, image }) => {
  return (
    <div className='flex justify-center py-10'>
        <div className='w-[80%] h-fit flex flex-row shadow-xl rounded-2xl p-5'>
        <div className='w-1/3 flex justify-center '>
            <img src={image} alt={title} className='rounded-2xl ' /> 
        </div>
        <div className='w-2/3 px-5 text-justify'>
            <h2 className='text-xl font-bold mb-2'>{title}</h2>
            <p>{description}</p>
        </div>
        </div>
    </div>
  )
}

export default ArticleCard