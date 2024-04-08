import React, { useEffect, useRef, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const toggleDropdown1 = () => {
    setDropdown1(!dropdown1);
  };

  let dropDownRef = useRef();
  let dropDownRef1 = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!dropDownRef.current.contains(e.target)) {
        setDropdown(false);
      }
      if (!dropDownRef1.current.contains(e.target)) {
        setDropdown1(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <div className='z-10 p-4 flex justify-between hidden md:hidden lg:flex shadow-custom3 bg-slate-100 fixed w-full'>
      <div>
        <NavLink to='/'>
          <img src='/Images/DAAJ.png' className='h-10' alt='DAAJ logo'/>
        </NavLink>
      </div>
      <ul className='flex justify-between'>
        <li className='text-base hover:bg-blue-700 rounded-md active:bg-blue-700 mr-4 flex justify-center items-center'>
          <NavLink to='/' className='capitalize px-4 py-2'>
            <span className='text-black'>home</span>
          </NavLink>
        </li>
        <li className='text-base hover:bg-blue-700 rounded-md active:bg-blue-700 mr-4 flex justify-center items-center'>
          <NavLink to='/about' className='capitalize px-4 py-2'>
            <span className='text-black'>about DAAJ</span>
          </NavLink>
        </li>
        <li className='text-base hover:bg-blue-700 rounded-md active:bg-blue-700 position: relative mr-6 flex justify-center items-center' onClick={toggleDropdown1} ref={dropDownRef1}>
          <div className='capitalize px-4 py-2'>
            <span className='text-black'>solutions & services</span>
          </div><span className='pl-1 pr-2'>{dropdown1? <FaChevronUp/> : <FaChevronDown/>}</span>
          {dropdown1 && (
            <ul className='bg-slate-100 position: absolute top-12 left-24 md:left-8 z-3 w-96 p-2 rounded-md shadow-custom2'>
              <li className='capitalize py-2 hover:bg-blue-700 px-2 rounded-md'>
                <NavLink to='/services/smart-home'><span className='text-black'>smart home</span></NavLink>
              </li>
              <li className='capitalize py-2 hover:bg-blue-700 px-2 rounded-md'>
                <NavLink to='/services/commercial solutions'><span className='text-black'>commercial solutions</span></NavLink>
              </li>
              <li className='capitalize py-2 hover:bg-blue-700 px-2 rounded-md'>
                <NavLink to='/services/sales-of-home-gadgets'><span className='text-black'>sales of home gadgets and accessories</span></NavLink>
              </li>
              <li className='capitalize py-2 hover:bg-blue-700 px-2 rounded-md'>
                <NavLink to='/services/maintainance-and-support'><span className='text-black'>maintainance and support on technical services</span></NavLink>
              </li>
            </ul>
          )}
        </li>
        <li className='text-base hover:bg-blue-700 rounded-md active:bg-blue-700 mr-4 flex justify-center items-center'>
          <NavLink to='/our-smart-home-packages' className='capitalize px-4 py-2'>
            <span className='text-black'>our smart home packages</span>
          </NavLink>
        </li>
        <li className='text-base hover:bg-blue-700 rounded-md active:bg-blue-700 position: relative mr-6 flex justify-center items-center' onClick={toggleDropdown} ref={dropDownRef}>
          <div className='capitalize px-4 py-2'>
            <span className='text-black'>more</span>
          </div><span className='pl-1 pr-2'>{dropdown? <FaChevronUp/> : <FaChevronDown/>}</span>
          {dropdown && (
            <ul className='bg-slate-100 position: absolute top-12 left-24 md:left-48 lg:left-[-9rem] z-3 w-64 p-2 rounded-md shadow-custom2'>
              <li className='capitalize py-2 hover:bg-blue-700 px-2 rounded-md'>
                <NavLink to='/contact'><span className='text-black'>contact us</span></NavLink>
              </li>
              <li className='capitalize py-2 hover:bg-blue-700 px-2 rounded-md'>
                <NavLink to='/why-choose-us'><span className='text-black'>why choose us</span></NavLink>
              </li>
              <li className='capitalize py-2 hover:bg-blue-700 px-2 rounded-md'>
                <NavLink to='/blog'><span className='text-black'>blog</span></NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  )
}

export default Header
