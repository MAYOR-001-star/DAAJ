import React, {useEffect} from 'react'
import Header from '../Header'
import { NavLink } from 'react-router-dom'
import Footer from '../../Footer'

const Support = () => {
  useEffect(()=>{
    document.title = 'Maintenance and Support on Technical Services. - DAAJ Technologies Limited - DAAJ Technologies Limited'
  },[])
  return (
    <div>
      <Header/>
      <div className='pt-32 mx-auto max-w-[20rem] md:max-w-[42rem] mb-16'>
        <h1 className='mb-8 text-center text-2xl font-bold'>Maintenance and Support on Technical Services.</h1>
        <img src='/Images/Maintenance.webp' className='rounded-md mb-8'/>
        <h2 className='text-3xl font-extralight text-blue-700 mb-12'>How can we help you?</h2>
        <p className='font-light text-blue-700 mb-8 border-2 outline outline-1 p-8'>
          At DAAJ Technologies Limited, our commitment doesn't end with installation. We provide ongoing support and maintenance services to ensure that your smart home operates smoothly and efficiently. Our team is available to address any issues, answer your questions, and provide timely assistance whenever you need it.
        </p>
        <p className='bg-white hover:bg-blue-700 text-center py-2 border-blue-700 border-2 w-[10rem] mx-auto rounded-md'>
          <NavLink to='#'><span className='uppercase text-blue-700 hover:text-white'>get in touch</span></NavLink>
        </p>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Support
