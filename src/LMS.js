 import React from 'react'
 import './LMS.css'
 import frontendImage from './Images/browser.png'
import UiDesigning from './Images/designing.png'
import backend from './Images/server.png'
import product from './Images/shopping-bag.png'
import Calender from './Calender'
import Time from './Time'
import Sidebar from './Sidebar'
import userImage from './Images/IMG_9675.JPG'
import './Sidebar.css'
import { UserData } from './UserData'
import { MyCoursesData } from './MyCoursesData'
import AllCourses from './AllCourses'
import { Link } from 'react-router-dom'


function truncate(input) {
    if (input.length > 35) {
       return input.substring(0, 35) + '...';
    }
    return input;
 };
 
 function LMS() {
   return (
     
        
           <div className='inner-lms-app'>
            <Sidebar />
                <div className='second-lms-part'>
                    <div className='all-courses-header'>
                    <div className='new-and-current-courses'>
                    <div className='lms-courses-header'>
                                    <h1 className='upcoming-courses'>New Courses</h1>

                              </div>
                            <div className='all-courses'> 
                                <div className='lms-designing'>
                                    <img className='ux-images' src={frontendImage} alt=''/>
                                    <h1 className='ui-texts'>Courses Learning</h1>
                                    <p>{truncate('The backend refers to a programs code that allow it to operate and that cannot be accessed by a user')}</p>
                                </div>
                                <div className='lms-designing-2'>
                                    <img className='ux-images' src={UiDesigning} alt=''/>
                                    <h1 className='ui-texts'>Pending Courses</h1>
                                    <p>{truncate('The backend refers to a programs code that allow it to operate and that cannot be accessed by a user')}</p>
                                </div>
                                <div className='lms-designing-3'>
                                    <img className='ux-images' src={frontendImage} alt=''/>
                                    <h1 className='ui-texts'>Free Courses</h1>
                                    <p>{truncate('The backend refers to a programs code that allow it to operate and that cannot be accessed by a user')}</p>
                                </div>
                            </div>

                        <div>
                                <div className='lms-courses-header'>
                                    <h1 className='upcoming-courses'>My Courses</h1>
                                </div>
                                <div className='lms-courses'>
                                        <h1 className='my-courses-header'>Course name</h1>
                                        <h1 className='my-courses-level-header'>Level</h1>
                                </div>
                                
                                    {MyCoursesData.map((item,index)=> (
                                        <div key={index}>
                                            <div className='subheader-image-and-text'>
                                            <div className='my-course-subheader'>
                                                <div>{item.image}</div>
                                                <div>
                                                    <div className='subheader-texts'>{item.text}</div>
                                                    <div className='subheader-lessons'>{item.lessons}</div>
                                                </div>
                                            </div>
                                            <h1 className='subheader-text'>{item.level}</h1>
                                            </div>
                                        </div>
                                    ))}
                        </div> 
                              
                                 
                               
                                
                            
                        </div>

                        <div className='lms-user-profile'>
                            {UserData.map((item, index) => (
                                <div key={index}>
                                    <div><img className='lms-user-image' src={userImage} alt=''/></div>
                                    <div className='lms-user-name'>{item.name}</div>
                                    <div className='lms-user-username'>{item.userName}</div>
                                </div>
                               
                            ))}
                            <div className='lms-calender'>
                              < Calender />
                              <div className='lms-time'>
                              <Time />
                              </div>
                             </div>
                            
                        </div>  
                    </div>
                    
                    

                </div>
                
                
           </div>
        
   )
 }
 
 export default LMS