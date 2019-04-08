import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { DatePicker } from "material-ui-pickers";
import moment from "moment";
// Material UI
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
// Configs
import categories from "../config/categories";
import moneyRecordProps from "../config/moneyRecordProps";

const styles = () => ({
  formWrapper: {
    padding: 16
  },
  buttonsWrapper: {
    padding: 16
  },
  dateInput: {
    marginTop: 16,
    marginBottom: 32
  },
  buttonText: {
    color: "white"
  }
});

class MoneyForm extends Component {
  constructor(props) {
    super(props);
    const { moneyRecord } = props;
    this.state = {
      category: moneyRecord ? moneyRecord.category : "income",
      description: moneyRecord ? moneyRecord.description : "",
      amount: moneyRecord ? moneyRecord.amount / 100 : "",
      createdAt: moneyRecord ? moneyRecord.createdAt : moment(),
      errors: {}
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    if (name === "amount") {
      this.normalizeAmount(value);
    } else {
      this.setState(() => ({ [name]: value }));
    }
  };

  handleDateChange = date => {
    this.setState(() => ({
      createdAt: date
    }));
  };

  normalizeAmount = value => {
    const amountRegExp = /^\d+(\.\d{0,2})?$/;
    if (!value || value.match(amountRegExp)) {
      this.setState(() => ({ amount: value }));
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { category, description, amount, createdAt } = this.state;
    const errors = this.validate({ category, description, amount, createdAt });
    this.setState(() => ({ errors }));
    if (Object.keys(errors).length === 0) {
      const parsedAmount = parseFloat(amount, 10) * 100;
      onSubmit({
        category,
        description,
        amount: parsedAmount,
        createdAt
      });
    }
  };

  validate = data => {
    const errors = {};
    if (!data.description.length) errors.description = "This field is required";
    if (!data.amount.toString().length)
      errors.amount = "This field is required";
    return errors;
  };

  render() {
    const { classes } = this.props;
    const { category, description, amount, createdAt, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={classes.formWrapper}>
          <TextField
            select
            id="category"
            label="Category"
            value={category}
            name="category"
            onChange={this.handleChange}
            margin="normal"
            fullWidth
          >
            {categories.map(i => (
              <MenuItem key={i} value={i}>
                {i}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="description"
            label="Description*"
            value={description}
            name="description"
            onChange={this.handleChange}
            error={!!errors.description}
            helperText={errors.description}
            margin="normal"
            placeholder="Description"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
          />

          <TextField
            id="amount"
            label="Amount*"
            value={amount}
            name="amount"
            onChange={this.handleChange}
            error={!!errors.amount}
            helperText={errors.amount}
            margin="normal"
            placeholder="350.98"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
          />

          <DatePicker
            value={createdAt}
            onChange={this.handleDateChange}
            label="Date"
            // autoOk
            // disableFuture
            // showTodayButton
            className={classes.dateInput}
            fullWidth
          />
        </div>
        <Divider />
        <div className={classes.buttonsWrapper}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.buttonText}
          >
            Add
          </Button>
          <Button component={Link} color="primary" to="/">
            Cancel
          </Button>
        </div>
      </form>
    );
  }
}

MoneyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  // Props defined in constructor
  // eslint-disable-next-line
  moneyRecord: PropTypes.shape(moneyRecordProps),
  classes: PropTypes.shape({
    formWrapper: PropTypes.string.isRequired,
    buttonsWrapper: PropTypes.string.isRequired,
    dateInput: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(MoneyForm);
