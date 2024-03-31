import React from 'react'
import logo from '../assets/tailum_logo.png'
import {smIcons} from '../Contents/index.js'

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
            <a href="#about"><li className='text-orange-400 hover:text-orange-300 sm:hover:no-underline'>About</li></a>
            <a href="#benefits"><li className='text-orange-400 hover:text-orange-300  sm:hover:no-underline'>Benefits</li></a>
            <a href="#products"><li className='text-orange-400 hover:text-orange-300  sm:hover:no-underline'>Products</li></a>
            <a href="#contact"><li className='text-base font-semibold mt-4 sm:mt-0 sm:ms-4 bg-gradient-to-r from-amber-400 to-red-400 py-1 px-4 rounded-md text-white hover:from-amber-500 hover:to-red-500'>Contact</li></a>
        </ul>
      </div>
      <a href="https://wa.me/+918966808236/text=urlencodedtext"><img src={smIcons[3]} alt="whatsapp" className='w-10 fixed bottom-[2rem] right-[2rem] z-50' /></a>
    </div>
  )
}
