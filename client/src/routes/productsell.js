import React, { Component } from 'react';
import Modal from '../components/modal';

class ProductSell extends Component {
    state = {  
        modalInclude: false,
        includeData: {
            i_id: '',
            i_amount: 0,
            i_desc: ''
        }
    }

    changeHandler = e => {
        this.setState({
            includeData: {
                [e.target.name]: e.target.value 
            }
        });
    }

    includeSubmited = (e) => {
        console.log(this.state.includeData.i_id);
        e.preventDefault();
    }

    render() { 
        const {i_id, i_amount, i_desc} = this.state.includeData;
        return ( 
            <React.Fragment>
                <div className="dos-border d-inline-block position-relative m-3 p-3" style={{width: 'calc(100% - 32px)'}}>
                    <h2 className="dos-text dos-border-title">[ Product Sell ]</h2>

                    <div className="table-responsive w-100">
                        <table className="dos-table w-100">
                        <tr>
                            <th> <label className="dos-text font-weight-normal"> Description </label> </th>
                            <th> <label className="dos-text font-weight-normal"> Amount </label> </th>
                            <th> <label className="dos-text font-weight-normal"> Price </label> </th>
                            <th> <label className="dos-text font-weight-normal"> Discount % </label> </th>
                        </tr>
                        <tr>
                            <td> <label className="dos-text">Item desc</label> </td>
                            <td> <label className="dos-text">2</label> </td>
                            <td> <label className="dos-text">4.5</label> </td>
                            <td> <label className="dos-text">20</label> </td>
                        </tr>
                        <tr>
                            <td> <label className="dos-text">Item desc</label> </td>
                            <td> <label className="dos-text">2</label> </td>
                            <td> <label className="dos-text">4.5</label> </td>
                            <td> <label className="dos-text">20</label> </td>
                        </tr>
                        <tr>
                            <td> <label className="dos-text">Item desc</label> </td>
                            <td> <label className="dos-text">2</label> </td>
                            <td> <label className="dos-text">4.5</label> </td>
                            <td> <label className="dos-text">20</label> </td>
                        </tr>
                        <tr>
                            <td> <label className="dos-text">Item desc</label> </td>
                            <td> <label className="dos-text">2</label> </td>
                            <td> <label className="dos-text">4.5</label> </td>
                            <td> <label className="dos-text">20</label> </td>
                        </tr>
                        </table>

                        <div className="dos-bar mb-2 mt-2 w-100"></div>

                        <button type="button" className="dos-btn">Back</button>
                        <label className="dos-text p-1 dos-err">1...10</label>
                        <button type="button" className="dos-btn">Next</button>
                    </div>

                    <label className="dos-text mt-2 p-1 dos-err">Total: 18.00</label>

                    <div className="dos-bar mb-2 w-100"></div>

                    <button type="button" className="dos-btn mr-1" onClick={() => this.setState({modalInclude: true})}>1. Include</button>
                    <button type="button" className="dos-btn mr-1">2. Remove</button>
                    <button type="button" className="dos-btn mr-1">3. Done</button>
                    <button type="button" className="dos-btn">4. Back</button>
                </div>

                <Modal show={this.state.modalInclude} toClose={() => this.setState({modalInclude: false})} submited={this.includeSubmited}>
                    <div className="form-group">
                        <label className="dos-text">Id.........:</label>
                        <input type="text" className="dos-field" name="i_id" value={i_id} onChange={this.changeHandler} style={{width:'110px'}}></input>
                    </div>
                    <div className="form-group">
                        <label className="dos-text">Amount.....:</label>
                        <input type="number" className="dos-field" name="i_amount" value={i_amount} onChange={this.changeHandler} style={{width:'110px'}}></input>
                    </div>
                    <div className="form-group">
                        <label className="dos-text">Description:</label>
                        <input type="text" className="dos-field" name="i_desc" value={i_desc} onChange={this.changeHandler} style={{width:'110px'}}></input>
                    </div>
                </Modal>
            </React.Fragment>
            
         );
    }
}
 
export default ProductSell;