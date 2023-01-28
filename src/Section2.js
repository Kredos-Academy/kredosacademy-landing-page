import React from 'react'
import './Section2.css'

function Section2() {
  return (
    <div className='section2'>
        <div>
            <h1 className='lg:text-6xl text-2xl text-center font-bold lg:ml-64 ml-10 lg:mr-64 mr-9 lg:mt-0 mt-20'>
              Take lessons at your own convenience
            </h1> 
            <h1 className='lg:text-xl text-sm font-medium lg:ml-64 ml-10 lg:mr-64 mr-10 text-center lg:font-normal'>
                Find the perfect time from your busy schedule and take lessons.
            </h1>
        </div> 


        <div className='schedule lg:w-2/3 w-10/12 lg:h-420 h-64 lg:ml-64 ml-8 mb-20 lg:mt-20 mt-5 rounded-xl'>
                <h1 className='ml-12 pt-8 lg:text-2xl text-base'> Schedule</h1>
                <h1 className='lg:text-xl text-sm font-light lg:-ml-20 ml-0 lg:mt-16 mt-2 lg:mb-16 mb-4 lg:pl-0 pl-2 lg:pr-0 pr-2'> 8:35   &nbsp; &nbsp;   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </h1>
                <h1 className='schedule-course-1 lg:w-48 w-20 lg:h-10 h-7 rounded-xl lg:-mt-28 -mt-14 lg:-ml-10 -ml-3 lg:text-lg text-xs text-center pt-1'>
                    UI design
                </h1>
                <h1 className='lg:text-xl text-sm font-light lg:-ml-28 ml-0 lg:mt-16 mt-2 lg:mb-16 mb-4 lg:pl-0 pl-2 lg:pr-0 pr-2'> 4:15   &nbsp; &nbsp;   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </h1>
                <h1 className='schedule-course-2 lg:w-48 w-20 lg:h-10 h-7 rounded-xl lg:-mt-28 -mt-16  lg:text-lg text-xs text-center pt-1'>
                    Engineering
                </h1>
                <h1 className='lg:text-xl text-sm font-light lg:ml-2 ml-0 lg:mt-16 mt-7 mb-16 lg:pl-0 pl-2 lg:pr-0 pr-2'> 2:26   &nbsp; &nbsp;   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </h1>
                <h1 className='schedule-course-3 lg:w-48 w-20 lg:h-10 h-7 rounded-xl -mt-28  lg:text-lg text-xs text-center pt-1'>
                    Product Mgt
                </h1>
        </div>
    </div>
  )
}

export default Section2 