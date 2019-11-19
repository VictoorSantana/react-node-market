import React, { Component } from 'react';
import Api from '../helper/Api';

class ProductAdd extends Component {
    state = { 
        disc: '',
        price: 0,
        amount: 0,
        discount: 0,
        message: '',
        actionDisplay: true
     };

     constructor(props) {
         super(props);
     }

     changeHandler = e => {
         this.setState({[e.target.name]: e.target.value });
     }
     submitHandler = async (e) => {                            

        e.preventDefault();

        if(this.state.disc.trim().length > 0) {
            this.setState({ actionDisplay: false });
            const data = {
                disc: this.state.disc,
                price: parseFloat(this.state.price),
                amount: parseFloat(this.state.amount),
                discount: parseFloat(this.state.discount)
            };
            
            const resp = await Api.addProduct(data);

            if(resp.status == 403) { //
                this.props.history.push('/forbidden');                
            } else {
                this.setState({
                    message: resp.message,
                    actionDisplay: true
                });
            }               
            
        } else {
            this.setState({
                message: 'Description cannot be empty'
            });
        }                        

        this.setState({
            disc: '',
            price: 0,
            amount: 0,
            discount: 0
        });        
     }

     backHandler = () => {                
        this.props.history.push('/services');
     }

    render() { 
        const {disc, price, amount, discount} = this.state;

        return ( 
            <div className="dos-border d-inline-block position-relative m-3 p-3" style={{width: 'calc(100% - 32px)'}}>
                <h2 className="dos-text dos-border-title">[ Add Product ]</h2>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group d-inline-block" style={{width: '370px'}}>
                        <label className="dos-text">Description:</label>
                        <input type="text" name="disc" onChange={this.changeHandler} value={disc} className="dos-field" style={{width: 'calc(100% - 161px)'}}></input>
                    </div>
                    <div className="form-group d-inline-block" style={{width: '250px'}}>
                        <label className="dos-text">Price......:</label>
                        <input type="number" name="price" onChange={this.changeHandler} value={price} className="dos-field" style={{width: 'calc(100% - 161px)'}}></input>
                    </div>
                    <div className="form-group d-inline-block" style={{width: '250px'}}>
                        <label className="dos-text">Amount.....:</label>
                        <input type="number" name="amount" onChange={this.changeHandler} value={amount} className="dos-field" style={{width: 'calc(100% - 161px)'}}></input>
                    </div>
                    <div className="form-group d-inline-block" style={{width: '250px'}}>
                        <label className="dos-text">Discount%..:</label>
                        <input type="number" name="discount" onChange={this.changeHandler} value={discount} className="dos-field" style={{width: 'calc(100% - 161px)'}}></input>
                    </div>

                    <div className="dos-border mb-3"></div>
                    {
                        this.state.message.trim().length > 0 ? (
                            <label className="dos-text dos-err d-block">* {this.state.message}</label>
                        ): ('')
                    }

                    {
                        this.state.actionDisplay ? (
                            <div>
                                <button type="submit" className="dos-btn mr-1">1. Add</button>
                                <button type="button" className="dos-btn" onClick={this.backHandler}>2. Back</button>
                            </div>
                        ): ('')
                    }                                        
                </form>                
            </div>
         );
    }
}
 
export default ProductAdd;