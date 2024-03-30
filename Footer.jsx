import React from 'react'
import { socialLinks } from './src/data'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-header'>
        <div>
          <ul className='flex justify-center items-center pading-left'>
            {socialLinks.map((socialLink) => {
              const { id, url, icon } = socialLink;
              return (
                <li key={id} className='mr-4 bg-blue-700 icon-spacey rounded-md'>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='grid grid-rows-1 justify-center mb-8'>
          <h1 className='capitalize mb-4 text-xl text-blue-700'>quick links</h1>
          <NavLink to='/' className='capitalize mb-4 text-blue-700'>home</NavLink>
          <NavLink to='/about DAAJ' className='capitalize mb-4 text-blue-700'>about DAAJ</NavLink>
          <NavLink to='#' className='mb-4 text-blue-700 uppercase'>FAQ</NavLink>
          <NavLink to='/contact' className='mb-4 bg-blue-700 text-white p-2 text-center capitalize rounded-md'>contact</NavLink>
        </div>
        <div className='grid grid-rows-1 justify-center items-center'>
          <h1 className='capitalize mb-4 spacey text-xl text-blue-700'>our services</h1>
            <NavLink to='services/smart home consultancy' className='capitalize text-sm spacey text-blue-700'>smart home solutions</NavLink>
            <NavLink to='services/smart home gadgets' className='capitalize text-sm spacey text-blue-700'>commercial solutions</NavLink>
            <NavLink to='services/web/mobile appliances' className='capitalize text-sm spacey text-blue-700'>sales of home gadgets and accessories</NavLink>
            <NavLink to='services/maintainance and support' className='capitalize text-sm spacey text-blue-700'>maintenance and support on technical services</NavLink>
        </div>
      </div>
      <div className='flex justify-between items-center spaceey'>
        <p className='capitalize text-blue-700'>Copyright © 2024 DAAJ Technologies Limited</p>
        <p className='capitalize text-blue-700'>Powered By DAAJTechnologies</p>
      </div>
    </div>
  )
}

export default Footer
