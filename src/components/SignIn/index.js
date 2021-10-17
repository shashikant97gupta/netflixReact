import React from 'react';
import SectionSeven from "../SectionSeven";
import css from "./index.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"; 

const SignIn = () => {
    return ( 
        <div>
            <div className="signin-container">
                <div className="netflix-logo">
                    <Link to="/"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
                     alt="netflix-logo" /> </Link>
                </div>
                <div className="signin-form-div">
                    <h2>Sign In</h2>
                    <form>
                        <input type="email" name="email" placeholder="User Email" />
                        <input type="password" name="pwd" placeholder="Password" />
                        <Link to="/"><button className="signin-btn">Sign In</button></Link>
                    </form>

                </div>

            </div>
            <SectionSeven />
        </div>

     );
}
 
export default SignIn;
