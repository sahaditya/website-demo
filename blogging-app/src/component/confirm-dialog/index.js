/* eslint-disable react/no-multi-comp */

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
class ConfirmationDialogRaw extends React.Component {
  radioGroupRef = null;

  constructor(props) {
    super();
    this.state = {
      value: props.value
    };
  }

  // TODO

  handleCancel = () => {
    this.props.onClose(this.props.value);
  };

  handleOk = () => {
    this.props.onClose(this.state.value);
    alert(this.state.value);
  };
  render() {
    const { value, ...other } = this.props;

    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        onEntering={this.handleEntering}
        aria-labelledby="confirmation-dialog-title"
        {...other}
      >
        <DialogTitle id="confirmation-dialog-title">Phone Ringtone</DialogTitle>
        <DialogContent />
        <DialogActions>
          <Button onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleOk} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    width: "80%",
    maxHeight: 435
  }
});

class ConfirmationDialog extends React.Component {
  button = null;

  state = {
    open: false,
    value: "Dione"
  };

  openConfirmDialog = () => {
    this.setState({ open: true });
  };

  handleClose = value => {
    this.setState({ value, open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <button onClick={this.openConfirmDialog}>Phone ringtone</button>
        <ConfirmationDialogRaw
          classes={{
            paper: classes.paper
          }}
          open={this.state.open}
          onClose={this.handleClose}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default withStyles(styles)(ConfirmationDialog);
