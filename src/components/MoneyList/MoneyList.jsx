import React from "react";
import PropTypes from "prop-types";
import * as R from "ramda";
// Material UI
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
// Configs
import categories from "../../config/categories";
// Components
import MoneyItem from "../MoneyItem/MoneyItem";

const styles = () => ({
  root: {
    maxHeight: "100%",
    overflowY: "scroll",
    flexGrow: 1
  }
});

const propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  money: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.oneOf(categories).isRequired,
      name: PropTypes.string.isRequired,
      createdAt: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

function MoneyList({ classes, money }) {
  const sortByProp = R.sortBy(R.prop("createdAt"));
  const sortesMoney = sortByProp(money);
  return (
    <div className={classes.root}>
      {/* <MoneyControls /> */}
      <List>
        {sortesMoney.map(i => (
          <MoneyItem
            key={i.id}
            category={i.category}
            name={i.name}
            createdAt={i.createdAt}
            amount={i.amount}
          />
        ))}
      </List>
    </div>
  );
}

MoneyList.propTypes = propTypes;

export default withStyles(styles)(MoneyList);
