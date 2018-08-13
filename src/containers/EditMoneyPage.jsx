import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { editMoneyRecord, removeMoneyRecord } from "../actions/moneyRecords";
import { findMoneyRecordById } from "../selectors/index";
import moneyRecordProps from "../config/moneyRecordProps";
import MoneyForm from "../components/MoneyForm";

class EditMoneyPage extends Component {
  handleSubmit = updates => {
    const { selectedMoneyRecord, editMoney, history } = this.props;
    editMoney(selectedMoneyRecord.id, updates);
    history.push("/");
  };

  handleRemove = () => {
    const { selectedMoneyRecord, removeMoney, history } = this.props;
    removeMoney(selectedMoneyRecord.id);
    history.push("/");
  };

  render() {
    const { selectedMoneyRecord } = this.props;
    return (
      <div>
        <h1>Edit money record</h1>
        <IconButton aria-label="Delete" onClick={this.handleRemove}>
          <DeleteIcon />
        </IconButton>
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
  editMoney: PropTypes.func.isRequired,
  removeMoney: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  {
    editMoney: editMoneyRecord,
    removeMoney: removeMoneyRecord
  }
)(EditMoneyPage);
