import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class FormDialog extends React.Component {
  state = {
    open: false,
    title : "",
    authorName:"",
    description : "",
    currentIndex : "",
    isEdited : false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
    this.clearFields();
  };

  clearFields = () => {
    this.setState({ title: "", authorName: "", description:""});
  };

  postArticle = () =>{
    this.setState({ 
      open: false, 
      isEdited : false
    });
    this.props.parentFuncGet(this.state);
  }

  editPost = (index, currentData) => {
    this.setState({ 
      open: true, 
      title :  currentData.title, 
      authorName : currentData.authorName, 
      description : currentData.description,
      currentIndex : index,
      isEdited : true
    });
  }

  closeDialog = () => {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Button className = "btn-style" variant="contained" color="primary" onClick={this.handleClickOpen}>Add New Post</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Post
          <span onClick={this.closeDialog} Style = "color:red;cursor:pointer;float:right;">X</span>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="articleName"
              label="Title"
              type="email"
              value = {this.state.title}
              onChange = {(e)=>this.setState({title : e.target.value})}
              fullWidth
            />
            <TextField
              margin="dense"
              id="authorName"
              label="Auther Name"
              type="text"
              value = {this.state.authorName}
              onChange = {(e)=>this.setState({authorName : e.target.value})}
              fullWidth
            />
            <div style={{marginTop:20}}>
              <textarea id="article" 
                rows="5" 
                cols="68" 
                maxLength="1000"
                wrap="hard" 
                placeholder="Description"
                value = {this.state.description}
                onChange = {(e)=>this.setState({description : e.target.value})}
                >
              </textarea>
              <select Style="width: -webkit-fill-available;height: 22px;">
              <option>Select article type</option>
              <option>A</option>
              <option>A</option>
              <option>A</option>
              </select>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.clearFields} color="primary">
              Reset
            </Button>
            <Button onClick={this.postArticle} color="primary">
              Post
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default FormDialog;