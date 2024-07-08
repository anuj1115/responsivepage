import React from 'react'
import { pricingOptions } from '../constants'
import { CheckCircle2 } from 'lucide-react'

const Pricing = () => {
  return (
    <>
       <div className='mt-20'>
         <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide'>
            Pricing
         </h2>
         <div className='flex flex-wrap p-12'>
            {pricingOptions.map((option,index)=>(
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='p-10 border border-neutral-700 rounded-xl'>
                        <p className='text-4xl mb-8'>
                            {option.title}
                            {option.title === "Pro" && 
                               <span className='bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2'>
                                 (Most popular)
                               </span>
                            }
                        </p>
                        <p className='mb-8'>
                            <span className='text-4xl mt-6 mr-2'>{option.price}</span>
                            <span className='text-neutral-400 tracing-tight'>/Month</span>
                        </p>
                        <ul>
                          {option.features.map((feature, index)=>(
                            <li key={index} className='mt-8 flex items-center'>
                                <CheckCircle2/>
                                <span className='ml-2'>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <a href="#" className='mt-16 border tracking-tight border-orange-900 rounded-lg py-1 flex items-center hover:bg-orange-900 justify-center text-xl transition duration-200'>
                            Subscribe
                        </a>
                    </div>
                </div>
            ))}

         </div>

       </div>
    </>
  )
}

export default Pricing