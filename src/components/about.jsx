import React, { Component } from 'react';
import Navbar from './navbar';
import AboutUs from './aboutUs';
import choose from './chooseUs';
import Footer from './footer';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="aboutUsAlter" >
                    <div>
                        <div className=" bg-danger Title">
                            <h2 className="aboutTitle">ABOUT US</h2>
                        </div>
                        <div className="col-12 about" id="aboutTextAlter">
                            <div className="aboutUs">
                                <h3 className="tagOne" id="tagOneabout" >Established in the year 2003, MG GROUP'S MUSCLE ART GYM in Lashkar Mohalla, Mysore is a top player in the category Martial Art Training in the Mysore. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Mysore. Over the course of its journey, this business has established a firm foothold in it’s industry.The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day. This business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company. In the near future, this business aims to expand its line of products and services and cater to a larger client base. In Mysore, this establishment occupies a prominent location in Lashkar Mohalla.</h3>
                            </div>
                        </div>
                    </div>
                </div >
                <Footer />
            </React.Fragment>

        );
    }
}

export default About;