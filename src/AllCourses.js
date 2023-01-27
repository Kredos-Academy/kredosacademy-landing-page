import React from 'react'
import frontendImage from './Images/browser.png'
import UiDesigning from './Images/designing.png'
import backend from './Images/server.png'
import product from './Images/shopping-bag.png'
import './AllCourses.css'

function AllCourses() {
  return (
    <div className='allcourses'>
      <div>
        <div >
          <div className='course-flex'>
            <img className='course-images' src={frontendImage} alt=''/>
            <div>
              <h1 className='Course-name'>Become a Front-end ReactJS Developer</h1>
              <h1 className='Course-duration'>Duration: 20 weeks</h1>
            </div>
          </div>
          <h1 className='Course-detail'>Learn the latest technologies to become a 
          great Front-end developer and build rich, interactive web applications and user 
          interfaces with JavaScript, ES6, and React.</h1> 
          <button className='course-payment'>
            <h1 className='course-payment-text'>Pay for Course</h1>
          </button>
        </div> 


        <div className='course-design-2'>
          <div className='course-flex'>
            <img className='course-images' src={UiDesigning} alt=''/>
            <div>
             <h1 className='Course-name'>Become a UX Designer</h1>
             <h1 className='Course-duration'>Duration: 20 weeks</h1>
            </div>
          </div>
          <h1 className='Course-detail'>The UX Design course will allow you to acquire the knowledge
           and tools necessary to understand the different 
           principles of user experience design.</h1>
           <button className='course-payment'>
            <h1 className='course-payment-text'>Pay for Course</h1>
          </button>
        </div>  
      </div>


      <div>
        <div className='course-design-3'>
        <div className='course-flex'>
          <img className='course-images' src={product} alt=''/>
          <div>
           <h1 className='Course-name'>Become a Product Manager</h1>
           <h1 className='Course-duration'>Duration: 20 weeks</h1>
          </div>
        </div>
        <h1 className='Course-detail'>Master the technologies of Back-end development: JavaScript, Node.js,
        MongoDB... and use it to create the Back-end of your 
           web application independently from the Front-end part. 
          </h1>
        <button className='course-payment'>
            <h1 className='course-payment-text'>Pay for Course</h1>
          </button>
        </div>


        <div className='course-design-4'>
          <div className='course-flex'>
            <img className='course-images' src={backend} alt=''/>
            <div>
              <h1 className='Course-name'>Become a Back-end Web Developer with NodeJS</h1>
              <h1 className='Course-duration'>Duration: 20 weeks</h1>
            </div>
          </div>
          <h1 className='Course-detail'>Master the technologies of Back-end development: JavaScript, Node.js,
        MongoDB... and use it to create the Back-end of your 
           web application independently from the Front-end part. 
          </h1>
          <button className='course-payment'>
            <h1 className='course-payment-text'>Pay for Course</h1>
          </button>
        </div>

        
      </div>
    </div>
  )
}

export default AllCourses