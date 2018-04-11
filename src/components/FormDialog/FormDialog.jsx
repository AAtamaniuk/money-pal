import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Material UI
import { withStyles } from 'material-ui/styles';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { MenuItem } from 'material-ui/Menu';
// Config
import types from '../../config/types';

const styles = {
  dialog: {
    width: 480,
    maxWidth: '100%',
  },
  field: {
    marginBottom: 16,
  },
};

const propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isOpen: PropTypes.bool.isRequired,
  onDialogClose: PropTypes.func.isRequired,
  onAddItem: PropTypes.func.isRequired,
};

class FormDialog extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      type: '',
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleAddItem() {
    const { name, type, value } = this.state;
    this.props.onAddItem(name, type, value);
    this.clear();
  }

  clear() {
    this.setState({
      name: '',
      type: '',
      value: '',
    });
  }

  render() {
    const { name, type, value } = this.state;
    const {
      classes, isOpen, onDialogClose,
    } = this.props;
    return (
      <Dialog
        open={isOpen}
        onClose={onDialogClose}
        aria-labelledby="form-dialog-title"
        classes={{
          paper: classes.dialog,
        }}
      >
        <DialogTitle id="form-dialog-title">Add</DialogTitle>
        <DialogContent>
          <TextField
            className={classes.field}
            autoFocus
            id="select-currency"
            select
            label="Type"
            value={type}
            name="type"
            onChange={this.handleChange}
            fullWidth
          >
            {types.map(i => (
              <MenuItem key={i} value={i}>
                {i}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className={classes.field}
            id="name"
            label="Name"
            type="text"
            value={name}
            name="name"
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            className={classes.field}
            id="value"
            label="Value"
            type="number"
            value={value}
            name="value"
            onChange={this.handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleAddItem} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

FormDialog.propTypes = propTypes;

export default withStyles(styles)(FormDialog);
