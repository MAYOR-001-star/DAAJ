import React from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const Navbar = ({sidebar, setSidebar}) => {
  return (
    <div className='flex items-center justify-between p-2 bg-slate-100 shadow-custom3 w-full fixed z-30'>
        <NavLink to='/'>
          <img src='/Images/DAAJ.png' className='h-10' alt='DAAJ logo'/>
        </NavLink>
        <button className='hover:text-blue-700 text-xl bg-red' onClick={()=>setSidebar(!sidebar)} style={{ marginLeft: sidebar ? '0px' : '0px' }}>
            {sidebar ? <FaBars /> : <FaTimes />}
        </button>
    </div>
  )
}

export default Navbar