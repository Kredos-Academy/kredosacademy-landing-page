import React from 'react'
import './Footer.css'
import twitter from './Images/twitter.png'
import facebook from './Images/facebook-logo.png'
import instagram from './Images/instagram.png'
import linkedin from './Images/linkedin.png'
import telegram from './Images/telegram.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom'

 
function Footer() {
  return (
    <div >
        <div className='footer w-full lg:h-600 h-96 lg:pb-0 pb-96'>
            <h1 className='footer-text lg:text-7xl text-3xl text-center lg:font-semibold font-bold lg:ml-64 ml-10 lg:mr-64 mr-9 lg:pt-24 pt-12 '>Start learning with kredos academy</h1>
            <h1 className='footer-subtext lg:text-xl text-sm font-medium lg:ml-72 ml-10 lg:mr-80 mr-10 text-center lg:font-normal'>A lot of course to explore including, frontend engeneering, backend engeneering amd data science</h1>
            <Link className="no-underline" to="/Application" >
            <div className="footer-button  text-center font-semibold lg:w-40 w-28 lg:rounded-full rounded-3xl lg:h-16 h-10 lg:mt-6 mt-5 lg:ml-630 ml-32 no-underline">
              <h1 className="lg:text-xl text-md text-center text-black lg:pt-4 pt-2 no-underline">Get Started</h1>
            </div>
          </Link>
          <div className='flex justify-between lg:w-2/12 w-5/12 lg:mt-28 mt-20 lg:ml-600 ml-28'>
                    <TwitterIcon fontSize="medium" sx={{ color:'white' }}/>
                    <InstagramIcon fontSize="medium" sx={{ color:'white' }} />
                    <LinkedInIcon fontSize="medium" sx={{ color:'white' }} />
                    <FacebookIcon fontSize="medium" sx={{ color:'white' }}/>
                </div>
                <h1 className='lg:text-xl text-sm font-light text-center lg:mt-6 mt-4 text-white '>All rights Reserved. © 2023 KredosAcademy Inc.</h1>
        </div>
       

    </div>
  )
}

export default Footer