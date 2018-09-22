import React from 'react';
import './index.css';

export default class Address extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flatNo: '',
            street: '',
            landmark: '',
            city: '',
            isFfill: true,
            isSfill: true,
            isLfill: true,
            isCfill: true
        };
    }

    getAddressInfo = () => {
        
        return this.state;
    }  
    
    validate = () => {
        const { flatNo, street, landmark, city } = this.state;

        if ( flatNo!=='' ) {
            this.setState({isFfill : true});
        }
        else {
            this.setState({isFfill : false});
        }

        if ( street!=='' ) {
            this.setState({isSfill : true});
        }
        else {
            this.setState({isSfill : false});
        }

        if ( landmark!=='' ) {
            this.setState({isLfill : true});
        }
        else {
            this.setState({isLfill : false});
        }

        if ( city!=='' ) {
            this.setState({isCfill : true});
        }
        else {
            this.setState({isCfill : false});
        }
    }
    render() {
        return( 
            <div className = "add-form">
                <label>Flat No</label>
                <input class="input-style" placeholder="flatNo" value={this.state.flatNo} onChange={(e) =>  this.setState( {flatNo: e.target.value} ) }/>
                { !(this.state.isFfill) ? <div style={{color: 'red'}}>This field is reqired</div> : <div></div> }
                <hr></hr>
                <label>Street</label>
                <input class="input-style" placeholder="street" value={this.state.street} onChange={(e) =>  this.setState( {street: e.target.value} ) }/>
                { !(this.state.isSfill) ? <div style={{color: 'red'}}>This field is reqired</div> : <div></div> }
                <hr></hr>
                <label>Land Mark</label>
                <input class="input-style" placeholder="landmark" value={this.state.landmark} onChange={(e) =>  this.setState( {landmark: e.target.value} ) }/>
                { !(this.state.isLfill) ? <div style={{color: 'red'}}>This field is reqired</div> : <div></div> }
                <hr></hr>
                <label>City</label>
                <input class="input-style" placeholder="city" value={this.state.city} onChange={(e) =>  this.setState( {city: e.target.value} ) }/>
                { !(this.state.isCfill) ? <div style={{color: 'red'}}>This field is reqired</div> : <div></div> }
                <hr></hr>
            </div>
        );
    }
}