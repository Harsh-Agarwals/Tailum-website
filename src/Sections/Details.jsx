import React from 'react'
import {details} from '../Contents/index.js'
import Feature from '../Components/Feature.jsx'

export default function Details() {
  return (
    <div className="details-sec bg-yellow-400 py-16">
        <h1 className=' text-center text-4xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 text-transparent bg-clip-text'>Benefits</h1>
        <div className='flex flex-1 flex-wrap gap-8 justify-center py-10 md:px-10 lg:px-20'>
            {
                details.map(feature => {
                    return <Feature key={feature[0]} feature={feature} />
                })
            }
        </div>
    </div>
  )
}
