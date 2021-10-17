import React from 'react';
import css from "./index.css";

const SectionThree = () => {
    return ( 

        <div className="sec-three-wrapper">
            <div className="sec-three-contents">
                <div className="sec-three-left">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" 
                    alt="download-mobi-img" />
                    <div className="sec-three-left-downdiv">
                        <img className="strange-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                         alt="strange-things-image" />
                         <div className="sec-three-left-downdiv-text">
                            <h4>Stranger Things</h4>
                            <h4 className="sec-three-left-downdiv-text-hfour">Downloading...</h4>
                         </div>
                         {/* <div className="sec-three-download-icon">

                         </div> */}
                         <img className="sec-three-download-icon strange-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                          alt="download-icon" />


                    </div>
                </div>

                <div className="sec-three-right">
                    <h1>Download your shows to watch offline.</h1>
                    <h2>Save your favourites easily and always have something to watch.</h2>
                </div>
            </div>

        </div>
     );
}
 
export default SectionThree;