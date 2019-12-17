import React, { Component } from 'react';

class Partners extends Component {
    // state = {  }
    render() {
        return (
            <div className="col-12 partners">
                <h2 className="partTitle ">OUR PARTNERS</h2><hr />
                {/* <img className="partCyber" src={require('../images/powder 1.jfif')} alt="" />
                <img className="partCyber" id="hills" src={require('../images/powder2.jfif')} alt="" /> */}
                <img className="partCyber" id="seek" src={require('../images/seek.png')} alt="" />
                {/* <img className="partCyber" src={require('../images/powder4.jfif')} alt="" />
                <img className="partCyber" src={require('../images/powder5.jfif')} alt="" />
                <img className="partCyber" src={require('../images/powder6.jfif')} alt="" />
                <img className="partCyber" src={require('../images/powder7.jpg')} alt="" />
                <img className="partCyber" src={require('../images/powder8.jpg')} alt="" /> */}
            </div>
        );
    }
}

export default Partners;