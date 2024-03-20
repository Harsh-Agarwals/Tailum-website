import React from 'react'
import Product from '../Components/Product'
import {products} from '../Contents/index.js'

export default function Products() {
  return (
    <div className=' bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-16'>
        <h1 className='text-center font-bold text-4xl bg-gradient-to-r from-red-600 to-amber-300 text-transparent bg-clip-text pb-4'>Our Products</h1>
        <div className='flex flex-wrap gap-4 justify-center lg:px-20'>
            {
                products.map(product => {
                    return (
                        <div key={product[0]}>
                            <Product product={product} />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
