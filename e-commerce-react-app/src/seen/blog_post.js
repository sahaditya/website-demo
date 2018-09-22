import React from 'react';
import Header from '../components/header';
import Nav from '../components/nav';
import {Link} from 'react-router-dom';
import './style.css'

const linkarr = ["Men's Outerwear", "Ladies Outerwear", "Men's T-Shirts", "Ladies T-Shirts"];

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            blogList : []
        }
    }    

componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>response.json())
    .then((data) =>{
        let temp = [...this.state.blogList];
        temp = [...data];
        this.setState({blogList : temp});
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
                <div>This is Blog page</div>
                    {this.state.blogList.map(item =>
                     <div class="blog-style">
                    <Link to={'/blogs/user/' + item.id}>
                        <p><label>User Id : </label>{item.userId}</p>
                    </Link>
                    <Link to={'/blogs/post/' + item.id}>
                        <p><label>Post Id : </label>{item.id}</p>
                    </Link>                        
                        <p><label>Title : </label>{item.title}</p>
                        <p><label>Content : </label>{item.body}</p>
                    </div>
                    )}
                
            </div>
        );
    }
}

export default BlogPost;