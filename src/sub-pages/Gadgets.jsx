import React, {useEffect} from 'react';
import { Parallax } from 'react-parallax';
import { NavLink } from 'react-router-dom';
import Header from '../Header';
import Footer from '../../Footer';

const Gadgets = () => {
  useEffect(()=>{
    document.title = 'Sales of Smart Home Gadgets & Accessories - DAAJ Technologies Limited'
  },[])
  return(
    <div>
      <Header/>
      <div className='pt-16'>
        <Parallax blur={10} bgImage="/Images/Gadgets.png" bgImageAlt="gadgets" strength={800} className='relative h-[20rem] w-[20rem] md:h-[25rem] md:w-[45rem] mx-auto my-12 rounded-md'>
          <div className='flex justify-center items-center absolute h-[20rem] md:h-[24rem] w-full'>
            <p className='bg-white hover:bg-blue-700 text-center py-2 border-blue-700 border-2 w-[10rem] mx-auto rounded-md'>
              <NavLink to='#'><span className='uppercase text-black'>get 2023 catalog</span></NavLink>
            </p>
          </div>   
        </Parallax>
        <div className='flex justify-center items-center mb-16 p-4 md:p-8'>
          <div className='w-[15rem] mr-6'>
            <img src='/Images/apple.png'/>
          </div>
          <div className='w-[15rem] mr-6'>
            <img src='/Images/alexa.png'/>
          </div>
          <div className='w-[15rem]'>
            <img src='/Images/works with google home.png'/>
          </div>
        </div>
        <div className='max-w-[20rem] md:max-w-[40rem] mx-auto'>
          <p className='text-blue-700 font-extralight mb-12'>
            We work closely with top-notch smart home technology providers to ensure that we offer you a wide range of high-quality products and systems. Our consultants will guide you through the product selection process, helping you choose the most suitable devices, sensors, controllers, and automation systems that align with your preferences and budget
          </p>
          <p className='text-blue-700 font-extralight mb-20'>
            We offer a wide range of smart gadgets and Accessories ranging from Smart door locks , Smart Light fittings , Smart switches , Smart dimmable rope lights, Amazon and google home assistants speakers such as Amazon Echo Speakers and Google nest hubs , LED Smart mirror , Smart Curtain controllers , Presence , smoke , fire and gas sensors , CCTV cameras and Self-cleaning robotic vacuum devices .
          </p>
        </div>
      </div>
      <Footer/>
    </div>
)};
export default Gadgets;
