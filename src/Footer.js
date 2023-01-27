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
        <div className='footer'>
            <h1 className='footer-text'>Start learning with kredos academy</h1>
            <h1 className='footer-subtext'>A lot of course to explore including, frontend engeneering, backend engeneering amd data science</h1>
            <Link to='Application' className='applicationlink'><div className='footer-button'>
                <h1>Get Started</h1>
            </div></Link> 
        </div>
        <div className='footer-socialapps'>
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

        </div>

    </div>
  )
}

export default Footer