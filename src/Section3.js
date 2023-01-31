import React from 'react'
import './Section3.css'

 
function Section3() { 
  return (
    <div className='section3 lg:pt-48 pt-1 lg:pb-48 pb-5'>
        <div className='pt-12 pb-12 lg:ml-32 ml-10'>
            <h1 className='lg:w-6/12 11/12 lg:text-5xl text-2xl font-semibold'>
                Affordable cost for quality education
            </h1>
            <h1 className='font-medium lg:w-5/12 w-10/12 lg:text-xl text-sm'>
                We provide flexible plans to enable students pay according to their finanacial capability
            </h1>
            
        </div> 

        <div className='lg:flex inline mr-16 lg:ml-16 ml-0 justify-around'>
            
                <div className='first-circle lg:w-1/4 w-9/12 lg:h-72 h-56 rounded-3xl lg:mt-10 mt-0 lg:ml-0 ml-12'>
                <h1 className='lg:text-3xl text-xl ml-5'> Monthly</h1>
                    <hr></hr>
                    <h1 className='circle-text text-black ml-5 lg:text-5xl text-3xl lg:mt-12 mt-6 font-extrabold'> $15<span className='first-circle-paragraph text-center lg:text-3xl text-2xl font-semibold'>/Monthly</span></h1>
                </div>
                <div className='third-circle lg:w-1/4 w-9/12 lg:h-72 h-56 rounded-3xl mt-10 lg:ml-0 ml-12'> 
                    <h1 className='text-white lg:text-3xl text-xl ml-5'>Quarterly</h1>
                    <hr></hr>
                    <h1 className='third-circle-text ml-5 lg:text-5xl text-3xl lg:mt-14 mt-6 font-extrabold'> $45<span className='first-circle-paragraph text-center lg:text-3xl text-2xl font-semibold'>/ Quarterly</span></h1>
                </div>
                <div className='second-circle lg:w-1/4 w-9/12 lg:h-72 h-56 rounded-3xl lg:mt-10 mt-10 lg:ml-0 ml-12'>
                <h1 className='lg:text-3xl text-xl ml-5'> Yearly</h1>
                    <hr></hr>
                    <h1 className='circle-text text-black ml-5 lg:text-5xl text-3xl lg:mt-12 mt-6 font-extrabold'> $100<span className='first-circle-paragraph text-center lg:text-3xl text-2xl font-semibold'>/yearly</span></h1>
                </div>
        </div>
    </div> 
  )
}

export default Section3