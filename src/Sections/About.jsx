import React from 'react'
import bottle from "../assets/tt1.png"

export default function About() {
  return (
    <div id='about' className='px-8 py-16 flex flex-1 flex-col items-center justify-center gap-12 sm:gap-4 sm:flex-row'>
      <div className="about sm:max-w-[60%]">
        <h1 className=' font-bold text-3xl py-4 tracking-wide text-gray-700'>
            <span className=' bg-gradient-to-r from-amber-600 to-red-600 text-transparent bg-clip-text'>Tailum Premium Oils:</span> The Golden Elixir for Hair and Skin</h1>

        <p className=' tracking-wide text-slate-500 pb-8'>Premium quality oil extracted from the finest <strong className=' text-amber-600'>seeds</strong> using a traditional <strong className=' text-amber-600'>cold-pressing method</strong>. This process preserves the natural goodness of the seeds, resulting in an oil that is <strong className=' text-red-600'>rich in nutrients</strong> and has a variety of benefits for hair and skin.</p>
        
        <a href="https://www.amazon.in/dp/B0CTD2P7MN" className='py-[6px] px-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md text-white font-semibold tracking-wide opacity-100 hover:opacity-80'>Buy Now</a>
      </div>
      <div className="image">
        <img src={bottle} alt="bottle" className=' h-[20rem] sm:h-auto lg:h-[20rem]' />
      </div>
    </div>
  )
}
