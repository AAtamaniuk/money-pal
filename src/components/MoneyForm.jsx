import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
      amount: moneyRecord ? moneyRecord.amount : "",
      createdAt: moneyRecord ? moneyRecord.createdAt : "",
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
    if (errors.keys > 0) {
      this.setState(() => ({ errors }));
    } else {
      this.setState(() => ({ errors: {} }));
      onSubmit({
        category,
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt
      });
    }
  };

  validate = data => {
    const errors = {};
    if (!data.description.length) errors.description = "This field is required";
    if (!data.amount.length) errors.amount = "This field is required";
    if (!data.createdAt.length) errors.createdAt = "This field is required";
    return errors;
  };

  render() {
    const { category, description, amount, createdAt, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <TextField
            select
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
          <TextField
            id="createdAt"
            label="Date*"
            value={createdAt}
            name="createdAt"
            onChange={this.handleChange}
            error={!!errors.createdAt}
            helperText={errors.createdAt}
            margin="normal"
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

MoneyForm.defaultProps = {
  moneyRecord: {
    id: "",
    category: "income",
    description: "",
    amount: "",
    createdAt: ""
  }
};

export default MoneyForm;
