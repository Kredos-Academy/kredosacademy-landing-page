import React from 'react'
import './Section3.css'


function Section3() { 
  return (
    <div className='section3 pt-48 pb-48'>
        <div className='pt-12 pb-12 ml-32'>
            <h1 className='w-6/12 text-6xl font-semibold'>
                Affordable cost for quality education
            </h1>
            <p className='section-3-paragraph'>
                We provide flexible plans to enable students pay according to their finanacial capability
            </p>
            
        </div>

        <div className='circles'>
            
                <div className='first-circle'>
                <h1 className='timeframe-text'> Monthly</h1>
                    <hr></hr>
                    <h1 className='first-circle-text'> $15<span className='first-circle-paragraph'>/yearly</span></h1>
                </div>
                <div className='third-circle'> 
                    <h1 className='timeframe-text2'>Quarterly</h1>
                    <hr></hr>
                    <h1 className='third-circle-text'> $45<span className='first-circle-paragraph'>/yearly</span></h1>
                </div>
                <div className='second-circle'>
                <h1 className='timeframe-text'> Yearly</h1>
                    <hr></hr>
                    <h1 className='first-circle-text'> $100<span className='first-circle-paragraph'>/yearly</span></h1>
                </div>
        </div>
    </div> 
  )
}

export default Section3