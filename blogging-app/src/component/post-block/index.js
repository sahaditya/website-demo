import React from 'react';
import './index.css';

const editIcon = require('./edit_icon.svg')
const deleteIcon = require('./delete_icon.svg')

class PostBlock extends React.Component{

    render(){
        return(
            <div className="post-container">
                {this.props.postDataList.map((item, index) => 
                    <div className="post-block-style">
                        <div className="title-block-style border-style">
                            <div>
                                <h3><lable>Title : </lable>{item.title}</h3>
                            </div>
                            <div className="icon-style">
                            <div>
                                <a onClick={()=>this.props.editPost(index, item)}><img src={editIcon} alt="Edit" ></img></a>
                            </div>
                            <div>
                                <a onClick={()=>this.props.deletePost(index)}><img src={deleteIcon} alt="Delete" ></img></a>
                            </div>
                            </div>
                        </div>
                        <div>
                            <h5><label>Author Name : </label>{item.authorName}</h5>
                        </div>
                        <div>
                            <p><lable>Article : </lable>{item.description}</p>
                        </div>
                        {/* <div>type</div> */}
                    </div>
                )}
            </div>
        )
    }
}
export default PostBlock;
