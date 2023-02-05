import React from "react";
import { BackendData } from "./BackendData";
import { Link } from "react-router-dom";
import '../AllCourses.css'

function FrontendCourse() {
  return (
    <div className="frontendcourse">
      <div className="course-design-2">
        <h1 className="Course-name">Become a UX Designer</h1>
        <h1 className="Course-detail">
          The UX Design course will allow you to acquire the knowledge and tools
          necessary to understand the different principles of user experience
          design and how to use the different types of processes to
          conceptualize a final product{" "}
        </h1>
        <div className="Course-duration-header">
          <div className="Course-duration">
            <h1 className="Course-duration-text">Duration : 20 weeks</h1>
          </div>
          <div className="Course-duration">
            <h1 className="Course-duration-text">Duration : 20 weeks</h1>
          </div>
          <div className="Course-duration">
            <h1 className="Course-duration-text">Duration : 20 weeks</h1>
          </div>
        </div>
        <button className="course-payment">
          <h1 className="course-payment-text">Pay for Course</h1>
        </button>
      </div>
      <h1 className="Course-name">Course Content</h1>
      <div>
        {BackendData.map((item, index) => (
          <div key={index}>
            <Link className="course-link" to="/frontendvideo">
              <div className="course-time-and-content">
                <h1 className="course-content">{item.title}</h1>
                <h1 className="individual-course-time">{item.duration}</h1>
              </div>{" "}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrontendCourse;
