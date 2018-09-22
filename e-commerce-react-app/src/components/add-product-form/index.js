import React from 'react';
import './index.css';



export default class AddProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title : "",
            category : "",
            price : "",
            imageUrl  : "",
            isTitle : "",
            isCategory : "",
            isPrice : "",
            isImageUrl  : "",
            isDescription : ""

        };
    }


    getProductDetails = () =>{
        this.setState({
            isTitle : this.state.title,
            isCategory : this.state.category,
            isPrice : this.state.price,
            isImageUrl : this.state.imageUrl,
            isDescription : this.state.description
        });
        return this.state;
    }
    
    render() {
        return( 
            <div className = "input-form">
                <div>
                
                    <input class = "input-style" placeholder="title" value={this.state.title} onChange={(e) =>  this.setState( {title: e.target.value} ) }/>
                    { (this.state.isTitle) ? <div style={{color: 'red'}}>This field is reqired</div> : <div></div> }
                </div>
                <hr></hr>
                <div>
                
                    <input class = "input-style" placeholder="category" value={this.state.category} onChange={(e) =>  this.setState( {category: e.target.value} ) }/>
                    { (this.state.isCategory) ? <div style={{color: 'red'}}>This field is reqired</div> : <div></div> }
                </div>
                <hr></hr>
                <div>
                    
                    <input class = "input-style" placeholder="price" value={this.state.price} onChange={(e) =>  this.setState( {price: e.target.value} ) }/>
                    { (this.state.isPrice) ? <div style={{color: 'red'}}>This field is reqired</div> : <div></div> }
                </div>
                <hr></hr>
                <div>
                    
                    <input class = "input-style" placeholder="description" value={this.state.description} onChange={(e) =>  this.setState( {description: e.target.value} ) }/>
                    { (this.state.isDescription) ? <div style={{color: 'red'}}>This field is reqired</div> : <div></div> }
                </div>
                <hr></hr>
                <div>
                    
                    <input class = "input-style" placeholder="image Url" value={this.state.imageUrl} onChange={(e) =>  this.setState( {imageUrl: e.target.value} ) }/>
                    { (this.state.isImageUrl) ? <div style={{color: 'red'}}>This field is reqired</div> : <div></div> }
                </div>
                <hr></hr>
            </div>
        );
    }
}