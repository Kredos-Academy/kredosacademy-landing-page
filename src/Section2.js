import React from 'react'
import './Section2.css'

function Section2() {
  return (
    <div>
        <div>
            <h1 className='section-2-course-header'>
              Take lessons at your own convenience
            </h1> 
            <h1 className='section-2-course-paragraph'>
                Find the perfect time from your busy schedule and take lessons.
            </h1>
        </div>


        <div className='schedule'>
                <h1 className='schedule-text'> Schedule</h1>
                <h1 className='first-schedule-time'> 8:35  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </h1>
                <h1 className='schedule-course-1'>
                    UI design
                </h1>
                <h1 className='second-schedule-time'> 1:20  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </h1>
                <h1 className='schedule-course-2'>
                    Engineering
                </h1>
                <h1 className='second-schedule-time'> 4:15  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </h1>
                <h1 className='schedule-course-3'>
                    Product mgt
                </h1>
        </div>
    </div>
  )
}

export default Section2