import React from 'react'
import css from "./index.css";

const SectionTwo = () => {
    return ( 
        <div className="section-two">
            <div className="sectwo-container">
               <div className="sectwo-text-content">
                 <h1 className="sectwo-text-headone">Enjoy on your TV.</h1>  
                 <h2 className="sectwo-text-headtwo">Watch on smart TVs, PlayStation, 
                 Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                </div>

                <div className="sectwo-img-content">
                    <div>
                    <img className="sectwo-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="TV-Image" />
                    <div className="sectwo-video-div">
                        <video className="sectwo-video" autoPlay playsInline muted loop>
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                            type="video/mp4" />
                        </video>  
                    </div>

                    </div>
                    
                </div> 
            </div>
        </div>
     );
}
 
export default SectionTwo;