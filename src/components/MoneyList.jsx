import React from "react";
import PropTypes from "prop-types";
import * as R from "ramda";
// Material UI
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
// Configs
import moneyRecordProps from "../config/moneyRecordProps";
// Components
import MoneyItem from "./MoneyItem";

const styles = () => ({
  root: {
    maxHeight: "100%",
    overflowY: "scroll",
    flexGrow: 1
  }
});

const propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired
  }).isRequired,
  money: PropTypes.arrayOf(PropTypes.shape(moneyRecordProps).isRequired)
    .isRequired
};

function MoneyList({ classes, money }) {
  const sortByProp = R.sortBy(R.prop("date"));
  const sortedMoney = sortByProp(money);
  return (
    <div className={classes.root}>
      <List>
        {sortedMoney.map(moneyRecord => (
          <MoneyItem key={moneyRecord.id} {...moneyRecord} />
        ))}
      </List>
    </div>
  );
}

MoneyList.propTypes = propTypes;

export default withStyles(styles)(MoneyList);
