import React, { Component } from 'react';
import Api from '../helper/Api';


class Forbidden extends Component {
    state = {  }

    backHandler = () => {
        Api.logOut();
    }

    render() { 
        return ( 
            <div className="container mt-5">
                <h1 className="dos-text dos-err p-2">403 - Forbidden </h1>
                <p className="dos-text mt-1">The page or action you trying to acess, it's not allowed anymore.</p>
                <button className="dos-btn" onClick={this.backHandler}>1. Back</button>
            </div>
         );
    }
}
 
export default Forbidden;