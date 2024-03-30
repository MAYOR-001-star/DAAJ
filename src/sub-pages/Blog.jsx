import React, {useEffect} from 'react'
import Header from '../Header'
import Footer from '../../Footer'
import blogData from './BlogData'

const Blog = () => {
  useEffect(()=>{
    document.title = 'Blog & Why You Choose Us - DAAJ Technologies Limited'
  },[])
  return (
    <div>
      <Header/>
      <div className='pt-32 mx-auto max-w-[20rem] md:max-w-[45rem] lg:max-w-[58rem]'>
        <h1 className='font-bold italic'>5 Ways Smart Home Automation Can Improve Your Home Security</h1>
        <p className='py-8 italic'>12 April 2023</p>
        <img src='/Images/beautiful kitchen .webp' className='rounded-md'/>
      </div>
      <div className='py-8 mx-auto max-w-[21rem] md:max-w-[43rem] lg:max-w-[56rem]'>
        <h2 className='font-bold pb-4'>Protect Your Home with Smart Home Automation: 5 Ways to Improve Your Home Security</h2>
        <p>
          Your home is your sanctuary, a place where you should feel safe and secure. 
          Unfortunately, burglaries and break-ins can happen, even in the most secure neighborhoods. 
          That's why investing in a smart home automation system can provide you with advanced security features and peace of mind. 
          In this blog post, we will discuss 5 ways smart home automation can improve your home security, and how Daaj Technologies Limited can help you achieve that.
        </p>
      </div>
      <div className='mx-auto max-w-[19rem] md:max-w-[38rem] lg:max-w-[48rem]'>
        {blogData.map((data)=>{
          const{id, title, content} = data
          return(
            <div className='py-4'>
              <p key={id} className='font-bold'>{title}: <span className='font-thin'>{content}</span></p>
            </div>
          )
        })}
      </div>
      <div className='py-8 mx-auto max-w-[21rem] md:max-w-[43rem] lg:max-w-[56rem]'>
        <h3 className='font-bold pb-4'>
          How DAAJ Technologies Limited Can Help
        </h3>
        <p>
          DAAJ Technologies Limited is a leading provider of smart home automation solutions in Nigeria, with a range of products and services that can help improve your home security. 
          We offer a variety of smart locks, security cameras, motion sensors, smart lighting, and integration services, that can be tailored to your specific needs and preferences. 
          Our team of experts can provide you with a consultation and installation services, to ensure that your smart home automation system is set up correctly and meets your expectations.
        </p>
      </div>
      <div className='py-8 mx-auto max-w-[21rem] md:max-w-[43rem] lg:max-w-[56rem]'>
        <h4 className='font-bold pb-4'>
          Conclusion
        </h4>
        <p>
          Investing in smart home automation can provide you with advanced security features and peace of mind, knowing that your home is safe and secure. 
          With smart locks, security cameras, motion sensors, smart lighting, and integration with smart home security systems, you can create a comprehensive security solution that meets your needs and preferences. 
          Daaj Technologies Limited can help you achieve that, with a range of products and services that can be tailored to your specific requirements. Contact us today to learn more.
        </p>
      </div>
      <div className='py-8 mx-auto max-w-[21rem] md:max-w-[43rem] lg:max-w-[56rem]'>
        <h5 className='font-bold pb-4'>
          Get in Touch
        </h5>
        <p>
          Let us tailor a service package that meets your needs. 
          Tell us a little about your business, and we will get back to you with some ideas as soon as possible.
        </p>
      </div>
      <Footer/>
    </div>
  )
}

export default Blog
