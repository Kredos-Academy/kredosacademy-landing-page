import React from "react";
import "./Header.css";
import frontendImage from "./Images/browser.png";
import UiDesigning from "./Images/designing.png";
import backend from "./Images/server.png";
import product from "./Images/shopping-bag.png";
import splash from "./Images/splash.png";
import userImage from "./Images/IMG_9675.JPG";
import { Link } from "react-router-dom";
 
function Header() {
  return (  
    <div> 
      <div className="lg:mb-14 mb-24">
        <div>
          <img
            className="lg:h-20 h-10 lg:w-20 w-10 lg:ml-72 ml-5 lg:-mb-16 mb-1 lg:mt-24 mt-10 mr-36 rounded-md"
            src={splash}
            alt=""
          />
          <h1 className="header-text-1 lg:text-7xl text-3xl lg:font-bold font-bold text-center lg:mx-0 mx-4">
            Take the next step
          </h1>
          <h1 className="header-text-2 lg:text-6xl text-2xl text-center">
            toward your tech career
          </h1>
          <Link className="no-underline" to="/Application">
            <div className="start-button text-xs text-center font-semibold lg:w-40 w-28 lg:rounded-full rounded-3xl lg:h-16 h-10 mt-6 lg:ml-600 ml-32 no-underline">
              <h1 className="lg:text-xl text-md text-center text-white lg:pt-4 pt-3 no-underline">Get Started</h1>
            </div>
          </Link>
        </div>

        {/*  <div className='lms'>
     
           <div className='inner-lms'>
                <div className='left-inner-lms'>
                    <h1 className='subjects'>Subjects</h1>
                    <h1 className='subject'>English</h1>
                    <h1 className='subject'>Maths</h1> 
                    <h1 className='subject'>Biology</h1>
                    <h1 className='subject'>Chemistry</h1>
                   
                </div>
                <div className='all-courses-header'>
                    <div>
                        <h1>Select course</h1>
                        <div className='all-courses'>
                            <div className='designing'>
                                <img className='ux-image' src={frontendImage} alt=''/>
                                <h1 className='ui-text'>Frontend Engineering</h1>
                            </div>
                            <div className='designing'>
                                <img className='ux-image' src={UiDesigning} alt=''/>
                                <h1 className='ui-text'>UI/UX designing</h1>
                            </div>
                            <div className='designing'>
                                <img className='ux-image' src={backend} alt=''/>
                                <h1 className='ui-text'>Backend Engineering</h1>
                            </div>
                            <div className='designing'>
                                <img className='ux-image' src={product} alt=''/>
                                <h1 className='ui-text'>Product Management</h1>
                            </div>
                        </div>
                    </div>

                    <div className='user-profile'>
                        <img className='user-image' src={userImage} alt=''/>
                        <h1 className='user-name'>Agoh kelechi</h1>
                        <h1 className='user-username'>@kellyblixz</h1>
                    </div>
                    
                    
                </div>
                
           </div>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
