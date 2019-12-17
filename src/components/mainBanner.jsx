import React, { Component } from 'react';
// import IosArrowRoundDown from 'react-ionicons/lib/IosArrowRoundDown';
// import { BrowserRouter, Link } from 'react-router-dom';

class Banner extends Component {

    render() {
        return (
            <div className="parallax">
                <img src={require("../images/yesTheory.png")} alt="" className="mainBanner" />
                {/* <h1 className="quote">THE WORLD OF TECHNOLOGY</h1> */}
                {/* <div className="basicInfo">
                    <ul>
                        <li id="firstInfo">MeetUps</li>
                        <li>Events</li>
                        <li>Party</li>
                        <li></li>
                        <li>Bulking</li>
                    </ul>
                </div> */}
            </div>
        );
    }
}

export default Banner;