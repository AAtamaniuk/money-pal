import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Material UI
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// Configs
import categories from "../config/categories";

class MoneyForm extends Component {
  state = {
    category: "",
    description: "",
    amount: "",
    createdAt: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { description, amount, createdAt, note } = this.state;
    console.log(`Submit!`);
  };

  render() {
    const { category, description, amount, createdAt } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <TextField
            id="category"
            select
            label="Category*"
            value={category}
            name="category"
            onChange={this.handleChange}
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
          />
        </div>

        <div>
          <TextField
            id="amount"
            label="Amount*"
            value={amount}
            name="amount"
            onChange={this.handleChange}
          />
        </div>

        <div>
          <TextField
            id="createdAt"
            label="Date*"
            value={createdAt}
            name="createdAt"
            onChange={this.handleChange}
          />
        </div>
        <Button type="submit">Add</Button>
        <Button component={Link} to="/">
          Cancel
        </Button>
      </form>
    );
  }
}

MoneyForm.propTypes = {};

export default MoneyForm;
