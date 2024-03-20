import React from 'react'

export default function Feature({feature}) {
  return (
    <div className=' border-[1px] px-4 py-2 max-w-[250px] shadow-[0px_8px_14px_-4px_crimson] hover:shadow-[8px_8px_14px_-4px_crimson] border-yellow-600 rounded-lg text-center'>
        <img src={feature[0]} alt={feature[1]} className=' w-20 m-auto py-4 mt-3 bg-orange-600 px-4 rounded-full' />
      <h1 className='font-bold pt-4 text-purple-800 text-lg leading-[22px]'>{feature[1]}</h1>
      <p className='py-2 pt-3 text-sm text-pink-700 tracking-wide'>{feature[2]}</p>
    </div>
  )
}
