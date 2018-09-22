import React from 'react';
import Header from '../component/header';
import PostBlock from '../component/post-block';
import './style.css';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newPostList : []
    }
    this.dialogRef = React.createRef();
  }
  getPostData = (postData) =>{
    const temp = [...this.state.newPostList];
    if(postData.isEdited){
      temp.splice(postData.currentIndex, 1, postData);
    }else{
      temp.push(postData);
    }
    this.setState ({
      newPostList: temp
    });
  }

  deletePost = (index) =>{
    console.log("delete invoked.....");
    const temp = [...this.state.newPostList]
    temp.splice(index, 1);
    this.setState ({
      newPostList: temp
    })
    console.log("after delete array length=>", this.state.newPostList.length);
  }

  editPost = (index, item) =>{
    this.dialogRef.current.dialogFunc(index, item);
  }


  render() {
    return (
      <div className="body-style">
          <Header parentFuncGet = {this.getPostData} ref = {this.dialogRef}/>
          <PostBlock postDataList = {this.state.newPostList} deletePost = {this.deletePost} editPost = {this.editPost}/>
      </div>
    );
  }
}

export default Home;
