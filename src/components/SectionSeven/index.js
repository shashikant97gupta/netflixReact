 import React from 'react';
 import css from "./index.css";
 import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


 const SectionSeven = () => {
     return ( 
         <div className="sec-seven-wrapper">
             <div className="sec-seven-content">
                 <div className="sec-seven-footer">
                    <h4 className="footer-content-head">Questions? Call 000-800-040-1843</h4>
                    <div className="span-div">
                        <Link to="/netflix-services"><span className="footer-content">FAQ</span></Link>
                        <Link to="/netflix-services"><span className="footer-content">Help Centre</span></Link>
                        <Link to="/netflix-services"><span className="footer-content">Account</span></Link>
                        <Link to="/netflix-services"><span className="footer-content">Media Centre</span></Link>
                        <Link to="/netflix-services"><span className="footer-content">Investor Relations</span></Link>
                        <Link to="/netflix-services"><span className="footer-content">Jobs</span></Link>
                        <Link to="/netflix-services"><span className="footer-content">Ways to Watch</span></Link>
                        <Link to="/netflix-services"><span className="footer-content">Terms of Use</span></Link>
                        <Link to="/netflix-services"><span className="footer-content">Privacy</span></Link>
                        <Link to="/netflix-services"><span className="footer-content">Cookie Preferences</span></Link>
                        <Link to="/netflix-services"><span className="footer-content">Corporate Information</span></Link>
                        <Link to="/netflix-services"><span className="footer-content">Contact Us</span></Link>
                        <Link to="/netflix-services"><span className="footer-content">Spped Test</span></Link>
                        <Link to="/netflix-services"><span className="footer-content">Legal Notices</span></Link>
                        <Link to="/netflix-services"><span className="footer-content">Only on Netflix</span></Link>
                    </div>
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
                    <div className="brand-name">
                        <span>Netflix India</span>
                    </div>
                 </div>
             </div>
         </div>
      );
 }
  
 export default SectionSeven;