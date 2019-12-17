import React, { Component } from 'react';
import jsonData from './dataSource';

class Info extends Component {
    // state = {  }
    render() {
        return (
            <div className="mainContainer">
                <h1 className="cardTitle">OUR RECENT MEETUPS</h1>
                <div className="slideRow">
                    {
                        jsonData.map((infoData) => {
                            return (
                                <div className="card" id="slideDetails" style={{ width: '18rem' }} key={infoData.id}>
                                    <img className="card-img-top imageAlter" src="..." alt="Card image cap" src={infoData.img} />
                                    <div className="card-body">
                                        <h5 className="card-title">{infoData.title}</h5><hr />
                                        {/* <p className="card-text">{infoData.content}</p> */}
                                        {/* <a href="#" class="btn btn-primary">{infoData.button}</a> */}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Info;