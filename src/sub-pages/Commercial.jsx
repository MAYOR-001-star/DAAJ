import React, {useEffect} from 'react'
import Header from '../Header'
import Footer from '../../Footer'

const Commercial = () => {
  useEffect(()=>{
    document.title = 'Commercial Solutions - DAAJ Technologies Limited'
  },[])
  return (
    <div>
      <Header/>
      <div className='p-4 mb-12'>
        <h1 className='capitalize pt-24 text-center font-bold mb-8 text-3xl'>commercial solutions</h1>
        <div className='p-8 bg-blue-700 rounded-md'>
          <div className='md:flex justify-center items-center mb-16'>
            <img src='/Images/real estate.jpg' className='md:w-[20rem] lg:w-[25rem] rounded-md'/>
            <div className='mt-6 md:ml-8'>
              <h2 className='capitalize font-bold text-xl mb-2 text-white'>real estate</h2>
              <p className='text-white'>
                Customize smart home packages for new homeowners. Integrating smart technology into new construction projects enhance property value by staging homes with smart devices during open houses.
                We Offer discounted rates for bulk purchases of smart home devices.
              </p>
            </div>
          </div>
          <div className='md:flex justify-center items-center mb-16'>
            <div className='mr-8 hidden md:block'>
              <h2 className='capitalize font-bold text-xl mb-2 text-white'>hotel management</h2>
              <p className='text-white'>
                Install smart devices for guest room temperature control, lighting, and entertainment systems.
                Develop guest apps for room control and service requests via smartphones.
                Implement energy-efficient systems to monitor and control energy usage.
                Gather guest feedback through in-room tablets or mobile apps to enhance service quality.
              </p>
            </div>
            <img src='/Images/hotel management.jpg' className='md:w-[20rem] lg:w-[30rem] rounded-md'/>
            <div className='mt-6 md:hidden'>
              <h2 className='capitalize font-bold text-xl mb-2 text-white'>hotel management</h2>
              <p className='text-white'>
                Install smart devices for guest room temperature control, lighting, and entertainment systems.
                Develop guest apps for room control and service requests via smartphones.
                Implement energy-efficient systems to monitor and control energy usage.
                Gather guest feedback through in-room tablets or mobile apps to enhance service quality.
              </p>
            </div>
          </div>
          <div className='md:flex justify-center items-center mb-16'>
            <img src='/Images/enterprise.jpg' className='md:w-[20rem] lg:w-[25rem] rounded-md'/>
            <div className='mt-6 md:ml-8'>
              <h2 className='capitalize font-bold text-xl mb-2 text-white'>enterprise</h2>
              <p className='text-white'>
                Control lighting, HVAC, and access with comprehensive automation systems.
                Enhance workplace safety with integrated surveillance cameras and access control systems.
                Boost productivity with smart office solutions like room scheduling systems and task automation.
                Track energy usage and occupancy patterns for informed decision-making.We Offer discounted rates for bulk purchases of smart home devices.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Commercial
