import React, { Component } from "react";
import PropTypes from "prop-types";
// Material UI
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
// Config
import categories from "../config/categories";

const styles = {
  dialog: {
    width: 480,
    maxWidth: "100%"
  },
  field: {
    marginBottom: 16
  }
};

const propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isOpen: PropTypes.bool.isRequired,
  onDialogClose: PropTypes.func.isRequired,
  onAddItem: PropTypes.func.isRequired
};

class FormDialog extends Component {
  state = {
    name: "",
    category: "",
    value: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAddItem = () => {
    const { name, category, value } = this.state;
    const { onAddItem, onDialogClose } = this.props;
    onAddItem(name, category, value);
    onDialogClose();
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({
      name: "",
      category: "",
      value: ""
    });
  };

  render() {
    const { name, category, value } = this.state;
    const { classes, isOpen, onDialogClose } = this.props;
    return (
      <Dialog
        open={isOpen}
        onClose={onDialogClose}
        aria-labelledby="form-dialog-title"
        classes={{
          paper: classes.dialog
        }}
      >
        <DialogTitle id="form-dialog-title">Add new item</DialogTitle>
        <DialogContent>
          <TextField
            className={classes.field}
            id="select-currency"
            select
            label="Category"
            value={category}
            name="category"
            onChange={this.handleChange}
            fullWidth
          >
            {categories.map(i => (
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
