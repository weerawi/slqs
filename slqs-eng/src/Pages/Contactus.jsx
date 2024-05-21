import React from 'react'
import logo from '../Components/Assets/contactfront.jpg'
import PageTitle from '../Components/PageTitle'
import contactimg from '../Components/Assets/top_5.jpg'
//for translation
// import { useTranslation } from 'react-i18next'

const Contact= () => {
    //for translation
    // const { t } = useTranslation(["contact"])
  return (
    
    <>
    <PageTitle name= 'contact us' image={contactimg}/>
    
       <div class=" h-screen pt-10 pb-32 px-1 md:px-5  py-6 flex flex-col justify-center sm:py-12"
       data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1400">
          <div
           class="relative  py-3 sm:max-w-xl sm:mx-auto">
              <div
                  class="absolute inset-0    transform -skew-y-3 rotate-5 sm:skew-y-0 sm:-rotate-6 rounded-3xl flex items-center justify-center p-4 sm:p-14 md:p-16">
                     <img className='sm:rounded-3xl rounded-2xl'  src={logo}  alt='logo' />
              </div>
              <div
              style={{
                backdropFilter: 'blur(4px)',
                background:   'rgba(128, 0,0, 0.3)', 
            }} class="text-white relative px-5 py-10  shadow-md rounded-3xl sm:p-20 shadow-gray-300  ">

                  <div class="text-center pb-6  ">
                      {/* <h1 class="text-3xl tracking-widest">{t("heading")}</h1> */}

                      <p class="text-gray-300">
                          Contact Us
                      </p>
                  </div>

            <form action="#" method="post">

                      <input
                              class="shadow mb-4 bg-t appearance-none border rounded w-full py-2 px-3 text-gray-200 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                              type="text" placeholder="name" name="name"/>

                      <input
                              class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-200 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                              type="email" placeholder="email" name="email"/>

                      <input
                              class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-200 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                              type="text" placeholder="Subject" name="_subject"/>

                      <textarea
                              class="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-200 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                              type="text" placeholder="messafe" name="message" style={{ height: "121px" }}></textarea>

                      <div class="flex justify-between font-semibold ">
                          <input
                           style={{
                            backdropFilter: 'blur(6px)',
                            background:   'rgba(255,255,255, 0.3)', 
                        }}
                              class="shadow cursor-pointer hover:font-bold transition-all hover:scale-[1.1] text-gray-200  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                              type="submit" value="Send"/>
                          <input
                           style={{
                            backdropFilter: 'blur(6px)',
                            background:   'rgba(255,255,255, 0.3)', 
                        }}
                              class="shadow cursor-pointer hover:font-bold transition-all hover:scale-[1.1] text-gray-200   py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                              type="reset" value="Reset"/>
                      </div>
                       
          
                  </form>
              </div>
              
          </div>
      </div> 
    </>



  )
}

export default Contact
