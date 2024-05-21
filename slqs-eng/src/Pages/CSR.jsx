import React from 'react' 
import csrimg from '../Components/Assets/top_3.jpg'
import PageTitle from '../Components/PageTitle'
import './CSR.css'
import CsrCard from '../Components/CsrCard'
const CSR = () => {
  return (

    <>
    
    <PageTitle name="csr" image={csrimg} />

    <div className='flex mx-auto items-center justify-center'>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto '>


            <CsrCard />
            <CsrCard />
            <CsrCard />
            <CsrCard />
        </div>
        
    </div>
  

    
    </>
  )
}

export default CSR