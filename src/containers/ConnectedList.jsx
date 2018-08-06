import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// Configs
import moneyRecordProps from "../config/moneyRecordProps";
// Actions
import { addMoneyRecord } from "../actions/moneyRecords";
// Selectors
import { getTotalMoney, getMoney } from "../selectors/index";
// Components
import ListTab from "../components/ListTab";

const propTypes = {
  money: PropTypes.arrayOf(PropTypes.shape(moneyRecordProps).isRequired)
    .isRequired,
  total: PropTypes.number.isRequired,
  addMoneyItem: PropTypes.func.isRequired
};

function ConnectedList({ money, total, addMoneyItem }) {
  return <ListTab money={money} total={total} addMoneyItem={addMoneyItem} />;
}

ConnectedList.propTypes = propTypes;

const mapStateToProps = state => ({
  money: getMoney(state),
  total: getTotalMoney(state)
});

export default connect(
  mapStateToProps,
  { addMoneyItem: addMoneyRecord }
)(ConnectedList);
