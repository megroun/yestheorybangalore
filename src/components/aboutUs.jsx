import React, { Component } from 'react';

class AboutUs extends Component {
    // state = {  }
    render() {
        return (
            <div>
                <div className=" bg-danger Title">
                    <h2 className="aboutTitle">ABOUT US</h2>
                </div>
                <div className="col-12 about">
                    <div className="aboutUs">
                        <h3 className="tagOneAbout">KOHÄSION is an Intercollegiate Fest of Al Ameen Pre-University College. We are very thankful to you for your participation in KOHÄSION 2019-20. KOHÄSION 2019-20 witnessed a participation of 60 colleges from in and around the city.</h3>
                        {/* <h3 className="tagTwo">We are very thankful to you for your participation in KOHASION 2019-20.</h3> */}
                        {/* <h3 className="tagThree">of web, machine learning, Big Data and mobile application services.</h3> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;