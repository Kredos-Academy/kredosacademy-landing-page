import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import kredoslogo from './Images/kredoslogo4.png'

function Navbar() {
  return (
    <div>
      <div className="flex justify-between h-20  lg:mx-8 mx-6">
        <div className="lg:ml-12 ml-1 lg:mt-7 mt-4 lg:w-20 w-7">
          <Link
            className="no-underline"
            to="/"
          >
            <img className="max-w-xs lg:w-52 w-24 lg:h-20 h-10" src={kredoslogo} alt="" />
          </Link>
        </div>

       
        <Link className="no-underline"  to="/Application"  >
          <div className="application-button text-xs font-semibold text-center lg:w-40 w-24 lg:rounded-full rounded-3xl lg:h-16 h-8 mt-6">
            <h1 className="lg:text-xl text-md text-center text-white lg:pt-4 pt-2 no-underline">Get Started</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
