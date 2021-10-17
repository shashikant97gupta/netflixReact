 import {React, useState} from 'react';
 import css from "./index.css";
 import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
 

 const SectionSix = () => {
    const [state, setState] = useState(false);

    const stateFunction = () => {
        setState(state ? false : true);
    }

     return ( 
         <div className="sec-six-wrapper">
             <div className="sec-six-contents">
                 <div className="sec-six-faq">
                    <h1>Frequently Asked Questions</h1>
                    <div className="sec-six-faq-ques">
                        <h3>What is Netflix?</h3>
                        
                        <i class="fas fa-plus"></i>
                    </div>

                    <div className="sec-six-faq-ques">
                        <h3>How much does Netflix cost?</h3>
                        <i class="fas fa-plus"></i>
                    </div>

                    <div className="sec-six-faq-ques">
                        <h3>Where can I watch?</h3>
                        <i class="fas fa-plus"></i>
                    </div>

                    <div className="sec-six-faq-ques">
                        <h3>How do I cancel?</h3>
                        <i class="fas fa-plus"></i>
                    </div>

                    <div className="sec-six-faq-ques">
                        <h3>What can I watch on Netflix?</h3>
                        <i class="fas fa-plus"></i>
                    </div>

                    <div className="sec-six-faq-ques">
                        <h3>Is Netflix good for kids?</h3>
                        <i class="fas fa-plus"></i>
                    </div>
                 </div>
                 <div className="sec-six-email">
                     <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <form>
                        <input type="email" placeholder="abcd@gmail.com" />
                        <Link to="/signup"><button>Get Started <i class="fas fa-chevron-right"></i></button></Link>
                    </form>
                 </div>
                 
             </div>
         </div>
      );
 }
  
 export default SectionSix;