import React, { useContext } from 'react' 
import csrimg from '../Components/Assets/top_3.jpg'
import PageTitle from '../Components/PageTitle'
import './CSR.css'
import CsrCard from '../Components/CsrCard'
import { SlqsContext } from '../Context/SlqsContext' 

const CSR = () => {

  const {csr_data} = useContext(SlqsContext); 


  return (

    <>
    
    <PageTitle name="csr" image={csrimg} />

    <div className='flex mx-auto items-center justify-center py-10'>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto '>


          {csr_data.map((item,i)=> {
            return( 
                <CsrCard  key={i} id={item.id} title={item.title} stitle={item.stitle} image={item.image} date={item.date}/>
               
            )
          })}

        </div>
        
    </div>
  

    
    </>
  )
}

export default CSR