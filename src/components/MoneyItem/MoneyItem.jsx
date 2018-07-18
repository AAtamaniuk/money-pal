import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
// Material UI
import { withStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
// Icons
import ArrowDownwarf from "@material-ui/icons/ArrowDownward";
import LocalActivity from "@material-ui/icons/LocalActivity";
import LocalDining from "@material-ui/icons/LocalDining";
import LocalMall from "@material-ui/icons/LocalMall";
import MoneyOff from "@material-ui/icons/MoneyOff";
// Colors
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
// Config
import categories from "../../config/categories";

const styles = {
  incomeNumber: {
    fontWeight: 500,
    color: green[400]
  },
  costNumber: {
    fontWeight: 500,
    color: red[400]
  },
  income: {
    backgroundColor: green[400]
  },
  entertainment: {
    backgroundColor: amber[400]
  },
  food: {
    backgroundColor: blue[400]
  },
  shopping: {
    backgroundColor: pink[400]
  },
  others: {
    backgroundColor: red[400]
  }
};

const propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  category: PropTypes.oneOf(categories).isRequired,
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
};

function MoneyItem({ classes, category, name, createdAt, amount }) {
  const formattedDate = moment(createdAt)
    .utc()
    .startOf("second")
    .fromNow();
  return (
    <ListItem>
      <Avatar className={classes[category]}>
        {
          {
            income: <ArrowDownwarf />,
            entertainment: <LocalActivity />,
            food: <LocalDining />,
            shopping: <LocalMall />,
            others: <MoneyOff />
          }[category]
        }
      </Avatar>
      <ListItemText primary={name} secondary={formattedDate} />
      {category === "income" ? (
        <span className={classes.incomeNumber}>+{amount}</span>
      ) : (
        <span className={classes.costNumber}>{amount}</span>
      )}
    </ListItem>
  );
}

MoneyItem.propTypes = propTypes;

export default withStyles(styles)(MoneyItem);
