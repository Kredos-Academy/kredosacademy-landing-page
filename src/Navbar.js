import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-contents'>
            <div className='left-navbar-contents'>
            <Link className='kredos-logo' to="/">Kredos Academy</Link>
            </div>
        
            <div className='right-navbar-contents'>
               
                <Link className='kredo' to='lms'><h1 className='kredo'>Courses</h1></Link>
                <h1 className='kredo'>FAQs</h1>
                <h1 className='kredo'>Tuition</h1>

            </div>

            <Link className='applicationlink' to='/Application'><div className='application-button'>
              <h1 className='application-button-text'>Get Started</h1>
            </div></Link>
        </div>

    </div>
  ) 
}
 
export default Navbar