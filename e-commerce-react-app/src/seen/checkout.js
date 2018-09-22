import React from 'react';
import Header from '../components/header';
import Nav from '../components/nav';
import Input from '../components/Form';
import Address from '../components/Address';
import './style.css'

const linkarr = ["Men's Outerwear", "Ladies Outerwear", "Men's T-Shirts", "Ladies T-Shirts"];

export default class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBillingAddrDiff : false
        }
        this.formInput = React.createRef();
        this.addrInput = React.createRef();
    }

    placeOrder = () => {
        const personalinfo = this.formInput.current.getPersonalInfo();
        const address = this.addrInput.current.getAddressInfo();
        // const isPiValid = this.formInput.current.validate(personalinfo);
        // const isAdValid = this.addrInput.current.validate(address);
        
        
        console.log(personalinfo);
        console.log(address);
    }
    

    render() {
        return(
            <div>
                <Header/>
                <Nav links={linkarr}/>
                <div class="checkout-style">
                    <div>Checkout</div>
                    <div>Shop is a demo app - form data will not be sent</div>
                </div>

                <div class = "form-container">
                    <div class="app-form">
                        <div><Input ref={this.formInput}/></div>
                        <div class="address-style"><Address ref={this.addrInput}/></div>
                        <div class="btn-position"><button onClick={this.placeOrder}>Place Order</button></div>
                        <div>
                            <label><strong>Billing Address</strong></label>
                            <br></br>
                            <input type="checkbox"
                            onChange={(e)=>this.setState({isBillingAddrDiff : !this.state.isBillingAddrDiff})}></input> 
                            <span>Use different billing address</span>
                            <div class="billingaddr-style">
                            {
                                this.state.isBillingAddrDiff ?<Address ref={this.addrInput}/> : ''
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}