import React from 'react'
import logo from '../assets/tailum_logo.png'

export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if(section) {
      window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop
      })
    }
  }
  return (
    <div className=' text-center flex flex-1 flex-col sm:flex-row sm:justify-around items-center py-10 gap-8 bg-gradient-to-br from-violet-900 to-pink-600'>
      <div className="logo">
        <a href="#">
            <img src={logo} alt="logo" className=' w-52' />
        </a>
      </div>
      <div className="menu">
        {/* <ul className='flex flex-col sm:flex-row sm:items-center sm:gap-5 sm:mt-4 md:gap-5 gap-1 font-normal text-base'>
            <a href="#about"><li className='text-orange-400 hover:text-orange-300 sm:hover:no-underline'>About</li></a>
            <a href="#benefits"><li className='text-orange-400 hover:text-orange-300  sm:hover:no-underline'>Benefits</li></a>
            <a href="#products"><li className='text-orange-400 hover:text-orange-300  sm:hover:no-underline'>Products</li></a>
            <a href="#contact"><li className='text-base font-semibold mt-4 sm:mt-0 sm:ms-4 bg-gradient-to-r from-amber-400 to-red-400 py-1 px-4 rounded-md text-white hover:from-amber-500 hover:to-red-500'>Contact</li></a>
        </ul> */}
        <ul className='flex flex-col sm:flex-row sm:items-center sm:gap-5 sm:mt-4 md:gap-5 gap-1 font-normal text-base'>
            <li onClick={() => scrollToSection('about')} className='text-orange-400 hover:text-orange-300 sm:hover:no-underline cursor-pointer'>About</li>
            <li onClick={() => scrollToSection('benefits')} className='text-orange-400 hover:text-orange-300  sm:hover:no-underline cursor-pointer'>Benefits</li>
            <li onClick={() => scrollToSection('products')} className='text-orange-400 hover:text-orange-300  sm:hover:no-underline cursor-pointer'>Products</li>
            <li onClick={() => scrollToSection('contact')} className='text-base font-semibold mt-4 sm:mt-0 sm:ms-4 bg-gradient-to-r from-amber-400 to-red-400 py-1 px-4 rounded-md text-white hover:from-amber-500 hover:to-red-500 cursor-pointer'>Contact</li>
        </ul>
      </div>
    </div>
  )
}
