import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addMoneyRecord } from "../actions/moneyRecords";
import MoneyForm from "./MoneyForm";

class AddMoneyPage extends Component {
  onSubmit = moneyRecord => {
    const { addMoney, history } = this.props;
    addMoney(moneyRecord);
    history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Add money record</h1>
        <MoneyForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

AddMoneyPage.propTypes = {
  addMoney: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(
  null,
  { addMoney: addMoneyRecord }
)(AddMoneyPage);
