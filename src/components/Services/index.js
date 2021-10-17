import React from 'react';
import SectionSeven from "../SectionSeven";
import css from "./index.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Services = () => {
    return ( 
        <div>
            <div className="services-container">
                <div className="netflix-logo">
                    <Link to="/"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
                     alt="netflix-logo" /> </Link>
                </div>
               <h1>Netflix Services</h1>
            </div>
            <SectionSeven />
        </div>

     );
}
 
export default Services;
