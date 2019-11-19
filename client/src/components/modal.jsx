import React, { Component } from 'react';


class Modal extends Component {

    constructor(props) {
        super(props);
    }
     
    render() {         
        return ( 
            <div className={
                this.props.show ? (
                   ('dos-modal dos-shadow dos-body p-2')
                ): ('d-none dos-modal dos-shadow dos-body p-2')
                }>
                    <div className="text-right mb-1">
                        <button type="button" className="dos-btn" onClick={this.props.toClose}>x</button>
                    </div>
                    <div className="dos-bar mb-2 w-100"></div>
                    <form onSubmit={this.props.submited}>
                        {this.props.children}                                   
                        <div className="dos-bar mb-2 w-100"></div>

                        <button type="submit" className="dos-btn mr-1">1. Submit</button>
                        <button type="button" className="dos-btn" onClick={this.props.toClose}>2. Close</button>
                    </form>     
                </div>

         );
    }
}
 
export default Modal;