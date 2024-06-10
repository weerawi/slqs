import React, { useContext, useState } from 'react';
import logo from '../Components/Assets/contactfront.jpg';
import PageTitle from '../Components/PageTitle';
import contactimg from '../Components/Assets/top_5.jpg';
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import Map from '../Components/Map';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SlqsContext } from '../Context/SlqsContext';

const Contact = () => {
  const {DIR} = useContext(SlqsContext);


  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const changeHandler = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    let responseData;

    let contact = {
      ...contactData,
    };

    await fetch(`${DIR}/contactus`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    })
      .then(res => res.json())
      .then((data) => {
        responseData = data;
        if (responseData.success) {
          toast.success('Response Added', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setContactData({
            name: "",
            email: "",
            subject: "",
            message: ""
          });
        } else {
          toast.error('Failed to send,All Fields are required!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      });
  };

  const resetForm = () => {
    setContactData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <>
      <PageTitle name='contact us' image={contactimg} />
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center max-w-[1300px] mx-auto pt-10 mt-5 md:mt-20'>
        <div 
          className='mx-5 md:mx-0 flex flex-col items-center justify-center gap-4 text-white pt-10 sm:pt-0'
        >
          <a 
          data-aos="fade-up" 
          data-aos-duration="1000"href="tel:+96550480958" style={{ backdropFilter: 'blur(3px)', background: 'rgba(0, 0, 0, 0.6)' }} className='rounded-2xl group p-3 gap-2 w-96 flex items-center'>
            <MdCall className='text-xl group-hover:animate-ping' /> +965 504 80958
          </a>

          <a 
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"href="mailto:secretary@slqs-eng-kuwait.org" style={{ backdropFilter: 'blur(3px)', background: 'rgba(0, 0, 0, 0.6)' }} className='rounded-2xl group p-3 gap-2 w-96 flex items-center'>
            <MdEmail className='text-xl group-hover:animate-pulse' /> secretary@slqs-eng-kuwait.org
          </a>

          <div 
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"style={{ backdropFilter: 'blur(3px)', background: 'rgba(0, 0, 0, 0.6)' }} className='rounded-2xl group p-3 gap-2 w-96 flex flex-col justify-center'>
            <a href="https://www.google.com/maps?q=Kuwait+City,+Kuwait" target="_blank" rel="noopener noreferrer" className='gap-2 flex items-center'>
              <MdLocationOn className='text-xl group-hover:animate-bounce' /> Kuwait City, Kuwait
            </a>
            <Map />
          </div>
        </div>

        <div 
        data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
           className='pt-10 md:pt-20  '>
          <div className="h-screen  sm:pt-10   sm:pb-10 md:pb-20 px-1 md:px-5  flex flex-col justify-center  "  >
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1400" className="absolute inset-0 transform -skew-y-3 rotate-5 rounded-3xl flex items-center justify-center p-4 sm:p-14 md:p-16">
                <img className='sm:rounded-3xl rounded-2xl' src={logo} alt='logo' />
              </div>
              <div style={{ backdropFilter: 'blur(3px)', background: 'rgba(0, 0, 0, 0.5)' }} className="text-white relative px-5 py-10 shadow-md rounded-3xl sm:p-20 shadow-gray-300">
                <div className="text-center pb-6">
                  <p className="text-gray-100 font-bold text-2xl uppercase">Send us a message</p>
                </div>

                <div>
                  <input value={contactData.name} onChange={changeHandler} className="shadow focus:ring focus:ring-gray-300 mb-4 bg-t appearance-none border rounded w-full py-2 px-3 text-gray-200 font-semibold bg-transparent leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="name" name="name" />
                  <input value={contactData.email} onChange={changeHandler} className="shadow focus:ring focus:ring-gray-300 mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-200 font-semibold bg-transparent leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="email" name="email" />
                  <input value={contactData.subject} onChange={changeHandler} className="shadow focus:ring focus:ring-gray-300 mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-200 font-semibold bg-transparent leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Subject" name="subject" />
                  <textarea value={contactData.message} onChange={changeHandler} className="shadow focus:ring focus:ring-gray-300 mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-200 font-semibold bg-transparent leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="message" name="message" style={{ height: "121px" }}></textarea>
                  <div className="flex justify-between font-semibold">
                    <input style={{ backdropFilter: 'blur(6px)', background: 'rgba(255, 255, 255, 0.3)' }} className="shadow cursor-pointer hover:font-bold transition-all hover:scale-[1.1] text-gray-200 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Send" onClick={handleSubmit} />
                    <input style={{ backdropFilter: 'blur(6px)', background: 'rgba(255, 255, 255, 0.3)' }} className="shadow cursor-pointer hover:font-bold transition-all hover:scale-[1.1] text-gray-200 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="reset" value="Reset" onClick={resetForm}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Contact;