import React from 'react'
import './Footer.css'
import twitter from './Images/twitter.png'
import facebook from './Images/facebook-logo.png'
import instagram from './Images/instagram.png'
import linkedin from './Images/linkedin.png'
import telegram from './Images/telegram.png'
import { Link } from 'react-router-dom'
 
function Footer() {
  return (
    <div >
        <div className='footer w-full lg:h-600 h-64 lg:pb-0 pb-80'>
            <h1 className='footer-text lg:text-6xl text-3xl text-center lg:font-semibold font-bold lg:ml-60 ml-10 lg:mr-64 mr-9 lg:pt-32 pt-20 '>Start learning with kredos academy</h1>
            <h1 className='footer-subtext lg:text-xl text-sm font-medium lg:ml-72 ml-10 lg:mr-80 mr-10 text-center lg:font-normal'>A lot of course to explore including, frontend engeneering, backend engeneering amd data science</h1>
            <Link className="no-underline" to="/Application" >
            <div className="footer-button  text-center font-semibold lg:w-40 w-28 lg:rounded-full rounded-3xl lg:h-16 h-10 lg:mt-6 mt-12 lg:ml-630 ml-32 no-underline">
              <h1 className="lg:text-xl text-md text-center text-black lg:pt-4 pt-2 no-underline">Get Started</h1>
            </div>
          </Link>
        </div>
       {/*  <div className='footer-socialapps'>
            <div className='navbar-contents'>
                <div className='left-navbar-contents'>
                    <h1 className='kredos-logo'>Kredos Academy</h1>
                    <h1 className='copyright'>All rights Reserved. © 2023 KredosAcademy Inc.</h1>
                </div>
            
                <div className='right-navbar-contents'>
                
                    <h1 className='kredo'>Courses</h1>
                    <h1 className='kredo'>FAQs</h1>
                    <h1 className='kredo'>Tuition</h1>

                </div>

                <div >
                <h1 className='follow-us'>follow us</h1>
                <div className='social-icons'>
                    <img className='social-icon' src={twitter} alt=''/>
                    <img className='social-icon' src={telegram} alt=''/>
                    <img className='social-icon' src={instagram} alt=''/>
                    <img className='social-icon' src={facebook} alt=''/>
                    <img className='social-icon' src={linkedin} alt=''/>
                </div>
            
                </div>
            </div>

        </div> */}

    </div>
  )
}

export default Footer