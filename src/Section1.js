import React from "react";
import "./Section1.css";
import frontendImage from "./Images/browser.png";
import UiDesigning from "./Images/designing.png";
import backend from "./Images/server.png";
import product from "./Images/shopping-bag.png";

function Section1() {
  return (
    <div className="section1 lg:flex inline justify-between">
      <div className="lg:mt-52 mt-0 lg:mb-52 mb-14 flex ml-16">
        <div className="lg:mt-12 mt-2 lg:mr-6 mr-2">
          <div className="first-course-1 rounded-3xl lg:w-52 w-24 lg:h-60 h-28 ml-2 lg:mb-6 mb-3 ">
            <img
              className="lg:w-14 w-8 lg:h-14 h-8 rounded-full lg:mt-8 mt-2 lg:ml-6 ml-3"
              src={UiDesigning}
              alt="" 
            />
            <h1 className="lg:text-2xl text-sm lg:mt-20 mt-6 lg:ml-5 ml-3">UI/UX designing</h1>
          </div>
          <div className="second-course-1 rounded-3xl lg:w-52 w-24 lg:h-60 h-28 ml-2">
            <img
              className="lg:w-14 w-8 lg:h-14 h-8 rounded-full lg:mt-8 mt-2 lg:ml-6 ml-3"
              src={backend}
              alt=""
            />
            <h1 className="lg:text-2xl text-sm lg:mt-20 mt-6 lg:ml-5 ml-3">backend Engineering</h1>
          </div>
        </div> 

        <div className="lg:mt-0 -mt-6">
          <div className="first-course-2 rounded-3xl lg:w-64 w-28 lg:h-72 h-32 ml-2 lg:mb-6 mb-3 lg:mt-0 mt-4 lg:pt-4 pt-1">
            <img
              className="lg:w-14 w-8 lg:h-14 h-8 rounded-full lg:m-10 mt-2 lg:ml-6 ml-3"
              src={frontendImage}
              alt=""
            />
            <h1 className="text-white lg:text-2xl text-sm lg:mt-24 mt-6 lg:ml-5 ml-3">
              Frontend Engineering
            </h1>
          </div>
          <div className="second-course-1 rounded-3xl lg:w-52 w-24 lg:h-60 h-28 ml-2">
            <img
              className="lg:w-14 w-8 lg:h-14 h-8 rounded-full lg:mt-8 mt-2 lg:ml-6 ml-3"
              src={product}
              alt=""
            />
            <h1 className="lg:text-2xl text-sm lg:mt-20 mt-6 lg:ml-5 ml-3">Product management</h1>
          </div>
        </div>
      </div>

      <div className="lg:mt-72 mt-3 lg:ml-40 ml-10 lg:mr-20 mr-9">
        <h1 className="lg:text-5xl text-2xl font-semibold lg:mb-0 mb-4">
          Find the right course for you to replenish knowledge and goals
        </h1>
        <h1 className="lg:text-xl text-sm font-medium">
          Browse our study areas to see what is on offer at kredos Academy, and
          learn more about the different degrees on offer, the student
          experience and application information for specific courses
        </h1>
      </div>
    </div>
  );
}

export default Section1;
