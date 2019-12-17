import React, { Component } from 'react';
import Navbar from './navbar';
import Banner from './mainBanner';
import Info from './information';
import AboutUs from './aboutUs';
import Partners from './partners';
import Footer from './footer';
import Test from './test';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    {/* <BrowserRouter>
                        <Switch>
                            <Route path="/test" component={Test} />
                        </Switch>
                    </BrowserRouter> */}
                    <Navbar />
                    <Banner />
                    <Info />
                    {/* <AboutUs /> */}
                    <Partners />
                    <Footer />
                </React.Fragment>
            </div>
        );
    }
}

export default Main;