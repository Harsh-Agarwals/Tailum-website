import React, { useEffect, useState } from 'react'
import {smIcons} from '../Contents/index.js'

export default function Contact() {

  const [email, useEmail] = useState("");
  const [message, useMessage] = useState("");

  function newEmail(e) {
    const newValue = e.target.value
    useEmail(newValue)
  }

  function newMessage(e) {
    const newValue = e.target.value
    useMessage(newValue)
  }

  const submitClicked = (e)=> {
    e.preventDefault()
    console.log(email, message);
    alert("Message sent!")
    useEmail("")
    useMessage("")
  }

  return (
    <div id='contact' className='px-8 pt-10 pb-6 flex flex-1 flex-col items-center sm:flex-row flex-wrap gap-4 sm:gap-8 justify-between sm:items-start lg:justify-around md:mx-12 lg:mx-28'>
      {/* <div className="message-us flex flex-1 flex-col items-center">
        <h2 className='text-center font-semibold text-2xl pt-4 pb-4 text-red-800 sm:pt-0 underline underline-offset-2'>Message us</h2>
        <form action="" className='flex flex-1 flex-col items-center' onSubmit={submitClicked}>
          <input type="email" name="user_email" id="user_email" placeholder='Your Email' className='my-2 px-2 py-1 font-mono text-sm outline-red-800 text-slate-600 rounded-md w-full max-w-[270px]' value={email} onChange={(e) => {newEmail(e)}} required />
          <textarea name="user_msg" id="user_msg" value={message} cols="30" rows="5" placeholder='Your message...' className='max-w-[270px] px-2 py-1 font-mono text-sm outline-red-800 text-slate-500 rounded-md' onChange={(e) => {newMessage(e)}} required></textarea>
          <button type='submit' className='bg-red-500 py-1 text-white my-4 w-40 rounded-md opacity-80 hover:opacity-100'>SEND</button>
        </form>
      </div> */}
      <div className="social-media flex flex-1 flex-col">
        <h2 className='pt-6 pb-4 sm:pt-0 text-2xl font-semibold text-center text-red-800 underline underline-offset-2'>Contact Us</h2>
        <div className="contact-lists text-center pt-4">
            <p className='tracking-wide text-amber-700 text-sm sm:pt-6 sm:py-2'><span className='font-semibold text-amber-900'>Email@: </span><span className='hover:text-amber-600'>thetailumbypriyanka@gmail.com</span></p>
            <p className='tracking-wide text-amber-700 text-sm sm:py-2'><span className='font-semibold text-amber-900'>Call Us @: </span><span className='hover:text-amber-600'>+91 8966808236</span></p>
            <p className='tracking-wide text-amber-700 text-sm sm:py-2'><span className='font-semibold text-amber-900'>Addesss: </span><span className='hover:text-amber-600'>Plot number - 12, Main road, Kosabadi, Korba: 495677, Chhattisgarh</span></p>
        </div>
        <div className="sm-icons flex flex-1 gap-2 pt-8 justify-center md:justify-center pb-6">
            <a href="https://www.facebook.com/thetailum" target='blank'><img src={smIcons[0]} alt="facebook" className='w-8 opacity-80 hover:opacity-100' /></a>
            <a href="https://www.instagram.com/the_tailum/" target='blank'><img src={smIcons[1]} alt="instagram" className='w-8 opacity-80 hover:opacity-100' /></a>
            <a href="https://www.amazon.in/dp/B0CTD2P7MN" target='blank'><img src={smIcons[2]} alt="amazon" className='w-8 opacity-80 hover:opacity-100' /></a>
        </div>
      </div>
    </div>
  )
}
