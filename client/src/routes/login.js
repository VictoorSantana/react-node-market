import React, { Component } from 'react';
import Api from '../helper/Api';

class Login extends Component {
    state = { 
        user: '',
        pass: '',
        auth: false,
        message: ''
     }

     handleChange = e => {
         this.setState({[e.target.name]: e.target.value});
     }

     handleSubmit = e => {
        e.preventDefault();        

        if(this.state.user.trim().length == 0 ||
           this.state.pass.trim().length == 0) {
            this.setState({message: 'Cannot left empty field'});
        } else {
            const data = {
                user: this.state.user,
                pass: this.state.pass,
            };
            
            Api
            .tryLogin(data)
            .then(response => {
                if(response.auth) {
                    this.setState({
                        auth: true,
                        message: ''
                    });
                    this.props.history.push('/services');
                } else {
                    this.setState({
                        auth: response.auth,
                        message: response.message                        
                    });
                }                
            });
        }
                
        //here we'll do post request...
     }

    render() { 
        let {user, pass} = this.state;

        return ( 
            <form onSubmit={this.handleSubmit}>
                <div className="dos-border p-2 dos-shadow" style={{maxWidth: '375px',margin: 'auto'}}>
                    <h1 className="dos-text text-center">Please login</h1>
            
                    <div className="dos-bar" style={{width: '100%'}}></div>
            
                    <div className="form-group mt-3">
                        <label className="dos-text">User...:</label>
                        <input type="text" onChange={this.handleChange} value={user} name="user" className="dos-field" style={{width: '230px'}}></input>
                    </div>
                    <div className="form-group">
                        <label className="dos-text">Pass...:</label>
                        <input type="password" onChange={this.handleChange} value={pass} name="pass" className="dos-field" style={{width: '230px'}}></input>
                    </div>

                    {
                        this.state.message.trim().length > 0 ? (
                            <label className="dos-text dos-err p-1 w-100">* {this.state.message}</label>
                        ): ('')
                    }                    
                    <div className="dos-bar" style={{width: '100%'}}></div>
            
                    <div className="form-group mt-3">
                        <button type="submit" className="dos-btn mr-2">1. Login</button>
                        <button type="button" className="dos-btn">2. Create</button>
                    </div>    
                </div>              
            </form>            
         );
    }
}
 
export default Login;