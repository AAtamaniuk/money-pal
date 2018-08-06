import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DatePicker from "material-ui-pickers/DatePicker";
import moment from "moment";

// Material UI
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// Configs
import categories from "../config/categories";
import moneyRecordProps from "../config/moneyRecordProps";

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
    const { category, description, amount, createdAt, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <TextField
            select
            SelectProps={{
              autoWidth: true
            }}
            id="category"
            label="Category"
            value={category}
            name="category"
            onChange={this.handleChange}
            margin="normal"
          >
            {categories.map(i => (
              <MenuItem key={i} value={i}>
                {i}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div>
          <TextField
            id="description"
            label="Description*"
            value={description}
            name="description"
            onChange={this.handleChange}
            error={!!errors.description}
            helperText={errors.description}
            margin="normal"
          />
        </div>

        <div>
          <TextField
            id="amount"
            label="Amount*"
            value={amount}
            name="amount"
            onChange={this.handleChange}
            error={!!errors.amount}
            helperText={errors.amount}
            margin="normal"
          />
        </div>

        <div>
          <DatePicker
            value={createdAt}
            onChange={this.handleDateChange}
            label="Date"
            autoOk
            disableFuture
            showTodayButton
          />
        </div>

        <Button color="primary" type="submit">
          Add
        </Button>
        <Button component={Link} to="/">
          Cancel
        </Button>
      </form>
    );
  }
}

MoneyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  moneyRecord: PropTypes.shape(moneyRecordProps)
};

/* MoneyForm.defaultProps = {
  moneyRecord: {
    id: "",
    category: "income",
    description: "",
    amount: "",
    createdAt: moment()
  }
}; */

export default MoneyForm;
