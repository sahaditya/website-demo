import React from 'react';
import FormDialog from '../dialog';
import './index.css';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.dialog = React.createRef();
    }

    dialogFunc = (index, item) => {
        this.dialog.current.editPost(index, item)
    }

    render(){
        return(
            <div className="header-container border-style">
            <div className="header-width border-style">
                <header className="header-style"><h3>Blogging web app </h3></header>
            </div>
            <div className="div-style border-style">
                <FormDialog btnText = "Add Post" parentFuncGet = {this.props.parentFuncGet} ref={this.dialog}/>
            </div>
             
        </div>
        )
    }
}
export default Header;
