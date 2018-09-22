import React from 'react';
import Header from '../components/header';
import Nav from '../components/nav';
import './style.css'

const linkarr = ["Men's Outerwear", "Ladies Outerwear", "Men's T-Shirts", "Ladies T-Shirts"];

class AllPost extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            allPostList : []
        }
    }    

componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/comments?postId="+this.props.match.params.id)
    .then((response)=>response.json())
    .then((data) =>{
        this.setState({
            allPostList : data
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
                {this.state.allPostList.map(item =>
                     <div class="blog-style">
                        <p><label>Post Id : </label>{item.postId}</p>
                        <p><label>Id : </label>{item.id}</p>
                        <p><label>Name : </label>{item.name}</p>
                        <p><label>Email : </label>{item.email}</p>
                        <p><label>Content : </label>{item.body}</p>
                    </div>
                    )}
            </div>
        );
    }
}

export default AllPost;