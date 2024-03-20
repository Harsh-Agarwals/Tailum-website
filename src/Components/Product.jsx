import React from 'react'
import ImageCarousel from './ImageCarouse.'

export default function Product({product}) {
  return (
    <div>
      <div className="head flex flex-1 flex-row items-center justify-center">
        <img src={product[4]} alt={product[0]} className=' w-16 h-16' />
        <h1 className=' font-bold tracking-wider text-2xl text-center text-slate-100 py-8 pt-8'>
          {product[0]}
        </h1>
      </div>
      <div className="props flex flex-col gap-8 items-center py-4  border-[1px] shadow-[0px_8px_44px_-4px_coral] border-red-500 rounded-md px-4 max-w-[340px] pb-12">
        <ImageCarousel images={product[1]} />
        <div className='flex flex-1 flex-col items-center gap-4 '>
            <h3 className=' font-bold text-lg text-yellow-400'>Benefits</h3>
            <ul className='text-base  text-center '>
              {
                product[2].map(p => {
                  return <li key={p} className=' font-semibold tracking-wide pt-1 text-slate-800'>{p}</li>
                })
              }
            </ul>
            <a href={product[3]} className=' w-36 text-center bg-yellow-400 opacity-80 hover:opacity-100 font-semibold text-sm py-2 px-3 rounded-3xl'>Buy on AMAZON</a>
          </div>
      </div>
      <br />
      {/* <hr className=' border-yellow-600' /> */}
    </div>
  )
}
