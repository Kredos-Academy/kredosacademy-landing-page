import React from "react";
import "./Section1.css";
import frontendImage from "./Images/browser.png";
import UiDesigning from "./Images/designing.png";
import backend from "./Images/server.png";
import product from "./Images/shopping-bag.png";

function Section1() {
  return (
    <div className="section1 flex justify-between">
      <div className="mt-52 mb-52 flex ml-20">
        <div className="mt-12 mr-6">
          <div className="first-course-1 rounded-3xl w-52 h-60 ml-2 mb-6">
            <img
              className="w-14 h-14 rounded-full mt-8 ml-6"
              src={UiDesigning}
              alt=""
            />
            <h1 className="text-2xl mt-20 ml-5">UI/UX designing</h1>
          </div>
          <div className="second-course-1 rounded-3xl w-52 h-60 ml-2 ">
            <img
              className="w-14 h-14 rounded-full mt-8 ml-6"
              src={backend}
              alt=""
            />
            <h1 className="text-2xl mt-20 ml-5">backend Engineering</h1>
          </div>
        </div>

        <div>
          <div className="first-course-2 rounded-3xl w-64 h-72 ml-2 mb-6">
            <img
              className="w-20 h-20 rounded-full mt-8 ml-6"
              src={frontendImage}
              alt=""
            />
            <h1 className="text-white text-2xl mt-24 ml-5">
              Frontend Engineering
            </h1>
          </div>
          <div className="second-course-1 rounded-3xl w-52 h-60 ml-2">
            <img
              className="w-14 h-14 rounded-full mt-8 ml-6"
              src={product}
              alt=""
            />
            <h1 className="text-2xl mt-20 ml-5">Product management</h1>
          </div>
        </div>
      </div>

      <div className="mt-72 ml-40 mr-20">
        <h1 className="text-5xl">
          Find the right course for you to replenish knowledge and goals
        </h1>
        <h1 className="text-xl font-medium">
          Browse our study areas to see what is on offer at kredos Academy, and
          learn more about the different degrees on offer, the student
          experience and application information for specific courses
        </h1>
      </div>
    </div>
  );
}

export default Section1;
