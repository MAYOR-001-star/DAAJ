import React, { useEffect, useRef, useState } from 'react';
import { FaEllipsisH, FaBox, FaChevronDown, FaChevronUp, FaHome, FaTools, FaUserFriends } from 'react-icons/fa';
import { social } from './data';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

const Sidebar = ({ sidebar, setSidebar }) => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  const toggleDropdown1 = () => {
    setDropdown1(!dropdown1);
  };

  const dropDownRef = useRef(null);
  const dropDownRef1 = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
        setSidebar(true);
      }
      if (!dropDownRef.current.contains(e.target)) {
        setDropdown(false);
      }
      if (!dropDownRef1.current.contains(e.target)) {
        setDropdown1(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [setSidebar]);

  return (
    <div className='lg:hidden'>
      <Navbar setSidebar={setSidebar} sidebar={sidebar}/>
      <aside className={`w-80 shadow-custom z-20 h-screen grid grid-rows-custom fixed bg-slate-100 transform ${sidebar ? '-translate-x-full' : ''}`} ref={sidebarRef}>
        <ul className='ps-4 mb-16 mt-16'>
          <li className='text-base w-64 px-4 py-3 hover:bg-blue-700 rounded-md'>
            <NavLink to='/' className='flex items-center' onClick={toggleSidebar}>
              <FaHome  className='text-black'/><span className='ml-4 capitalize text-black'>home</span>
            </NavLink>
          </li>
          <li className='text-base w-64 px-4 py-3 hover:bg-blue-700 rounded-md'>
            <NavLink to='/about DAAJ' className='flex items-center' onClick={toggleSidebar}>
              <FaUserFriends className='text-black'/><span className='ml-4 capitalize text-black' text-black>about DAAJ</span>
            </NavLink>
          </li>
          <li className='text-base w-64 px-4 py-3 hover:bg-blue-700 rounded-md relative' onClick={toggleDropdown1} ref={dropDownRef1}>
            <div className='flex items-center'>
              <FaTools className='text-black'/><span className='ml-4 mr-4 capitalize text-black'>solutions & services</span>{dropdown1? <FaChevronUp/> : <FaChevronDown/>}
            </div>
            {dropdown1 && (
              <ul className='bg-slate-100 absolute top-12 left-24 md:left-48 z-10 w-64 p-2 rounded-md shadow-custom2'>
                <li className='capitalize py-2 hover:bg-blue-700 px-2 rounded-md'>
                  <NavLink to='/services/smart-home' onClick={toggleSidebar}><span className='text-black'>smart home</span></NavLink>
                </li>
                <li className='capitalize py-2 hover:bg-blue-700 px-2 rounded-md'>
                  <NavLink to='/services/sales-of-home-gadgets' onClick={toggleSidebar}><span className='text-black'>sales of home gadgets and accessories</span></NavLink>
                </li>
                <li className='capitalize py-2 hover:bg-blue-700 px-2 rounded-md'>
                  <NavLink to='/services/commercial solutions' onClick={toggleSidebar}><span className='text-black'>commercial solutions</span></NavLink>
                </li>
                <li className='capitalize py-2 hover:bg-blue-700 px-2 rounded-md'>
                  <NavLink to='/services/maintainance-and-support' onClick={toggleSidebar}><span className='text-black'>maintainance and support on technical services</span></NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className='text-base w-72 px-4 py-3 hover:bg-blue-700 rounded-md'>
            <NavLink to='/our-smart-home-packages' className='flex items-center' onClick={toggleSidebar}>
              <FaBox className='text-black'/><span className='ml-4 capitalize text-black'>our smart home packages</span>
            </NavLink>
          </li>
          <li className='text-base w-64 px-4 py-3 hover:bg-blue-700 rounded-md relative' onClick={toggleDropdown} ref={dropDownRef}>
            <div className='flex items-center'>
              <FaEllipsisH className='text-black'/><span className='ml-4 mr-4 capitalize text-black'>more</span>{dropdown? <FaChevronUp/> : <FaChevronDown/>}
            </div>
            {dropdown && (
              <ul className='bg-slate-100 absolute top-12 left-24 md:left-48 z-10 w-64 p-2 rounded-md shadow-custom2'>
                <li className='capitalize py-2 hover:bg-blue-700 px-2 rounded-md'>
                  <NavLink to='/contact' onClick={toggleSidebar}><span className='text-black'>contact us</span></NavLink>
                </li>
                <li className='capitalize py-2 hover:bg-blue-700 px-2 rounded-md'>
                  <NavLink to='/why-choose-us' onClick={toggleSidebar}><span className='text-black'>why choose us</span></NavLink>
                </li>
                <li className='capitalize py-2 hover:bg-blue-700 px-2 rounded-md'>
                  <NavLink to='/blog' onClick={toggleSidebar}><span className='text-black'>blog</span></NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <ul className='flex justify-center items-end mb-4'>
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id} className='ml-4 hover:text-blue-700'>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
