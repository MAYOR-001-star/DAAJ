import React from 'react'
import Header from '../Header.jsx'
import { Link, NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <Header/>
      <div className='flex justify-center items-center pt-28 px-6'>
        <div>
          <h1 className='text-center text-9xl font-semibold'>404</h1>
          <p className='capitalize mb-4 text-center'>oops! sorry page not found...</p>
          <button className='flex justify-center mx-auto'>
            <NavLink to='/' className='bg-blue-700 text-white rounded-lg p-2 px-4 hover:bg-white hover:text-blue-700 border-2 border-blue-700'>Go Back</NavLink>
          </button>
        </div>
        <div className='hidden md:flex justify-center ml-24'>
          <img src='/Images/error pic.svg' alt='error-icon' className='w-27rem h-80'/>
        </div>
      </div>
    </div>
  )
}

export default Error
