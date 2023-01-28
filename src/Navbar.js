import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flex justify-between h-20  lg:mx-8 mx-3">
        <div className="lg:ml-12 ml-2 lg:mt-10 mt-5">
          <Link
            className="kredos-logo font-extrabold lg:text-3xl text-xl text-black no-underline"
            to="/"
          >
            Kredos Academy
          </Link>
        </div>

        {/* <div className="flex mr-8 mt-10 text-xl">
          <Link
            className="mx-10 font-semibold text-black no-underline"
            to="lms"
          >
            <h1>Courses</h1>
          </Link>
          <h1 className="mx-10 font-semibold text-black no-underline">FAQs</h1>
          <h1 className="mx-10 font-semibold text-black no-underline">
            Tuition
          </h1>
        </div> */}
        <Link className="no-underline" to="/Application">
          <div className="application-button text-xs font-semibold text-center lg:w-40 w-24 lg:rounded-full rounded-3xl lg:h-16 h-8 mt-6">
            <h1 className="lg:text-xl text-md text-center text-white lg:pt-4 pt-2 no-underline">Get Started</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
