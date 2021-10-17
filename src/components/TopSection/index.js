import React from 'react';
import css from "./index.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const TopSection = () => {
    return ( 
        <div className="section-one">
            <div className="navbar-wrapper">
             <div className="navbar-header">
                <div className="navbar-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
                </div>
                <div className="navbar-options">
                    <div className="select-lang">
                        <form className="nav-option-form">
                        <i class="fas fa-globe"></i>
                        <select  name="language" id="language">
                            <option className="option" value="english">
                               English
                                </option>
                            <option className="option" value="hindi">
                               Hindi</option>
                        </select> 
                        </form>
                    <div className="sign-in">
                        <Link to="/signin">
                            <h4 className="head-signin">Sign In</h4>
                        </Link>    
                    </div> 
                    </div>
                                      
                </div>
            </div>
            </div>

            <div className="contents-wrapper">
                <div className="contents">
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <div className="notify">
                        <h4  >Ready to watch? Enter your email to create or restart your membership.</h4>
                        <form>
                            <input className="email-inp" type="email"   placeholder="abcd@gmail.com" />
                            <Link to="/signup"><button className="get-start-btn">Get Started <i class="fas fa-chevron-right"></i></button></Link>
                        </form>
                    </div>
                    
                </div>

            </div>
            {/* <div className="filler">
                
            </div> */}

        </div>
     );
}
 
export default TopSection;