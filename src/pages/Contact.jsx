import React, {useEffect} from 'react'
import Header from '../Header'
import { social } from '../data';
import Footer from '../../Footer'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import MyForm from '../MyForm';

const Contact = () => {
  useEffect(()=>{
    document.title = 'Contact Us - DAAJ Technologies Limited - DAAJ Technologies Limited'
  },[])
  return (
    <div>
      <Header/>
      <div className="pt-16 mb-12 w-full relative bg-gradient-to-r from-transparent to-rgba-gray">
        <img src='/Images/pexels-4.jpg' className='w-full h-full object-cover absolute mix-blend-overlay'/>
        <h1 className='text-center mb-12 capitalize text-3xl font-bold text-white mt-12'>contact us</h1>
        <div className='grid place-items-center md:flex justify-center items-center mb-12 relative'>
          <div className='w-[20rem]'>
            <div>
              <div className='flex justify-center items-center mb-8'>
                <h2 className='title text-center text-white'>Get In Touch</h2>
              </div>
              <p className='text-white mb-6 text-center'>
                <FaMapMarkerAlt className='inline mr-4'/>Ayobabatunde Cresent,Oniru Lekki
              </p>
              <p className='text-white mb-6 text-center'>
                <FaPhone className='inline mr-4'/>+234 907668 4955
              </p>
              <p className='text-white mb-6 text-center'>
                <FaEnvelope className='inline mr-4'/>info@daajtechng.com
              </p>
            </div>
            <div className='mb-8'>
              <div className='flex justify-center items-center mb-8'>
                <h2 className='title text-center text-white'>Find Us</h2>
              </div>
              <iframe src="https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1sAyobabatunde+Cresent,Oniru+Lekki!5e0!6i10" title="Example Website" frameBorder="0" allowFullScreen className='mx-auto rounded'/>
            </div>
            <div className='pb-8'>
              <div className='flex justify-center items-center mb-8'>
                <h2 className='title text-center text-white'>Follow Us</h2>
              </div>
              <ul className='flex justify-center items-end mt-4'>
                {social.map((link) => {
                  const { id, url, icon } = link;
                  return (
                    <li key={id} className='mr-4 hover:bg-blue-700 text-white bg-gray-400 rounded-md p-2'>
                      <a href={url}>{icon}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <MyForm/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
