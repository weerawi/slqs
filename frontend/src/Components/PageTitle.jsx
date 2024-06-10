import React from 'react' 



const PageTitle = (props) => {
  return (
    <div>
        <div className='h-[50vh] md:h-[60vh] flex items-center justify-center 
        rounded-br-[100px] sm:rounded-br-[130px] md:rounded-br-[200px] xl:rounded-br-[300px]
        rounded-bl-[100px] sm:rounded-bl-[130px] md:rounded-bl-[200px] xl:rounded-bl-[300px] '
        style={{
            backgroundImage:`url(${props.image})`,
            backgroundSize: 'cover' ,
            backgroundAttachment:'fixed',
            backgroundRepeat:'no-repeat',
            width: '100%',     
            position: 'relative',
            display: 'block',
            
        }}
        >

        <div className='w-full h-full  flex items-center justify-center
        rounded-br-[100px] sm:rounded-br-[130px] md:rounded-br-[200px] xl:rounded-br-[300px]
        rounded-bl-[100px] sm:rounded-bl-[130px] md:rounded-bl-[200px] xl:rounded-bl-[300px] '  
            style={{
            background:'rgba(0,0,0,0.5)'
            }}
        >
            <div className='uppercase text-white font-semibold text-4xl lg:text-6xl'>{props.name}</div>
        </div>
            
        </div>
    </div>
  )
}

export default PageTitle