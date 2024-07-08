import React from 'react'
import code from '../assets/code.jpg'
import { CheckCircle2 } from 'lucide-react'
import { checklistItems } from '../constants'

const WorkFlow = () => {
  return (
    <div className='relative mt-20 '>
        <div className='text-center'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl mt-6 lg:mt-20 tracking-wide'>
                Accelerate your
                <span className='bg-gradient-to-r from-orange-500 to bg-orange-800 text-transparent bg-clip-text'>
                    {" "} coding workflow
                </span>
            </h2>
        </div>
        <div className='flex flex-wrap justify-center mt-2 p-4'>
            <div className='w-full lg:w-1/2'>
                  <img src={code} alt='code'/>
            </div>
            <div className='pt-12 w-full lg:w-1/2'>
                {checklistItems.map((items,index)=>(
                    <div key={index} className='flex mb-12'>
                        <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 
                        justify-center items-center rounded-full'>
                            <CheckCircle2/>
                        </div>
                        <div className='mt-1 items-center justify-center'>
                            {items.title}
                            <p className='text-md p-2 mb-2 text-neutral-500'>
                                {items.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     </div>
  )
}

export default WorkFlow