import React, { Component } from 'react';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook/';
import LogoTwitter from 'react-ionicons/lib/LogoTwitter';
import LogoInstagram from 'react-ionicons/lib/LogoInstagram';

class Footer extends Component {
    styles = {
        color: 'white'
    }
    render() {
        return (
            <div className="footer navbar-dark bg-dark">
                <div className="info">
                    <span className="navbar-brand Fa500px" href="#" id="logoNamefooter"><img src={require("../images/3.png")} alt="" className="collegeLogofooter" /><br />
                        <a id="byName" href="#">© 2019 Yes Theory Bangalore . All Rights Reserved.</a>
                        <span className="badge badge-pill badge-secondary"></span>
                    </span>
                </div>
                <div className="Social_Media" >
                    <div className="title1">Social Media</div>
                    <div className="links"><LogoFacebook style={this.styles} color="white" />Facebook</div>
                    <div className="links" id="twitter"><LogoTwitter style={this.styles} color=" #00acee" />WhatsApp</div>
                    <div className="links"><LogoInstagram style={this.styles} color=" pink" />Instagram</div>
                </div>
                {/* <div className="Address">
                    <div className="title2">Address</div>
                    <div className="links">Bangalore, India
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Footer;