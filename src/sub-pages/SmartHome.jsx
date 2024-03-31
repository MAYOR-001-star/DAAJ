import React, {useEffect} from 'react'
import Header from '../Header'
import Footer from '../../Footer'

const SmartHome = () => {
  useEffect(()=>{
    document.title = 'Smart Home - DAAJ Technologies Limited - DAAJ Technologies Limited'
  },[])
  return (
    <div>
      <Header/>
      <div>
        <img src='/Images/Screen.png' className='w-full md:h-[30rem] absolute'/>
        <p className='capitalize relative top-[8rem] md:top-[15rem] font-bold text-2xl md:text-5xl text-white text-center'>smart home installation</p>
      </div>
      <div className='mt-[15rem] md:mt-[30rem] mx-auto md:max-w-[40rem] lg:max-w-[50rem] p-4'>
        <p className='mb-10'>
          At DAAJ Technologies, we're dedicated to elevating ordinary houses into intelligent homes that offer unparalleled convenience, security, and energy efficiency. Based in Lagos, Nigeria, we stand as pioneers in providing comprehensive smart home consultation services, guiding you through every step from conceptualization to seamless integration.
        </p>
        <p className='mb-10'>
          Tailored Solutions for Your Lifestyle
        </p>
        <p className='mb-10'>
          We recognize that every home is unique, which is why we take a personalized approach to crafting solutions that perfectly align with your lifestyle and preferences. Our expert team collaborates closely with you to ensure that your smart home system is not only functional but also reflects your individuality and style.
        </p>        
      </div>
      <div>
        <h1 className='capitalize text-center font-bold text-2xl'>a smart home essential pack</h1>
      </div>
      <div className='md:grid grid-cols-4 gap-[1rem] my-20'>
        <div className='p-2 mb-4'>
          <img src='/Images/convinence.jpg' className='rounded'/>
          <h1 className='text-center py-4 font-bold'>Convinence</h1>
          <p className='text-center'>Homeowners remotely control various devices and systems, such as lighting, thermostats, and security cameras, with the touch of a button or a voice command.</p>
        </div>
        <div className='p-2 mb-4'>
          <img src='/Images/exclusive designs.webp' className='w-[23rem] h-[20rem] md:h-[7.5rem] lg:h-[12rem] md:w-[15rem] rounded'/>
          <h1 className='text-center py-4 font-bold'>Exclusive Designs</h1>
          <p className='text-center'>Blending technology with aesthetics,offering sleek and minimalist designs that complement any interior decor while providing advanced functionality.</p>
        </div>
        <div className='p-2 mb-4'>
          <img src='/Images/security.png'  className='rounded'/>
          <h1 className='text-center py-4 font-bold'>Security</h1>
          <p className='text-center'>By offering features such as real-time monitoring,motion detection, and remote access ,providing homeowners with peace of mind and ensuring safety of property and loved ones. </p>
        </div>
        <div className='p-2 mb-4'>
          <img src='/Images/energy saving.png'  className='rounded'/>
          <h1 className='text-center py-4 font-bold'>Energy Saving</h1>
          <p className='text-center'>Features such as automatically adjusting lighting, heating,cooling based on occupancy patterns and references ,leading to reduced utility bills and environmental impact.</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SmartHome
