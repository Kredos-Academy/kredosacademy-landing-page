import React from "react";
import "./LMS.css";
import frontendImage from "./Images/browser.png";
import UiDesigning from "./Images/designing.png";
import Calender from "./Calender";
import Time from "./Time";
import Sidebar from "./Sidebar";
import userImage from "./Images/IMG_9675.JPG";
import connection from "./Images/no-messages.png";
import "./Sidebar.css";
import { UserData } from "./UserData";
import { MyCoursesData } from "./MyCoursesData";
import PopUp from "./PopUp";
import { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


function truncate(input) {
  if (input.length > 35) {
    return input.substring(0, 35) + "...";
  }
  return input;
}
 
function LMS() {
  const [timedPopup, settimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      settimedPopup(true);
    }, 3000);
  }, []);

  return ( 
    <div>
      <div className=" lg:hidden contents">
        <div className="mobile-lms">
          <h1 className="text-3xl font-bold ml-8 pt-5 mb-4">404</h1>
          <img className="w-10/12 ml-4" src={connection} alt="" />
          <h1 className="text-3xl text-center font-bold ml-4 pt-5 ">Oops! <br></br> View on Laptop</h1>
          <h1 className="text-sm text-current text-center font-medium ml-4 pt-5 ">Sorry, this page can only be viewed on Laptop</h1>
          <Link className="no-underline" to="/" >
            <div className="bg-black text-center font-semibold lg:w-40 w-36 lg:rounded-full rounded-full lg:h-16 h-12 lg:mt-6 mt-12 lg:ml-630 ml-28 no-underline">
              <h1 className="lg:text-xl text-md text-center text-white lg:pt-4 pt-2 no-underline">Back to home</h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="lg:contents hidden">
    <div className=" inner-lms-app w-full h-800 flex justify-between ">
      <Sidebar />
      <div className="w-4/5">
        <div className="all-courses-header">
          <div className="new-and-current-courses">
            <div className="lms-courses-header">
              <h1 className="upcoming-courses">New Courses</h1>
            </div>
            <div className="all-courses">
              <div className="lms-designing">
                <img className="ux-images" src={frontendImage} alt="" />
                <h1 className="ui-texts">Courses Learning</h1>
                <p>
                  {truncate(
                    "The backend refers to a programs code that allow it to operate and that cannot be accessed by a user"
                  )}
                </p>
              </div>
              <div className="lms-designing-2">
                <img className="ux-images" src={UiDesigning} alt="" />
                <h1 className="ui-texts">Pending Courses</h1>
                <p>
                  {truncate(
                    "The backend refers to a programs code that allow it to operate and that cannot be accessed by a user"
                  )}
                </p>
              </div>
              <div className="lms-designing-3">
                <img className="ux-images" src={frontendImage} alt="" />
                <h1 className="ui-texts">Free Courses</h1>
                <p>
                  {truncate(
                    "The backend refers to a programs code that allow it to operate and that cannot be accessed by a user"
                  )}
                </p> 
              </div>
            </div>

            <PopUp trigger={timedPopup} setTrigger={settimedPopup}>
              <div>
                <Confetti className="rounded-3xl" numberOfPieces={200} width={350} height={500} />
                <h3>welcome back</h3>
                <img className="welcome-image" src={userImage} alt="" />
                <h2>Agoh Kelechi</h2>
              </div>
            </PopUp>

            <div>
              <div className="lms-courses-header">
                <h1 className="upcoming-courses">My Courses</h1>
              </div>
              <div className="lms-courses">
                <h1 className="my-courses-header">Course name</h1>
                <h1 className="my-courses-level-header">Level</h1>
              </div>

              {MyCoursesData.map((item, index) => (
                <div key={index}>
                  <div className="subheader-image-and-text">
                    <div className="my-course-subheader">
                      <div>{item.image}</div>
                      <div>
                        <div className="subheader-texts">{item.text}</div>
                        <div className="subheader-lessons">{item.lessons}</div>
                      </div>
                    </div>
                    <h1 className="subheader-text">{item.level}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lms-user-profile w-4/5">
            {UserData.map((item, index) => (
              <div key={index}>
                <div>
                  <img className="lms-user-image" src={userImage} alt="" />
                </div>
                <div className="lms-user-name">{item.name}</div>
                <div className="lms-user-username">{item.userName}</div>
              </div>
            ))}
            <div className="lms-calender">
              <Calender />
              <div className="lms-time">
                <Time />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default LMS;
