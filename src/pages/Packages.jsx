import React,{useEffect} from 'react'
import Header from '../Header'
import Footer from '../../Footer'

const Packages = () => {
  useEffect(()=>{
    document.title = 'Our Smart Home Packages - DAAJ Technologies Limited'
  },[])
  return (
    <div>
      <Header/>
      <div className='pt-[5rem]'>
        <div className='mx-auto w-[20rem] md:w-[40rem] mb-14'>
          <h1 className='text-center p-6 text-xl font-bold'>DAAJ Smart Home Packages</h1>
          <p className='text-center py-4 text-xl'>
            The possibilities of home automation solutions from DAAJ are almost infinite. 
            We help customize homes to suit your taste. The functionality that a DAAJ solution can offer is based on the automation and control you require. 
            Speaking with your DAAJ installer will help you decide and from there they are best placed to provide you with a quote. 
            To give you an idea, we have prepared an example of a typical (115 m2) house with three options.
          </p>
          <img src='/Images/daaj floorplan packages.webp'/>
        </div>
        <div className='bg-slate-100 mx-auto max-w-[20rem] md:max-w-[48rem] p-4 rounded mb-16'>
          <h1 className='text-center text-2xl py-8 font-bold'>Smart Option</h1>
          <div className='md:flex justify-center items-center'>
            <img src='/Images/homeSeq.webp' className='w-[30rem] mr-16 rounded'/>
            <ul className='mt-4'>
              <li className='mb-2'>2.5M -3.3M Naira</li>
              <li className='mb-2'>Lighting Switches</li>
              <li className='mb-2'>AC Switches</li>
              <li className='mb-2'>Water Heater Switches</li>
              <li className='mb-2'>Google minis</li>
              <li className='mb-2'>Nest Hub</li>
              <li className='mb-2'>Smart Door Lock</li>
              <li className='mb-2'>P2P Camera</li>
              <li className='mb-2'>6 Months Warranty</li>
            </ul> 
          </div>
          <p className='mx-auto max-w-[46rem] text-center my-8 text-xl'>
            The smart option is the starter pack for anyone that wants to get into smart housing. 
            This covers your living room, kitchen, outdoor hallway and three bedrooms.
          </p>
        </div>
        <div className='bg-slate-100 mx-auto max-w-[20rem] md:max-w-[48rem] p-4 rounded mb-16'>
          <h1 className='text-center text-2xl py-8 font-bold'>The Standard Option</h1>
          <div className='md:flex justify-center items-center'>
            <img src='/Images/homePics.webp' className='w-[30rem] mr-16 rounded'/>
            <ul className='mt-4'>
              <li className='mb-2'>3.5M -4.5M Naira</li>
              <li className='mb-2'>Lighting Switches</li>
              <li className='mb-2'>AC Switches</li>
              <li className='mb-2'>Water Heater Switches</li>
              <li className='mb-2'>Google minis</li>
              <li className='mb-2'>Nest Hub</li>
              <li className='mb-2'>Smart Door Lock</li>
              <li className='mb-2'>P2P Camera</li>
              <li className='mb-2'>Presence Sensor</li>
              <li className='mb-2'>6 Months Warranty</li>
              <li className='mb-2'>EXTRA ACCESSORIES : Smart Plugs</li>
            </ul> 
          </div>
          <p className='mx-auto max-w-[46rem] text-center my-8 text-xl'>
            The Standard Option is the extra layer of convenience for your home with the core features of a smart home, you can include additional features down the line if you want to. 
            This covers your living area, kitchen, outdoor Hallway, and three bedrooms.
          </p>
        </div>
        <div className='bg-slate-100 mx-auto max-w-[20rem] md:max-w-[48rem] p-4 rounded mb-16'>
          <h1 className='text-center text-2xl py-8 font-bold'>The Premium DAAJ Smart Option</h1>
          <div className='md:flex justify-center items-center'>
            <img src='/Images/KitchenCrop.png' className='w-[30rem] mr-16 rounded'/>
            <ul className='mt-4'>
              <li className='mb-2'>5M-7M Naira</li>
              <li className='mb-2'>Lighting switches</li>
              <li className='mb-2'>AC switches</li>
              <li className='mb-2'>Water Heater switches</li>
              <li className='mb-2'>Google minis</li>
              <li className='mb-2'>Nest Hub</li>
              <li className='mb-2'>Smart Door Lock</li>
              <li className='mb-2'>P2P Camera</li>
              <li className='mb-2'>Presence Sensor</li>
              <li className='mb-2'>In ceiling speakers</li>
              <li className='mb-2'>Dimmable lights</li>
              <li className='mb-2'>Smart Curtains</li>
              <li className='mb-2'>12 Months Warranty</li>
              <li className='mb-2'>EXTRA ACCESSORIES: Smart Vacuum Robotic Cleaner</li>
            </ul> 
          </div>
          <p className='mx-auto max-w-[46rem] text-center my-8 text-xl'>
            If u are looking to add a little more swagger to your home this is the right choice for you . 
            This covers your living area, kitchen, outdoor, Staircase, three bedrooms and house surroundings lighting.
          </p>
        </div>
        <div className='bg-slate-100 mx-auto max-w-[20rem] md:max-w-[48rem] p-4 rounded mb-16'>
          <h1 className='text-center text-2xl py-8 font-bold'>Dexter Platinum Option</h1>
          <div className='md:flex justify-center items-center'>
            <img src='/Images/homePics.webp' className='w-[30rem] mr-16 rounded'/>
            <ul className='mt-4'>
              <li className='mb-2'>2.5M -3.3M Naira</li>
              <li className='mb-2'>Lighting Switches</li>
              <li className='mb-2'>AC Switches</li>
              <li className='mb-2'>Water Heater Switches</li>
              <li className='mb-2'>Google minis</li>
              <li className='mb-2'>Nest Hub</li>
              <li className='mb-2'>Smart Door Lock</li>
              <li className='mb-2'>P2P Camera</li>
              <li className='mb-2'>6 Months Warranty</li>
            </ul> 
          </div>
          <p className='mx-auto max-w-[46rem] text-center my-8 text-xl'>
            The Dexter Platinum Option is meant for multi-Apartment Buildings, Estates, Business Space, Hotels, Air buds and shortlets
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Packages
