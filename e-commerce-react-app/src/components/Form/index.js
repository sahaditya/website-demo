import React from 'react';
import './index.css';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            mobilenumber: '',
            isFnfilled: true,
            isLnfilled: true,
            isMnfilled: true
        };
    }

    getPersonalInfo = () => {
        
        return this.state;
    }  

    validate = () => {
        const { firstname, lastname, mobilenumber } = this.state;

        if ( firstname!=='' ) {
            this.setState({isFnfilled : true});
        }
        else {
            this.setState({isFnfilled : false});
        }

        if ( lastname!=='' ) {
            this.setState({isLnfilled : true});
        }
        else {
            this.setState({isLnfilled : false});
        }

        if ( mobilenumber!=='' ) {
            this.setState({isMnfilled : true});
        }
        else {
            this.setState({isMnfilled : false});
        }
    }
    
    render() {
        return( 
            <div className = "input-form">
                <div>
                <label>Name</label>
                    <input class = "input-style" placeholder="firstname" value={this.state.firstname} onChange={(e) =>  this.setState( {firstname: e.target.value} ) }/>
                    { !(this.state.isFnfilled) ? <div style={{color: 'red'}}>This field is reqired</div> : <div></div> }
                </div>
                <hr></hr>
                <div>
                    <input class = "input-style" placeholder="lastname" value={this.state.lastname} onChange={(e) =>  this.setState( {lastname: e.target.value} ) }/>
                    { !(this.state.isLnfilled) ? <div style={{color: 'red'}}>This field is reqired</div> : <div></div> }
                </div>
                <hr></hr>
                <div>
                    <label>Mobile No</label>
                    <input class = "input-style" placeholder="mobile number" value={this.state.mobilenumber} onChange={(e) =>  this.setState( {mobilenumber: e.target.value} ) }/>
                    { !(this.state.isMnfilled) ? <div style={{color: 'red'}}>This field is reqired</div> : <div></div> }
                </div>
                <hr></hr>
            </div>
        );
    }
}