import React from 'react'
import logo from '../assets/tailum_logo.png'

export default function Navbar() {
  return (
    <div className=' text-center flex flex-1 flex-col sm:flex-row sm:justify-around items-center py-10 gap-8 bg-gradient-to-br from-violet-900 to-pink-600'>
      <div className="logo">
        <a href="#">
            <img src={logo} alt="logo" className=' w-52' />
        </a>
      </div>
      <div className="menu">
        <ul className='flex flex-col sm:flex-row sm:items-center sm:gap-5 sm:mt-4 md:gap-5 gap-1 font-normal text-base'>
            <a href="#" className='text-orange-400 hover:text-orange-300 sm:hover:no-underline'><li>About</li></a>
            <a href="#" className='text-orange-400 hover:text-orange-300  sm:hover:no-underline'><li>Benefits</li></a>
            <a href="#" className='text-orange-400 hover:text-orange-300  sm:hover:no-underline'><li>Products</li></a>
            <button className=' text-base font-semibold mt-4 sm:mt-0 sm:ms-4 bg-gradient-to-r from-amber-400 to-red-400 py-1 px-4 rounded-md text-white hover:from-amber-500 hover:to-red-500'>Contact</button>
        </ul>
        <div className="contact">
        </div>
      </div>
    </div>
  )
}
