import React from 'react';
import SectionSeven from "../SectionSeven";
import css from "./index.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const SignUp = () => {
    return ( 
        <div>
            <div className="signup-container">
                <div className="netflix-logo">
                    <Link to="/"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
                     alt="netflix-logo" /> </Link>
                </div>
                <div className="signup-form-div">
                    <h2>Sign Up</h2>
                    <form>
                        <input type="text" name="username" placeholder="User Name" />
                        <input type="email" name="email" placeholder="User Email" />
                        <input type="password" name="pwd" placeholder="Password" />
                        <input type="password" name="pwd" placeholder="Confirm Password" />
                        <Link to="/"><button className="register-btn">Register</button></Link>
                    </form>

                </div>

            </div>
            <SectionSeven />
        </div>

     );
}
 
export default SignUp;
