import React, {useEffect} from 'react'
import Marquee from 'react-fast-marquee'
import Header from '../Header.jsx'
import Footer from '../../Footer.jsx'

const About = () => {
  useEffect(()=>{
    document.title = 'About - DAAJ Technologies Limited'
  },[])
  return (
    <div>
      <Header/>
      <div className='pt-24 block md:pt-[7rem] lg:grid grid-cols-2 gap-10 p-8'>
        <img src='/Images/about.png' className='rounded-md mx-auto h-[15rem] md:h-[20rem]'/>
        <p className='text-[1rem] md:text-[1.45rem] pt-10 mx-auto max-w-[35rem] lg:pt-0 lg:text-[1.2rem]'>
          DAAJ Technologies limited continues to be a top tier company from Africa implementing the technology of the internet of things to better the value of life . 
          At DAAJ , we create and automate all for the goal of simple control via artificial intelligence The Corporations tentacles spread from residential to commercial, 
          Real Estate, Industrial Applications, Agriculture Applications, Interior Designs, Entertainment Security and Surveillance amongst all others. 
          If you're looking for a technology partner that can help you turn your vision into reality, look no further. 
          Get in touch with us today and let's start a conversation about how we can help take your business to the next level.
        </p>
      </div>
      <h1 className='capitalize text-center text-2xl font-bold mb-8 lg:mt-16'>meet our team</h1>
      <div className='lg:flex justify-evenly p-6 mx-auto'>
        <div className='md:flex justify-center h-[42rem] md:h-80 w-[19rem] md:w-[40rem] mr-8 mb-16 mx-auto'>
         <img src='/Images/worker1.jpeg' className='rounded-md'/>
         <div className='pl-4 pt-8'>
          <h2 className='text-xl'>
            Damilola Ayeni
          </h2><p className='text-sm font-thin mt-[-3.5px] mb-4'>(Founder & chief executive)</p>
          <p className='text-base'>
            “DAAJ Technologies is tailored to identify and address the unique needs of each individual , 
            ensuring maximum satisfaction and creating solutions that resonates with people on a personal level. 
            This will empower individuals to curate their living environments in a way that truly reflects who they are and enhances their daily lives.”
          </p>
         </div>
        </div>
        <div className='md:flex justify-center h-[42rem] md:h-80 w-[19rem] md:w-[40rem] mt-28 lg:mt-0 mb-16 mx-auto'>
         <img src='/Images/worker.jpg' className='rounded-md'/>
         <div className='pl-4 pt-8'>
          <h2 className='text-xl'>
          Engr. Oluwaseun Anjola
          </h2><p className='text-sm font-thin mt-[-3.5px] mb-4'>(Co-Founder & Lead Engineer)</p>
          <p className='text-base'>
            “DAAJ began as a solution oriented team,driven by the belief that technology integration into everyday lives can enhance the quality ,financial prospects and work efficiency”
          </p>
         </div>
        </div>
      </div>
      <h3 className='text-center mt-8 text-xl font-bold'>Our Partners and Trusted Vendors</h3>
      <div className='mt-16 mb-40'>
        <Marquee>
          <div>
            <img src='/Images/vendor.png' className='h-[5rem]'/>
          </div>
          <div>
            <img src='/Images/vendor1.png' className='h-[5rem]'/>
          </div>
          <div>
            <img src='/Images/vendor2.png' className='h-[5rem] pr-12'/>
          </div>
          <div>
            <img src='/Images/vendor3.png' className='h-[5rem] pr-12'/>
          </div>
          <div>
            <img src='/Images/vendor4.png' className='h-[5rem] pr-12'/>
          </div>
        </Marquee>
      </div>
      <Footer/>
    </div>
  )
}

export default About
