import React from 'react'
import { frontendData } from './FrontendData'
import { Link } from 'react-router-dom'

function FrontendCourse() {
  return (
    <div className='frontendcourse'>
        <div className='course-design-1'>
            <h1 className='Course-name'>Become a Front-end ReactJS Developer</h1>
            <h1 className='Course-detail'>Learn the latest technologies to become a 
          great Front-end developer and build rich, interactive web applications and user 
          interfaces with JavaScript, ES6, and React.</h1>
          <div className='Course-duration-header'>
            <div className='Course-duration'>
                <h1 className='Course-duration-text'>Duration : 20 weeks</h1>
            </div>
            <div className='Course-duration'>
                <h1 className='Course-duration-text'>Duration : 20 weeks</h1>
            </div>
            <div className='Course-duration'>
                <h1 className='Course-duration-text'>Duration : 20 weeks</h1>
            </div>
          </div>
          <button className='course-payment'>
            <h1 className='course-payment-text'>Pay for Course</h1>
          </button>
        </div>
        <h1 className='Course-name'>Course Content</h1>
        <div>
            {frontendData.map((item,index) => (
                <div key={index}>
                    <Link className='course-link' to='/frontendvideo'><div className='course-time-and-content'>
                        <h1 className='course-content'>{item.title}</h1>
                        <h1 className='individual-course-time'>{item.duration}</h1>
                    </div> </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FrontendCourse