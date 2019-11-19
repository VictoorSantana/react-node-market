import React, { Component } from 'react';
import Api from '../helper/Api';

class Services extends Component {
    state = {  }

    constructor(props) {
        super(props);
    }

    exitHandler = () => {        
        Api.logOut();        
    }
    addPage = () => {
        this.props.history.push('/productadd');
    }

    sellPage = () => {
        this.props.history.push('/productsell');
    }

    render() { 
        return ( 
            <div className="text-center">
                <div className="dos-border d-inline-block position-relative mt-3 p-3" style={{width: '350px'}}>
                    <h2 className="dos-text dos-border-title">[ Product ]</h2>
                    <button type="button" className="dos-btn mr-1" onClick={this.addPage}>1. Add</button>
                    <button type="button" className="dos-btn mr-1">2. Edit</button>
                    <button type="button" className="dos-btn mr-1" onClick={this.sellPage}>3. Sell</button>
                    <button type="button" className="dos-btn" onClick={this.exitHandler}>4. Exit</button>
                </div>
            </div>
         );
    }
}
 
export default Services;