import React, { useEffect } from 'react'
import Header from '../Header.jsx'
import Slider from '../Slider.jsx'
import Projects from '../Projects/Projects.jsx'
import slidesData from "../slideData.jsx";
import {NavLink} from 'react-router-dom'
import Footer from '../../Footer.jsx';

const Home = () => {
  useEffect(()=>{
    document.title = 'Home - DAAJ Technologies Limited'
  },[])
  return (
    <div className='overflow-x-hidden'>
      <Header/>
      <div>
        <Slider slides={slidesData} />
      </div>
      <div>
        <div className='mt-[1rem]'>
          <h1 className='pb-6 pt-8 capitalize text-center text-3xl font-bold'>our solutions & services</h1>
        </div>
        <div className='responsive md:grid grid-cols-4 items-center mx-auto md:max-w-[55rem] lg:max-w-[73rem] gap-10 p-8'>
          <div className='bg-blue-700 p-8 border-2 rounded-lg lg:h-72 lg:w-60 mb-8 md:w-44'>
            <img src='/Images/homePics.webp' alt='home solutions' className='border-2 rounded-md'/>
            <p className='mt-8 text-center capitalize text-sm'>smart home solutions</p>
            <NavLink to='services/smart home consultancy'className='capitalize text-center w-full border-2 p-2 rounded-md hover:bg-slate-100 mt-4 block'>learn more</NavLink>
          </div>
          <div className='bg-blue-700 p-8 border-2 rounded-lg lg:h-72 lg:w-60 mb-8 md:w-44'>
            <img src='/Images/blob.png' alt='commercials' className='border-2 rounded-md'/>
            <p className='mt-8 text-center capitalize text-sm'>commercial solutions</p>
            <NavLink to='services/smart home gadgets'className='capitalize text-center w-full border-2 p-2 rounded-md hover:bg-slate-100 mt-10 block'>learn more</NavLink>
          </div>
          <div className='bg-blue-700 p-8 border-2 rounded-lg lg:h-72 lg:w-60 mb-8 md:w-44'>
            <img src='/Images/Gadgets.png' alt='Devices' className='border-2 rounded-md'/>
            <p className='mt-2 text-center capitalize text-sm'>sales of home gadgets and accessories</p>
            <NavLink to='services/web/mobile appliances'className='capitalize text-center w-full border-2 p-2 rounded-md hover:bg-slate-100 mt-4 block'>learn more</NavLink>
          </div>
          <div className='bg-blue-700 p-8 border-2 rounded-lg lg:h-72 lg:w-60 mb-8 md:w-44'>
            <img src='/Images/Engineer.webp' alt='DAAJ engineer' className='border-2 rounded-md'/>
            <p className='mt-2 text-center capitalize text-sm'>maintenance and support on technical services</p>
            <NavLink to='services/maintainance and support'className='capitalize text-center w-full border-2 p-2 rounded-md hover:bg-slate-100 mt-4 block'>learn more</NavLink>
          </div>
        </div>
      </div>
      <div>
        <h2 className='text-center capitalize text-2xl font-bold'>DAAJ AIOT Technology Ecosytem</h2>
        <Projects/>
      </div>
      <div className='md:flex md:justify-center p-4 adjust lg:ml-28 mb-8'>
        <div className='ms-2 w-[82rem]'>
          <h3 className='text-2xl mb-4 text-blue-700'>Our Mission</h3>
          <p className='mb-4 max-w-80 lg:max-w-[27rem] text-blue-700'>To be one of the leading technological companies, empowering young intelligent engineers to top the market, solving amazing problems for the economy via optimization and leveraging the level of intelligence we have here in Africa.</p>
        </div>
        <div className='ms-2 w-[82rem]'>
          <h3 className='text-2xl mb-4 text-blue-700'>Our Vision</h3>
          <p className='max-w-80 lg:max-w-[27rem] text-blue-700'>To provide a reliable convenient user friendly and high automation Control for all types of environment using quality products and offering technological advanced solutions to client.</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
