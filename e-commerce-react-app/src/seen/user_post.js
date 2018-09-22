import React from 'react';
import Header from '../components/header';
import Nav from '../components/nav';
import './style.css'

const linkarr = ["Men's Outerwear", "Ladies Outerwear", "Men's T-Shirts", "Ladies T-Shirts"];

class UserPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            userPostList : []
        }
    }    

componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/posts?userId="+this.props.match.params.id)
    .then((response)=>response.json())
    .then((data) =>{
        this.setState({
            userPostList : data
        })
    })
    .catch((e)=>{
        console.log(e);
    })
}

   
render() {
        return(
            <div>
                <Header/>
                <Nav links={linkarr}/>
                <div>This is user all posts</div>
                {this.state.userPostList.map(item =>
                     <div class="blog-style">
                        <p><label>User Id : </label>{item.userId}</p>
                        <p><label>Post Id : </label>{item.id}</p>
                        <p><label>Title : </label>{item.title}</p>
                        <p><label>Content : </label>{item.body}</p>
                    </div>
                    )}
            </div>
        );
    }
}

export default UserPosts;