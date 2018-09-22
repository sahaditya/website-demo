import React from 'react';
 //import {Header} from './header';
 import {Navbar} from './navbar';
// import {Button} from './button';
// import {List} from './list';
// import FirstComponent from './StatefullComponent';
//import ToDoNote from './toDoComponent';
import ProductDetail from './product-detail';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

 //let names = ["ram", "akash","kiran", "koushal"];
const App =()=> 
//<div class = "body-style">
    //   <div class="at-center border-style">
    //    <Header />
    //   {/* <Navbar />
    //   <Button title="Hello from btn" />
    //   <List name = {names} />
    //   <FirstComponent /> */}
    //   <ToDoNote />
    //   </div>
    // </div>

  <BrowserRouter>
    <Switch>
    <Route path='/dashboard' render = { ()=> <div>This is Dashboard</div>} />
    <Route path='/login' render = { ()=> <div>This is login page</div>} />
    <Route path='/compo' component = {Navbar} />
    <Route path='/productdetail/:id' component = {ProductDetail} />
    {/* <Route path='/' render = { ()=> <div><ProductDetail />Detail This is home</div>} /> */}
    </Switch>
  </BrowserRouter>

export default App;
    
   
