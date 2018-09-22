import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './seen/home';
import ProductList from './seen/product_list';
import ProductDetails from './seen/product_details';
import Checkout from './seen/checkout';
import BlogPost from './seen/blog_post';
import UserPosts from './seen/user_post.js';
import AllPost from './seen/all_post';
import AddProduct from './seen/add_product'
// import Temp from './seen/temp';

class App extends React.Component {

  componentDidMount(){
    
  }

  render() {
    return (
      <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/productlist' component={ProductList}/>
              <Route path='/productdetails/:id' component={ProductDetails}/>
              <Route path='/checkout' component={Checkout}/>
              <Route exact path='/blogs' component={BlogPost}/>
              <Route path='/blogs/user/:id' component={UserPosts}/>
              <Route path='/blogs/post/:id' component={AllPost}/>
              <Route path='/addproduct' component={AddProduct}/>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
