import React from 'react'
import { testimonials } from '../constants'

const Testimonials = () => {
  return (
    <>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl text-center mt-10 lg:mt-20'>
            What People are saying
        </h1>
        <div className='flex flex-wrap justify-center mt-10'>
           {testimonials.map((items,index)=>(
             <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                <div className='bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin'>
                    {items.text}
                    <div className='flex mt-8 items-start'>
                        <img src={items.image} alt='user' className='h-10 w-10 rounded-full border border-neutral-300'/>
                        <div className='ml-4'>
                            <h1>{items.user}</h1>
                            <p className='text-sm text-neutral-500 font-normal italic'>{items.company}</p>
                        </div>
                    </div>
                </div>
             </div>
           ))}
        </div>
    </>
  )
}

export default Testimonials