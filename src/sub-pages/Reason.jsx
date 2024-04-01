import React, {useEffect} from 'react'
import Header from '../Header'
import Footer from '../../Footer'

const Reason = () => {
  useEffect(()=>{
    document.title = 'Why Choose Us - DAAJ Technologies Limited'
  },[])
  return (
    <div>
      <Header/>
      <h1 className='pt-28 text-center text-2xl font-bold'>Why Choose Us</h1>
      <div className='p-4 mt-8 mx-auto max-w-[60rem] mb-12'>
        <div className='md:flex justify-center items-center p-8 bg-blue-700 mb-8 rounded-md'>
          <div>
            <img src='/Images/safebox.jpeg' className='w-[55rem] rounded-md'/>
            <p className='text-center mt-6 font-bold text-white'>ROI OF BUILDING ASSETS</p>
          </div> 
          <p className='p-6 w-[18rem] text-base md:text-2xl md:w-[100rem] mx-auto text-white'>
            Our solutions are not only designed to provide comfort and convenience to residents but also to provide a high return on investment for building assets. 
            Our energy-efficient systems and smart home automation solutions can help reduce maintenance costs an increase the overall value of your building.
          </p>
        </div>
        <div className='md:flex justify-center items-center p-8 bg-blue-700 mb-8 rounded-md'>
          <div>
            <img src='/Images/daaj home.webp' className='w-[55rem] rounded-md'/>
            <p className='text-center mt-6 font-bold text-white'>FUTURISTIC DESIGNS</p>
          </div>
          <p className='p-6 w-[18rem] text-base md:text-2xl md:w-[100rem] mx-auto text-white'>
            Our team of experts stays up-to-date with the latest technological advancements to provide you with state-of-the-art solutions. We offer smart home automation, energy-efficient systems, and intelligent security systems that are designed to make your building future-ready.
          </p>
        </div>
        <div className='md:flex justify-center items-center p-8 bg-blue-700 mb-8 rounded-md'>
          <div>
            <img src='/Images/homePics.webp' className='w-[55rem] rounded-md'/>
            <p className='text-center mt-6 font-bold text-white'>VALUE FOR COMFORT LIVING</p>
          </div>
          <p className='p-6 w-[18rem] text-base md:text-2xl md:w-[100rem] mx-auto text-white'>
            We understand the importance of a comfortable living space, and our solutions are tailored to cater to the needs of modern-day living. Our systems are designed to provide maximum comfort and convenience to residents, making their lives easier and more enjoyable.
          </p>
        </div>
        <div className='md:flex justify-center items-center p-8 bg-blue-700 mb-8 rounded-md'>
          <div>
            <img src='/Images/beautiful kitchen .webp' className='w-[55rem] rounded-md'/>
            <p className='text-center mt-6 font-bold text-white'>UNIQUE DESIGNS</p>
          </div>
          <p className='p-6 w-[18rem] text-base md:text-2xl md:w-[100rem] mx-auto text-white'>
            We believe that every building should be a reflection of its owner's personality, and that's why we offer customized solutions that are tailored to your specific needs. Our team of designers will work closely with you to create a unique and stunning design that will set your building apart from the rest.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Reason
