import React from 'react';
import Header from '../components/header';
import Nav from '../components/nav';
import AddProductForm from '../components/add-product-form'
import './style.css'

const linkarr = ["Men's Outerwear", "Ladies Outerwear", "Men's T-Shirts", "Ladies T-Shirts"];
const axios = require('axios');
class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.productDetailsRef = React.createRef();
        
    }
    
componentDidMount(){
    
}

addProduct = () =>{
    const productDetails = this.productDetailsRef.current.getProductDetails();
    axios.post('/user', {
        title: productDetails.title,
        price: productDetails.price,
        description : productDetails.description,
        imageUrl : productDetails.imageUrl
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
   
render() {
        return(
            <div class="padding-style">
                <Header/>
                <Nav links={linkarr}/>
                <div >Add Product</div>
                <AddProductForm ref={this.productDetailsRef}/>
                <button onClick={this.addProduct}>Add Product</button>
            </div>
        );
    }
}

export default AddProduct;