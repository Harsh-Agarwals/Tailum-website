import React from 'react'
import {smIcons} from '../Contents/index.js'

export default function Contact() {
  return (
    <div className=' px-8 pt-10 pb-6 flex flex-1 flex-col items-center sm:flex-row flex-wrap gap-4 sm:gap-8 justify-between sm:items-start lg:justify-around md:mx-12 lg:mx-28'>
      <div className="message-us flex flex-1 flex-col items-center">
        <h2 className=' text-center font-semibold text-2xl pt-4 pb-4 text-red-800 sm:pt-0 underline underline-offset-2'>Message us</h2>
        <input type="email" name="user_email" id="user_email" placeholder='Your Email' className=' my-2 px-2 py-1 font-mono text-sm outline-red-800 text-slate-600 rounded-md w-full max-w-[270px]' />
        <textarea name="user_msg" id="user_msg" cols="30" rows="5" placeholder='Your message...' className=' max-w-[270px] px-2 py-1 font-mono text-sm outline-red-800 text-slate-500 rounded-md'></textarea>
        <button className=' bg-red-500 py-1 text-white my-4 w-40 rounded-md opacity-80 hover:opacity-100'>SEND</button>
      </div>
      <div className="social-media flex flex-1 flex-col">
        <h2 className='pt-6 pb-4 sm:pt-0 text-2xl font-semibold text-center text-red-800 underline underline-offset-2'>Contact Us</h2>
        <div className="contact-lists md:text-center pt-4">
            <p className=' tracking-wide text-amber-700 text-sm sm:pt-6 sm:py-2'><span className=' font-semibold text-amber-900'>Email@: </span><span className='hover:text-amber-600'>singhania.priyanka.7@gmail.com</span></p>
            <p className=' tracking-wide text-amber-700 text-sm'><span className=' font-semibold text-amber-900'>Call Us @: </span><span className='hover:text-amber-600'>+91 8966808236</span></p>
        </div>
        <div className="sm-icons flex flex-1 gap-2 pt-8 justify-center sm:justify-start md:justify-center">
            <a href="#"><img src={smIcons[0]} alt="facebook" className=' w-8 opacity-80 hover:opacity-100' /></a>
            <a href="#"><img src={smIcons[1]} alt="instagram" className=' w-8 opacity-80 hover:opacity-100' /></a>
            <a href="#"><img src={smIcons[2]} alt="amazon" className=' w-8 opacity-80 hover:opacity-100' /></a>
        </div>
      </div>
    </div>
  )
}
