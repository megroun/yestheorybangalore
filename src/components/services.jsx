import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import serviceSource from './servicesSource';

class Services extends Component {
    style = {
        color: "white",
        fontSize: "20px",
        marginLeft: "20px"
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="parallax">
                    <img src={require("../images/services.jpg")} alt="" className="mainBanner" />
                </div>

                <div className="serviceProvided">
                    <div className="ServicemainContainer">
                        {/* <h1 className="ServidecardTitle">SERVICES</h1> */}
                        <div className="slideRow">
                            {
                                serviceSource.map((infoData) => {
                                    return (
                                        <div className="card" id="slideDetails" style={{ width: '18rem' }} key={infoData.id}>
                                            <img className="card-img-top imageAlter" src="..." alt="Card image cap" src={infoData.img} />
                                            <div className="card-body">
                                                <h5 className="card-title">{infoData.title}</h5><hr />
                                                <p className="card-text">{infoData.content}</p>
                                                <Link to="/registration" path="./registration.jsx" className="registration"><button type="button" class="btn btn-primary" id="registration" >{infoData.button}</button></Link>
                                                {/* <a href="#" class="btn btn-primary">{infoData.button}</a> */}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Services;