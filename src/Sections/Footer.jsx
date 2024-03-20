import React from 'react'

export default function Footer() {
  return (
    <div  className='flex flex-1 flex-col gap-4 sm:flex-row justify-between py-6 px-8 bg-[#0D021B] text-sm text-slate-200 tracking-wide'>
      <p>All Rights Reserved <span className=' text-amber-400'>@Tailum 2024</span></p>
      <p>Made with ❤️ by <a href="fusionlabs.co.in"><span className=' text-sky-400'>Fusion</span><span className=' text-blue-600'>Labs</span></a></p>
    </div>
  )
}
