import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from './footer';


class Contact extends Component {
    // state = {  }
    render() {
        return (
            <div>
                <Navbar />
                <div className="ContactPage">
                    <h1 className="contactTitle">We would love to hear from you!</h1>
                    <p className="hearFromyou">Have a Traning in your mind? Or a quick question? <br />Either way, reach out to us.
                        Rest assured, you will hear back from us real quick.
                    </p>
                    <img src={require("../images/coding.png")} alt="" className="ContactmainBanner" />
                    <div className="contactbasicInfo">
                        <ul className="contactDetails">
                            <li className="contAddress">ADDRESS</li>
                            <li id="contactList">MG GROUP'S MUSCLE ART GYM</li><hr id="borderColor" />
                            <li> No 1034 1st Floor Lala Miyan Taleem, KR Park Road, Lashkar Mohalla, Near KR Park</li>
                            <li>Mysore - 570001,</li>
                            <li>Karnataka, India</li>
                            <br />
                            <li>Ph: +91-9152951536</li>
                            {/* <li>Ph No.2: +91 76195 94333 (Shivu)</li> */}
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;