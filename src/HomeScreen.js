import React from 'react'
import './HomeScreen.css'
import Navbar from './Navbar'
import Header from './Header'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Footer from './Footer'


function HomeScreen() {
  return (
    <div className='homescreen'>
        
        <Navbar />

        
        <Header />

        
        <Section1 /> 

       {/* <Section2 />

      <Section3 />

       <Footer /> */}
    </div>
  )
}

export default HomeScreen