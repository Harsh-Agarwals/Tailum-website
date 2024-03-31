import React from 'react'
import {smIcons} from '../Contents/index.js'
import Navbar from './Navbar.jsx'

export default function FullNavbar() {
  return (
    <div>
        <Navbar />
      <a href="https://wa.me/+918966808236/text=urlencodedtext"><img src={smIcons[3]} alt="whatsapp" className='w-10 fixed bottom-[2rem] right-[2rem] z-50' /></a>
    </div>
  )
}
