import React  from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

const MUButton = (props) => 
    <div>
    <Button variant="contained" color="primary" className={props.button}>
        {props.btnText}
      </Button>
</div>

export default MUButton;
