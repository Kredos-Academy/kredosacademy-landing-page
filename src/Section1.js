import React from 'react'
import './Section1.css'
import frontendImage from './Images/browser.png'
import UiDesigning from './Images/designing.png'
import backend from './Images/server.png'
import product from './Images/shopping-bag.png'

function Section1() {
  return (
    <div className='section-1'>
      <div className='courses'>
        <div className='course-1'>
            <div className='first-course-1'>
            <img className='ui-image' src={UiDesigning} alt=''/>
              <h1 className='course-text'>UI/UX designing</h1>
            </div>
            <div className='second-course-1'>
            <img className='ui-image' src={backend} alt=''/>
              <h1 className='course-text'>backend  Engineering</h1>
            </div>
        </div>
       
        <div className='course-2'> 
            <div className='first-course-2'>
              <img className='frontend-image' src={frontendImage} alt=''/>
              <h1 className='frontend-text'>Frontend  Engineering</h1>
            </div>
            <div className='second-course-2'>
            <img className='ui-image' src={product} alt=''/>
              <h1 className='course-text'>Product management</h1>
            </div>
        </div>
      </div>


      <div className='choose-course'>
        <h1 className='course-header'>
            Find the right course for you to replenish knowledge and goals 
        </h1>
        <p className='course-paragraph'>
            Browse our study areas to see what is on offer at kredos Academy, and learn more about the different degrees on offer,
            the student experience and application information for specific courses
        </p>
      </div>
    </div>
  )
}

export default Section1