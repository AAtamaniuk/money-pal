import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MoneyForm from "./MoneyForm";
// Redux
import { editMoneyRecord } from "../actions/moneyRecords";
import { findMoneyRecordById } from "../selectors";
// Configs
import moneyRecordProps from "../config/moneyRecordProps";

class EditMoneyPage extends Component {
  handleSubmit = updates => {
    const { selectedMoneyRecord, editMoney, history } = this.props;
    editMoney(selectedMoneyRecord.id, updates);
    history.push("/");
  };

  render() {
    const { selectedMoneyRecord } = this.props;
    return (
      <div>
        <h1>Edit money record</h1>
        <MoneyForm
          moneyRecord={selectedMoneyRecord}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { match } = props;
  return {
    selectedMoneyRecord: findMoneyRecordById(state, match.params.id)
  };
};

EditMoneyPage.propTypes = {
  selectedMoneyRecord: PropTypes.shape({
    moneyRecordProps
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  editMoney: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { editMoney: editMoneyRecord }
)(EditMoneyPage);
