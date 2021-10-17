import React from 'react';
import css from "./index.css";

const SectionFour = () => {
    return ( 
        <div className="sec-four-wrapper">
            <div className="sec-four-contents">
                <div className="sec-four-left">
                    <h1 className="sec-four-headone">Watch everywhere.</h1>
                    <h2 className="sec-four-headtwo">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                </div>
                <div className="sec-four-right">
                    <div className="sec-four-right-video">
                        <video className="sec-four-video" autoPlay playsInline muted loop>
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                            type="video/mp4" />
                        </video>
                        <div className="sec-four-video-div">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                             alt="devices-img" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default SectionFour;
