import React from 'react'
import Aboutcard from '../Components/Aboutcard'
import mission from '../Components/Assets/mission.jpg'
import vision from '../Components/Assets/vision.jpg'
import brief from '../Components/Assets/brief.jpg'
import PageTitle from '../Components/PageTitle'
import aboutimg from '../Components/Assets/top_sun.jpg'

const Aboutus = () => {
  return (
    <>

    <PageTitle name="About us" image={aboutimg}/>
    
    <div 
     className='pt-20 pb-32 lg:h-screen   grid lg:grid-flow-col grid-flow-row
      justify-center items-center xl:gap-28 gap-16'> 
      

      <Aboutcard image={brief} name="Brief" descripton="The Society of Sri Lankan Quantity Surveyors and Engineers
                            (SLQS & Eng.) is the one of the leading professional society
                            in Kuwait. The Society of SLQS & Eng. is affiliated with Sri
                            Lankan Embassy in Kuwait and it is a non-profit organization."/>


      <Aboutcard image={vision} name="Vision" descripton="To be Promoted the Sri Lankan Quantity Surveyors and Engineers
                            identity delivering higher standards of the Quantity Surveying
                            and Engineering practice in Kuwait."/>


      <Aboutcard image={mission} name="Mission" descripton="To uphold the status and image of Sri Lankan Quantity
                            Surveyors & Engineers and providing a platform where Sri
                            Lankan Quantity Surveyors and Engineers gather for social,
                            business, professional and career development to make the Sri
                            Lankan Quantity Surveyors and Engineer voice in Kuwait."/>
      
       

      
       
      

    </div>
    </>
    
  )
}

export default Aboutus