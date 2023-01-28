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
      <div className="mb-24">
        <div>
          <img
            className="h-20 w-20 ml-72 -mb-16 mt-14 mr-36 rounded-md"
            src={splash}
            alt=""
          />
          <h1 className="header-text-1 text-7xl font-medium text-center">
            Take the next step
          </h1>
          <h1 className="header-text-2 text-6xl text-center">
            toward your tech career
          </h1>
          <Link className="no-underline" to="/Application">
            <div className="start-button text-xs text-center font-semibold w-36 rounded-full h-16 mt-6 ml-600 no-underline">
              <h1 className="start-button-text">Get Started</h1>
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
