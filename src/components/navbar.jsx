import React, { Component } from 'react';
import Banner from './mainBanner';
import { Link, Route } from 'react-router-dom';
import Test from './test';
import About from './about';
import main from './main';

class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark" id="navBar">
                    <a className="navbar-brand Fa500px" href="#" id="logoName" href="#"><Link to="/" path="./main.jsx" className="homeHeaderTitle"><img src={require("../images/3.png")} alt="" className="collegeLogoHeader" /></Link>
                    </a>
                    <ul className="divisionList">
                        <li>
                            {/* <Link to="/home" path="./main.jsx" className="homeHeaderTitle">Home</Link> */}
                            <Link to="/about" path="./about.jsx" className="aboutHeaderTitle">About</Link>
                            <Link to="/services" path="./services.jsx" className="servicesHeaderTitle">Services</Link>
                            <Link to="/contact" path="./contact.jsx" className="contactHeaderTitle">Contact</Link>
                        </li>
                    </ul>
                </nav>
                {/* <Route
                    path="/test"
                    component={Test}
                /> */}
            </div>
        );
    }
}

export default Navbar;